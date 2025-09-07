import Header from "../../components/homepage/Header"
import Footer from "../../components/homepage/Footer"
import ServiceDetail from "../../components/services/ServiceDetail"
import Specializations from "../../components/services/Specializations"

export const metadata = {
  title: "Medical Services - Orthopedic & Neurotherapy Treatments Ranchi",
  description:
    "Comprehensive orthopedic and neurotherapy services in Ranchi by Dr. A-HAQUE. Neurotherapy, hot & vacuum cupping, Agni Karma, Katti Basti, steam therapy, oil massage, joint pain treatment, spine and knee treatments. Expert care for AVN and chronic pain.",
  keywords:
    "neurotherapy Ranchi, cupping therapy, Agni Karma, Katti Basti, joint pain treatment, spine treatment, knee treatment, orthopedic services Ranchi, AVN treatment, chronic pain management, steam therapy, oil massage",
  openGraph: {
    title: "Medical Services - Orthopedic & Neurotherapy Treatments Ranchi",
    description: "Comprehensive orthopedic and neurotherapy services in Ranchi by Dr. A-HAQUE.",
    url: "https://aasthaortho.com/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Services at Aastha Ortho & Neurotherapy Center",
      },
    ],
  },
  alternates: {
    canonical: "https://aasthaortho.com/services",
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServiceDetail />
      <Specializations />
      <Footer />
    </main>
  )
}
