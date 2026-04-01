"use client"

import { motion } from "framer-motion"
import { Check, AlertTriangle, ArrowRight, FileCheck2, Search, FileText, Stamp, Wrench } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const steps = [
  {
    icon: Wrench,
    titleBg: "Монтаж на газовата уредба",
    titleEn: "Gas system installation",
    descBg: "Извършва се от лицензирани сервизи",
    descEn: "Performed by licensed workshops",
  },
  {
    icon: FileCheck2,
    titleBg: "Получаване на протокол от сервиза",
    titleEn: "Workshop certificate",
    descBg: "Съдържа данни за компонентите и техните сертификати",
    descEn: "Contains data about components and their certificates",
  },
  {
    icon: Search,
    titleBg: "Първоначална проверка на уредбата",
    titleEn: "Initial system inspection",
    descBg: "Извършва се в лицензиран КТП на ИААА",
    descEn: "Performed at a licensed IААА technical point",
  },
  {
    icon: FileText,
    titleBg: "Издаване на \"Розов протокол\"",
    titleEn: "Issuance of \"Pink Certificate\"",
    descBg: "Удостоверение за узаконяване на уредбата",
    descEn: "Certificate confirming the system's legalization",
  },
  {
    icon: Stamp,
    titleBg: "Вписване в талона",
    titleEn: "Entry in vehicle registration",
    descBg: "В 3-годишен срок от издаване на удостоверението",
    descEn: "Within 3 years of the certificate issuance",
  },
]

const noCheckNeeded = [
  {
    bg: "Ако в талона вече е посочено гориво тип \"газ\"",
    en: "If the registration already states \"gas\" as fuel type",
  },
  {
    bg: "Ако имате паспорт за газовата уредба",
    en: "If you have a gas system passport",
  },
  {
    bg: "Ако имате удостоверение за техническа изправност с посочена газова уредба",
    en: "If you have a technical certificate mentioning gas system",
  },
]

const bottleLifeData = [
  {
    type: "LPG (Пропан-бутан)",
    typeEn: "LPG (Propane-butane)",
    rulesBg: "Правило №67 ИКЕ на ООН – обикновено 10 години",
    rulesEn: "UN ECE Regulation No. 67 – typically 10 years",
    lifeBg: "~10 години",
    lifeEn: "~10 years",
  },
  {
    type: "CNG (Метан)",
    typeEn: "CNG (Methane)",
    rulesBg: "Правило №110 ИКЕ на ООН – макс. 20 години",
    rulesEn: "UN ECE Regulation No. 110 – max. 20 years",
    lifeBg: "До 20 години",
    lifeEn: "Up to 20 years",
  },
]

export default function LegalizationSection() {
  const { t, lang } = useLang()

  return (
    <section id="legalization" className="py-24 bg-card/20">
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
            {lang === "bg" ? "Узаконяване" : "Legalization"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.legalization.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.legalization.intro}</p>
        </motion.div>

        {/* Steps timeline */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold mb-8"
          >
            {t.legalization.stepsTitle}
          </motion.h3>
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/15 origin-top"
            />
            <div className="flex flex-col gap-5">
              {steps.map(({ icon: Icon, titleBg, titleEn, descBg, descEn }, i) => (
                <motion.div
                  key={titleBg}
                  initial={{ opacity: 0, x: -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shrink-0 shadow-md shadow-primary/25 ring-4 ring-background">
                    <span className="text-xs font-extrabold leading-none">{i + 1}</span>
                  </div>
                  {/* Step card */}
                  <div className="glass-card flex-1 rounded-xl px-5 py-4 border border-primary/10 hover:border-primary/30 transition-colors group">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="font-semibold text-sm">{lang === "bg" ? titleBg : titleEn}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{lang === "bg" ? descBg : descEn}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mb-12 flex items-start gap-3 p-5 rounded-xl bg-accent/10 border border-accent/30"
        >
          <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-foreground font-medium leading-relaxed">{t.legalization.warning}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* No check needed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-bold mb-5">{t.legalization.noCheckTitle}</h3>
            <ul className="flex flex-col gap-3">
              {noCheckNeeded.map((item) => (
                <li key={item.bg} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {lang === "bg" ? item.bg : item.en}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bottle life */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-bold mb-5">{t.legalization.bottleTitle}</h3>
            <div className="flex flex-col gap-3">
              {bottleLifeData.map((item) => (
                <div key={item.type} className="rounded-xl bg-muted/30 p-4">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="font-semibold text-sm">{lang === "bg" ? item.type : item.typeEn}</p>
                    <span className="text-sm font-bold text-primary">{lang === "bg" ? item.lifeBg : item.lifeEn}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{lang === "bg" ? item.rulesBg : item.rulesEn}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://www.iааа.government.bg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors text-sm font-medium"
          >
            {t.legalization.moreInfo}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            {t.legalization.contactSupport}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
