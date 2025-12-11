import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"
import { User, Heart, Users, Calendar, Sparkles, Camera } from "lucide-react"

const services = [
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
    description: "Elegant documentary-style coverage of weddings and meaningful milestones.",
    icon: Calendar,
    href: "/portfolio/events",
  },
  {
    title: "Creative & Editorial",
    description: "Bold concepts with cinematic lighting and artistic direction.",
    icon: Sparkles,
    href: "/portfolio/creative",
  },
  {
    title: "Photo Booth",
    description: "Studio-lit event photography reimagined with our Magic Mirror Photo Booth.",
    icon: Camera,
    href: "/photo-booth",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-champagne">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">Photography Services</h2>
          <GoldDivider className="my-6" />
          <p className="font-sans text-muted-foreground leading-relaxed">
            From intimate portraits to grand celebrations, every session is crafted with cinematic elegance and artistic
            intention.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-card p-8 gold-border text-center transition-all duration-300 hover:bg-cream">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
  )
}
