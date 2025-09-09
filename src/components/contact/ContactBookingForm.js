"use client"

import { useState } from "react"

export default function ContactBookingForm() {
  const [step, setStep] = useState(1)
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, 3))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("✅ Your appointment request has been sent successfully! We will contact you within 24 hours.")
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
        setStep(1)
      } else {
        setSubmitMessage("❌ Failed to send your request. Please try again or call us directly.")
      }
    } catch (error) {
      setSubmitMessage("⚠️ Error sending your request. Please try again or contact us by phone.")
    }
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground">Step {step} of 3</p>
        </div>

        {/* Progress bar */}
        <div className="flex mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 mx-1 rounded-full ${s <= step ? "bg-green-600" : "bg-gray-200"}`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border border-border">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Service Required *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                >
                  <option value="">Select a service</option>
                  <option value="neurotherapy">Neurotherapy</option>
                  <option value="joint-pain">Joint Pain Treatment</option>
                  <option value="spine-treatment">Spine Treatment</option>
                  <option value="knee-treatment">Knee Treatment</option>
                  <option value="avn-treatment">AVN Treatment</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                >
                  <option value="">Select time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Urgency Level</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                >
                  <option value="">Select urgency</option>
                  <option value="routine">Routine</option>
                  <option value="urgent">Urgent (Within 3 days)</option>
                  <option value="emergency">Emergency (Same day)</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Current Symptoms *</label>
                <textarea
                  name="symptoms"
                  rows={3}
                  required
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  placeholder="Describe your symptoms, pain level, and affected areas..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Previous Treatment</label>
                <select
                  name="previousTreatment"
                  value={formData.previousTreatment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                >
                  <option value="">Select if applicable</option>
                  <option value="first-time">First time patient</option>
                  <option value="returning">Returning patient</option>
                  <option value="referred">Referred by another doctor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg"
                  placeholder="Any additional information, medical history, or concerns..."
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 rounded-lg border border-border bg-gray-100 hover:bg-gray-200"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-green-800"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-green-800 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            )}
          </div>

          {submitMessage && (
            <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 animate-fadeIn">
              {submitMessage}
            </div>
          )}

          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            <strong>Note:</strong> This is an appointment request. We will contact you within 24 hours to confirm. For urgent matters, call directly: <a href="tel:9431338221" className="underline font-semibold">9431338221</a>.
          </div>
        </form>
      </div>
    </section>
  )
}