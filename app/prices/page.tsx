"use client"

import { LangProvider } from "@/lib/i18n"
import Navbar from "@/components/Navbar"
import PricingSection from "@/components/PricingSection"
import ServicePricesSection from "@/components/ServicePricesSection"
import Footer from "@/components/Footer"

export default function PricesPage() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white text-foreground">
        <Navbar />
        <main className="pt-16">
          <PricingSection />
          <ServicePricesSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
