import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import validator from 'validator'; 

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['kevinjuancarlos7@gmail.com'],
      subject: `New message from ${ name }`,
      replyTo: email,
      text: `You have a new message from your portfolio contact form: \nName: ${ name } \nEmail: ${ email } \nMessage: ${ message }`.trim(),
    });

    console.log("Resend response: ", response);

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Email error: ", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}