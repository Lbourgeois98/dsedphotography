import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

export function PhotoBoothPreview() {
  return (
    <section className="py-24 bg-ivory">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark">Featured Experience</span>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
          The Magic Mirror Photo Booth Experience
        </h2>
        <GoldDivider className="my-6" />
        <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Studio-lit event photography — reimagined. Our 65" Magic Mirror Photo Booth features a 43" HD interactive
          touch screen with voice-guided sessions, customizable backgrounds, digital stickers, and signatures. Elevate
          your celebration with instant prints and digital sharing.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            '43" HD interactive touch screen',
            "Voice-guided photo sessions",
            "Instant print & digital sharing",
            "Custom backgrounds & overlays",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-sans text-sm text-charcoal">
              <span className="w-1.5 h-1.5 bg-gold rotate-45" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="/photo-booth" className="btn-gold">
            Explore Photo Booth
          </Link>
        </div>
      </div>
    </section>
  )
}
