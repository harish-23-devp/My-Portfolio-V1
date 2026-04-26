import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log("Incoming Data:", { name, email, message });
    

if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL as string,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

        console.log("Resend Response:", data);


    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
  console.error("Email Error:", error);

  return NextResponse.json(
    { success: false, error: "Failed to send email" },
    { status: 500 }
  );
}
}