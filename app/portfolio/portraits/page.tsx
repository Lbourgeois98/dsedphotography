import { GalleryPage } from "@/components/portfolio/gallery-page"

const images = [
  {
    src: "/images/graduation2.jpg",
    alt: "Graduate leaning against column with tassel",
    aspect: "portrait" as const,
  },
  {
    src: "/images/graduation3.jpg",
    alt: "Senior portrait with personalized football",
    aspect: "square" as const,
  },
]

export default function PortraitsPage() {
  return (
    <GalleryPage
      title="Portraits"
      intro="Cinematic portraiture with timeless artistry and refined storytelling."
      images={images}
    />
  )
}
