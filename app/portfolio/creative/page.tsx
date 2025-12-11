import { GalleryPage } from "@/components/portfolio/gallery-page"

const images = [
  {
    src: "/images/creative1.jpg",
    alt: "Dramatic editorial fashion shoot in abandoned building",
    aspect: "landscape" as const,
  },
]

export default function CreativePage() {
  return (
    <GalleryPage
      title="Creative & Editorial"
      intro="Where imagination meets cinematic artistry. Fashion-inspired, expressive, and bold."
      images={images}
    />
  )
}
