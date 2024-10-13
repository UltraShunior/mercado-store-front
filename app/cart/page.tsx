"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2 } from 'lucide-react'

// Mock cart data (replace with actual data management in a real application)
const initialCart = [
  { id: 1, name: 'Classic White Tee', price: 29.99, quantity: 2, image: 'https://framerusercontent.com/images/sRzo2BrL41hfoV7XziSYzCY2Ks.png' },
  { id: 2, name: 'Denim Jacket', price: 89.99, quantity: 1, image: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6' },
]

export default function CartPage() {
  const [cart, setCart] = useState(initialCart)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10 // Example shipping cost
  const total = subtotal + shipping

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link href="/products" passHref>
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map(item => (
              <div key={item.id} className="flex items-center border-b py-4">
                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md mr-4" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <Input 
                    type="number" 
                    min="1" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 mx-2 text-center" 
                  />
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)} className="ml-4">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-secondary p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-6">Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}