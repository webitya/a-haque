export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-24">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Expert <span className="text-primary">Orthopedic</span> &<br /> Neurotherapy Care
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Dr. <span className="font-semibold text-foreground">A-HAQUE</span> provides specialized treatment for <span className="text-primary">AVN</span>, spine, and knee joints
            with advanced neurotherapy techniques in Ranchi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-800 transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="/services"
              className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-green-50 transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
