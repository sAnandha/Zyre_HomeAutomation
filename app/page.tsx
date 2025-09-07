"use client"

import type React from "react"
import { Phone } from "lucide-react" // Import Phone icon

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Wifi,
  Home,
  Users,
  DollarSign,
  Lightbulb,
  Thermometer,
  Volume2,
  Clock,
  Smartphone,
  Zap,
  Download,
  Play,
  Pause,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleDownloadBrochure = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "https://wpf5rfpl9evdykfe.public.blob.vercel-storage.com/brochure-7h0AtsCGYWMtqLj6xnSVzMuFLUMpBE.pdf" // Your actual brochure file
    link.download = "Zyre-Home-Automation-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Real Background Image */}
      <section className="relative py-20 lg:py-32 overflow-hidden transition-all duration-700">
        {/* Real Background Image */}
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
          <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
            {/* Animated Company Name */}
            <div className="space-y-4">
              <div className="company-name-animation">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                  <span className="letter-animation" style={{ "--delay": "0s" } as React.CSSProperties}>
                    Z
                  </span>
                  <span className="letter-animation" style={{ "--delay": "0.1s" } as React.CSSProperties}>
                    Y
                  </span>
                  <span className="letter-animation" style={{ "--delay": "0.2s" } as React.CSSProperties}>
                    R
                  </span>
                  <span className="letter-animation" style={{ "--delay": "0.3s" } as React.CSSProperties}>
                    E
                  </span>
                </h1>
              </div>

              <div className="subtitle-animation">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-300">Home Automation</h2>
              </div>

              {/* Animated Motto */}
              <div className="motto-animation">
                <div className="text-xl md:text-2xl font-medium text-amber-300 italic">"Be Smart, Live Smart"</div>
              </div>

              {/* Description */}
              <div className="description-animation max-w-4xl mx-auto">
                <p className="text-slate-200 md:text-xl transition-opacity duration-500 leading-relaxed">
                  Just Connect And Change Your Switches To Smart At An Affordable Price. Compatible with a wide range of
                  products and appliances with Voice Assistant. Access the appliances from wherever you are with your
                  mobile.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call: 8525928165
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadBrochure}
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section - Multiple Options */}
      <section className="py-12 md:py-24 lg:py-32 bg-white transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center animate-fade-in">
            <div className="space-y-2">
              <Badge
                variant="secondary"
                className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
              >
                ZYRE SMART KIT IN ACTION
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 transition-colors duration-500 hover:text-teal-700">
                See How It Works
              </h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed transition-opacity duration-500">
                Watch our smart home automation in action. See how easy it is to control your entire home with just your
                smartphone.
              </p>
            </div>

            {/* Option 1: Local Video File */}
            <div className="relative w-[8cm] h-[13cm] group">
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-slate-100 transition-all duration-500 group-hover:shadow-3xl">
                <video
                  ref={videoRef}
                  className="w-full h-auto object-contain"
                  poster="/images/demo-video-thumbnail.jpg"
                  controls={false}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                >
              <source
                src="https://c69erxy2iwhkmupi.public.blob.vercel-storage.com/zyre_demo-0MIoxOQIkllICy997aStEwcqz0cORm.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
              </video>


                {/* Custom Play/Pause Overlay */}
                <div
                  className="absolute inset-0 bg-slate-900/30 flex items-center justify-center transition-all duration-500 group-hover:bg-slate-900/40 cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 rounded-full h-16 w-16 p-0 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    {isVideoPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" />
                    )}
                  </Button>
                </div>

                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:bg-black/80">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your existing sections... */}
      {/* Solutions Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 transition-colors duration-500 hover:text-teal-700">
                Complete Smart Home Solutions
              </h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
                From lighting control to HVAC management, Zyre offers comprehensive automation for every aspect of your
                home.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-all duration-500 group-hover:scale-110">
                  <Lightbulb className="h-8 w-8 text-teal-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-teal-600">
                  Lighting Control
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Centralized management of lights with smartphone control, voice commands, and automated scheduling
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-all duration-500 group-hover:scale-110">
                  <Thermometer className="h-8 w-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-amber-500">
                  HVAC Control
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Smart climate management with energy-efficient scheduling and real-time monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-all duration-500 group-hover:scale-110">
                  <Volume2 className="h-8 w-8 text-indigo-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                  AV Control
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Unified entertainment system control with voice commands and custom scenes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-all duration-500 group-hover:scale-110">
                  <Clock className="h-8 w-8 text-purple-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-purple-600">
                  Scheduling
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Automated device operation based on time, preferences, and energy efficiency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-all duration-500 group-hover:scale-110">
                  <Smartphone className="h-8 w-8 text-green-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-green-600">
                  Mobile Connectivity
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Remote control and monitoring from anywhere with real-time alerts and notifications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-all duration-500 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-orange-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                  Speed Control
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Precise management of lighting intensity and fan speeds for optimal comfort
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/solutions">
                Explore All Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-white transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 transition-colors duration-500 hover:text-teal-700">
                Why Choose Zyre Home Automation?
              </h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
                Easy compatibility, affordable pricing, and smart solutions for luxurious living.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white group">
              <CardHeader className="text-center">
                <DollarSign className="mx-auto h-12 w-12 text-teal-600 transition-transform duration-500 group-hover:scale-110" />
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-teal-600">
                  ₹ Affordable Solutions
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Just connect and change your switches to smart at an affordable price designed for every Indian home
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white group">
              <CardHeader className="text-center">
                <Wifi className="mx-auto h-12 w-12 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-amber-500">
                  Easy Compatibility
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Compatible with a wide range of products and appliances with Voice Assistant support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white group">
              <CardHeader className="text-center">
                <Users className="mx-auto h-12 w-12 text-indigo-600 transition-transform duration-500 group-hover:scale-110" />
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                  Easy Installation
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Simple setup with professional support and customizable configurations for any home layout
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-50 transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 transition-colors duration-500 hover:text-teal-700">
                Our Product Range
              </h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
                2M, 4M, and 8M Switch modules with WiFi connectivity and voice assistant support
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="border border-slate-200 hover:border-teal-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <Home className="h-8 w-8 text-teal-600 transition-transform duration-500 group-hover:scale-110" />
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-teal-600">
                  2M Switch Module
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Perfect for small rooms and apartments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-teal-600 rounded-full" />2 Switch connections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-teal-600 rounded-full" />
                    WiFi connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-teal-600 rounded-full" />
                    Google & Alexa support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-teal-600 rounded-full" />1 Year warranty
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 hover:border-teal-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <Shield className="h-8 w-8 text-amber-600 transition-transform duration-500 group-hover:scale-110" />
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                  4M Switch Module
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Most popular for medium-sized homes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-amber-600 rounded-full" />4 Switch connections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-amber-600 rounded-full" />
                    WiFi connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-amber-600 rounded-full" />
                    Google & Alexa support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-amber-600 rounded-full" />1 Year warranty
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 hover:border-teal-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <Zap className="h-8 w-8 text-indigo-600 transition-transform duration-500 group-hover:scale-110" />
                <CardTitle className="text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                  8M Switch Module
                </CardTitle>
                <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  Premium solution for large homes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full" />8 Switch connections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full" />
                    WiFi connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full" />
                    Google & Alexa support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full" />1 Year warranty
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-500 hover:scale-105">
                Ready to Be Smart, Live Smart?
              </h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-opacity duration-500">
                Contact us today for a free consultation and discover how Zyre can transform your home with affordable
                smart automation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call: 8525928165
              </Button>
              <Button
                size="lg"
                variant="outline"
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
