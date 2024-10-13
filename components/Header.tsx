"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Input } from '@/components/ui/input'
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [cartItems, setCartItems] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background py-4 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-foreground">
            ModernStore
          </Link>
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Input type="search" placeholder="Search products..." className="w-full pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          {/* TODO: Hacer el menú responsive */}
          <nav className="flex items-center space-x-6">
            {/* Menú móvil */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col">
                  <Link href="/products" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Shop
                  </Link>
                  <Link href="/about" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    About
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            {/* Menú desplegable para categorías */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="hidden md:inline-flex items-center justify-center w-full rounded-md px-4 py-2 bg-background text-sm font-medium text-foreground hover:text-primary focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Categories
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>

              {menuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1">
                    <Link
                      href="/categories/electronics"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                    >
                      Electronics
                    </Link>
                    <Link
                      href="/categories/fashion"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                    >
                      Fashion
                    </Link>
                    <Link
                      href="/categories/home"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                    >
                      Home
                    </Link>
                    <Link
                      href="/categories/books"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                    >
                      Books
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    You have {cartItems} items in your cart.
                  </SheetDescription>
                </SheetHeader>
                {/* Add cart items here */}
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}