import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.website) {
      return Response.json({ success: true });
    }

    const {
      name,
      phone,
      email,
      postcode,
      propertyType,
      surveyType,
      reason,
      additionalInfo,
    } = body;

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safePostcode = escapeHtml(postcode);
    const safePropertyType = escapeHtml(propertyType);
    const safeSurveyType = escapeHtml(surveyType);
    const safeReason = escapeHtml(reason);
    const safeAdditionalInfo = escapeHtml(additionalInfo || "No additional information provided.");

    const data = await resend.emails.send({
      from: "OwlSafe <onboarding@resend.dev>",
      to: "nathanchjones@gmail.com",
      replyTo: email,
      subject: `New OwlSafe Lead: ${safePostcode || "No postcode"} - ${safeSurveyType || "Survey enquiry"}`,
      html: `
        <!doctype html>
        <html>
          <body style="margin:0;padding:0;background:#edf4ea;font-family:Arial,Helvetica,sans-serif;color:#17331b;">
            <div style="display:none;max-height:0;overflow:hidden;">
              New OwlSafe asbestos survey enquiry from ${safeName} in ${safePostcode}.
            </div>

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#edf4ea;padding:34px 14px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #d4dfd0;box-shadow:0 18px 50px rgba(27,58,31,0.14);">
                    
                    <tr>
                      <td style="background:#102916;padding:30px 34px;border-bottom:5px solid #e3c541;">
                        <div style="font-size:34px;line-height:1;font-weight:700;letter-spacing:0.08em;color:#ffffff;">
                          owlsafe
                        </div>
                        <div style="margin-top:10px;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.68);">
                          New asbestos survey lead
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:30px 34px 12px;">
                        <h1 style="margin:0;color:#1b3a1f;font-size:28px;line-height:1.15;font-weight:700;">
                          New quote request received
                        </h1>
                        <p style="margin:12px 0 0;color:#5f6f62;font-size:15px;line-height:1.7;">
                          A new OwlSafe enquiry has been submitted through the Leeds asbestos survey quote form.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:10px 34px 0;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="50%" style="padding:0 8px 12px 0;">
                              <div style="background:#f6f7f3;border:1px solid #d8e2d6;padding:18px;">
                                <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#305e2f;">
                                  Name
                                </div>
                                <div style="margin-top:8px;font-size:18px;font-weight:700;color:#1b3a1f;">
                                  ${safeName}
                                </div>
                              </div>
                            </td>
                            <td width="50%" style="padding:0 0 12px 8px;">
                              <div style="background:#f6f7f3;border:1px solid #d8e2d6;padding:18px;">
                                <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#305e2f;">
                                  Postcode
                                </div>
                                <div style="margin-top:8px;font-size:18px;font-weight:700;color:#1b3a1f;">
                                  ${safePostcode}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 34px 8px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="50%" style="padding:0 8px 12px 0;">
                              <a href="tel:${safePhone}" style="display:block;background:#1b3a1f;color:#ffffff;text-decoration:none;padding:18px;">
                                <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#e3c541;">
                                  Phone
                                </div>
                                <div style="margin-top:8px;font-size:17px;font-weight:700;">
                                  ${safePhone}
                                </div>
                              </a>
                            </td>
                            <td width="50%" style="padding:0 0 12px 8px;">
                              <a href="mailto:${safeEmail}" style="display:block;background:#1b3a1f;color:#ffffff;text-decoration:none;padding:18px;">
                                <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#e3c541;">
                                  Email
                                </div>
                                <div style="margin-top:8px;font-size:17px;font-weight:700;word-break:break-word;">
                                  ${safeEmail}
                                </div>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:4px 34px 0;">
                        <div style="border-left:5px solid #e3c541;background:#fbfaf2;padding:22px 24px;">
                          <h2 style="margin:0 0 16px;color:#1b3a1f;font-size:21px;">
                            Survey details
                          </h2>

                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;color:#4f5f52;">
                            <tr>
                              <td style="padding:10px 0;border-bottom:1px solid #e2e8df;font-weight:700;color:#1b3a1f;">Property type</td>
                              <td style="padding:10px 0;border-bottom:1px solid #e2e8df;text-align:right;">${safePropertyType}</td>
                            </tr>
                            <tr>
                              <td style="padding:10px 0;border-bottom:1px solid #e2e8df;font-weight:700;color:#1b3a1f;">Survey type</td>
                              <td style="padding:10px 0;border-bottom:1px solid #e2e8df;text-align:right;">${safeSurveyType}</td>
                            </tr>
                            <tr>
                              <td style="padding:10px 0;font-weight:700;color:#1b3a1f;">Reason</td>
                              <td style="padding:10px 0;text-align:right;">${safeReason}</td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:24px 34px 30px;">
                        <h2 style="margin:0 0 12px;color:#1b3a1f;font-size:21px;">
                          Additional information
                        </h2>
                        <div style="background:#f6f7f3;border:1px solid #d8e2d6;padding:20px;color:#4f5f52;font-size:14px;line-height:1.75;">
                          ${safeAdditionalInfo}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="background:#102916;padding:22px 34px;color:rgba(255,255,255,0.65);font-size:12px;line-height:1.7;">
                        <strong style="color:#ffffff;">OwlSafe</strong><br />
                        Lead captured from the website quote form. Reply directly to this email to contact the customer.
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    console.log("Resend success:", data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("QUOTE FORM ERROR:", error);

    return Response.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}