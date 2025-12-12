import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"
import { User, Heart, Users, Calendar, Sparkles } from "lucide-react"

const categories = [
  {
    title: "Portraits",
    description: "Refined, editorial portraits with intentional lighting and expressive storytelling.",
    icon: User,
    href: "/portfolio/portraits",
  },
  {
    title: "Couples",
    description: "Romantic, emotionally driven imagery capturing connection and intimacy.",
    icon: Heart,
    href: "/portfolio/couples",
  },
  {
    title: "Families",
    description: "Heartfelt, lifestyle-inspired imagery full of warmth and authenticity.",
    icon: Users,
    href: "/portfolio/families",
  },
  {
    title: "Events",
    description: "Elegant documentary-style coverage of weddings, celebrations, and meaningful milestones.",
    icon: Calendar,
    href: "/portfolio/events",
  },
  {
    title: "Creative & Editorial",
    description: "Bold concepts with cinematic lighting and artistic direction.",
    icon: Sparkles,
    href: "/portfolio/creative",
  },
]

export default function PortfolioPage() {
  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal">Portfolio</h1>
          <GoldDivider className="my-6 sm:my-8" />
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A curated collection of cinematic photography, crafted with elegance and emotion.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-14 sm:py-16 bg-champagne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {categories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <div className="bg-card p-4 sm:p-8 gold-border text-center transition-all duration-300 hover:bg-cream h-full">
                  <div className="inline-flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 bg-gold/10 rounded-full mb-3 sm:mb-6 group-hover:bg-gold/20 transition-colors">
                    <category.icon className="w-5 sm:w-7 h-5 sm:h-7 text-gold-dark" />
                  </div>
                  <h2 className="font-serif text-sm sm:text-2xl text-charcoal mb-2 sm:mb-3">{category.title}</h2>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  <div className="mt-3 sm:mt-6 flex items-center justify-center gap-2 text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-sans text-xs sm:text-sm tracking-wide">View Gallery</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal mb-6">Ready to Create Your Story?</h2>
          <Link href="/book-photography" className="btn-gold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
            Book Your Session
          </Link>
        </div>
      </section>
    </main>
  )
}
