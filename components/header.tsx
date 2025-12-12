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
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    // smooth scroll to top for a polished transition
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gold/10 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center shrink-0">
          <Image
            src="/images/ds.png"
            alt="Danyell Sedrick's Photography"
            width={80}
            height={80}
            className="h-14 w-auto lg:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center flex-1 justify-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold-dark transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:gap-x-4">
          <Link
            href="/book-photography"
            onClick={(e) => handleNavClick(e, "/book-photography")}
            className="btn-gold text-xs px-6 py-2.5"
          >
            Book
          </Link>
        </div>

        {/* Mobile menu button */}
        <button type="button" className="lg:hidden text-charcoal p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gold/10">
          <div className="px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block font-sans text-sm tracking-widest uppercase text-charcoal hover:text-gold-dark font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gold/10">
              <Link
                href="/book-photography"
                onClick={(e) => handleNavClick(e, "/book-photography")}
                className="block btn-gold text-center text-xs py-3"
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
