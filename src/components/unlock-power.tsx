'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"

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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafb] to-[#e8eef3] opacity-50" />
      </motion.div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-[#0e161b] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock the power of AI for your retail business
        </motion.h2>
        <motion.p 
          className="text-xl text-[#507a95] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get started with Petrecs today or request a demo to learn more about our demand forecasting capabilities.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-[#1d8cd7] hover:bg-[#1a7ec1] text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Get Started
          </Button>
          <Button variant="outline" className="bg-white text-[#1d8cd7] hover:bg-[#e8eef3] border-[#1d8cd7] font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Request a demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

