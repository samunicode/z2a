import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Courses from "@/components/courses"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import StarField from "@/components/star-field"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Courses />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

