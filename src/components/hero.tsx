'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Navbar } from './navbar'
import { ArrowRight, BarChart2, TrendingUp, ShoppingCart } from 'lucide-react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1a365d] mb-4">
                AI-Powered Demand Forecasting for Retailers
              </h1>
              <p className="text-lg sm:text-xl text-[#2563eb] mb-6">
                Prevent overstock and out-of-stock situations, eliminate waste, and free up capital with Petrecs cutting-edge AI technology.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-6 rounded-xl text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent text-[#2563eb] hover:bg-[#2563eb]/10 border-[#2563eb] font-bold py-3 px-6 rounded-xl text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Request a demo
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <BarChart2 className="text-[#2563eb] mr-2" />
                  <span className="text-[#1a365d] font-semibold">99% Accuracy</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="text-[#2563eb] mr-2" />
                  <span className="text-[#1a365d] font-semibold">20% Revenue Increase</span>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="text-[#2563eb] mr-2" />
                  <span className="text-[#1a365d] font-semibold">30% Less Overstock</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://cdn.usegalileo.ai/sdxl10/f07acbcc-941f-4d28-adef-22e9f5e9cf09.png"
                  alt="Demand Forecasting Illustration"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-xl">
                  <h3 className="text-[#1a365d] font-bold mb-2">Real-time Insights</h3>
                  <p className="text-[#2563eb] text-sm">Our AI analyzes market trends, historical data, and external factors to provide accurate demand forecasts.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

