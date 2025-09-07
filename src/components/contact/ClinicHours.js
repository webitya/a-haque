export default function ClinicHours() {
  const hours = [
    { day: "Monday", time: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
    { day: "Thursday", time: "9:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Clinic Hours</h2>
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                  >
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className={`${schedule.time === "Closed" ? "text-destructive" : "text-muted-foreground"}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Emergency consultations available by appointment. Please call ahead to confirm
                availability.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Expert Specialist</h3>
                  <p className="text-muted-foreground">
                    Dr. A-HAQUE brings years of experience in orthopedic and neurotherapy treatments
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Comprehensive Care</h3>
                  <p className="text-muted-foreground">
                    Complete range of treatments from traditional therapies to modern neurotherapy
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Personalized Treatment</h3>
                  <p className="text-muted-foreground">
                    Individual treatment plans designed specifically for your condition and needs
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Modern Facility</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art equipment and comfortable treatment environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
