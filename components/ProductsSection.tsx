import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: 'Product 1', price: '$19.99', image: 'https://source.unsplash.com/random/400x300?product' },
  { name: 'Product 2', price: '$29.99', image: 'https://source.unsplash.com/random/400x300?gadget' },
  { name: 'Product 3', price: '$39.99', image: 'https://source.unsplash.com/random/400x300?tech' },
]

export default function ProductsSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader className="p-0">
              <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300" />
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <p className="text-lg font-bold text-primary">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Add to Cart</Button> {/* TODO: Add to cart functionality */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}