"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Plus, ShieldCheck } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const romanoPrices = [
  {
    name: "Romano AIS ECO 4 цил.",
    desc: "Универсална система. Подходяща за повечето автомобили до 2002 г.",
    descEn: "Universal system. Suitable for most vehicles up to 2002.",
    original: "1 300 лв.",
    promo: "1 150 лв.",
    eur: "588 EUR",
    badge: "ECO",
  },
  {
    name: "Romano AIS OBD 4 цил.",
    desc: "Висок клас. Подходяща за съвременни автомобили с OBD.",
    descEn: "High class. Suitable for modern cars with OBD.",
    original: "1 600 лв.",
    promo: "1 398 лв.",
    eur: "715 EUR",
    badge: "OBD",
    featured: true,
  },
  {
    name: "Romano AIS OBD 6 цил.",
    desc: "Висок клас. Подходяща за съвременни автомобили с OBD.",
    descEn: "High class. Suitable for modern cars with OBD.",
    original: "2 100 лв.",
    promo: "2 000 лв.",
    eur: "1 022 EUR",
    badge: "OBD",
  },
  {
    name: "Romano AIS OBD 8 цил.",
    desc: "Висок клас. Подходяща за съвременни автомобили с OBD.",
    descEn: "High class. Suitable for modern cars with OBD.",
    original: "3 200 лв.",
    promo: "2 894 лв.",
    eur: "1 480 EUR",
    badge: "OBD",
  },
]

const kmePrices = [
  {
    name: "AC Stag 200 4 цил.",
    desc: "Компютър Stag 200. Инжектори AC W01-4. За автомобили до 125 HP.",
    descEn: "Stag 200 ECU. AC W01-4 injectors. For cars up to 125 HP.",
    original: "1 500 лв.",
    promo: "1 350 лв.",
    eur: "690 EUR",
    badge: "Stag",
  },
  {
    name: "KME JET ECO 4 цил.",
    desc: "Компютър KME. Инжектори Alex Flipper. За автомобили до 2002 г.",
    descEn: "KME ECU. Alex Flipper injectors. For cars up to 2002.",
    original: "1 350 лв.",
    promo: "1 150 лв.",
    eur: "588 EUR",
    badge: "ECO",
  },
  {
    name: "KME JET OBD MINI 4 цил.",
    desc: "Компютър KME. Изпарител KME/Shark. За автомобили до 150 HP.",
    descEn: "KME ECU. KME/Shark vaporizer. For cars up to 150 HP.",
    original: "1 750 лв.",
    promo: "1 350 лв.",
    eur: "690 EUR",
    badge: "OBD",
    featured: true,
  },
  {
    name: "KME JET OBD 4 цил.",
    desc: "Компютър KME. Инжектори Alex Barracuda/Hana Blue. За автомобили над 150 HP.",
    descEn: "KME ECU. Alex Barracuda/Hana Blue injectors. For cars over 150 HP.",
    original: "1 800 лв.",
    promo: "1 500 лв.",
    eur: "767 EUR",
    badge: "OBD",
  },
  {
    name: "KME JET OBD 6 цил.",
    desc: "Компютър KME. Изпарител Magic3/Valtek Paladio. До 250 HP.",
    descEn: "KME ECU. Magic3/Valtek Paladio vaporizer. Up to 250 HP.",
    original: "2 600 лв.",
    promo: "2 102 лв.",
    eur: "1 075 EUR",
    badge: "OBD",
  },
  {
    name: "KME JET OBD 8 цил.",
    desc: "Компютър KME. Изпарител Valtek Paladio. До 450 HP.",
    descEn: "KME ECU. Valtek Paladio vaporizer. Up to 450 HP.",
    original: "3 200 лв.",
    promo: "2 699 лв.",
    eur: "1 380 EUR",
    badge: "OBD",
  },
]

const kmeIncludes = [
  "Пълен комплект последно поколение газов инжекцион",
  "Цилиндрична бутилка по избор 20–50 литра",
  "Евросонда с 5-степенна защита",
  "Външно зарядно устройство",
  "Превключвател в купето за нивото на газ",
  "Монтаж",
  "Гаранция 60 мес. / 150 000 км (OBD системи)",
  "Гаранция 24 мес. / 50 000 км (останали)",
  "Следгаранционно обслужване",
  "RGB превключвател в купето (всички KME)",
]

const kmeAddons = [
  { name: "Тороидална бутилка (резервна гума)", price: "101.70 лв.", eur: "52 EUR" },
  { name: "Усилен изпарител (турбо/спец.)", price: "250.34 лв.", eur: "128 EUR" },
  { name: "Монтаж ВЗУ при капачката за бензин", price: "78.23 лв.", eur: "40 EUR" },
  { name: "Бърза рейка 4 цил.", price: "101.70 лв.", eur: "52 EUR" },
  { name: "Бърза рейка 6 цил.", price: "150.60 лв.", eur: "77 EUR" },
  { name: "Рейки боксер 2x2", price: "78.23 лв.", eur: "40 EUR" },
  { name: "Бутилки над 50 л", price: "по обем", eur: "" },
  { name: "Кит за омасляване Flashlube", price: "199.49 лв.", eur: "102 EUR" },
]

const romanoCimponents = [
  "Италиански компютър и софтуер Romano",
  "Италиански бързи инжектори Romano",
  "Romano изпарител и спирателен клапан",
  "Мултиклапан с 5-степенна защита",
  "Българска или турска бутилка",
]

