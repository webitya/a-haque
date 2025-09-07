import Header from "../../components/homepage/Header"
import Footer from "../../components/homepage/Footer"
import ContactInfo from "../../components/contact/ContactInfo"
import ClinicHours from "../../components/contact/ClinicHours"
import ContactBookingForm from "../../components/contact/ContactBookingForm"

export const metadata = {
  title: "Contact & Book Appointment - Aastha Ortho & Neurotherapy Center Ranchi",
  description:
    "Contact Aastha Ortho & Neurotherapy Center in Ranchi. Book appointment with Dr. A-HAQUE for orthopedic and neurotherapy treatments. Phone: 9431338221, Email: info@aasthaortho.com. Expert care for AVN, spine, and knee conditions. Online booking available.",
  keywords:
    "contact orthopedic doctor Ranchi, book appointment Dr A-HAQUE, neurotherapy clinic contact, Ranchi orthopedic center, spine doctor contact, knee specialist appointment, AVN treatment booking",
  openGraph: {
    title: "Contact & Book Appointment - Aastha Ortho & Neurotherapy Center Ranchi",
    description: "Contact and book appointment with Dr. A-HAQUE for expert orthopedic and neurotherapy care in Ranchi.",
    url: "https://aasthaortho.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Aastha Ortho & Neurotherapy Center",
      },
    ],
  },
  alternates: {
    canonical: "https://aasthaortho.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactInfo />
      <ClinicHours />
      <ContactBookingForm />
      <Footer />
    </main>
  )
}
