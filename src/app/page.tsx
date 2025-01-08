import { Navbar } from "@/components/navbar";
import { CaseStudies } from "@/components/case-studies";
import { Hero } from "@/components/hero";
import { KeyBenefits } from "@/components/key-benifits";
import { LatestBlogs } from "@/components/latest-blogs";
import { MeasurableImpacts } from "@/components/measurable-impacts";
import { UnlockPower } from "@/components/unlock-power";
import { FAQ } from "@/components/ui/faq";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-100">
      <Navbar />
      <Hero/>
      <KeyBenefits/>
      <MeasurableImpacts/>
      <CaseStudies/>
      <LatestBlogs/>
      <UnlockPower/>
      <FAQ/>
      <Footer/>
    </div>
  )
}