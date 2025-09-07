import Header from "../../components/homepage/Header"
import Footer from "../../components/homepage/Footer"
import DoctorProfile from "../../components/about/DoctorProfile"
import ClinicInfo from "../../components/about/ClinicInfo"

export const metadata = {
  title: "About Dr. A-HAQUE - Orthopedic & Neurotherapy Specialist Ranchi",
  description:
    "Learn about Dr. A-HAQUE, expert orthopedic and neurotherapy specialist in Ranchi. Specializing in AVN, spine and knee joint treatments with modern and traditional healing methods. Years of experience in comprehensive patient care.",
  keywords:
    "Dr A-HAQUE, orthopedic specialist Ranchi, neurotherapy doctor, AVN specialist, spine doctor Ranchi, knee joint specialist, medical expertise, patient care",
  openGraph: {
    title: "About Dr. A-HAQUE - Orthopedic & Neurotherapy Specialist Ranchi",
    description: "Learn about Dr. A-HAQUE, expert orthopedic and neurotherapy specialist in Ranchi.",
    url: "https://aasthaortho.com/about",
    images: [
      {
        url: "/professional-doctor.png",
        width: 800,
        height: 600,
        alt: "Dr. A-HAQUE - Orthopedic and Neurotherapy Specialist",
      },
    ],
  },
  alternates: {
    canonical: "https://aasthaortho.com/about",
  },
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <DoctorProfile />
      <ClinicInfo />
      <Footer />
    </main>
  )
}