const kmeComponents = [
  "Полски компютър и софтуер (KME или AC Stag)",
  "Полски изпарител",
  "Полски бързодействащи инжектори",
  "Полски или турски мултиклапан",
  "Българска или турска бутилка",
]

function PricingCard({ item, lang }: { item: typeof romanoPrices[0]; lang: string }) {
  const promoLabel = lang === "bg" ? "ПРОМОЦИЯ" : "PROMO"
  const fromLabel = lang === "bg" ? "от" : "from"
  return (
    <div
      className={`relative rounded-2xl p-5 border flex flex-col gap-3 transition-all hover:-translate-y-1 ${
        item.featured
          ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
          : "border-border bg-card/50 hover:border-primary/20"
      }`}
    >
      {item.featured && (
        <span className="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
          {lang === "bg" ? "Популярна" : "Popular"}
        </span>
      )}
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-sm leading-snug">{item.name}</p>
        <span className="shrink-0 px-2 py-0.5 rounded text-xs font-bold bg-accent/10 text-accent border border-accent/20">
          {item.badge}
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-snug">{lang === "bg" ? item.desc : item.descEn}</p>
      <div className="mt-auto pt-2 border-t border-border/50">
        <p className="text-xs text-muted-foreground line-through">{fromLabel} {item.original}</p>
        <p className="text-xl font-bold text-primary">{item.promo}</p>
        <p className="text-xs text-muted-foreground">{item.eur}</p>
        <span className="mt-1 inline-block px-2 py-0.5 rounded text-xs font-semibold bg-accent/10 text-accent">
          {promoLabel}
        </span>
      </div>
    </div>
  )
}

export default function PricingSection() {
  const { t, lang } = useLang()
  const [tab, setTab] = useState<"romano" | "kme">("romano")

  const obdNote =
    lang === "bg"
      ? "OBD – комуникация с бензиновия компютър за прецизна автоматична настройка в реално време."
      : "OBD – communication with petrol ECU for precise automatic real-time tuning."

  const kmeDisclaimer =
    lang === "bg"
      ? t.kme.disclaimer
      : "All prices include installation, 24 months / 100,000 km warranty (OBD), 24 months / 50,000 km (others), VAT."

  const componentsLabel = lang === "bg" ? "Компоненти в Системите" : "System Components"
  const includesLabel = lang === "bg" ? "Всички Инжекциони Включват" : "All Injectors Include"
  const addonsLabel = lang === "bg" ? "Допълнителни Опции" : "Additional Options"
  const warrantyLabel = lang === "bg" ? "Гаранция" : "Warranty"

  return (
    <section id="prices" className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            {lang === "bg" ? "Цени" : "Prices"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            {lang === "bg" ? "Ценоразпис на Газови Системи" : "Gas Systems Price List"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {lang === "bg"
              ? "Прозрачни цени с включен монтаж, гаранция и ДДС"
              : "Transparent prices including installation, warranty and VAT"}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl border border-border bg-muted/30 p-1 gap-1">
            <button
              onClick={() => setTab("romano")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === "romano"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Romano Autogas
            </button>
            <button
              onClick={() => setTab("kme")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === "kme"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              KME / AC STAG
            </button>
          </div>
        </div>

        {tab === "romano" && (
          <motion.div
            key="romano"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Romano brand intro */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">{t.romano.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.romano.intro}</p>
                <div className="glass-card rounded-2xl p-5">
                  <p className="text-sm font-semibold mb-3 text-foreground">{componentsLabel}</p>
                  <ul className="flex flex-col gap-2">
                    {romanoCimponents.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80&auto=format&fit=crop"
                  alt="Romano gas injection system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {romanoPrices.map((item, i) => (
                <PricingCard key={item.name} item={item} lang={lang} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground border border-border rounded-xl p-4 bg-muted/20">{obdNote}</p>
          </motion.div>
        )}

        {tab === "kme" && (
          <motion.div
            key="kme"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* KME brand intro */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">{t.kme.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t.kme.intro}</p>
                <div className="glass-card rounded-2xl p-5">
                  <p className="text-sm font-semibold mb-3 text-foreground">{componentsLabel}</p>
                  <ul className="flex flex-col gap-2">
                    {kmeComponents.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1597004282634-4bed18e30af2?w=800&q=80&auto=format&fit=crop"
                  alt="KME gas injection system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {kmePrices.map((item) => (
                <PricingCard key={item.name} item={item} lang={lang} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground border border-border rounded-xl p-4 bg-muted/20 mb-10">{obdNote}</p>

            {/* Includes + addons + warranty */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {/* Includes */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {includesLabel}
                </h4>
                <ul className="flex flex-col gap-2">
                  {kmeIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Addons */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-accent" />
                  {addonsLabel}
                </h4>
                <ul className="flex flex-col gap-2">
                  {kmeAddons.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-accent shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warranty */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  {warrantyLabel}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.kme.warrantyText}</p>
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-center">
                    <p className="text-lg font-bold text-primary">60 мес.</p>
                    <p className="text-xs text-muted-foreground">150 000 км (OBD)</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 border border-border p-3 text-center">
                    <p className="text-lg font-bold text-foreground">24 мес.</p>
                    <p className="text-xs text-muted-foreground">50 000 км ({lang === "bg" ? "Останали" : "Others"})</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground border border-border rounded-xl p-4 bg-muted/20">{kmeDisclaimer}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
