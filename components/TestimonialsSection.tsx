import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const testimonials = [
  { name: 'Sarah J.', content: 'I love the quality of the clothes. They fit perfectly and the customer service is excellent!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  { name: 'Michael T.', content: 'Great selection of trendy items. The shipping was fast and everything arrived as expected.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} className="rounded-full mb-4" />
                <p className="text-lg mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}