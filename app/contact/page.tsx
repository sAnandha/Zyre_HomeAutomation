"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden transition-all duration-700">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            width={1920}
            height={800}
            alt="Smart Home Interior"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
            <Badge
              variant="secondary"
              className="bg-teal-200/90 text-teal-900 hover:bg-teal-300/90 transition-colors duration-300"
            >
              Get In Touch
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white transition-colors duration-500 hover:text-teal-300">
              Contact Our Smart Home Experts
            </h1>
            <p className="max-w-[900px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
              Ready to transform your home? Get in touch with our team for a free consultation, technical support, or
              any questions about our smart home solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card className="text-center transition-all duration-500 hover:shadow-xl hover:scale-105">
              <CardHeader>
                <Phone className="mx-auto h-12 w-12 text-teal-700" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">8525928165</p>
                <p className="text-sm text-slate-700">Mon-Sat: 9AM-7PM IST</p>
                <p className="text-sm text-slate-700">Sunday: 10AM-5PM IST</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-500 hover:shadow-xl hover:scale-105">
              <CardHeader>
                <Mail className="mx-auto h-12 w-12 text-teal-700" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Send us a message</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">zyrehomeautomation@gmail.com</p>
                <p className="text-sm text-slate-700">We respond within 24 hours</p>
                <p className="text-sm text-slate-700">Technical support available</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="transition-all duration-500 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Rajesh"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Kumar" className="transition-all duration-300 focus:scale-105" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rajesh@example.com"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Free consultation request"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your smart home needs..."
                    className="min-h-[120px] transition-all duration-300 focus:scale-105"
                  />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-6">
              <Card className="transition-all duration-500 hover:shadow-xl">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-teal-700" />
                  <CardTitle>Visit Our Office</CardTitle>
                  <CardDescription>Experience our smart home solutions in person</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Zyre Home Automation</p>
                    <p className="text-slate-700">Karukupani</p>
                    <p className="text-slate-700">Nagerkovil, Tamil Nadu</p>
                    <p className="text-slate-700">India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-500 hover:shadow-xl">
                <CardHeader>
                  <Globe className="h-8 w-8 text-teal-700" />
                  <CardTitle>Website</CardTitle>
                  <CardDescription>Visit our online presence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">www.zyrehomeautomation.in</p>
                    <p className="text-sm text-slate-700">Complete product catalog</p>
                    <p className="text-sm text-slate-700">Installation guides & support</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-500 hover:shadow-xl">
                <CardHeader>
                  <Clock className="h-8 w-8 text-teal-700" />
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>When you can reach us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 5:00 PM IST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
