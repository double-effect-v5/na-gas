"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Wrench, HeartHandshake, TrendingDown, Cpu, CreditCard, MessageCircle, Stethoscope } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const reasons = [
  {
    icon: ShieldCheck,
    bg: "Сертифицирани Компоненти",
    en: "Certified Components",
    descBg: "Системи, отговарящи на всички стандарти на ЕС",
    descEn: "Systems complying with all EU standards",
  },
  {
    icon: Wrench,
    bg: "Професионален Монтаж",
    en: "Professional Installation",
    descBg: "Опитен екип от сертифицирани механици",
    descEn: "Experienced team of certified mechanics",
  },
  {
    icon: HeartHandshake,
    bg: "Гаранционно Обслужване",
    en: "Warranty Service",
    descBg: "До 5 години / 150 000 км гаранция",
    descEn: "Up to 5 years / 150,000 km warranty",
  },
  {
    icon: TrendingDown,
    bg: "Икономия без Компромис",
    en: "Savings Without Compromise",
    descBg: "До 50% по-евтино гориво без загуба на мощност",
    descEn: "Up to 50% cheaper fuel without power loss",
  },
  {
    icon: Cpu,
    bg: "Директно и Индиректно Впръскване",
    en: "Direct & Indirect Injection",
    descBg: "Решения за всички типове двигатели",
    descEn: "Solutions for all engine types",
  },
  {
    icon: CreditCard,
    bg: "Лизинг и Удобни Условия",
    en: "Leasing & Easy Terms",
    descBg: "0% лихва за 6 месеца с UniCredit и БНП Париба",
    descEn: "0% interest for 6 months with UniCredit and BNP Paribas",
  },
  {
    icon: MessageCircle,
    bg: "Пълна Консултация",
    en: "Full Consultation",
    descBg: "Избираме системата подходяща конкретно за вашия автомобил",
    descEn: "We select the system suited specifically for your car",
  },
  {
    icon: Stethoscope,
    bg: "Диагностика и Поддръжка",
    en: "Diagnostics & Maintenance",
    descBg: "Бърза диагностика и достъпно следгаранционно обслужване",
    descEn: "Fast diagnostics and affordable after-warranty service",
  },
]

export default function WhyUsSection() {
  const { t, lang } = useLang()

  return (
    <section className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.whyUs.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.whyUs.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map(({ icon: Icon, bg, en, descBg, descEn }, i) => (
            <motion.div
              key={bg}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm leading-snug">{lang === "bg" ? bg : en}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{lang === "bg" ? descBg : descEn}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
