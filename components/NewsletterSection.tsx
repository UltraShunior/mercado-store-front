import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-xl mb-8">Subscribe to our newsletter for exclusive offers and the latest fashion trends.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button type="submit" variant="secondary">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}