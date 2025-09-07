import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const formData = await request.json()
    const { name, phone, email, service, date, time, urgency, symptoms, previousTreatment, message } = formData

    // Create transporter
    const transporter = nodemailer.createTransport({
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
          <h1>Detailed Appointment Request</h1>
          ${urgency === "emergency" ? '<div style="background-color: #be123c; padding: 10px; margin-top: 10px; border-radius: 5px;"><strong>🚨 EMERGENCY REQUEST</strong></div>' : ""}
          ${urgency === "urgent" ? '<div style="background-color: #f59e0b; padding: 10px; margin-top: 10px; border-radius: 5px;"><strong>⚠️ URGENT REQUEST</strong></div>' : ""}
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #15803d;">Patient Information</h2>
          <table style="width: 100%; border-collapse: collapse; background-color: white;">
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
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Urgency:</td>
              <td style="padding: 10px;">${urgency || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Previous Treatment:</td>
              <td style="padding: 10px;">${previousTreatment || "Not specified"}</td>
            </tr>
          </table>

          <h3 style="color: #15803d; margin-top: 20px;">Current Symptoms:</h3>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #be123c; margin-bottom: 15px;">
            ${symptoms}
          </div>

          ${
            message
              ? `
            <h3 style="color: #15803d;">Additional Information:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #15803d;">
              ${message}
            </div>
          `
              : ""
          }

          <div style="margin-top: 20px; padding: 15px; background-color: ${urgency === "emergency" ? "#be123c" : urgency === "urgent" ? "#f59e0b" : "#84cc16"}; color: white; border-radius: 5px;">
            <strong>Action Required:</strong> ${urgency === "emergency" ? "IMMEDIATE ATTENTION NEEDED - Contact patient today" : urgency === "urgent" ? "Contact patient within 24 hours" : "Contact patient to confirm appointment"}
          </div>
        </div>
      </div>
    `

    // Email to patient (if email provided)
    const patientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #15803d; color: white; padding: 20px; text-align: center;">
          <h1>Detailed Appointment Request Received</h1>
          <p>Aastha Ortho & Neurotherapy Center</p>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #15803d;">Dear ${name},</h2>
          <p>Thank you for your detailed appointment request. We have received all your information and will contact you soon to confirm your appointment.</p>
          
          <h3 style="color: #15803d;">Your Request Summary:</h3>
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
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Urgency Level:</td>
              <td style="padding: 10px;">${urgency || "Routine"}</td>
            </tr>
          </table>

          <div style="margin: 20px 0; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #15803d;">
            <h4 style="margin: 0 0 10px 0; color: #15803d;">What's Next?</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>${urgency === "emergency" ? "We will contact you immediately during business hours" : urgency === "urgent" ? "We will call you within 24 hours" : "We will call you within 24-48 hours to confirm your appointment"}</li>
              <li>Please keep your phone available during business hours (9 AM - 6 PM)</li>
              <li>Dr. A-HAQUE has reviewed your symptoms and will be prepared for your consultation</li>
              <li>If urgent, call us directly at <strong>9431338221</strong></li>
            </ul>
          </div>

          <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="color: #15803d; margin: 0 0 10px 0;">Preparation for Your Visit:</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Bring any previous medical reports or X-rays</li>
              <li>List of current medications</li>
              <li>Comfortable clothing for examination</li>
              <li>Insurance cards and identification</li>
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
          <p style="margin: 5px 0 0 0; font-size: 14px;">Specializing in AVN, Spine and Knee Joints</p>
        </div>
      </div>
    `

    // Send email to clinic
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to the same email address
      subject: `${urgency === "emergency" ? "🚨 EMERGENCY" : urgency === "urgent" ? "⚠️ URGENT" : ""} Appointment Request - ${name}`,
      html: clinicEmailHtml,
    })

    // Send confirmation email to patient if email provided
    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Detailed Appointment Request Confirmation - Aastha Ortho & Neurotherapy Center",
        html: patientEmailHtml,
      })
    }

    return Response.json({ success: true, message: "Detailed appointment request sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ success: false, message: "Failed to send appointment request" }, { status: 500 })
  }
}
