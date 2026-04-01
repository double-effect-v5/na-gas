"use client"

import { LangProvider } from "@/lib/i18n"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import SavingsCalculator from "@/components/SavingsCalculator"
import InjectorsSection from "@/components/InjectorsSection"
import DirectInjectionSection from "@/components/DirectInjectionSection"
import IndirectInjectionSection from "@/components/IndirectInjectionSection"
import SafetySection from "@/components/SafetySection"
import ServicePricesSection from "@/components/ServicePricesSection"
import LegalizationSection from "@/components/LegalizationSection"
import GallerySection from "@/components/GallerySection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white text-foreground">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <SavingsCalculator />
          <InjectorsSection />
          <DirectInjectionSection />
          <IndirectInjectionSection />
          <SafetySection />
          <ServicePricesSection />
          <LegalizationSection />
          <GallerySection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
