import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName,
      email,
      phone,
      message,
      agreeToPolicy,
    } = bodyJSON;

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const recipientMsg = {
      to: "noreply@adfluentica.com",
      from: "noreply@adfluentica.com",
      subject: "Contacts form",
      text: `Name: ${yourName}
Email: ${email}
Phone: ${phone}
message: ${message}`,
    };

    const clientMsg = {
      to: email,
      from: "noreply@adfluentica.com",
      subject: "Your Request Received",
      html: `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
    <thead>
        <tr>
            <th style="background-image: url('https://adfluentica.com/images/email-header.jpg'); background-size: contain;background-position: center center; background-repeat: no-repeat; height: 102px;"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                <h2 style="text-align: left; font-size: 20px;">Dear ${yourName},</h2>
                <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Adfluentica. We've received your message and will get back to you as soon as possible.</p>
                <p style="font-size: 16px; line-height: 19px;">If your inquiry is urgent or requires immediate attention, feel free to reply to this email directly.</p>
                <p style="font-size: 16px; line-height: 19px;">We appreciate your interest and look forward to assisting you!</p>
                <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                    Best regards,
                    <br>
                    The Adfluentica Team
                </p>
            </td>
        </tr>
    </tbody>
   <tfoot>
    <tr>
        <td colspan="2" style="width: 50%; background-image: url('https://adfluentica.com/images/email-footer.jpg'); background-size: contain; background-position: center; background-repeat: no-repeat; height: 102px; text-align: center; padding: 0;">
            <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
                <tr>
                    <td>
                        
                    </td>
                    <td style="width: 50%; text-align: start; vertical-align: middle;">
                        <ul style="margin:0;padding:0;">
                          <li style="list-style: disc; color: #1E40AF; font-size: 10px;line-height: 12px;"><b>Registration:</b> <span style="color: #000000;">86-90 Paul Street, London, <br/>  Greater London, England, EC2A 4NE</span></li>
                          <li style="list-style: disc; color: #1E40AF; font-size: 10px;line-height: 12px;"<b>Email:</b> <a href="mailto:info@adfluentica.com" style="color: #000;">info@adfluentica.com</a></li>
                          <li style="list-style: disc; color: #1E40AF; font-size: 10px;line-height: 12px;"><b>Phone:</b> <a href="tel:+447482191976" style="color: #000;">+447482191976</a></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</tfoot>

</table>
      `,
    };

    await sgMail.send(recipientMsg);
    await sgMail.send(clientMsg);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE", error: error.message }, { status: 500 });
  }
}