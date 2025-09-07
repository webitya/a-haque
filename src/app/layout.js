import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import FloatingContactButtons from "../components/common/FloatingContactButtons.js"
import "./globals.css"

export const metadata = {
  title: {
    default: "Aastha Ortho & Neurotherapy Center Ranchi - Dr. A-HAQUE",
    template: "%s | Aastha Ortho & Neurotherapy Center",
  },
  description:
    "Expert orthopedic and neurotherapy treatments by Dr. A-HAQUE in Ranchi. Specializing in AVN, spine and knee joints treatment, neurotherapy, cupping, joint pain treatment. Book appointment: 9431338221",
  keywords:
    "orthopedic doctor Ranchi, neurotherapy Ranchi, Dr A-HAQUE, AVN treatment, spine treatment, knee joint treatment, cupping therapy, joint pain treatment, Agni Karma, Katti Basti",
  authors: [{ name: "Dr. A-HAQUE" }],
  creator: "Aastha Ortho & Neurotherapy Center",
  publisher: "Aastha Ortho & Neurotherapy Center",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aasthaortho.com",
    siteName: "Aastha Ortho & Neurotherapy Center",
    title: "Aastha Ortho & Neurotherapy Center Ranchi - Dr. A-HAQUE",
    description:
      "Expert orthopedic and neurotherapy treatments by Dr. A-HAQUE in Ranchi. Specializing in AVN, spine and knee joints treatment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aastha Ortho & Neurotherapy Center - Dr. A-HAQUE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastha Ortho & Neurotherapy Center Ranchi - Dr. A-HAQUE",
    description: "Expert orthopedic and neurotherapy treatments by Dr. A-HAQUE in Ranchi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aasthaortho.com",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Aastha Ortho & Neurotherapy Center",
              description: "Expert orthopedic and neurotherapy treatments in Ranchi",
              url: "https://aasthaortho.com",
              telephone: "+919431338221",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.3441",
                longitude: "85.3096",
              },
              openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
              medicalSpecialty: ["Orthopedics", "Neurotherapy", "Pain Management"],
              physician: {
                "@type": "Physician",
                name: "Dr. A-HAQUE",
                medicalSpecialty: [
                  "Orthopedic Surgery",
                  "Neurotherapy",
                  "AVN Treatment",
                  "Spine Treatment",
                  "Knee Joint Treatment",
                ],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Medical Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Neurotherapy",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Cupping Therapy",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Agni Karma",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Katti Basti",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <FloatingContactButtons />
        <Analytics />
      </body>
    </html>
  )
}
