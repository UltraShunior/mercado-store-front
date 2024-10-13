import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/category/women" className="text-muted-foreground hover:text-foreground">Women</Link></li>
              <li><Link href="/category/men" className="text-muted-foreground hover:text-foreground">Men</Link></li>
              <li><Link href="/category/accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground">Shipping</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-foreground">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 MercadoStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}