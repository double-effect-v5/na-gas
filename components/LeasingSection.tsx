"use client"

import { motion } from "framer-motion"
import { Percent, Package, Clock, CreditCard, ArrowRight } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const cards = [
  { icon: Percent, key: "card1" as const, descKey: "card1d" as const, accent: true },
  { icon: Package, key: "card2" as const, descKey: "card2d" as const, accent: false },
  { icon: Clock, key: "card3" as const, descKey: "card3d" as const, accent: false },
  { icon: CreditCard, key: "card4" as const, descKey: "card4d" as const, accent: false },
]

export default function LeasingSection() {
  const { t, lang } = useLang()

  return (
    <section id="leasing" className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&auto=format&fit=crop"
                alt="Leasing and financing options"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Partners */}
            <div className="mt-6 flex gap-4">
              <div className="flex-1 glass-card rounded-xl p-4 flex items-center justify-center bg-white">
                <img
                  src="https://na-gas.bg/wp-content/uploads/2020/06/UC-Cons-Fin-3D-1024x350-1-300x103.jpg"
                  alt="UniCredit Consumer Financing"
                  className="max-h-14 w-auto object-contain"
                />
              </div>
              <div className="flex-1 glass-card rounded-xl p-4 flex items-center justify-center bg-white">
                <img
                  src="https://na-gas.bg/wp-content/uploads/2020/06/bnp-paribas.jpg"
                  alt="BNP Paribas Personal Finance"
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mb-8"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-4">
                {lang === "bg" ? "Разсрочено Плащане" : "Installment Payment"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.leasing.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.leasing.intro}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {cards.map(({ icon: Icon, key, descKey, accent }, i) => (
                <motion.div
                  key={key}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className={`rounded-xl p-4 border ${
                    accent
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-card/50"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-3 ${accent ? "text-accent" : "text-primary"}`} />
                  <p className="font-semibold text-sm mb-1">{t.leasing[key]}</p>
                  <p className="text-xs text-muted-foreground">{t.leasing[descKey]}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={5}
            >
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{t.leasing.cta}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {t.leasing.ctaBtn}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
