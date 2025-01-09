'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from './scroll-animation'

export function UnlockPower() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 opacity-50" />
      </motion.div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0e161b] mb-6">
            Unlock the power of AI for your retail business
          </h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <p className="text-xl text-[#507a95] mb-10">
            Get started with Metreecs today or request a demo to learn more about our demand forecasting capabilities.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#1d8cd7] hover:bg-[#1a7ec1] text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Get Started
            </Button>
            <Button variant="outline" className="bg-white text-[#1d8cd7] hover:bg-[#e8eef3] border-[#1d8cd7] font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Request a demo
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}