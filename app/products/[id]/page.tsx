import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

// Mock product data (replace with actual data fetching in a real application)
const products = [
  {
    id: 1,
    name: 'Classic White Tee',
    price: 29.99,
    description: 'A timeless classic, our white tee is made from 100% organic cotton for ultimate comfort and style.',
    images: [
      'https://framerusercontent.com/images/lTHltm78QxmlNMOKIlALAcl5w.png',
      'https://framerusercontent.com/images/sRzo2BrL41hfoV7XziSYzCY2Ks.png',
      'https://framerusercontent.com/images/JQLxkAHxmY7CXzHpcG56gjk7A.png',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    reviews: [
      { id: 1, author: 'John D.', rating: 5, comment: 'Great quality and fit!' },
      { id: 2, author: 'Sarah M.', rating: 4, comment: 'Love the material, but runs a bit small.' },
    ],
  },
  // Add more products here...
]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id.toString() === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4 m-auto">
          <Carousel > {/* sin botones */}
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center items-center">
                  <div className="">{/* TODO: Make this responsive */}
                    <Image 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      width={600}
                      height={600}
                      className="rounded-lg" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size:</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <Button key={size} variant="outline">{size}</Button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color:</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <Button key={color} variant="outline">{color}</Button>
              ))}
            </div>
          </div>
          <Button className="w-full mb-6">Add to Cart</Button>
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <Card>
                <CardContent className="pt-6">
                  <p>{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardContent className="pt-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold mr-2">{review.author}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}