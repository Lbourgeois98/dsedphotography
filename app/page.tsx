import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { PhotoBoothPreview } from "@/components/home/photo-booth-preview"
import { FeaturedGallery } from "@/components/home/featured-gallery"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PhotoBoothPreview />
      <FeaturedGallery />
      <TestimonialsSection />
    </>
  )
}
