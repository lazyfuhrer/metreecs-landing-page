import { Button } from "@/components/ui/button"

export function UnlockPower() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e161b] mb-4">
          Unlock the power of AI for your retail business
        </h2>
        <p className="text-lg text-[#507a95] mb-8">
          Get started with Petrecs today or request a demo to learn more about our demand forecasting capabilities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-[#1d8cd7] hover:bg-[#1a7ec1] text-white font-bold py-3 px-6 rounded-xl text-base">
            Get Started
          </Button>
          <Button variant="outline" className="bg-[#e8eef3] text-[#0e161b] hover:bg-[#d1dde6] font-bold py-3 px-6 rounded-xl text-base">
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  )
}

