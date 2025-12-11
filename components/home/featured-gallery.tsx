import Image from "next/image"
import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"

const galleryImages = [
  {
    src: "/images/wedding1.jpg",
    alt: "Bride with red hair gazing out window",
  },
  {
    src: "/images/prom1.jpg",
    alt: "Romantic couple in elegant attire",
  },
  {
    src: "/images/graduation3.jpg",
    alt: "Graduate with personalized football",
  },
  {
    src: "/images/family3.jpg",
    alt: "Newborn with butterfly flower wings",
  },
  {
    src: "/images/creative1.jpg",
    alt: "Creative editorial fashion shoot",
  },
]

export function FeaturedGallery() {
  return (
    <section className="py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal font-normal">Featured Work</h2>
          <GoldDivider className="my-8" />
          <p className="font-sans text-lg text-charcoal/75 leading-relaxed">A curated selection of portraits and moments — each frame crafted to last generations.</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-1 row-span-2">
            <div className="relative h-full min-h-[400px] gold-border overflow-hidden group">
              <Image
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="relative aspect-[16/10] gold-border overflow-hidden group">
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="col-span-1 row-span-2">
            <div className="relative h-full min-h-[400px] gold-border overflow-hidden group">
              <Image
                src={galleryImages[4].src || "/placeholder.svg"}
                alt={galleryImages[4].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative aspect-square gold-border overflow-hidden group">
              <Image
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative aspect-square gold-border overflow-hidden group">
              <Image
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/portfolio" className="btn-gold px-8 py-4 text-base">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
