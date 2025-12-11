import { GalleryPage } from "@/components/portfolio/gallery-page"

const images = [
  {
    src: "/images/graduation1.jpg",
    alt: "Graduation group celebration in forest",
    aspect: "landscape" as const,
  },
  {
    src: "/images/wedding1.jpg",
    alt: "Bride portrait by window",
    aspect: "portrait" as const,
  },
]

export default function EventsPage() {
  return (
    <GalleryPage
      title="Events"
      intro="Capturing the magic, emotion, and intimate moments of every unforgettable celebration."
      images={images}
    />
  )
}
