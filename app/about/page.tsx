"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Home, Zap, Heart } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function AboutPage() {
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <Badge
                variant="secondary"
                className="w-fit bg-teal-200/90 text-teal-900 hover:bg-teal-300/90 transition-colors duration-300"
              >
                About Zyre Home Automation
              </Badge>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white transition-all duration-500 hover:text-teal-300">
                About
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-teal-300">
                Pioneering Smart Living for India
              </h2>
              <p className="text-slate-200 md:text-xl">
                <span className="font-semibold text-teal-300">"Be smart, live smart"</span> - Zyre pioneers seamless
                home automation solutions, blending advanced technology with intuitive design to transform living spaces
                into smart environments.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/about.jpg"
                width={600}
                height={400}
                alt="Modern Smart Home Interior"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Our Story</h2>
              <p className="text-slate-700 md:text-lg">
                Zyre is a forward-thinking home automation company dedicated to making advanced home technology
                accessible and affordable for everyone. At Zyre, we empower homeowners to seamlessly integrate smart
                devices into their living spaces, creating a connected and efficient environment tailored to individual
                needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <Home className="h-8 w-8 text-teal-700" />
                  <CardTitle className="text-slate-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Just Connect And Change Your Switches To Smart At An Affordable Price. We focus on making smart
                    living accessible to everyone with innovative home automation solutions that are both cost-effective
                    and easy to use.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <Zap className="h-8 w-8 text-amber-600" />
                  <CardTitle className="text-slate-900">Our Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Compatible with a wide range of products and appliances with Voice Assistant. Access the appliances
                    from wherever you are with your mobile. We provide customizable options including 2M, 4M, and 8M
                    switch setups, catering to different needs and home sizes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-100 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Our Vision for India</h2>
              <p className="text-slate-700 md:text-lg">
                Guided by the motto <span className="font-semibold text-teal-700">"Be smart, live smart,"</span> Zyre is
                dedicated to creating a smarter, more connected future for India, making advanced home automation simple
                and affordable for all.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="h-16 w-16 mx-auto bg-teal-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Zap className="h-8 w-8 text-teal-700" />
                </div>
                <h3 className="font-semibold text-slate-900">Affordable</h3>
                <p className="text-sm text-slate-700">Making smart home technology accessible to every Indian family</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 w-16 mx-auto bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Zap className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Simple</h3>
                <p className="text-sm text-slate-700">Easy-to-use solutions that anyone can install and operate</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 w-16 mx-auto bg-indigo-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Home className="h-8 w-8 text-indigo-700" />
                </div>
                <h3 className="font-semibold text-slate-900">Connected</h3>
                <p className="text-sm text-slate-700">Building a network of smart homes across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-slate-700 md:text-lg">
              The principles that guide everything we do at Zyre Home Automation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-teal-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Users className="h-8 w-8 text-teal-700" />
                </div>
                <CardTitle className="text-slate-900">Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Every decision we make is centered around making our customers' lives better and smarter.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-slate-900">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We continuously innovate to bring the latest technology to Indian homes at affordable prices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-indigo-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Heart className="h-8 w-8 text-indigo-700" />
                </div>
                <CardTitle className="text-slate-900">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We never compromise on quality, ensuring every product meets the highest standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
