"use client"

import { useState } from "react"

export default function ContactBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    urgency: "",
    symptoms: "",
    previousTreatment: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage(
          "Your appointment request has been sent successfully! We will contact you within 24 hours to confirm your appointment.",
        )
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          time: "",
          urgency: "",
          symptoms: "",
          previousTreatment: "",
          message: "",
        })
      } else {
        setSubmitMessage("Failed to send your request. Please try again or call us directly.")
      }
    } catch (error) {
      setSubmitMessage("Error sending your request. Please try again or contact us by phone.")
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the detailed form below to schedule your consultation with Dr. A-HAQUE
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="">Select a service</option>
                <option value="neurotherapy">Neurotherapy</option>
                <option value="hot-cupping">Hot Cupping</option>
                <option value="vacuum-cupping">Vacuum Cupping</option>
                <option value="agni-karma">Agni Karma</option>
                <option value="katti-basti">Katti Basti</option>
                <option value="steam-massage">Steam & Oil Massage</option>
                <option value="joint-pain">Joint Pain Treatment</option>
                <option value="spine-treatment">Spine Treatment</option>
                <option value="knee-treatment">Knee Treatment</option>
                <option value="avn-treatment">AVN Treatment</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-card-foreground mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-card-foreground mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="">Select time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-card-foreground mb-2">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="">Select urgency</option>
                <option value="routine">Routine Appointment</option>
                <option value="urgent">Urgent (Within 3 days)</option>
                <option value="emergency">Emergency (Same day)</option>
              </select>
            </div>

            <div>
              <label htmlFor="previousTreatment" className="block text-sm font-medium text-card-foreground mb-2">
                Previous Treatment
              </label>
              <select
                id="previousTreatment"
                name="previousTreatment"
                value={formData.previousTreatment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="">Select if applicable</option>
                <option value="first-time">First time patient</option>
                <option value="returning">Returning patient</option>
                <option value="referred">Referred by another doctor</option>
                <option value="other-clinic">Treated elsewhere before</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="symptoms" className="block text-sm font-medium text-card-foreground mb-2">
              Current Symptoms *
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              rows={3}
              required
              value={formData.symptoms}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              placeholder="Please describe your current symptoms, pain level, and affected areas..."
            ></textarea>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              placeholder="Any additional information, medical history, or specific concerns you'd like to share..."
            ></textarea>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending Request..." : "Submit Appointment Request"}
            </button>
          </div>

          {submitMessage && (
            <div
              className={`mt-4 p-4 rounded-lg ${submitMessage.includes("successfully") ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"}`}
            >
              {submitMessage}
            </div>
          )}

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is an appointment request. We will contact you within 24 hours to confirm your
              appointment time. For urgent matters, please call us directly at{" "}
              <a href="tel:9431338221" className="font-semibold underline">
                9431338221
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
