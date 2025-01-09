'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const caseStudies = [
  {
    title: 'Retailer A: 20% increase in efficiency',
    description: 'Learn how Retailer A achieved a 20% increase in efficiency with Petrecs\' demand forecasting solution.',
    image: 'https://cdn.usegalileo.ai/sdxl10/d84b8864-64bb-456b-bbea-1e0a377f91e9.png',
  },
  {
    title: 'Retailer B: $500,000 capital savings',
    description: 'Discover how Retailer B saved $500,000 in capital with Petrecs\' demand forecasting solution.',
    image: 'https://cdn.usegalileo.ai/sdxl10/d8b8aa77-99b4-494a-bce3-b2d0860c95ee.png',
  },
  {
    title: 'Retailer C: 15% reduction in waste',
    description: 'Find out how Retailer C reduced waste by 15% with Petrecs\' demand forecasting solution.',
    image: 'https://cdn.usegalileo.ai/sdxl10/7df2a5cf-5b35-4846-801c-d3befa12471c.png',
  },
];

export function CaseStudies() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-8 text-center">
            Case Studies
          </h2>
        </ScrollAnimation>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full border-[#d1dde6] hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 h-full">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between h-[calc(100%-56.25%)]">
                      <div>
                        <h3 className="text-xl font-semibold text-[#1a365d] mb-2">{study.title}</h3>
                        <p className="text-sm text-[#507a95] mb-4">{study.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-auto bg-transparent text-[#2563eb] hover:bg-[#2563eb]/10 border-[#2563eb]"
                      >
                        Read Full Case Study
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md hidden md:flex"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md hidden md:flex"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}