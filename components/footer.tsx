import Link from "next/link"
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-teal-400" />
              <span className="font-bold text-xl">Zyre Home Automation</span>
            </div>
            <p className="text-slate-400 text-sm">
              Be smart, live smart. Leading provider of affordable smart home automation solutions designed for India.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-teal-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-slate-400 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400">2M Switch Systems</span>
              </li>
              <li>
                <span className="text-slate-400">4M Switch Systems</span>
              </li>
              <li>
                <span className="text-slate-400">8M Switch Systems</span>
              </li>
              <li>
                <span className="text-slate-400">Voice Assistant Support</span>
              </li>
              <li>
                <span className="text-slate-400">Mobile App Control</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-slate-400">8525928165</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-slate-400">zyrehomeautomation@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-slate-400">Karukupani, Nagerkovil, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Zyre Home Automation. All rights reserved. | Be smart, live smart.</p>
        </div>
      </div>
    </footer>
  )
}
