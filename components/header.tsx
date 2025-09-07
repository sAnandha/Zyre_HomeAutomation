"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products" },
    { name: "Feedback", href: "/feedback" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          {/* Real Zyre Logo */}
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/images/logo.jpg"
              width={48}
              height={48}
              alt="Zyre Home Automation Logo"
              className="rounded-full transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-slate-900">Zyre Home Automation</span>
            <span className="text-xs text-teal-600 font-medium hidden sm:block">Be Smart, Live Smart</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-teal-600 text-slate-700"
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-teal-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="w-fit bg-teal-600 hover:bg-teal-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
