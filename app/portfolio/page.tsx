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
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">Portfolio</h1>
          <GoldDivider className="my-8" />
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A curated collection of cinematic photography, crafted with elegance and emotion.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-champagne">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <div className="bg-card p-8 gold-border text-center transition-all duration-300 hover:bg-cream h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 transition-colors">
                    <category.icon className="w-7 h-7 text-gold-dark" />
                  </div>
                  <h2 className="font-serif text-2xl text-charcoal mb-3">{category.title}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-sans text-sm tracking-wide">View Gallery</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">Ready to Create Your Story?</h2>
          <Link href="/book-photography" className="btn-gold">
            Book Your Session
          </Link>
        </div>
      </section>
    </main>
  )
}
