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
    <section className="py-16 md:py-20 bg-champagne">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-normal">Services</h2>
          <GoldDivider className="my-4" />
          <p className="font-sans text-base text-charcoal/75 leading-relaxed">
            From portraits to events, every session delivers timeless imagery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white p-6 gold-border h-full text-center transition-all duration-300 hover:bg-cream hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2 font-normal">{service.title}</h3>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
