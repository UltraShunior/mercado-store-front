import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b' },
  { name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d' },
]

export default function CategorySection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`} passHref>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 relative h-80">
                  <Image src={category.image} alt={category.name} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}