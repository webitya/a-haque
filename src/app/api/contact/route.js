import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const formData = await request.json()
    const { name, email, phone, subject, message } = formData

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to clinic
    const clinicEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #15803d; color: white; padding: 20px; text-align: center;">
          <h1>New Contact Form Submission</h1>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #15803d;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; background-color: white;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Subject:</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>
          </table>
          
          <h3 style="color: #15803d; margin-top: 20px;">Message:</h3>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #15803d;">
            ${message}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #84cc16; color: white; border-radius: 5px;">
            <strong>Action Required:</strong> Please respond to this inquiry.
          </div>
        </div>
      </div>
    `

    // Send email to clinic
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@aasthaortho.com",
      subject: `Contact Form: ${subject} - ${name}`,
      html: clinicEmailHtml,
      replyTo: email,
    })

    // Auto-reply to sender
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #15803d; color: white; padding: 20px; text-align: center;">
          <h1>Thank You for Contacting Us</h1>
          <p>Aastha Ortho & Neurotherapy Center</p>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #15803d;">Dear ${name},</h2>
          <p>Thank you for reaching out to us. We have received your message and will respond within 24 hours.</p>
          
          <div style="background-color: white; padding: 15px; border-left: 4px solid #15803d; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #15803d;">Your Message:</h4>
            <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9;">
              ${message}
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <h3 style="color: #15803d;">Contact Information</h3>
            <p><strong>Phone:</strong> 9431338221</p>
            <p><strong>Email:</strong> info@aasthaortho.com</p>
            <p><strong>Location:</strong> Ranchi, Jharkhand</p>
          </div>
        </div>
        <div style="background-color: #374151; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0;">Dr. A-HAQUE - Orthopedic & Neurotherapy Specialist</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Aastha Ortho & Neurotherapy Center",
      html: autoReplyHtml,
    })

    return Response.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
