import { GoldDivider } from "@/components/gold-divider"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with Danyell was an absolute dream. The photos captured our love story in the most beautiful, cinematic way. We'll treasure these images forever.",
    author: "Sarah & Michael",
    service: "Wedding Photography",
  },
  {
    quote:
      "The attention to detail and artistic vision exceeded all expectations. Every portrait feels like a work of art. Truly exceptional.",
    author: "Amanda R.",
    service: "Portrait Session",
  },
  {
    quote:
      "Our family photos are stunning! The natural, candid moments captured are exactly what we hoped for. Professional, patient, and incredibly talented.",
    author: "The Johnson Family",
    service: "Family Photography",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">Client Stories</h2>
          <GoldDivider className="my-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 gold-border relative">
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <blockquote className="font-serif text-lg text-charcoal leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-gold/20">
                <p className="font-sans text-sm font-medium text-charcoal">{testimonial.author}</p>
                <p className="font-sans text-xs text-muted-foreground mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
