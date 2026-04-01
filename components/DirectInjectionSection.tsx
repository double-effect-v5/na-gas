"use client"

import { useState } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, TrendingDown, Zap, Leaf, Heart, Check, Plus } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const benefits = [
  { icon: TrendingDown, key: "ben1" as const, descKey: "ben1d" as const },
  { icon: Zap, key: "ben2" as const, descKey: "ben2d" as const },
  { icon: Leaf, key: "ben3" as const, descKey: "ben3d" as const },
  { icon: Heart, key: "ben4" as const, descKey: "ben4d" as const },
]

const directSystems = [
  {
    name: "KME Nevo-Sky DIRECT MODEL 2",
    origin: "Poland",
    components: "All Polish components",
    price: "2 249 лв.",
    eur: "1 150 EUR",
  },
  {
    name: "KME Nevo-Sky DIRECT DUAL",
    origin: "Poland",
    components: "All Polish components",
    price: "2 900 лв.",
    eur: "1 483 EUR",
    featured: true,
  },
  {
    name: "Romano AIS DI",
    origin: "Italy",
    components: "All Romano components",
    price: "3 200 лв.",
    eur: "1 636 EUR",
  },
  {
    name: "AG ZENIT PRO DIRECT",
    origin: "Poland",
    components: "HANA injectors",
    price: "2 503 лв.",
    eur: "1 280 EUR",
  },
  {
    name: "AC STAG 400 DPI",
    origin: "Poland",
    components: "All AC STAG – Poland",
    price: "2 503 лв.",
    eur: "1 280 EUR",
  },
]

const directIncludes = [
  "Пълен комплект последно поколение газов инжекцион с OBDII комуникация",
  "Индивидуални бързодействащи дюзи",
  "Цилиндрична бутилка по избор 20–40 литра",
  "Италианска евросонда с 5-степенна защита",
  "Зарядно устройство при капачката за бензин",
  "Превключвател в купето за нивото на газ",
  "Монтаж",
  "Гаранция 24 месеца / 100 000 км",
  "Евтино следгаранционно обслужване",
]

const directAddons = [
  { name: "Тороидална бутилка (резервна гума)", price: "60 лв." },
  { name: "Цилиндрични бутилки над 50 л", price: "по договаряне" },
  { name: "Усилен изпарител (турбо / 150+ к.с.)", price: "50 лв." },
  { name: "Кит за омасляване Flashlube", price: "160 лв." },
]

