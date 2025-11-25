import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const bodySchema = z.object({
  email: z.string().email()
});

const preview = { subject: "Your Rockstar Server Playbook preview", path: "/downloads/rockstar-preview.pdf" };

export async function POST(request: Request) {
  const json = await request.json();
  const result = bodySchema.safeParse(json);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
  }

  const { email } = result.data;
  const apiKey = process.env.RESEND_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  const previewLink = new URL(preview.path, baseUrl).toString();

  if (!apiKey) {
    console.info("[labs-interest] preview request (stub)", { email, previewLink });
    return NextResponse.json({ delivered: false, previewLink, note: "Configure RESEND_API_KEY to send automatically." });
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: "Synerva Dynamics <notifications@synerva-dynamics.com>",
      to: email,
      bcc: "synerva-dynamics@gmail.com",
      replyTo: "synerva-dynamics@gmail.com",
      subject: preview.subject,
      text: [
        "Thanks for requesting the preview. Download here:",
        previewLink,
        "",
        "If you have trouble with the link or want reflections/essays as well, reply and we’ll resend immediately."
      ].join("\n")
    });
    return NextResponse.json({ delivered: true, previewLink });
  } catch (error) {
    console.error("[labs-interest] Failed to send preview", error);
    return NextResponse.json({ delivered: false, message: "Failed to send preview" }, { status: 500 });
  }
}
