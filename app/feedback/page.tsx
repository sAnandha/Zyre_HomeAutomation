"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Building, Home, Factory } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function FeedbackPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const testimonials = [
    {
      name: "Mr. Saravanan",
      location: "Shop Owner",
      rating: 5,
      text: "Upon acquiring the Zyre Automation Kit, my professional routine transformed into a highly efficient operation. This innovative technology allows me to seamlessly control my devices throughout the workspace, significantly enhancing convenience, optimizing time management, and reducing energy consumption costs.",
      image: "/placeholder.svg?height=100&width=100",
      icon: Building,
      category: "Commercial",
    },
    {
      name: "Mr. Rajesh",
      location: "House Owner",
      rating: 5,
      text: "I had the Zyre Home Automation Kit installed, and it was a seamless process handled by professional technicians. The pricing is reasonable, offering great value for the features provided. Using the system has drastically reduced the time spent managing home appliances, with easy control via smartphone and efficient scheduling. Overall, it is a fantastic addition, making my home smarter and my daily routine more convenient.",
      image: "/placeholder.svg?height=100&width=100",
      icon: Home,
      category: "Residential",
    },
    {
      name: "Mr. Sidharth",
      location: "Small Scale Industrialist",
      rating: 5,
      text: "We installed the Zyre Home Automation Kit in our office. The installation was quick and professional. The system is reasonably priced and offers excellent value. It has significantly improved scheduling and control over various office functions, and the notification system ensures smooth operations. Overall, it has made our workplace more efficient and streamlined. Highly recommended for any business looking to enhance productivity and management.",
      image: "/placeholder.svg?height=100&width=100",
      icon: Factory,
      category: "Industrial",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Commercial":
        return "bg-blue-200 text-blue-900"
      case "Industrial":
        return "bg-purple-200 text-purple-900"
      case "Residential":
        return "bg-green-200 text-green-900"
      default:
        return "bg-gray-200 text-gray-900"
    }
  }

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
              Customer Feedback
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white transition-colors duration-500 hover:text-teal-300">
              What Our Customers Say
            </h1>
            <p className="max-w-[900px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
              Don't just take our word for it. Here's what our satisfied customers from homes, shops, and industries
              have to say about their smart automation experience.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">4.9/5</span>
              <span className="text-slate-200">from 500+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 transition-colors duration-500 hover:text-teal-800">
              Customer Stories
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 md:text-lg transition-opacity duration-500">
              Real experiences from our customers across different sectors
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                        <testimonial.icon className="h-4 w-4 text-teal-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle className="text-lg transition-colors duration-300 group-hover:text-teal-700">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription className="transition-colors duration-300 group-hover:text-slate-800">
                            {testimonial.location}
                          </CardDescription>
                        </div>
                        <Badge className={getCategoryColor(testimonial.category)}>{testimonial.category}</Badge>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-8 w-8 text-green-700 mb-3 opacity-50 transition-opacity duration-300 group-hover:opacity-70" />
                  <p className="text-gray-700 italic leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Categories */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-100 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 transition-colors duration-500 hover:text-teal-800">
              Trusted Across All Sectors
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 md:text-lg transition-opacity duration-500">
              From homes to industries, Zyre serves customers across various sectors
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-green-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-green-300 group-hover:scale-110">
                  <Home className="h-8 w-8 text-green-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-green-700">
                  Residential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Smart homes with convenient automation for daily living
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-blue-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-blue-300 group-hover:scale-110">
                  <Building className="h-8 w-8 text-blue-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  Commercial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Efficient workspace management for shops and offices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-purple-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-purple-300 group-hover:scale-110">
                  <Factory className="h-8 w-8 text-purple-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-purple-700">
                  Industrial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Streamlined operations for manufacturing and production
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tighter transition-colors duration-500 hover:text-teal-800">
                Share Your Experience
              </h2>
              <p className="text-gray-700 md:text-lg transition-opacity duration-500">
                We'd love to hear about your smart home journey. Your feedback helps us improve our services.
              </p>
            </div>
            <Card className="transition-all duration-500 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Leave Your Feedback</CardTitle>
                <CardDescription>Tell us about your experience with our products and services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location/Business Type</Label>
                  <Input
                    id="location"
                    placeholder="City, State / Business Type"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-110"
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us about your experience with our smart home solutions..."
                    className="min-h-[120px] transition-all duration-300 focus:scale-105"
                  />
                </div>
                <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-100 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div className="space-y-2 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-700">500+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
            <div className="space-y-2 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-700">4.9/5</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
            <div className="space-y-2 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-700">99%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div className="space-y-2 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-700">24/7</div>
              <div className="text-gray-700">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
