import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"
import { Camera, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon: Camera,
    title: "Cinematic Vision",
    description:
      "Every frame is crafted with intentional lighting, thoughtful composition, and a cinematic eye that transforms ordinary moments into extraordinary art.",
  },
  {
    icon: Heart,
    title: "Emotional Authenticity",
    description:
      "I believe in capturing genuine emotion and connection. Your photos should feel like you — real, beautiful, and true to your story.",
  },
  {
    icon: Sparkles,
    title: "Refined Elegance",
    description:
      "From wardrobe guidance to final editing, every detail is polished to create a cohesive, elevated experience and timeless imagery.",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-dark">The Artist</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-charcoal leading-tight">
            Hello, I'm Danyell Sedrick
          </h1>
          <GoldDivider className="my-8" />
          <div className="space-y-4 font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <p>
              Welcome to my world of cinematic photography. For over a decade, I've had the privilege of capturing
              life's most precious moments — from intimate portraits to grand celebrations, each session is an
              opportunity to create art that tells your unique story.
            </p>
            <p>
              My journey began with a simple love for light and emotion. Today, that passion has evolved into a refined
              approach to photography that blends editorial elegance with genuine, heartfelt moments.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-24 bg-champagne">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">My Story</h2>
            <GoldDivider className="my-6" />
          </div>
          <div className="prose prose-lg mx-auto">
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed text-center">
              <p>
                Photography found me during a transformative period in my life. What started as a creative outlet
                quickly became my calling — a way to preserve beauty, emotion, and the fleeting moments that make life
                extraordinary.
              </p>
              <p>
                I've studied under master photographers, trained in both traditional and contemporary techniques, and
                continuously push myself to grow as an artist. But beyond technical skill, what drives me is connection.
                The trust my clients place in me to document their most meaningful moments is something I never take for
                granted.
              </p>
              <p>
                Whether it's the nervous excitement before a first look, the tender embrace of a family portrait, or the
                bold confidence of an editorial shoot — I'm here to capture it all with artistry and intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">My Approach</h2>
            <GoldDivider className="my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center bg-card p-8 gold-border">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-full mb-6">
                  <value.icon className="w-6 h-6 text-gold-dark" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-4">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Clients Can Expect</h2>
            <GoldDivider className="my-6" />
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-serif text-lg text-gold-dark mb-2">Personal Consultation</h3>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Before every session, we'll connect to discuss your vision, wardrobe options, and any special requests.
                I want to understand your story.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-gold-dark mb-2">Guided Session Experience</h3>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                During our time together, I'll guide you through poses and expressions while creating a relaxed,
                enjoyable atmosphere. No awkwardness allowed.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-gold-dark mb-2">Artful Editing</h3>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Each image is individually edited with my signature style — timeless, elegant, and true to the moment.
                Your gallery will be delivered within 2-3 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Let's Create Something Beautiful</h2>
          <p className="font-sans text-muted-foreground mb-8">
            I'd love to hear about your vision and how we can bring it to life together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-photography" className="btn-gold">
              Book Your Session
            </Link>
            <Link href="/contact" className="btn-outline-gold">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
