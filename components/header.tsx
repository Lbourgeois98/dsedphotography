"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Photo Booth", href: "/photo-booth" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    window.scrollTo({ top: 0, behavior: "instant" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center">
          <Image
            src="/images/ds.png"
            alt="Danyell Sedrick's Photography"
            width={80}
            height={80}
            className="h-16 w-auto lg:h-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold-dark transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:gap-x-4">
          <Link
            href="/book-photography"
            onClick={(e) => handleNavClick(e, "/book-photography")}
            className="btn-outline-gold text-xs px-6 py-3"
          >
            Book Session
          </Link>
        </div>

        {/* Mobile menu button */}
        <button type="button" className="lg:hidden text-charcoal" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-t border-gold/20">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold-dark"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-photography"
              onClick={(e) => handleNavClick(e, "/book-photography")}
              className="block btn-gold text-center text-xs"
            >
              Book Session
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
