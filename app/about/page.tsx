"use client"

import { LangProvider } from "@/lib/i18n"
import Navbar from "@/components/Navbar"
import WhyUsSection from "@/components/WhyUsSection"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white text-foreground">
        <Navbar />
        <main className="pt-16">
          <WhyUsSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
