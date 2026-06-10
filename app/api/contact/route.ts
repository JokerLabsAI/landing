import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Set RESEND_API_KEY in .env.local" },
      { status: 500 }
    );
  }

  const toEmail   = process.env.CONTACT_TO_EMAIL   ?? "jokermaster@jokerlabs.ai";
  const fromEmail = process.env.CONTACT_FROM_EMAIL  ?? "contact@jokerlabs.ai";

  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Bogota",
    dateStyle: "full",
    timeStyle: "short",
  });

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `JokerLabs <${fromEmail}>`,
        to: [toEmail],
        reply_to: `${name} <${email}>`,
        subject: `[New Client] ${name} — JokerLabs Contact Form`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#0d1117;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0f1923;border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:2px solid #1A6EDB;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;color:#00C9A7;font-weight:600;text-transform:uppercase;">JokerLabs · Creative Technology Lab</p>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">New Client Inquiry</h1>
            <p style="margin:6px 0 0;font-size:12px;color:#4a6a8a;">${now} (Colombia)</p>
          </td>
        </tr>

        <!-- Client details -->
        <tr>
          <td style="background:#111d2b;padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;">
                  <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.12em;color:#00C9A7;font-weight:600;text-transform:uppercase;">From</p>
                  <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">${name}</p>
                  <a href="mailto:${email}" style="font-size:14px;color:#1A6EDB;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="border-top:1px solid #1e3048;padding-top:24px;">
                  <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.12em;color:#00C9A7;font-weight:600;text-transform:uppercase;">Message</p>
                  <div style="background:#0d1a28;border-left:3px solid #1A6EDB;border-radius:0 8px 8px 0;padding:20px 24px;">
                    <p style="margin:0;font-size:15px;line-height:1.8;color:#c8d8e8;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#0f1923;border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid #1e3048;text-align:center;">
            <a href="mailto:${email}?subject=Re: Your inquiry to JokerLabs"
               style="display:inline-block;background:#1A6EDB;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;">
              Reply to ${name} ♠
            </a>
            <p style="margin:16px 0 0;font-size:11px;color:#2a4060;">
              This message was submitted via the JokerLabs contact form.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      console.error("Resend error:", JSON.stringify(errorBody));
      return NextResponse.json(
        { error: "Failed to send email", detail: errorBody },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
