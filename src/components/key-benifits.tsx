'use client'

import Image from 'next/image'
import { ScrollAnimation } from './scroll-animation'

const benefits = [
  {
    title: "Prevent overstock",
    description: "Reduce inventory holding costs and prevent markdowns",
    image: "https://cdn.usegalileo.ai/sdxl10/ff3ae305-3711-4cae-b6af-5df1433d2a95.png"
  },
  {
    title: "Prevent out-of-stock",
    description: "Maximize sales by ensuring products are in stock",
    image: "https://cdn.usegalileo.ai/sdxl10/70776743-fbd4-4c24-9ba4-688b400a3aa2.png"
  },
  {
    title: "Reduce waste",
    description: "Minimize the need to dispose of unsold items",
    image: "https://cdn.usegalileo.ai/sdxl10/57f36aa9-e5af-4ad7-ab8e-6cf3084aafdf.png"
  },
  {
    title: "Free up capital",
    description: "Optimize working capital and invest in growth initiatives",
    image: "https://cdn.usegalileo.ai/sdxl10/a21b694a-2d41-4047-8efa-5e69ddcd006f.png"
  }
]

export function KeyBenefits() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0e161b] mb-4">Key benefits</h2>
            <p className="text-lg text-[#507a95] max-w-3xl mx-auto">
              Prevent overstock and out-of-stock situations, eliminate waste, and free up capital with Metreecs AI-powered demand forecasting.
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index}>
              <div className="flex flex-col gap-4 bg-[#f8fafb] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0e161b] mb-2">{benefit.title}</h3>
                  <p className="text-[#507a95]">{benefit.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

