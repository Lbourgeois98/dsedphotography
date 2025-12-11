import Link from "next/link"
import Image from "next/image"
import { GoldDivider } from "@/components/gold-divider"
import { Lightbulb, Palette, Monitor, Mic, Printer } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: '43" Interactive Touch Screen',
    description: "Full HD touch display for seamless guest interaction with backgrounds, stickers, and signatures.",
  },
  {
    icon: Mic,
    title: "Voice-Guided Sessions",
    description:
      "Built-in voice assistant guides guests through their photo session for a fun, interactive experience.",
  },
  {
    icon: Lightbulb,
    title: "Professional LED Lighting",
    description: "Top and ambient LED lights ensure flattering, studio-quality portraits even in low-light venues.",
  },
  {
    icon: Printer,
    title: "Instant Print & Share",
    description: "Guests receive prints on the spot and can instantly share digitally via QR code, AirDrop, or email.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Personalized overlays, digital stickers, signatures, and color themes to match your event's aesthetic.",
  },
]

export default function PhotoBoothPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section - Text Only */}
      <section className="py-24 bg-champagne">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark">Premium Experience</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
            The Magic Mirror Photo Booth Experience
          </h1>
          <GoldDivider className="my-8" />
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Elevate your celebration with our 65" Magic Mirror Photo Booth featuring a 43" HD interactive touch screen,
            voice-guided sessions, LED ambient lighting, and instant print capabilities. Guests can customize their
            photos with backgrounds, stickers, and digital signatures — then share instantly.
          </p>
          <div className="mt-10">
            <Link href="/book-photo-booth" className="btn-gold">
              Book Photo Booth
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Image */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Image
              src="/images/booth.jpg"
              alt="Professional photo booth at event"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-cover shadow-lg gold-border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Makes It Special</h2>
            <GoldDivider className="my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card p-8 gold-border h-full text-center transition-all duration-300 hover:bg-cream hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-full mb-6">
                  <feature.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">{feature.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Ready to Elevate Your Celebration?</h2>
          <p className="font-sans text-muted-foreground mb-8">
            Contact Sedrick today to reserve the Magic Mirror Photo Booth for your special event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-photo-booth" className="btn-gold">
              Book Photo Booth
            </Link>
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
