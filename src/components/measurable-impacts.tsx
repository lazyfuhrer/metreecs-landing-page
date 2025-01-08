'use client'

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"

const impacts = [
  {
    title: "Efficiency improvements",
    value: "20% increase in efficiency",
    change: "+20%",
    changeColor: "text-[#078838]"
  },
  {
    title: "Waste reduction",
    value: "15% reduction in waste",
    change: "-15%",
    changeColor: "text-[#e73508]"
  },
  {
    title: "Capital savings",
    value: "$500,000 capital savings",
    change: "-$500,000",
    changeColor: "text-[#e73508]"
  },
  {
    title: "Client testimonials",
    value: "Our clients love us!",
    change: null
  }
]

export function MeasurableImpacts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-[#0e161b] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Measurable impacts
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-[#d1dde6] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#0e161b] mb-2">{impact.title}</h3>
                  <p className="text-2xl font-bold text-[#0e161b] mb-2">{impact.value}</p>
                  {impact.change && (
                    <p className={`text-lg font-medium ${impact.changeColor}`}>
                      {impact.change}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

