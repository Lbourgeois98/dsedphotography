"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { GoldDivider } from "@/components/gold-divider"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      
      if (!formspreeEndpoint) {
        throw new Error("Form endpoint not configured. Please contact the site administrator.")
      }

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-ivory">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal">Get in Touch</h1>
          <GoldDivider className="my-6 sm:my-8" />
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'd love to hear from you. Whether you have questions about services, want to discuss a project, or simply
            want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 bg-champagne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal mb-6 sm:mb-8">Contact Information</h2>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="mailto:hello@dsphotography.com"
                  className="flex items-center gap-4 group p-4 bg-card gold-border hover:bg-gold/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="font-sans text-charcoal group-hover:text-gold-dark transition-colors">
                      hello@dsphotography.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+13187740473"
                  className="flex items-center gap-4 group p-4 bg-card gold-border hover:bg-gold/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="font-sans text-charcoal group-hover:text-gold-dark transition-colors">
                      318-774-0473
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card gold-border">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Service Area</p>
                    <p className="font-sans text-charcoal">Baton Rouge, Louisiana & Beyond</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-serif text-lg text-charcoal mb-4">Follow Along</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-card gold-border flex items-center justify-center hover:bg-gold/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-gold-dark" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-card gold-border flex items-center justify-center hover:bg-gold/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-gold-dark" />
                  </a>
                </div>
              </div>

              {/* Quick Book Links */}
              <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-card gold-border">
                <h3 className="font-serif text-base sm:text-lg text-charcoal mb-4">Ready to Book?</h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Link href="/book-photography" className="btn-gold text-center text-sm flex-1 px-4 py-2.5">
                    Book Photography
                  </Link>
                  <Link href="/book-photo-booth" className="btn-gold text-center text-sm flex-1 px-4 py-2.5">
                    Book Booth
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-5 sm:p-8 lg:p-10 gold-border">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">Send a Message</h2>
              <p className="font-sans text-sm text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you within 24-48 hours.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
                    <svg className="w-8 h-8 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-4">Message Sent!</h3>
                  <p className="font-sans text-muted-foreground">Thank you for reaching out. I'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="font-sans text-sm text-red-800">{error}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm text-charcoal mb-2">
                      Name <span className="text-gold-dark">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ivory border border-gold/30 text-charcoal font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans text-sm text-charcoal mb-2">
                      Email <span className="text-gold-dark">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ivory border border-gold/30 text-charcoal font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-sm text-charcoal mb-2">
                      Message <span className="text-gold-dark">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ivory border border-gold/30 text-charcoal font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <button type="submit" disabled={isLoading} className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
