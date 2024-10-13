import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategorySection from '@/components/CategorySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}