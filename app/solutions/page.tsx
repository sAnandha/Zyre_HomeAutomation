"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Thermometer, Volume2, Clock, Smartphone, Zap, Download, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function SolutionsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownloadBrochure = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "/placeholder.pdf" // This would be your actual PDF file
    link.download = "Zyre-Solutions-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const solutions = [
    {
      icon: Lightbulb,
      title: "Lighting Control",
      description: "Centralized management of lights throughout your home with smart automation.",
      features: [
        "Remote smartphone & voice control",
        "Adjustable brightness & colors",
        "Schedule-based automation",
        "Occupancy sensor integration",
        "Custom scene creation",
        "Energy consumption reduction",
        "Movie & goodnight modes",
        "Personalized ambiance settings",
      ],
      image: "/images/solutions/lighting-control.png",
      color: "teal",
    },
    {
      icon: Thermometer,
      title: "HVAC Control",
      description: "Smart climate management for optimal comfort and energy efficiency.",
      features: [
        "Remote temperature control",
        "Humidity & air quality management",
        "Smart thermostat learning",
        "Energy-efficient scheduling",
        "Occupancy-based operation",
        "Real-time monitoring",
        "Maintenance alerts",
        "Eco-friendly living",
      ],
      image: "/images/solutions/hvac-control.png",
      color: "amber",
    },
    {
      icon: Volume2,
      title: "AV Control",
      description: "Streamlined entertainment device management from a single interface.",
      features: [
        "Single remote control",
        "Voice assistant integration",
        "Multi-device management",
        "Custom scene automation",
        "Movie night setup",
        "Volume & channel control",
        "Smart home theater",
        "Enhanced entertainment",
      ],
      image: "/images/solutions/av-control.png",
      color: "indigo",
    },
    {
      icon: Clock,
      title: "Scheduling Connection",
      description: "Automate device operations with intelligent time-based controls.",
      features: [
        "Automated device control",
        "Time-based scheduling",
        "Sunset/sunrise automation",
        "Night temperature control",
        "Energy waste reduction",
        "Security simulation",
        "Convenience enhancement",
        "Smart home routines",
      ],
      image: "/images/solutions/scheduling.jpg",
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Mobile Connectivity",
      description: "Control and monitor your smart home devices from anywhere worldwide.",
      features: [
        "Global remote access",
        "Real-time notifications",
        "Device status monitoring",
        "Security camera control",
        "Door lock management",
        "Schedule creation",
        "Scene activation",
        "Emergency response",
      ],
      image: "/images/solutions/mobile-connectivity.jpg",
      color: "green",
    },
    {
      icon: Zap,
      title: "Speed Control",
      description: "Precise management of lighting intensity and fan speeds for optimal comfort.",
      features: [
        "Lighting intensity control",
        "Fan speed management",
        "Voice command operation",
        "Automation scheduling",
        "Scene integration",
        "Custom preferences",
        "Energy optimization",
        "Comfort enhancement",
      ],
      image: "/images/solutions/speed-control.webp",
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: "bg-teal-200 text-teal-700 hover:bg-teal-300",
      amber: "bg-amber-200 text-amber-700 hover:bg-amber-300",
      indigo: "bg-indigo-200 text-indigo-700 hover:bg-indigo-300",
      green: "bg-green-200 text-green-700 hover:bg-green-300",
      orange: "bg-orange-200 text-orange-700 hover:bg-orange-300",
      purple: "bg-purple-200 text-purple-700 hover:bg-purple-300",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.teal
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
              Smart Solutions
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white transition-all duration-500 hover:text-teal-300">
              Solutions
            </h1>
            <p className="max-w-[900px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
              Comprehensive automation solutions designed to transform your living and working spaces with intelligent
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group"
              >
                <div
                  className={`grid gap-8 ${
                    index % 2 === 0 ? "lg:grid-cols-[400px_1fr]" : "lg:grid-cols-[1fr_400px]"
                  } items-start p-6`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-xl ${
                      index % 2 === 0 ? "order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent transition-opacity duration-500 group-hover:from-slate-900/30" />

                      {/* Overlay Icon */}
                      <div className="absolute top-3 right-3">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 ${getColorClasses(solution.color)}`}
                        >
                          <solution.icon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 0 ? "order-2" : "order-1 lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${getColorClasses(solution.color)}`}
                      >
                        <solution.icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                          {solution.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-700 leading-relaxed transition-colors duration-300 group-hover:text-slate-800">
                      {solution.description}
                    </p>

                    {/* Features List */}
                    <div className="grid gap-3 md:grid-cols-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-slate-700 transition-all duration-300 hover:text-teal-700 group/item"
                        >
                          <CheckCircle className="h-4 w-4 text-teal-700 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-100 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 transition-colors duration-500 hover:text-teal-800">
              Why Choose Zyre Solutions?
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 md:text-lg transition-opacity duration-500">
              Our comprehensive automation solutions offer unmatched benefits for modern living
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-teal-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-teal-300 group-hover:scale-110">
                  <Lightbulb className="h-8 w-8 text-teal-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                  Energy Efficient
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Reduce energy consumption with smart scheduling and automated controls
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-amber-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-amber-300 group-hover:scale-110">
                  <Smartphone className="h-8 w-8 text-amber-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                  Remote Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Control your home from anywhere with our mobile connectivity solutions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-indigo-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-300 group-hover:scale-110">
                  <Clock className="h-8 w-8 text-indigo-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-indigo-700">
                  Automated Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Set up intelligent schedules for all your devices and systems
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-green-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-green-300 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-green-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-green-700">
                  Easy Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Seamlessly integrate with existing devices and smart home ecosystems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl transition-all duration-500 hover:scale-105">
              Ready to Transform Your Space?
            </h2>
            <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed transition-opacity duration-500">
              Get started with Zyre's comprehensive automation solutions. Our experts will help you choose the perfect
              combination for your specific needs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadBrochure}
                className="border-white text-slate-900 bg-white/90 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
