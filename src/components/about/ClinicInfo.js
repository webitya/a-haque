export default function ClinicInfo() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">About Our Clinic</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aastha Ortho & Neurotherapy Center is dedicated to providing comprehensive orthopedic and neurotherapy
            treatments in Ranchi
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-green-50 to-green-100 border border-border hover:shadow-xl transition-transform hover:-translate-y-2">
            <div className="text-5xl mb-4 text-primary">🏥</div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Modern Facility</h3>
            <p className="text-muted-foreground">
              State-of-the-art equipment and comfortable treatment rooms designed for optimal patient care and recovery
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-green-50 to-green-100 border border-border hover:shadow-xl transition-transform hover:-translate-y-2">
            <div className="text-5xl mb-4 text-primary">⚕️</div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Expert Treatment</h3>
            <p className="text-muted-foreground">
              Specialized in treating complex orthopedic conditions with a combination of modern and traditional
              therapies
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-green-50 to-green-100 border border-border hover:shadow-xl transition-transform hover:-translate-y-2">
            <div className="text-5xl mb-4 text-primary">🎯</div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Personalized Care</h3>
            <p className="text-muted-foreground">
              Individual treatment plans tailored to each patient’s specific needs and medical condition
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-lg text-green-50 max-w-4xl mx-auto">
            To provide exceptional orthopedic and neurotherapy care that combines the best of modern medical science
            with time-tested traditional healing methods. We are committed to helping our patients achieve optimal
            health and mobility through personalized, compassionate treatment.
          </p>
        </div>
      </div>
    </section>
  )
}
