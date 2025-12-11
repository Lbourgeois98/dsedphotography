import { GalleryPage } from "@/components/portfolio/gallery-page"

const images = [
  {
    src: "/images/prom1.jpg",
    alt: "Romantic couple portrait in elegant attire",
    aspect: "portrait" as const,
  },
  {
    src: "/images/prom2.jpg",
    alt: "Romantic dance under moonlight",
    aspect: "portrait" as const,
  },
  {
    src: "/images/prom3.jpg",
    alt: "Couple silhouette in gazebo under full moon",
    aspect: "landscape" as const,
  },
]

export default function CouplesPage() {
  return (
    <GalleryPage
      title="Couples"
      intro="A visual narrative of love, captured with emotion and elegance."
      images={images}
    />
  )
}
