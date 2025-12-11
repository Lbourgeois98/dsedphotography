import Link from "next/link"
import Image from "next/image"
import { GoldDivider } from "@/components/gold-divider"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-gradient-to-b from-champagne via-ivory to-cream">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-12 subtle-fade flex justify-center">
          <Image
            src="/images/ds.png"
            alt="Danyell Sedrick's Photography"
            width={120}
            height={120}
            className="h-28 w-auto drop-shadow-lg"
          />
        </div>
        
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark mb-6 inline-block subtle-fade">D.Sedrick Photography</span>
        <p className="lead mt-4 subtle-fade text-lg md:text-xl">Cinematic portraiture and elevated event experiences — crafted with intention, light, and heart.</p>
        <GoldDivider className="mb-10 mt-10" />

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-tight text-balance font-normal tracking-tight">
          Cinematic Portraits &<br />
          <span className="text-gold-dark italic">Elegant Photo Experiences</span>
        </h1>

        <p className="mt-10 font-sans text-lg md:text-xl text-charcoal/75 max-w-3xl mx-auto leading-relaxed text-pretty">
          Timeless imagery crafted with elegance, emotion, and artistic intention. Every frame tells a story worth preserving.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center subtle-fade">
          <Link href="/portfolio" className="btn-gold px-8 py-4 text-base">
            View Portfolio
          </Link>
          <Link href="/book-photography" className="btn-gold px-8 py-4 text-base">
            Book Photography
          </Link>
        </div>

        <GoldDivider className="mt-20" />
      </div>

      {/* Scroll indicator removed for a cleaner hero */}
    </section>
  )
}
