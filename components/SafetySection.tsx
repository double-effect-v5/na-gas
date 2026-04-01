"use client"

import { motion } from "framer-motion"
import { Zap, Wrench, Thermometer, AlertTriangle, Wind, Info } from "lucide-react"
import { useLang } from "@/lib/i18n"

const safetyLevels = [
  {
    icon: Zap,
    bgBg: "Електрическа Защита",
    bgEn: "Electrical Protection",
    descBg: "При проблем електрическият клапан спира подаването на газ от бутилката",
    descEn: "In case of a problem, the electric valve stops gas supply from the cylinder",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Wrench,
    bgBg: "Механична Защита",
    bgEn: "Mechanical Protection",
    descBg: "Спирателен кран за ръчно прекъсване на подаването на газ",
    descEn: "Shut-off valve for manual interruption of gas supply",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Thermometer,
    bgBg: "Термо-механична Защита",
    bgEn: "Thermo-mechanical Protection",
    descBg: "Автоматичен механичен клапан изпуска газ при висока температура около бутилката",
    descEn: "Automatic mechanical valve releases gas at high temperature around the cylinder",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: AlertTriangle,
    bgBg: "Защита от Свръхналягане",
    bgEn: "Overpressure Protection",
    descBg: "Механичен клапан с висок дебит предпазва от налягане над ~20 bar",
    descEn: "High-flow mechanical valve protects against pressure exceeding ~20 bar",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Wind,
    bgBg: "Скоростен Клапан",
    bgEn: "Flow Fuse",
    descBg: "Автоматичен клапан прекъсва газа при скъсване на газова тръба",
    descEn: "Automatic valve cuts gas supply if a gas pipe ruptures",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function SafetySection() {
  const { t, lang } = useLang()

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-4">
            {lang === "bg" ? "Безопасност" : "Safety"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.safetyTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.safetySubtitle}</p>
        </motion.div>

        {/* Numbered levels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {safetyLevels.map(({ icon: Icon, bgBg, bgEn, descBg, descEn, color, bgColor, borderColor }, i) => (
            <motion.div
              key={bgBg}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className={`relative rounded-2xl p-5 border ${borderColor} ${bgColor} hover:-translate-y-1 transition-transform`}
            >
              <span className="absolute top-3 right-3 text-xs font-bold text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={`w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-semibold text-sm mb-2 leading-snug">{lang === "bg" ? bgBg : bgEn}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{lang === "bg" ? descBg : descEn}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
        >
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            {lang === "bg"
              ? "Възвратен клапан предпазва от изтичане на газ обратно през зарядното устройство."
              : "A non-return valve prevents gas from leaking back through the filling device."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
