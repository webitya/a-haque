export default function DoctorProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/professional-doctor.png"
              alt="Dr. A-HAQUE - Orthopedic and Neurotherapy Specialist"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Dr. A-HAQUE</h1>
            <h2 className="text-2xl text-primary mb-4">Orthopedic & Neurotherapy Specialist</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dr. A-HAQUE is a highly experienced orthopedic and neurotherapy specialist with extensive expertise in
              treating complex conditions including AVN (Avascular Necrosis), spine disorders, and knee joint problems.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-foreground">Specialized Expertise</h3>
                  <p className="text-muted-foreground">
                    Advanced treatment of AVN, spine disorders, and knee joint conditions using modern neurotherapy
                    techniques
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-foreground">Holistic Approach</h3>
                  <p className="text-muted-foreground">
                    Combines traditional therapies like Agni Karma and Katti Basti with modern neurotherapy for
                    comprehensive healing
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-foreground">Patient-Centered Care</h3>
                  <p className="text-muted-foreground">
                    Personalized treatment plans tailored to each patient s specific condition and recovery goals
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
