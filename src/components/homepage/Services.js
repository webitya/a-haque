"use client";
import React from "react";
// ✅ All these icons exist in @mui/icons-material (no build errors)
import PsychologyIcon from "@mui/icons-material/Psychology";        // brain / AVN
import AccessibleIcon from "@mui/icons-material/Accessible";        // spine & knee
import DeviceHubIcon from "@mui/icons-material/DeviceHub";          // cervical
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement"; // tailbone
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";  // shoulder
import HealingIcon from "@mui/icons-material/Healing";              // joints

export default function Services() {
  const services = [
    {
      title: "AVN Treatment",
      description:
        "Holistic Ayurvedic care for Avascular Necrosis, improving mobility and reducing pain naturally.",
      icon: <PsychologyIcon fontSize="large" className="text-primary" />,
      image: "/1.jpg",
    },
    {
      title: "Spine & Knee Joints",
      description:
        "Therapies designed to restore flexibility, reduce stiffness, and support healthy spine & knees.",
      icon: <AccessibleIcon fontSize="large" className="text-primary" />,
      image: "/2.jpg",
    },
    {
      title: "Cervical",
      description:
        "Specialized treatment for neck stiffness, cervical spondylosis, and nerve-related issues.",
      icon: <DeviceHubIcon fontSize="large" className="text-primary" />,
      image: "/3.jpg",
    },
    {
      title: "Tailbone Relief",
      description:
        "Effective therapies to relieve tailbone pain, reduce inflammation, and restore posture balance.",
      icon: <SelfImprovementIcon fontSize="large" className="text-primary" />,
      image: "/4.webp",
    },
    {
      title: "Shoulder Joint",
      description:
        "Targeted Ayurvedic therapies for frozen shoulder, stiffness, and shoulder joint mobility.",
      icon: <FitnessCenterIcon fontSize="large" className="text-primary" />,
      image: "/5.jpg",
    },
    {
      title: "All Joint Related Treatments",
      description:
        "Comprehensive solutions for arthritis, swelling, and all joint-related conditions.",
      icon: <HealingIcon fontSize="large" className="text-primary" />,
      image: "/6.webp",
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
            Comprehensive orthopedic and neurotherapy treatments tailored to
            your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-t-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Icon */}
              <div className="flex items-center mb-4">
                <div className="mr-4">{service.icon}</div>
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
