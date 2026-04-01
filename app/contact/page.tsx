"use client"

import { LangProvider } from "@/lib/i18n"
import Navbar from "@/components/Navbar"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white text-foreground">
        <Navbar />
        <main className="pt-16">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
