import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const getFileTypeFromBase64 = (base64) => {
  const mimeType = base64.split(';')[0].split(':')[1];
  return mimeType.split('/')[1];
};

export async function POST(request) {
  try {
    const { yourName, yourDomain, email, phone, attachFiles, explanation } = await request.json();

    if (!yourName || !yourDomain || !email || !phone) {
      return NextResponse.json({ message: 'Required fields missing' }, { status: 400 });
    }

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const attachments = attachFiles ? attachFiles.map((fileBase64, index) => {
      const base64Data = fileBase64.split(',')[1];
      const fileType = getFileTypeFromBase64(fileBase64);
      const fileName = `file-${index}.${fileType}`;

      return {
        filename: fileName,
        content: base64Data,
        type: fileType,
        disposition: 'attachment'
      };
    }) : [];

    const msg = {
      to: 'noreply@adfluentica.com',
      from: 'noreply@adfluentica.com',
      subject: 'Form to join the team - page People',
      text: `
        Name: ${yourName}
        Domain: ${yourDomain}
        Email: ${email}
        Phone: ${phone}
        Explanation: ${explanation}
      `,
      attachments: attachments,
    };

    await sgMail.send(msg);

    /* const mailOptionsClient = {
      from: '"Nexoria" <noreply@nexoria.ai>',
      to: email, // Email клиента из формы
      subject: 'Form People Testing',
      html: `
        <p>Dear ${yourName},</p>
        <p>Thank you for your submission. We have received your event request and will get back to you soon.</p>
        <p>Here are the details of your submission:</p>
        <ul>
          <li><strong>Name:</strong> ${yourName}</li>
          <li><strong>Domain:</strong> ${yourDomain}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Explanation:</strong> ${explanation}</li>
        </ul>
        <p>Best regards,<br>Nexoria Testing</p>
      `,

    };

    await transporter.sendMail(mailOptionsClient); */

    return NextResponse.json({ message: 'Data received and emails sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}