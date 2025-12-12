import { BookingForm } from "@/components/booking-form"

const photoBoothFields = [
  { name: "name", label: "Full Name", type: "text" as const, placeholder: "Your name", required: true },
  { name: "email", label: "Email Address", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, placeholder: "318-774-0473", required: true },
  {
    name: "eventType",
    label: "Event Type",
    type: "select" as const,
    options: ["Wedding", "Birthday Party", "Corporate Event", "Graduation", "Prom", "Anniversary", "Other"],
    required: true,
  },
  { name: "eventDate", label: "Event Date", type: "date" as const, required: true },
  {
    name: "eventLocation",
    label: "Event Location",
    type: "text" as const,
    placeholder: "Venue name or address",
    required: true,
  },
  {
    name: "guestCount",
    label: "Estimated Guest Count",
    type: "text" as const,
    placeholder: "e.g., 100-150 guests",
  },
  {
    name: "message",
    label: "Event Notes / Special Requests",
    type: "textarea" as const,
    placeholder: "Tell us about your event, theme, or any special requirements...",
  },
]

export default function BookPhotoBoothPage() {
  return (
    <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="bg-ivory py-12 sm:py-16 px-4 sm:px-6 lg:px-12 flex items-center justify-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
        <div className="w-full max-w-xl mx-auto">
          <BookingForm
            title="Book Photo Booth"
            intro="Reserve the Magic Mirror Photo Booth for your celebration."
            fields={photoBoothFields}
            submitLabel="Submit Photo Booth Request"
            formEndpoint={process.env.NEXT_PUBLIC_FORMSPREE_PHOTOBOOTH}
          />
        </div>
      </div>
    </main>
  )
}
