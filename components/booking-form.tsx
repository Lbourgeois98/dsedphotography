"use client"

import type React from "react"

import { useState } from "react"
import { GoldDivider } from "@/components/gold-divider"

interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "select" | "textarea" | "date"
  placeholder?: string
  options?: string[]
  required?: boolean
}

interface BookingFormProps {
  title: string
  intro: string
  fields: FormField[]
  submitLabel: string
  formEndpoint?: string
}

export function BookingForm({ title, intro, fields, submitLabel, formEndpoint }: BookingFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const formspreeEndpoint = formEndpoint || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
          <svg className="w-8 h-8 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-4">Thank You!</h3>
        <p className="font-sans text-muted-foreground max-w-md mx-auto">
          Your inquiry has been received. I'll be in touch within 24-48 hours to discuss your vision.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal">{title}</h1>
        <GoldDivider className="my-6" />
        <p className="font-sans text-muted-foreground max-w-xl mx-auto">{intro}</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-sans text-sm text-red-800">{error}</p>
          </div>
        )}
        
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block font-sans text-sm text-charcoal mb-2">
              {field.label}
              {field.required && <span className="text-gold-dark ml-1">*</span>}
            </label>

            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-gold/30 text-charcoal font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
              >
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-gold/30 text-charcoal font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-gold/30 text-charcoal font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
              />
            )}
          </div>
        ))}

        <div className="pt-6">
          <button type="submit" disabled={isLoading} className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? "Submitting..." : submitLabel}
          </button>
        </div>
      </form>
    </div>
  )
}
