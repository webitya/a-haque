"use client"

import { useState } from "react"
import MobileDrawer from "../common/MobileDrawer.js"
import Link from "next/link.js"
import Image from "next/image"

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/AasthaOrtho.png" // put this file inside /public folder
                  alt="Aastha Ortho & Neurotherapy Center"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  priority
                />
                <span className="text-lg sm:text-xl font-bold text-primary">
                  Aastha Ortho & Neurotherapy Center
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/gallery"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <a
                  href="tel:9431338221"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call Now</span>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-foreground hover:text-primary focus:outline-none focus:text-primary p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
