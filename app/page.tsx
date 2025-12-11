import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { PhotoBoothPreview } from "@/components/home/photo-booth-preview"
import { FeaturedGallery } from "@/components/home/featured-gallery"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PhotoBoothPreview />
      <FeaturedGallery />
    </>
  )
}
