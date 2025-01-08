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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-[#0e161b] mb-6">Measurable impacts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-[#d1dde6]">
              <CardContent className="p-6">
                <h3 className="text-base font-medium text-[#0e161b] mb-2">{impact.title}</h3>
                <p className="text-2xl font-bold text-[#0e161b] mb-2">{impact.value}</p>
                {impact.change && (
                  <p className={`text-base font-medium ${impact.changeColor}`}>
                    {impact.change}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

