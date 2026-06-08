import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || COMPANY.email;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const category = String(body.category || "").trim();
    const message = String(body.message || "").trim();

    // 必須項目のバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません。" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "メール送信の設定が未完了です。" },
        { status: 500 }
      );
    }

    const html = `
      <h2>お問い合わせを受信しました</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><b>お名前</b></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><b>会社名</b></td><td>${escapeHtml(company) || "-"}</td></tr>
        <tr><td><b>メール</b></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><b>種別</b></td><td>${escapeHtml(category) || "-"}</td></tr>
        <tr><td valign="top"><b>内容</b></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: `Bennet BWS Web <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `【お問い合わせ】${name} 様（${category || "種別なし"}）`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "送信に失敗しました。" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "サーバーエラーが発生しました。" }, { status: 500 });
  }
}
