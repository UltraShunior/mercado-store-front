import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const featuredProducts = [
  { id: 1, name: 'Classic White Tee', price: 29.99, image: 'https://framerusercontent.com/images/sRzo2BrL41hfoV7XziSYzCY2Ks.png' },
  { id: 2, name: 'Denim Jacket', price: 89.99, image: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6' },
  { id: 3, name: 'Leather Handbag', price: 129.99, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7' },
  { id: 4, name: 'Sunglasses', price: 59.99, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083' },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <CardContent className="p-0 relative overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={400} 
                  height={400} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} passHref>
                  <Button variant="outline" className="w-full">View Product</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}