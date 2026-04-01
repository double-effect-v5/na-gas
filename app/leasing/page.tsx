"use client"

import { LangProvider } from "@/lib/i18n"
import Navbar from "@/components/Navbar"
import LeasingSection from "@/components/LeasingSection"
import Footer from "@/components/Footer"

export default function LeasingPage() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white text-foreground">
        <Navbar />
        <main className="pt-16">
          <LeasingSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
