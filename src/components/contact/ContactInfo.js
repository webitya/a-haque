"use client"

import { motion } from "framer-motion"

export default function ContactInfo() {
  const contactDetails = [
    {
      title: "Phone",
      description: "Call us for appointments and inquiries",
      value: "9431338221",
      link: "tel:9431338221",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
    },
    {
      title: "Email",
      description: "Send us your queries and concerns",
      value: "info@aasthaortho.com",
      link: "mailto:info@aasthaortho.com",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Location",
      description: "Visit our clinic in Ranchi",
      value: "Ranchi, Jharkhand",
      link: "https://goo.gl/maps/xxxxxx", // replace with actual map link
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us to schedule your appointment or learn more about our orthopedic and neurotherapy
            services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-border text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <a
                href={item.link}
                target={item.title === "Location" ? "_blank" : "_self"}
                className="text-primary font-semibold hover:text-green-800 transition-colors"
              >
                {item.value}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
