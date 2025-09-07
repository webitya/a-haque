import Link from "next/link"

export default function ServiceDetail() {
  const services = [
    {
      title: "Neurotherapy",
      description:
        "Advanced neurotherapy treatments using modern techniques to stimulate nerve function and promote healing. Effective for neurological conditions, nerve pain, and mobility issues.",
      benefits: ["Pain relief", "Improved nerve function", "Enhanced mobility", "Non-invasive treatment"],
      duration: "45-60 minutes",
      image: "/services/neurotherapy.jpg",
    },
    {
      title: "Hot Cupping Therapy",
      description:
        "Traditional hot cupping therapy that uses heated cups to create suction on the skin, promoting blood circulation and relieving muscle tension.",
      benefits: ["Improved blood circulation", "Muscle relaxation", "Pain reduction", "Stress relief"],
      duration: "30-45 minutes",
      image: "/services/hot-cupping.jpg",
    },
    {
      title: "Vacuum Cupping",
      description:
        "Modern vacuum cupping technique that creates controlled suction to treat muscle pain, improve circulation, and promote healing in targeted areas.",
      benefits: ["Targeted pain relief", "Reduced inflammation", "Better circulation", "Muscle recovery"],
      duration: "30-40 minutes",
      image: "/services/vacuum-cupping.jpg",
    },
    {
      title: "Agni Karma",
      description:
        "Ancient Ayurvedic thermal therapy using controlled heat application to treat chronic pain conditions, particularly effective for joint and muscle disorders.",
      benefits: ["Chronic pain relief", "Joint mobility", "Reduced stiffness", "Long-lasting results"],
      duration: "20-30 minutes",
      image: "/services/agni-karma.jpg",
    },
    {
      title: "Katti Basti",
      description:
        "Specialized Ayurvedic treatment for lower back pain using medicated oils in a dough boundary. Highly effective for spine-related conditions.",
      benefits: ["Lower back pain relief", "Spine health", "Muscle strengthening", "Improved flexibility"],
      duration: "45-60 minutes",
      image: "/services/katti-basti.jpg",
    },
    {
      title: "Steam Therapy & Oil Massage",
      description:
        "Full body steam therapy combined with therapeutic oil massage to relax muscles, improve circulation, and promote overall wellness.",
      benefits: ["Full body relaxation", "Improved circulation", "Stress reduction", "Skin health"],
      duration: "60-90 minutes",
      image: "/services/steam-massage.jpg",
    },
    {
      title: "Joint Pain Treatment",
      description:
        "Comprehensive treatment for all types of joint pain including arthritis, sports injuries, and age-related joint problems using multiple therapeutic approaches.",
      benefits: ["Pain reduction", "Improved joint function", "Increased mobility", "Preventive care"],
      duration: "30-60 minutes",
      image: "/services/joint-treatment.jpg",
    },
    {
      title: "Spine Treatment",
      description:
        "Specialized treatment for spine disorders including disc problems, sciatica, and spinal alignment issues using advanced neurotherapy techniques.",
      benefits: ["Spine alignment", "Pain relief", "Improved posture", "Enhanced mobility"],
      duration: "45-75 minutes",
      image: "/services/spine-treatment.jpg",
    },
    {
      title: "Knee Joint Treatment",
      description:
        "Expert treatment for knee joint problems including arthritis, ligament issues, and mobility problems using targeted therapy approaches.",
      benefits: ["Knee pain relief", "Improved mobility", "Strengthened muscles", "Better stability"],
      duration: "40-60 minutes",
      image: "/services/knee-treatment.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive orthopedic and neurotherapy treatments designed to address your specific health needs and
            promote optimal healing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="flex items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">{service.title}</h2>
                  <p className="text-sm text-accent font-medium">Duration: {service.duration}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Benefits:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
