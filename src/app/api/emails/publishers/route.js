import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName,
      email,
      website,
      phone,
    } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Adfluentica" <noreply@adfluentica.com>',
      to: "noreply@adfluentica.com", //
      subject: "From For Publishers page",
      text: `Name: ${yourName}
Email: ${email}
Product: ${website}
Phone: ${phone}`,
    };

    const mailOptionsClient = {
      from: '"Adfluentica" <noreply@adfluentica.com>',
      to: email,
      subject: "Request to Join Adfluentica Received",
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
                <p style="font-size: 16px; line-height: 19px;">Thank you for submitting your request to add your media to Adfluentica. We are excited about the opportunity to collaborate with you and explore how your traffic sources can align with our advertisers' campaigns.</p>
                <p style="font-size: 16px; line-height: 19px;">Our team is currently reviewing your application, and we’ll reach out shortly to discuss the next steps.</p>
                <p style="font-size: 16px; line-height: 19px;">If you have any immediate questions or additional information to share, feel free to reply to this email.</p>
                <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Adfluentica—we look forward to working with you!</p>
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

    await transporter.sendMail(mailOptionsRecipient);

    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}