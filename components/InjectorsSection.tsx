"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Gauge, Globe2, ArrowRight } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
}

const features = [
  { icon: Cpu, key: "feat1" as const, descKey: "feat1d" as const },
  { icon: ShieldCheck, key: "feat2" as const, descKey: "feat2d" as const },
  { icon: Gauge, key: "feat3" as const, descKey: "feat3d" as const },
  { icon: Globe2, key: "feat4" as const, descKey: "feat4d" as const },
]

export default function InjectorsSection() {
  const { t } = useLang()

  return (
    <section id="injectors" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            NA-GAS.BG
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.injectors.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.injectors.subtitle}</p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <p className="text-base text-foreground/85 leading-relaxed mb-5 font-medium">{t.injectors.intro}</p>
            <div className="pl-4 border-l-[3px] border-primary/50 bg-primary/5 rounded-r-xl py-3 pr-4">
              <p className="text-sm text-foreground/75 leading-relaxed">{t.injectors.intro2}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
              alt="LPG gas injection system components"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map(({ icon: Icon, key, descKey }, i) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 2}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t.injectors[key]}</h3>
              <p className="text-sm text-muted-foreground">{t.injectors[descKey]}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-lg font-medium max-w-lg text-balance">{t.injectors.cta}</p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            {t.injectors.ctaBtn}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
