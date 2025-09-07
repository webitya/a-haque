"use client"

import { useState } from "react"
import LoadingSpinner from "../common/LoadingSpinner"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
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
    setSubmitMessage("")

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Appointment request sent successfully! We will contact you soon.")
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          time: "",
          message: "",
        })
      } else {
        setSubmitMessage("Failed to send appointment request. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Error sending appointment request. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="booking" className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground">
            Schedule a consultation with Dr. A-HAQUE for expert orthopedic and neurotherapy care
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                <option value="consultation">General Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Please describe your symptoms or any specific concerns..."
            ></textarea>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && <LoadingSpinner size="sm" />}
              {isSubmitting ? "Sending..." : "Book Appointment"}
            </button>
          </div>

          {submitMessage && (
            <div
              className={`mt-4 p-4 rounded-lg ${submitMessage.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