function Accordion({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-xl overflow-hidden border transition-colors ${open ? "border-primary/40 bg-primary/3" : "border-border bg-card/60"}`}>
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-primary/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm">{question}</span>
        <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-primary/10 pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function DirectInjectionSection() {
  const { t, lang } = useLang()

  const includesLabel = lang === "bg" ? "Офертата Включва" : "Offer Includes"
  const addonsLabel = lang === "bg" ? "Допълнителни Опции" : "Additional Options"
  const disclaimerText =
    lang === "bg"
      ? "Всички цени са с включен монтаж, гаранция 2 год. / 100 000 км, ДДС и могат да бъдат променяни."
      : "All prices include installation, 2-year / 100,000 km warranty, VAT and may vary."
  const noteText =
    lang === "bg"
      ? "Точна цена може да получите по телефона или на място в сервиза след представяне на информация за двигателя."
      : "Exact pricing available by phone or at the workshop after providing engine details."
  const originLabel = lang === "bg" ? "Произход" : "Origin"
  const componentsLabel = lang === "bg" ? "Компоненти" : "Components"
  const fromLabel = lang === "bg" ? "от" : "from"
  const featuredLabel = lang === "bg" ? "Препоръчана" : "Recommended"

  const accordionData: { q: string; a: React.ReactNode }[] = lang === "bg" ? [
    {
      q: "Какво е директно впръскване?",
      a: (
        <>
          При този тип двигатели горивото се впръсква <strong className="text-foreground">директно в горивната камера</strong> под{" "}
          <strong className="text-foreground">високо налягане</strong>, което осигурява по-добро изгаряне, по-нисък разход на гориво и по-висока мощност.
          Това прави системата по-сложна в сравнение с традиционното индиректно впръскване и изисква{" "}
          <strong className="text-foreground">специално разработени газови инжектори</strong>.
        </>
      ),
    },
    {
      q: "Как работи системата?",
      a: (
        <>
          Газовите уредби за директно впръскване използват <strong className="text-foreground">комбинация от газ и малко количество бензин</strong>, като така
          се гарантира правилното охлаждане и смазване на инжекторите. Инжекционната система се управлява от{" "}
          <strong className="text-foreground">електронен блок</strong>, който следи в реално време работата на двигателя и осигурява оптимална работа на газовата уредба.
        </>
      ),
    },
    {
      q: "За кои автомобили?",
      a: (
        <>
          Инсталираме газови инжектори на широка гама модели с директно впръскване –{" "}
          <strong className="text-foreground">бензинови турбо и атмосферни двигатели</strong> на марки като{" "}
          <strong className="text-foreground">VW, Audi, BMW, Mercedes, Opel, Peugeot, Ford</strong> и други.
          Преди всяка инсталация се прави <strong className="text-foreground">пълна диагностика и консултация</strong>.
        </>
      ),
    },
    {
      q: "Монтаж и Гаранция",
      a: (
        <>
          Работим със <strong className="text-foreground">сертифицирани системи</strong> от доказани производители и предлагаме{" "}
          <strong className="text-foreground">професионален монтаж, настройка и следгаранционно обслужване</strong>.
          Даваме гаранция както за <strong className="text-foreground">компонентите</strong>, така и за{" "}
          <strong className="text-foreground">извършената работа</strong>.
        </>
      ),
    },
  ] : [
    { q: t.direct.tab1, a: t.direct.tab1c },
    { q: t.direct.tab3, a: t.direct.tab3c },
    { q: t.direct.tab4, a: t.direct.tab4c },
    { q: t.direct.tab5, a: t.direct.tab5c },
  ]

  return (
    <section id="direct" className="py-24 bg-card/30">
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-4">
            {lang === "bg" ? "Директно Впръскване" : "Direct Injection"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.direct.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === "bg"
              ? "Специализирани газови системи, разработени за автомобили с директно впръскване – технологията, която съчетава мощност, прецизност и икономичност."
              : t.direct.subtitle}
          </p>
        </motion.div>

        {/* Intro + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Left: info text block — same visual size as the image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-center gap-6 border border-primary/10">
              <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {lang === "bg" ? "За Нас" : "About Us"}
              </span>
              <p className="text-muted-foreground leading-relaxed">
                От <strong className="text-foreground">NA-GAS.BG</strong> предлагаме монтаж на газови инжекционни уредби от{" "}
                <strong className="text-foreground">последна генерация</strong>. Решенията, независимо от техния клас, са актуални модели от{" "}
                <strong className="text-foreground">реномирани производители</strong> на автомобилни газови системи. Използваме{" "}
                <strong className="text-foreground">сертифицирани компоненти</strong>, отговарящи на всички одобрени стандарти в{" "}
                <strong className="text-foreground">Европейския съюз</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Всички съпровождащи елементи като тръби, маркучи, скоби и фитинги са от{" "}
                <strong className="text-foreground">висок клас</strong>, което допринася за{" "}
                <strong className="text-foreground">по-дълъг пробег</strong>,{" "}
                <strong className="text-foreground">надеждност</strong> и спокойствие при експлоатация.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden min-h-[320px]"
          >
            <img
              src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80&auto=format&fit=crop"
              alt="Direct injection engine bay"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Benefits — 4 cards full width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {benefits.map(({ icon: Icon, key, descKey }, i) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="glass-card rounded-xl p-5 border border-primary/10 flex flex-col gap-2 hover:border-primary/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-semibold text-sm">{t.direct[key]}</p>
              <p className="text-xs text-muted-foreground leading-snug">{t.direct[descKey]}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="flex flex-col gap-3 mb-20"
        >
          {accordionData.map(({ q, a }) => (
            <Accordion key={q} question={q} answer={a} />
          ))}
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-2">{t.direct.pricingTitle}</h3>
          <p className="text-muted-foreground mb-8 text-sm">{noteText}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {directSystems.map((sys, i) => (
              <motion.div
                key={sys.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl p-6 border transition-all hover:-translate-y-1 ${
                  sys.featured
                    ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card/50 hover:border-primary/20"
                }`}
              >
                {sys.featured && (
                  <span className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    {featuredLabel}
                  </span>
                )}
                <p className="font-semibold mb-1">{sys.name}</p>
                <p className="text-xs text-muted-foreground mb-1">
                  {originLabel}: <span className="text-foreground">{sys.origin}</span>
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {componentsLabel}: <span className="text-foreground">{sys.components}</span>
                </p>
                <p className="text-2xl font-bold text-primary">
                  {fromLabel} {sys.price}
                </p>
                <p className="text-xs text-muted-foreground">{sys.eur}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Includes + addons */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Includes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="glass-card rounded-2xl p-6"
          >
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              {includesLabel}
            </h4>
            <ul className="flex flex-col gap-3">
              {directIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Addons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="glass-card rounded-2xl p-6"
          >
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <Plus className="w-5 h-5 text-accent" />
              {addonsLabel}
            </h4>
            <ul className="flex flex-col gap-3">
              {directAddons.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-muted/30">
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-semibold text-accent shrink-0">{item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground border border-border rounded-xl p-4 bg-muted/20">
          {disclaimerText}
        </p>
      </div>
    </section>
  )
}
