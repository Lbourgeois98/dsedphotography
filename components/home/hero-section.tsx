import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-champagne via-ivory to-cream">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
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

        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight text-balance font-normal">
          Cinematic Portraits &<br />
          <span className="text-gold-dark">Elegant Experiences</span>
        </h1>

        <p className="mt-6 font-sans text-sm sm:text-base md:text-lg text-charcoal/75 max-w-2xl mx-auto leading-relaxed">
          Timeless imagery crafted with intention, light, and artistry.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center subtle-fade flex-wrap">
          <Link href="/portfolio" className="btn-gold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm w-full sm:w-auto text-center">
            View Portfolio
          </Link>
          <Link href="/book-photography" className="btn-gold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm w-full sm:w-auto text-center">
            Book Photography
          </Link>
          <Link href="/book-photo-booth" className="btn-gold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm w-full sm:w-auto text-center">
            Book Booth
          </Link>
        </div>
      </div>

      {/* Scroll indicator removed for a cleaner hero */}
    </section>
  )
}
