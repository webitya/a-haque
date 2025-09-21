export default function DoctorProfile() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <div className="flex justify-center">
            <img
              src="/dr-ahaque-photo.webp"
              alt="Dr. A-HAQUE - Orthopedic and Neurotherapy Specialist"
              className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500"
            />
          </div>

          {/* Doctor Info */}
          <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-border">
            <h1 className="text-5xl font-extrabold text-foreground mb-4">Dr. A-HAQUE</h1>
            <h2 className="text-2xl font-semibold text-primary mb-6">Neurotherapy, AVN, Spine and All Joint Specialist</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of expertise, Dr. A-HAQUE specializes in treating complex conditions including
              <span className="font-medium text-foreground"> AVN (Avascular Necrosis)</span>, spine disorders, and knee joint problems using advanced neurotherapy and holistic care.
            </p>

            {/* Key Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Specialized Expertise</h3>
                  <p className="text-muted-foreground text-base">
                    Advanced treatment of AVN, spine disorders, and knee conditions using cutting-edge neurotherapy techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Holistic Approach</h3>
                  <p className="text-muted-foreground text-base">
                    Blending traditional therapies like Agni Karma & Katti Basti with modern neurotherapy for complete healing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Patient-Centered Care</h3>
                  <p className="text-muted-foreground text-base">
                    Personalized treatment plans designed for each patient’s unique condition and long-term recovery goals.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#booking"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-800 transition-all duration-300"
              >
                Book Appointment with Dr. A-HAQUE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
