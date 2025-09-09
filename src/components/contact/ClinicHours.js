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

  const todayIndex = new Date().getDay() // 0 = Sunday, 1 = Monday...

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Clinic Hours */}
          <div>
            <h2 className="text-4xl font-extrabold text-foreground mb-6">Clinic Hours</h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg border border-border">
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-all duration-200 
                      ${index === todayIndex
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-white hover:bg-green-50 border border-border"}
                    `}
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span
                      className={`${schedule.time === "Closed" && index !== todayIndex
                        ? "text-destructive"
                        : "opacity-90"}`}
                    >
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl shadow-sm">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Emergency consultations available by appointment. Please call ahead to confirm
                availability.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-4xl font-extrabold text-foreground mb-6">Why Choose Us?</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Expert Specialist",
                  desc: "Dr. A-HAQUE brings years of experience in orthopedic and neurotherapy treatments",
                },
                {
                  title: "Comprehensive Care",
                  desc: "Complete range of treatments from traditional therapies to modern neurotherapy",
                },
                {
                  title: "Personalized Treatment",
                  desc: "Individual treatment plans designed specifically for your condition and needs",
                },
                {
                  title: "Modern Facility",
                  desc: "State-of-the-art equipment and comfortable treatment environment",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1 shadow-sm">
                    <svg
                      className="w-4 h-4 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
