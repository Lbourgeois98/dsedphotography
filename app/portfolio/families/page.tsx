import { GalleryPage } from "@/components/portfolio/gallery-page"

const images = [
  {
    src: "/images/family1.jpg",
    alt: "Family holiday portrait with Christmas decorations",
    aspect: "landscape" as const,
  },
  {
    src: "/images/family3.jpg",
    alt: "Newborn baby with floral butterfly wings",
    aspect: "landscape" as const,
  },
]

export default function FamiliesPage() {
  return (
    <GalleryPage
      title="Families"
      intro="Celebrating family connections through warm, vibrant, and authentic imagery."
      images={images}
    />
  )
}
