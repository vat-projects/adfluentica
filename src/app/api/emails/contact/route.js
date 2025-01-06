import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Настройка электронной почты для получателя
    const mailOptionsRecipient = {
      from: '"Adfluentica" <noreply@adfluentica.com>',
      to: "noreply@adfluentica.com",
      subject: "Contacts form",
      text: `Name: ${yourName}
Email: ${email}
Phone: ${phone}
message: ${message}`,
    };

    // Настройка электронной почты для клиента
    const mailOptionsClient = {
      from: '"Adfluentica" <noreply@adfluentica.com>',
      to: email,
      subject: "Thank You for Contacting Adfluentica",
      html: `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
    <thead>
        <tr>
            <th style="background-image: url('https://adfluentica.com/images/email-header.jpg'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                <h2 style="text-align: left; font-size: 20px;">Dear ${yourName},</h2>
                <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Adfluentica. We’ve received your message and will get back to you as soon as possible.</p>
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
            <td style="background-color: #333333; font-weight: 600; font-family: Roboto, sans-serif;padding: 30px 0;">
                <a href="https://adfluentica.com/"><img src="https://adfluentica.com/images/email-footer.jpg" alt="Adfluentica"></a>
            </td>
        </tr>
    </tfoot>
</table>
      `,
    };

    // Отправка электронной почты получателю и клиенту
    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient); 

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE", error: error.message }, { status: 500 });
  }
}