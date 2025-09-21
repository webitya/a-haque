export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Expert Neurotherapy & Joint Treatment in Ranchi.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Dr. A-HAQUE provides specialized treatment for AVN, spine and knee joints with advanced neurotherapy
              techniques in Ranchi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#booking"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/AasthaOrtho.png"
              alt="Aastha Ortho & Neurotherapy Center Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
