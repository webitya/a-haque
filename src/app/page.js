import Header from "../components/homepage/Header"
import Hero from "../components/homepage/Hero"
import Services from "../components/homepage/Services"
import BookingForm from "../components/homepage/BookingForm"
import Footer from "../components/homepage/Footer"

export const metadata = {
  title: "Aastha Ortho & Neurotherapy Center Ranchi - Dr. A-HAQUE",
  description:
    "Expert orthopedic and neurotherapy treatments in Ranchi by Dr. A-HAQUE. Specializing in AVN, spine and knee joints, neurotherapy, cupping, and joint pain treatment. Book appointment online: 9431338221",
  keywords:
    "orthopedic doctor Ranchi, neurotherapy Ranchi, Dr A-HAQUE, AVN treatment, spine treatment, knee joint treatment, cupping therapy, joint pain treatment, Agni Karma, Katti Basti, steam therapy, oil massage",
  openGraph: {
    title: "Aastha Ortho & Neurotherapy Center Ranchi - Dr. A-HAQUE",
    description: "Expert orthopedic and neurotherapy treatments in Ranchi by Dr. A-HAQUE. Book appointment online.",
    url: "https://aasthaortho.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aastha Ortho & Neurotherapy Center Homepage",
      },
    ],
  },
  alternates: {
    canonical: "https://aasthaortho.com",
  },
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <BookingForm />
      <Footer />
    </main>
  )
}
