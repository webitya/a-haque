export default function Services() {
  const services = [
    {
      title: "Neurotherapy",
      description: "Advanced neurotherapy treatments for nerve-related conditions",
      icon: "🧠",
      image: "/neurotherapy3.jpg", // Add a path to your image
    },
    {
      title: "Hot & Vacuum Cupping",
      description: "Traditional cupping therapy for pain relief and healing",
      icon: "🔥",
      image: "/cupping.jpg", // Add a path to your image
    },
    {
      title: "Agni Karma",
      description: "Ayurvedic thermal therapy for joint and muscle pain",
      icon: "⚡",
      image: "/agnikarma.jpg", // Add a path to your image
    },
    {
      title: "Katti Basti",
      description: "Specialized lower back treatment with medicated oils",
      icon: "💆",
      image: "/kattibasti.jpg", // Add a path to your image
    },
    {
      title: "Steam & Oil Massage",
      description: "Full body steam therapy and therapeutic oil massage",
      icon: "💨",
      image: "/massage.jpg", // Add a path to your image
    },
    {
      title: "Joint Pain Treatment",
      description: "Comprehensive treatment for all types of joint pain",
      icon: "🦴",
      image: "/joint-pain.jpg", // Add a path to your image
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive orthopedic and neurotherapy treatments tailored to your
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              {/* Add the image here */}
              <div className="w-full h-48 overflow-hidden rounded-t-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}