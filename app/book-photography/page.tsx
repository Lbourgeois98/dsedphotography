import { BookingForm } from "@/components/booking-form"

const photographyFields = [
  { name: "name", label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, placeholder: "(555) 123-4567", required: true },
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
    <main className="pt-24 pb-20">
      <div className="bg-ivory py-16 px-6 lg:px-12 xl:px-20 flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="w-full max-w-xl mx-auto">
          <BookingForm
            title="Book Photography"
            intro="Begin your photography journey with Sedrick. Share your vision below."
            fields={photographyFields}
            submitLabel="Submit Photography Inquiry"
          />
        </div>
      </div>
    </main>
  )
}
