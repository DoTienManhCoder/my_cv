// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // đảm bảo dùng Node runtime cho Resend

// ===== Helper =====
const EMAIL_OR_NAME_ADDR =
  /^(?:[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+|[^<>]+ <[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+>)$/;

function parseList(raw?: string | null) {
  if (!raw) return [] as string[];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isValidToList(list: string[]) {
  return list.length > 0 && list.every((addr) => EMAIL_OR_NAME_ADDR.test(addr));
}

function isValidEmailBasic(email?: string | null) {
  if (!email) return false;
  // basic check đủ dùng cho form contact
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== Setup Resend =====
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    // 1) Kiểm tra ENV sớm để báo lỗi rõ ràng
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY on server." },
        { status: 500 }
      );
    }

    // 2) Lấy dữ liệu từ client
    const { name, email, phone, message } = await req.json();

    // 3) Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Thiếu trường bắt buộc: name, email, message." },
        { status: 400 }
      );
    }
    if (!isValidEmailBasic(email)) {
      return NextResponse.json(
        { ok: false, error: "Email người gửi không hợp lệ." },
        { status: 400 }
      );
    }

    // 4) Người nhận & địa chỉ gửi
    // - TO_EMAIL: một hoặc nhiều email, phân tách bởi dấu phẩy
    // - FROM_EMAIL: nếu bạn CHƯA verify domain ở Resend, nên dùng onboarding@resend.dev
    const toList =
      parseList(process.env.TO_EMAIL) || parseList(process.env.CONTACT_TO);

    let fromAddress =
      (process.env.FROM_EMAIL || "").trim() || "onboarding@resend.dev";

    // Nếu để placeholder hoặc domain chưa setup, fallback về onboarding@resend.dev
    if (
      fromAddress.includes("your-domain.com") ||
      fromAddress === "contact@your-domain.com"
    ) {
      fromAddress = "onboarding@resend.dev";
    }

    if (!isValidToList(toList)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "TO_EMAIL/CONTACT_TO không hợp lệ. Dùng 'email@example.com' hoặc 'Name <email@example.com>' (có thể nhiều email, cách nhau dấu phẩy).",
        },
        { status: 500 }
      );
    }

    // 5) Nội dung email
    const cleanMessage = String(message || "").replace(/\n/g, "<br/>");
    const html = `
      <h2 style="margin:0 0 8px">New contact message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Message:</b><br/>${cleanMessage}</p>
    `;
    const text = `New contact message
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Message:
${String(message || "")}
`;

    // 6) Gửi email qua Resend
    const result = await resend!.emails.send({
      from: fromAddress,                 // ví dụ: "Contact <onboarding@resend.dev>" cũng hợp lệ
      to: toList,                        // mảng email
      subject: `New message from ${name}`,
      html,
      text,                              // thêm text để tăng deliverability
      reply_to: email,                   // để bạn reply thẳng cho người gửi
    });

    // Một số SDK trả lỗi trong field 'error'
    // @ts-ignore
    if (result?.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { ok: false, error: String(result.error) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, msg: "Message sent!" });
  } catch (err: any) {
    console.error("Contact error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
