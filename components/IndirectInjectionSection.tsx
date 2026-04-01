"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const oldDisadvantages = [
  "По-висок разход на гориво",
  "Загуба на мощност",
  "Нестабилна работа на празен ход",
  "По-често превключване на бензин",
  "Риск от обратно връщане на пламък (backfire)",
]

const newAdvantages = [
  "Електронно управлявана система",
  "Индивидуални газови дюзи за всеки цилиндър",
  "Прецизно дозиране",
  "По-нисък разход",
  "По-гладка работа на двигателя",
  "Запазена динамика",
  "Автоматична адаптация",
  "Връзка с OBD",
  "По-дълъг живот на двигателя",
  "Лесна поддръжка и диагностика",
]

const savingsData = [
  { km: "1 000 км", petrol: "~280 лв.", lpg: "~130 лв.", saving: "~150 лв." },
  { km: "2 000 км", petrol: "~560 лв.", lpg: "~260 лв.", saving: "~300 лв." },
  { km: "3 000 км", petrol: "~840 лв.", lpg: "~390 лв.", saving: "~450 лв." },
]

const comparisonRows = [
  {
    aspect: "Точност на впръскване",
    old: "Механична, груба",
    modern: "Електронно контролирана, прецизна",
  },
  {
    aspect: "Разход на газ",
    old: "Висок",
    modern: "Оптимизиран, до 30–50% по-нисък",
  },
  {
    aspect: "Мощност на двигателя",
    old: "Намалява",
    modern: "Запазва се напълно",
  },
  {
    aspect: "Рискове",
    old: "Обратно връщане на пламък, повреди",
    modern: "Безопасна и стабилна работа",
  },
  {
    aspect: "Настройка и поддръжка",
    old: "Ръчна, трудна",
    modern: "Софтуерна, бърза и точна",
  },
]

export default function IndirectInjectionSection() {
  const { t, lang } = useLang()

  const monthlyLabel = lang === "bg" ? "Пробег (месечно)" : "Monthly mileage"
  const petrolLabel = lang === "bg" ? "Разход бензин (2.80 лв./л)" : "Petrol cost (2.80 BGN/L)"
  const lpgLabel = lang === "bg" ? "Разход LPG (1.30 лв./л)" : "LPG cost (1.30 BGN/L)"
  const savingLabel = lang === "bg" ? "Месечна Икономия" : "Monthly Savings"

  return (
    <section id="indirect" className="py-24 bg-background">
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
            {lang === "bg" ? "Индиректно Впръскване" : "Indirect Injection"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.indirect.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.indirect.intro}</p>
        </motion.div>

        {/* Comparison old vs new */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-center mb-8">{t.indirect.compTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Old */}
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <p className="font-semibold text-destructive mb-4 flex items-center gap-2">
                <X className="w-4 h-4" />
                {t.indirect.oldLabel}
              </p>
              <ul className="flex flex-col gap-2.5">
                {oldDisadvantages.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* New */}
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <p className="font-semibold text-green-600 mb-4 flex items-center gap-2">
                <Check className="w-4 h-4" />
                {t.indirect.newLabel}
              </p>
              <ul className="flex flex-col gap-2.5">
                {newAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground font-medium">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Savings table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8">{t.indirect.savingsTitle}</h3>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl overflow-hidden border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">{monthlyLabel}</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">{petrolLabel}</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">{lpgLabel}</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-primary">{savingLabel}</th>
                </tr>
              </thead>
              <tbody>
                {savingsData.map((row, i) => (
                  <tr key={row.km} className={i % 2 === 0 ? "bg-card/30" : "bg-background"}>
                    <td className="px-5 py-3.5 font-medium">{row.km}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.petrol}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.lpg}</td>
                    <td className="px-5 py-3.5 font-bold text-primary">{row.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden flex flex-col gap-3">
            {savingsData.map((row) => (
              <div key={row.km} className="glass-card rounded-xl p-4">
                <p className="font-bold text-foreground mb-3">{row.km}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{lang === "bg" ? "Бензин" : "Petrol"}</p>
                    <p className="text-sm font-medium">{row.petrol}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">LPG</p>
                    <p className="text-sm font-medium">{row.lpg}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{lang === "bg" ? "Икономия" : "Savings"}</p>
                    <p className="text-sm font-bold text-primary">{row.saving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <p className="text-sm text-primary font-medium">{t.indirect.savingsNote}</p>
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8">{t.indirect.compTableTitle}</h3>

          {/* Desktop */}
          <div className="hidden sm:block rounded-2xl overflow-hidden border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold">{t.indirect.col1}</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-muted-foreground">{t.indirect.col2}</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-primary">{t.indirect.col3}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-card/30" : "bg-background"}>
                    <td className="px-5 py-3.5 font-medium text-foreground">{row.aspect}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.old}</td>
                    <td className="px-5 py-3.5 text-primary font-medium">{row.modern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex flex-col gap-3">
            {comparisonRows.map((row) => (
              <div key={row.aspect} className="glass-card rounded-xl p-4">
                <p className="font-semibold mb-3 text-foreground">{row.aspect}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-start">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{row.old}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-primary">{row.modern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info blocks */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="glass-card rounded-2xl p-6"
          >
            <h4 className="font-bold mb-3">{lang === "bg" ? "Защо да изберете газов инжекцион?" : "Why choose a gas injector?"}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.indirect.why}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="glass-card rounded-2xl p-6"
          >
            <h4 className="font-bold mb-3">{lang === "bg" ? "Удобство и надеждност в едно" : "Comfort and reliability in one"}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.indirect.comfort}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
