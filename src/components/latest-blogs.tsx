'use client'

import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Optimizing Inventory Management",
    image: "https://cdn.usegalileo.ai/sdxl10/a1b6ed4e-d3f8-4259-8774-8496a13923bc.png",
    link: "/blog/optimizing-inventory-management"
  },
  {
    title: "The Future of Retail: AI Insights",
    image: "https://cdn.usegalileo.ai/sdxl10/8638c3f9-85cb-4432-9b36-80af109f10b0.png",
    link: "/blog/future-of-retail-ai-insights"
  },
  {
    title: "Sustainable Supply Chains",
    image: "https://cdn.usegalileo.ai/sdxl10/ea740823-983e-48b4-aef9-27d60f86e12e.png",
    link: "/blog/sustainable-supply-chains"
  }
]

export function LatestBlogs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-[#0e161b] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blogs
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="w-full border-[#d1dde6] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={post.link}>
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#0e161b] hover:text-[#1d8cd7] transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

