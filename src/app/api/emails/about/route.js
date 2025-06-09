import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

export async function POST(request) {
  try {
    // Parse the request body
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      contactPerson,
      contactEmail,
      organisingCompany,
      eventName,
      eventLink,
      industry,
      eventLocation,
      eventDate,
      eventTopic,
      participationType,
      attachFiles = [], // Default to empty array if not present
    } = bodyJSON;

    // Configure SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Process attachments
    const attachments = attachFiles.map(file => ({
      filename: file.name,
      content: Buffer.from(file.base64, 'base64').toString('base64'),
      type: file.type,
      disposition: 'attachment'
    }));

    // Set up email data for the recipient
    const recipientMsg = {
      to: "noreply@adfluentica.com",
      from: "noreply@adfluentica.com",
      subject: "Event Request Submission",
      text: `
          Contact Person: ${contactPerson}
          Contact Email: ${contactEmail}
          Organising Company: ${organisingCompany}
          Event Name: ${eventName}
          Event Link: ${eventLink}
          Industry: ${industry}
          Event Location: ${eventLocation}
          Event Date: ${eventDate}
          Event Topic: ${eventTopic}
          Type of Participation: ${participationType}
          Attach Files: ${attachments.length > 0 ? attachFiles.map(file => file.filename).join(", ") : "No files attached"}
        `,
      attachments: attachments,
    };

    // Set up email data for the client
    /* const mailOptionsClient = {
      from: '"Testing About Form" <noreply@nexoria.ai>',
      to: contactEmail,
      subject: "Testing About Form",
      html: `
          <p>Dear ${contactPerson},</p>
          <p>Thank you for your submission. We have received your event request and will get back to you soon.</p>
          <p>Here are the details of your submission:</p>
          <ul>
            <li><strong>Contact Person:</strong> ${contactPerson}</li>
            <li><strong>Contact Email:</strong> ${contactEmail}</li>
            <li><strong>Organising Company:</strong> ${organisingCompany}</li>
            <li><strong>Event Name:</strong> ${eventName}</li>
            <li><strong>Event Link:</strong> ${eventLink}</li>
            <li><strong>Industry:</strong> ${industry}</li>
            <li><strong>Event Location:</strong> ${eventLocation}</li>
            <li><strong>Event Date:</strong> ${eventDate}</li>
            <li><strong>Event Topic:</strong> ${eventTopic}</li>
            <li><strong>Type of Participation:</strong> ${participationType}</li>
           
          </ul>
          <p>Best regards,<br>Your Company</p>
        `,

    }; */

    // Send email
    await sgMail.send(recipientMsg);
    /* await transporter.sendMail(mailOptionsClient); */

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}

