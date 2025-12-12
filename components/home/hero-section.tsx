import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-champagne via-ivory to-cream">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-8 subtle-fade flex justify-center">
          <img
            src="/images/ds.png"
            alt="Danyell Sedrick's Photography"
            className="h-20 w-auto"
          />
        </div>
        
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark mb-4 inline-block subtle-fade">D.Sedrick Photography</span>
        <GoldDivider className="mb-6 mt-4" />

        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight text-balance font-normal">
          Cinematic Portraits &<br />
          <span className="text-gold-dark">Elegant Experiences</span>
        </h1>

        <p className="mt-6 font-sans text-base md:text-lg text-charcoal/75 max-w-2xl mx-auto leading-relaxed">
          Timeless imagery crafted with intention, light, and artistry.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center subtle-fade">
          <Link href="/portfolio" className="btn-gold px-6 py-3 text-sm">
            View Portfolio
          </Link>
          <Link href="/book-photography" className="btn-gold px-6 py-3 text-sm">
            Book Photography
          </Link>
          <Link href="/book-photo-booth" className="btn-gold px-6 py-3 text-sm">
            Book Booth
          </Link>
        </div>
      </div>

      {/* Scroll indicator removed for a cleaner hero */}
    </section>
  )
}
