import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

export function PhotoBoothPreview() {
  return (
    <section className="py-16 md:py-20 bg-ivory">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight font-normal">
          Magic Mirror Photo Booth
        </h2>
        <GoldDivider className="my-4" />
        <p className="font-sans text-base text-charcoal/75 leading-relaxed max-w-2xl mx-auto">
          Studio-lit event photography reimagined. Interactive touch screen with instant prints and digital sharing.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            '43" HD touch screen',
            "Voice-guided sessions",
            "Instant prints",
            "Digital sharing",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2 font-sans text-sm text-charcoal">
              <span className="w-1.5 h-1.5 bg-gold-dark rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/photo-booth" className="btn-gold px-6 py-3 text-sm">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
