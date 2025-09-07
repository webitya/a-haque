export default function ClinicInfo() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">About Our Clinic</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aastha Ortho & Neurotherapy Center is dedicated to providing comprehensive orthopedic and neurotherapy
            treatments in Ranchi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
            <div className="text-4xl mb-4 text-primary">🏥</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Modern Facility</h3>
            <p className="text-muted-foreground">
              State-of-the-art equipment and comfortable treatment rooms designed for optimal patient care and recovery
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
            <div className="text-4xl mb-4 text-primary">⚕️</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Expert Treatment</h3>
            <p className="text-muted-foreground">
              Specialized in treating complex orthopedic conditions with a combination of modern and traditional
              therapies
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
            <div className="text-4xl mb-4 text-primary">🎯</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personalized Care</h3>
            <p className="text-muted-foreground">
              Individual treatment plans tailored to each patient s specific needs and medical condition
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Mission</h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
            To provide exceptional orthopedic and neurotherapy care that combines the best of modern medical science
            with time-tested traditional healing methods. We are committed to helping our patients achieve optimal
            health and mobility through personalized, compassionate treatment.
          </p>
        </div>
      </div>
    </section>
  )
}
