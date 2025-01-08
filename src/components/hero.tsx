'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafb] to-[#e8eef3]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#0e161b] mb-4">
              Demand Forecasting for Retailers
            </h1>
            <p className="text-lg sm:text-xl text-[#507a95] mb-6">
              Prevent overstock and out-of-stock situations, eliminate waste, and free up capital with Petrecs AI-powered demand forecasting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#1d8cd7] hover:bg-[#1a7ec1] text-white font-bold py-3 px-6 rounded-xl text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="bg-white text-[#1d8cd7] hover:bg-[#e8eef3] border-[#1d8cd7] font-bold py-3 px-6 rounded-xl text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Request a demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}