import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Your Style</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Explore our curated collection of trendsetting fashion and accessories.</p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
      </div>
    </section>
  )
}