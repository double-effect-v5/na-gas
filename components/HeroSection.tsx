"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone, ShieldCheck, Star, Wrench, CreditCard } from "lucide-react"
import { useLang } from "@/lib/i18n"

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  // Always start at 0 — same on server and client, no hydration mismatch
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.ceil(to / 60)
          const timer = setInterval(() => {
            current += step
            if (current >= to) { setCount(to); clearInterval(timer) }
            else setCount(current)
          }, 20)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return (
    <span ref={ref} suppressHydrationWarning>
      {count}{suffix}
    </span>
  )
}

const badges = [
  { icon: ShieldCheck, key: "badge1" as const },
  { icon: Star, key: "badge2" as const },
  { icon: Wrench, key: "badge3" as const },
  { icon: CreditCard, key: "badge4" as const },
]

const stats = [
  { value: 500, suffix: "+", labelKey: "stat1" as const },
  { value: 10, suffix: "+", labelKey: "stat2" as const },
  { value: 5, suffix: " yr", labelKey: "stat3" as const },
  { value: 4, suffix: "", labelKey: "stat4" as const },
]

export default function HeroSection() {
  const { t } = useLang()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      {/* Dark gradient left-to-right for white text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Subtle brand colour accents */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map(({ icon: Icon, key }) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/30 text-white backdrop-blur-sm"
                suppressHydrationWarning
              >
                <Icon className="w-3 h-3" />
                {t.hero[key]}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6 text-white drop-shadow-md"
            suppressHydrationWarning
          >
            {t.hero.title}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
            suppressHydrationWarning
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#prices"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/50 bg-white/15 text-white font-semibold hover:bg-white/25 hover:border-white transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map(({ value, suffix, labelKey }) => (
              <div
                key={labelKey}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-white" suppressHydrationWarning>
                  <Counter to={value} suffix={suffix} />
                </p>
                <p className="text-xs text-white/70 mt-1 leading-snug" suppressHydrationWarning>
                  {t.hero[labelKey]}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
