'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const caseStudies = [
  {
    title: "Retailer A: 20% increase in efficiency",
    description: "Download the detailed report to learn how Retailer A achieved a 20% increase in efficiency with Petrecs' demand forecasting solution.",
    image: "https://cdn.usegalileo.ai/sdxl10/d84b8864-64bb-456b-bbea-1e0a377f91e9.png"
  },
  {
    title: "Retailer B: $500,000 capital savings",
    description: "Download the detailed report to learn how Retailer B saved $500,000 in capital with Petrecs' demand forecasting solution.",
    image: "https://cdn.usegalileo.ai/sdxl10/d8b8aa77-99b4-494a-bce3-b2d0860c95ee.png"
  },
  {
    title: "Retailer C: 15% reduction in waste",
    description: "Download the detailed report to learn how Retailer C reduced waste by 15% with Petrecs' demand forecasting solution.",
    image: "https://cdn.usegalileo.ai/sdxl10/7df2a5cf-5b35-4846-801c-d3befa12471c.png"
  }
]

export function CaseStudies() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-[#0e161b] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.h2>
        <div className="relative">
          <div 
            ref={carouselRef} 
            className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-[#d1dde6] hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 h-full">
                    <div className="relative aspect-video">
                      <Image
                        src={study.image}
                        alt={study.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between h-[calc(100%-33.33%)]">
                      <div>
                        <h3 className="text-xl font-semibold text-[#0e161b] mb-2">{study.title}</h3>
                        <p className="text-sm text-[#507a95] mb-4">{study.description}</p>
                      </div>
                      <Button variant="outline" className="w-full mt-auto">
                        Download Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}