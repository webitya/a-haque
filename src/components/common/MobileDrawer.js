"use client"

import Link from "next/link"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function MobileDrawer({ isOpen, onClose }) {
  const pathname = usePathname()

  // Close drawer on Escape + lock body scroll when open
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose()
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const navLinks = [
    { href: "/", label: "Home", icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ) },
    { href: "/about", label: "About", icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ) },
    { href: "/services", label: "Services", icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ) },
    { href: "/gallery", label: "Gallery", icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ) },
    { href: "/contact", label: "Contact", icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ) },
  ]

  return (
    <>
      {/* Backdrop: black overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[1px] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* White Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="
            h-full border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            bg-white backdrop-blur-md text-gray-900
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  pathname === href
                    ? "text-green-700 font-semibold bg-green-50"
                    : "text-gray-800 hover:text-green-700 hover:bg-gray-100"
                }`}
              >
                {icon}
                {label}
              </Link>
            ))}

            {/* Call Button */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <a
                href="tel:9431338221"
                className="flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium
                           bg-green-600 text-white hover:bg-green-700 transition-colors"
                onClick={onClose}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call: 9431338221
              </a>
            </div>

            {/* Clinic Info */}
            <div className="pt-4 mt-4 border-t border-gray-200 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Dr. A-HAQUE</h3>
              <p className="text-sm text-gray-700 mb-2">Specialist in AVN, Spine & Knee Joints</p>
              <p className="text-xs text-gray-600">Aastha Ortho & Neurotherapy Center</p>
              <p className="text-xs text-gray-600">Ranchi</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
