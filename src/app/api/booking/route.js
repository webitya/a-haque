import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const formData = await request.json()
    const { name, phone, email, service, date, time, message } = formData

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
          <h1>New Appointment Request</h1>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #15803d;">Patient Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">${email || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Service:</td>
              <td style="padding: 10px;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 10px;">${date}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 10px;">${time}</td>
            </tr>
          </table>
          ${
            message
              ? `
            <h3 style="color: #15803d; margin-top: 20px;">Additional Message:</h3>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #15803d;">${message}</p>
          `
              : ""
          }
          <div style="margin-top: 20px; padding: 15px; background-color: #84cc16; color: white; border-radius: 5px;">
            <strong>Action Required:</strong> Please contact the patient to confirm the appointment.
          </div>
        </div>
      </div>
    `

    // Email to patient (if email provided)
    const patientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #15803d; color: white; padding: 20px; text-align: center;">
          <h1>Appointment Request Received</h1>
          <p>Aastha Ortho & Neurotherapy Center</p>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #15803d;">Dear ${name},</h2>
          <p>Thank you for your appointment request. We have received your information and will contact you soon to confirm your appointment.</p>
          
          <h3 style="color: #15803d;">Your Request Details:</h3>
          <table style="width: 100%; border-collapse: collapse; background-color: white;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Service:</td>
              <td style="padding: 10px;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 10px;">${date}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 10px;">${time}</td>
            </tr>
          </table>

          <div style="margin: 20px 0; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #15803d;">
            <h4 style="margin: 0 0 10px 0; color: #15803d;">What's Next?</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>We will call you within 24 hours to confirm your appointment</li>
              <li>Please keep your phone available during business hours</li>
              <li>If urgent, call us directly at <strong>9431338221</strong></li>
            </ul>
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

    // Send email to clinic
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@aasthaortho.com",
      subject: `New Appointment Request - ${name}`,
      html: clinicEmailHtml,
    })

    // Send confirmation email to patient if email provided
    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Appointment Request Confirmation - Aastha Ortho & Neurotherapy Center",
        html: patientEmailHtml,
      })
    }

    return Response.json({ success: true, message: "Appointment request sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ success: false, message: "Failed to send appointment request" }, { status: 500 })
  }
}
