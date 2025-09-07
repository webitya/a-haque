export default function Specializations() {
  const specializations = [
    {
      title: "AVN (Avascular Necrosis)",
      description:
        "Specialized treatment for avascular necrosis, a condition where bone tissue dies due to lack of blood supply. Our advanced neurotherapy techniques help restore circulation and promote bone healing.",
      symptoms: ["Joint pain", "Limited range of motion", "Stiffness", "Difficulty walking"],
      treatments: ["Neurotherapy", "Circulation therapy", "Pain management", "Mobility restoration"],
      image: "/specializations/avn-treatment.jpg",
    },
    {
      title: "Spine Disorders",
      description:
        "Comprehensive treatment for various spine conditions including disc problems, sciatica, spinal stenosis, and alignment issues using non-invasive neurotherapy methods.",
      symptoms: ["Back pain", "Radiating pain", "Numbness", "Muscle weakness"],
      treatments: ["Katti Basti", "Neurotherapy", "Spinal alignment", "Pain relief therapy"],
      image: "/specializations/spine-treatment.jpg",
    },
    {
      title: "Knee Joint Problems",
      description:
        "Expert care for knee joint conditions including arthritis, ligament injuries, cartilage damage, and mobility issues with focus on restoring function and reducing pain.",
      symptoms: ["Knee pain", "Swelling", "Stiffness", "Instability"],
      treatments: ["Joint therapy", "Mobility exercises", "Pain management", "Strengthening programs"],
      image: "/specializations/knee-treatment.jpg",
    },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Our Specializations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dr. A-HAQUE specializes in treating complex orthopedic conditions with proven expertise and advanced
            treatment methods
          </p>
        </div>

        <div className="space-y-8">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <img
                    src={spec.image || "/placeholder.svg"}
                    alt={spec.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{spec.title}</h3>
                  <p className="text-muted-foreground mb-6">{spec.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Common Symptoms:</h4>
                      <ul className="space-y-2">
                        {spec.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Our Treatments:</h4>
                      <ul className="space-y-2">
                        {spec.treatments.map((treatment, treatmentIndex) => (
                          <li key={treatmentIndex} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
