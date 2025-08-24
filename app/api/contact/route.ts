import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Thiếu trường bắt buộc (name, email, message)" },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.6">
        <h2>📩 New contact message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Message:</b></p>
        <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px">
          ${String(message).replace(/</g,"&lt;")}
        </div>
        <hr />
        <small>Sent from your portfolio contact form.</small>
      </div>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: `New message from ${name}`,
      html,
      reply_to: email, // để bạn reply thẳng cho khách
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact error:", err);
    return NextResponse.json(
      { ok: false, error: "Gửi email thất bại" },
      { status: 500 }
    );
  }
}
