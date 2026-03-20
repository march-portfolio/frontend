// import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, reason, message } = body;

    console.log('Mock email sending:', { name, email, reason, message });

    /*
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You should verify your domain in Resend
      to: ['march.creative27@gmail.com'],
      subject: `Contact Form: ${reason} from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    */

    return NextResponse.json({ message: "Email sending is currently disabled (mocked)." });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
