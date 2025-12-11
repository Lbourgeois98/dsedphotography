import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

export function PhotoBoothPreview() {
  return (
    <section className="py-32 bg-ivory">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark mb-2 inline-block">Featured Experience</span>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight font-normal">
          The Magic Mirror Photo Booth Experience
        </h2>
        <GoldDivider className="my-8" />
        <p className="font-sans text-lg text-charcoal/75 leading-relaxed max-w-2xl mx-auto">
          Studio-lit event photography — reimagined. Our 65" Magic Mirror Photo Booth features a 43" HD interactive
          touch screen with voice-guided sessions, customizable backgrounds, digital stickers, and signatures. Elevate
          your celebration with instant prints and digital sharing.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            '43" HD interactive touch screen',
            "Voice-guided photo sessions",
            "Instant print & digital sharing",
            "Custom backgrounds & overlays",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-sans text-base text-charcoal">
              <span className="w-2 h-2 bg-gold-dark rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link href="/photo-booth" className="btn-gold px-8 py-4 text-base">
            Explore Photo Booth
          </Link>
        </div>
      </div>
    </section>
  )
}
