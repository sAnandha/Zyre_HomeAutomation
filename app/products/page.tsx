"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, Wifi, Mic, Shield, Zap, CheckCircle, Smartphone, Download, Phone } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function ProductsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      id: "2-switch",
      title: "2M Switch Control Module",
      description: "Perfect starter solution for small rooms and apartments",
      image: "/images/products/2switch_new.png",
      popular: false,
      specifications: {
        connections: "2 SWITCHES",
        connectivity: "WIFI",
        voiceAssistant: "GOOGLE, ALEXA",
        warranty: "1 YEAR",
        range: "ANYWHERE CONNECTIVITY",
        relayChannel: "Standard connectivity",
        controls: "Basic on/off control",
      },
      features: [
        "Smartphone app control",
        "Custom automation scenarios",
        "Voice control with Google & Alexa",
        "WiFi connectivity",
        "1-year warranty",
        "Global connectivity range",
      ],
    },
    {
      id: "4-switch",
      title: "4M Switch Control Module",
      description: "Most popular choice for medium-sized homes and apartments",
      image: "/images/products/4gray_new.png",
      popular: true,
      specifications: {
        connections: "4 SWITCHES",
        connectivity: "WIFI",
        voiceAssistant: "GOOGLE, ALEXA",
        warranty: "1 YEAR",
        range: "ANYWHERE CONNECTIVITY",
        relayChannel: "High volt connectivity",
        controls: "Advanced switching control",
      },
      features: [
        "Smartphone app control",
        "Custom automation scenarios",
        "Voice control with Google & Alexa",
        "WiFi connectivity",
        "High voltage relay channels",
        "1-year warranty",
        "Global connectivity range",
      ],
    },
    {
      id: "8-switch",
      title: "8M Switch Control Module",
      description: "Premium solution for large homes with comprehensive automation",
      image: "/images/products/8switch_new.png",
      popular: false,
      specifications: {
        connections: "8 SWITCHES",
        connectivity: "WIFI",
        voiceAssistant: "GOOGLE, ALEXA",
        warranty: "1 YEAR",
        range: "ANYWHERE CONNECTIVITY",
        relayChannel: "High volt connectivity",
        controls: "Dimming and speed control",
      },
      features: [
        "Smartphone app control",
        "Custom automation scenarios",
        "Voice control with Google & Alexa",
        "WiFi connectivity",
        "High voltage relay channels",
        "Dimming and speed control",
        "1-year warranty",
        "Global connectivity range",
      ],
    },
  ]

  const handleDownloadBrochure = () => {
    // Create a link to download the brochure
    const link = document.createElement("a")
    link.href = "/brochure.pdf" // This should be your actual PDF file in the public folder
    link.download = "Zyre-Home-Automation-Brochure.pdf"
    link.target = "_blank" // Open in new tab as fallback
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactForDetails = () => {
    // Direct call functionality
    window.location.href = "tel:8525928165"
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
              Zyre Control Modules
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white transition-all duration-500 hover:text-teal-300">
              Smart Control Modules for Every Home
            </h1>
            <p className="max-w-[900px] text-slate-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
              A control module that is operable from your smartphone. Appliances can be connected to the box via our
              mobile app which allows custom programming of automation scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 group ${
                  product.popular ? "border-teal-300 shadow-lg scale-105" : "border-slate-200"
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-teal-700 text-white animate-pulse">Most Popular</Badge>
                  </div>
                )}

                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                    priority={product.popular}
                  />
                  <div className="absolute bottom-4 left-4 text-slate-700 transform transition-transform duration-500 group-hover:translate-x-2">
                    <div className="text-2xl font-bold">{product.specifications.connections}</div>
                    <div className="text-sm opacity-90">Control Module</div>
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <div>
                    <CardTitle className="text-xl text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-slate-700 transition-all duration-300 hover:text-teal-700 hover:translate-x-1"
                        >
                          <CheckCircle className="h-4 w-4 text-teal-700 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications Preview */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 transition-all duration-300 hover:text-teal-700 hover:translate-x-1">
                        <Home className="h-4 w-4 text-teal-700 transition-transform duration-300 hover:scale-110" />
                        <span className="text-slate-700">{product.specifications.connections}</span>
                      </div>
                      <div className="flex items-center gap-2 transition-all duration-300 hover:text-teal-700 hover:translate-x-1">
                        <Wifi className="h-4 w-4 text-teal-700 transition-transform duration-300 hover:scale-110" />
                        <span className="text-slate-700">{product.specifications.connectivity}</span>
                      </div>
                      <div className="flex items-center gap-2 transition-all duration-300 hover:text-teal-700 hover:translate-x-1">
                        <Mic className="h-4 w-4 text-teal-700 transition-transform duration-300 hover:scale-110" />
                        <span className="text-slate-700">Voice Control</span>
                      </div>
                      <div className="flex items-center gap-2 transition-all duration-300 hover:text-teal-700 hover:translate-x-1">
                        <Shield className="h-4 w-4 text-teal-700 transition-transform duration-300 hover:scale-110" />
                        <span className="text-slate-700">{product.specifications.warranty}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <Button
                    className="w-full bg-teal-700 hover:bg-teal-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={handleContactForDetails}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call: 8525928165
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-100 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 transition-colors duration-500 hover:text-teal-800">
              Detailed Specifications
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 md:text-lg transition-opacity duration-500">
              Compare all features and specifications across our control module range
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg transition-shadow duration-500 hover:shadow-xl">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900 transition-colors duration-300 hover:text-teal-700">
                    Specification
                  </th>
                  <th className="text-center p-4 font-semibold text-slate-900 transition-colors duration-300 hover:text-teal-700">
                    2M Switch Module
                  </th>
                  <th className="text-center p-4 font-semibold text-slate-900 bg-teal-100 transition-all duration-300 hover:bg-teal-200">
                    4M Switch Module
                    <Badge className="ml-2 bg-teal-700 text-white text-xs animate-pulse">Popular</Badge>
                  </th>
                  <th className="text-center p-4 font-semibold text-slate-900 transition-colors duration-300 hover:text-teal-700">
                    8M Switch Module
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Connections", key: "connections" },
                  { label: "Module Connectivity", key: "connectivity" },
                  { label: "Voice Assistant", key: "voiceAssistant" },
                  { label: "Warranty", key: "warranty" },
                  { label: "Connectivity Range", key: "range" },
                  { label: "Relay Channel", key: "relayChannel" },
                  { label: "Controls", key: "controls" },
                ].map((spec, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 transition-colors duration-300 hover:bg-slate-50"
                  >
                    <td className="p-4 font-medium text-slate-900 transition-colors duration-300 hover:text-teal-700">
                      {spec.label}
                    </td>
                    {products.map((product, productIndex) => (
                      <td
                        key={productIndex}
                        className={`p-4 text-center text-slate-700 transition-all duration-300 hover:text-slate-900 ${product.popular ? "bg-teal-100 hover:bg-teal-200" : "hover:bg-slate-50"}`}
                      >
                        {product.specifications[spec.key as keyof typeof product.specifications]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 transition-colors duration-500 hover:text-teal-800">
              How It Works
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 md:text-lg transition-opacity duration-500">
              Simple setup and operation with powerful automation capabilities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-teal-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-teal-300 group-hover:scale-110">
                  <Home className="h-8 w-8 text-teal-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                  1. Connect Appliances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Connect your appliances to the control module using standard electrical connections.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-amber-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-amber-300 group-hover:scale-110">
                  <Smartphone className="h-8 w-8 text-amber-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                  2. Setup Mobile App
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Download the Zyre app and connect your control module via WiFi for instant control.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-indigo-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-300 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-indigo-700 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-indigo-700">
                  3. Create Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 transition-colors duration-300 group-hover:text-slate-800">
                  Program custom automation scenarios and enjoy voice control with Google and Alexa.
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
              Ready to Automate Your Home?
            </h2>
            <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed transition-opacity duration-500">
              Get expert guidance on choosing the right control module for your home. Free consultation and installation
              support available.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleContactForDetails}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call: 8525928165
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
