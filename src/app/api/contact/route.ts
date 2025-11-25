import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { copy } from "@/data/copy";

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  project: z.string().min(10),
  consent: z.boolean().refine(value => value === true, {
    message: "Consent is required"
  })
});

export async function POST(request: Request) {
  const json = await request.json();
  const result = bodySchema.safeParse(json);

  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
  }

  const { name, email, company, project } = result.data;
  const text = [`Name: ${name}`, `Email: ${email}`, `Company: ${company}`, `Project: ${project}`].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not configured. Message logged only.");
    return NextResponse.json({ delivered: false, message: "Message logged. Email service not configured." });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Synerva Dynamics <notifications@synerva-dynamics.com>",
      to: copy.global.contact.email,
      replyTo: email,
      subject: `New Synerva inquiry from ${company}`,
      text
    });
    return NextResponse.json({ delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json({ delivered: false, message: "Failed to deliver message" }, { status: 500 });
  }
}
