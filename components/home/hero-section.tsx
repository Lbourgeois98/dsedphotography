import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-champagne via-ivory to-cream">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark mb-4 inline-block subtle-fade">D.Sedrick Photography</span>
        <p className="lead mt-2 subtle-fade">Cinematic portraiture and elevated event experiences — crafted with intention, light, and heart.</p>
        <GoldDivider className="mb-8" />

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight text-balance">
          Cinematic Portraits &<br />
          <span className="text-gold-dark">Elegant Photo Experiences</span>
        </h1>

        <p className="mt-8 font-sans text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          Timeless imagery crafted with elegance, emotion, and artistic intention.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center subtle-fade">
          <Link href="/portfolio" className="btn-epic">
            View Portfolio
          </Link>
          <Link href="/book-photography" className="btn-outline-gold">
            Book Photography
          </Link>
        </div>

        <GoldDivider className="mt-16" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  )
}
