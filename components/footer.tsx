import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Portraits", href: "/portfolio/portraits" },
    { name: "Couples", href: "/portfolio/couples" },
    { name: "Families", href: "/portfolio/families" },
    { name: "Events", href: "/portfolio/events" },
    { name: "Photo Booth", href: "/photo-booth" },
  ],
  company: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/ds.png"
              alt="Danyell Sedrick's Photography"
              width={120}
              height={120}
              className="h-24 w-auto brightness-110"
            />
            <p className="mt-6 font-sans text-sm text-ivory/70 leading-relaxed">
              Timeless imagery crafted with elegance, emotion, and artistic intention.
            </p>
            <p className="mt-3 font-sans text-xs text-ivory/60">Based in Baton Rouge, Louisiana — available for travel.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@dsphotography.com"
                className="flex items-center gap-3 font-sans text-sm text-ivory/70 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@dsphotography.com
              </a>
              <a
                href="tel:+13187740473"
                className="flex items-center gap-3 font-sans text-sm text-ivory/70 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                318-774-0473
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-ivory/70 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-ivory/70 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ivory/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-ivory/50">
              © {new Date().getFullYear()} Danyell Sedrick's Photography. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/book-photography" className="btn-outline-gold text-xs px-6 py-2 border-gold/50 text-gold">
                Book Photography
              </Link>
              <Link href="/book-photo-booth" className="btn-gold text-xs px-6 py-2">
                Book Photo Booth
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
