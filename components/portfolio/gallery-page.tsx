import Image from "next/image"
import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

interface GalleryImage {
  src: string
  alt: string
  aspect?: "portrait" | "landscape" | "square"
}

interface GalleryPageProps {
  title: string
  intro: string
  images: GalleryImage[]
  backLink?: string
}

export function GalleryPage({ title, intro, images, backLink = "/portfolio" }: GalleryPageProps) {
  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 font-sans text-sm text-gold-dark hover:text-gold mb-8 transition-colors"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">{title}</h1>
          <GoldDivider className="my-8" />
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">{intro}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((image, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="relative gold-border overflow-hidden group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={image.aspect === "landscape" ? 400 : image.aspect === "square" ? 600 : 800}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">Love What You See?</h2>
          <p className="font-sans text-muted-foreground mb-8">Let's create something beautiful together.</p>
          <Link href="/book-photography" className="btn-gold">
            Book Your Session
          </Link>
        </div>
      </section>
    </main>
  )
}
