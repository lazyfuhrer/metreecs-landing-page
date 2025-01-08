import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-[#0e161b] mb-6">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="w-full border-[#d1dde6]">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={study.image}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-[#0e161b] mb-2">{study.title}</h3>
                  <p className="text-sm text-[#507a95] mb-4">{study.description}</p>
                  <Button variant="outline" className="w-full">
                    Download Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}