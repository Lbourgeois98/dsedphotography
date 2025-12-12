import { BookingForm } from "@/components/booking-form"

const photographyFields = [
  { name: "name", label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, placeholder: "318-774-0473", required: true },
  {
    name: "sessionType",
    label: "Type of Session",
    type: "select" as const,
    options: ["Portrait Session", "Couples Session", "Family Session", "Event Coverage", "Creative/Editorial", "Other"],
    required: true,
  },
  { name: "preferredDates", label: "Preferred Dates", type: "text" as const, placeholder: "e.g., March 15-20, 2025" },
  { name: "location", label: "Location (Optional)", type: "text" as const, placeholder: "City or specific venue" },
  {
    name: "message",
    label: "Tell Me About Your Vision",
    type: "textarea" as const,
    placeholder: "Share any details about your session, inspiration, or questions...",
    required: true,
  },
]

export default function BookPhotographyPage() {
  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="bg-ivory py-12 sm:py-16 px-4 sm:px-6 lg:px-12 flex items-center justify-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
        <div className="w-full max-w-xl mx-auto">
          <BookingForm
            title="Book Photography"
            intro="Begin your photography journey with Sedrick. Share your vision below."
            fields={photographyFields}
            submitLabel="Submit Photography Inquiry"
            formEndpoint={process.env.NEXT_PUBLIC_FORMSPREE_PHOTOGRAPHY}
          />
        </div>
      </div>
    </main>
  )
}
