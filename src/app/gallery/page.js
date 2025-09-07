import { Suspense } from "react"
import Header from "../../components/homepage/Header"
import Footer from "../../components/homepage/Footer"
import GalleryHero from "../../components/gallery/GalleryHero"
import GalleryGrid from "../../components/gallery/GalleryGrid"

export const metadata = {
  title: "Treatment Gallery - Aastha Ortho & Neurotherapy Center Ranchi | Dr A-HAQUE",
  description:
    "View our comprehensive gallery of neurotherapy treatments, cupping therapy, Agni Karma, and specialized treatments for AVN, spine, and knee conditions at Aastha Ortho & Neurotherapy Center in Ranchi.",
  keywords:
    "treatment gallery, neurotherapy images, cupping therapy photos, Agni Karma videos, AVN treatment, spine treatment, knee treatment, Dr A-HAQUE, Ranchi orthopedic clinic",
  openGraph: {
    title: "Treatment Gallery - Aastha Ortho & Neurotherapy Center",
    description: "Explore our advanced neurotherapy and orthopedic treatments through our comprehensive gallery",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treatment Gallery - Aastha Ortho & Neurotherapy Center",
    description: "View our comprehensive treatment gallery and facilities",
    images: ["/og-image.jpg"],
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <GalleryHero />
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          }
        >
          <GalleryGrid />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
