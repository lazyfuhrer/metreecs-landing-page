import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MeasurableImpacts } from '@/components/measurable-impacts'
import { CaseStudies } from '@/components/case-studies'
import { LatestBlogs } from '@/components/latest-blogs'
import { UnlockPower } from '@/components/unlock-power'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { KeyBenefits } from '@/components/key-benifits'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <KeyBenefits />
        <MeasurableImpacts />
        <CaseStudies />
        <LatestBlogs />
        <UnlockPower />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}