import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(5000)
});

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    return NextResponse.json({ status: "queued", transport: "stub" }, { status: 200 });
  }

  try {
    const resend = new Resend(key);
    await resend.emails.send({
      from: "Syndicate Dynamics <no-reply@syndicatedynamics.dev>",
      to: ["hello@syndicatedynamics.dev"],
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });
    return NextResponse.json({ status: "queued", transport: "resend" }, { status: 200 });
  } catch {
    return NextResponse.json({ status: "queued", transport: "stub" }, { status: 200 });
  }
}
