"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useLang } from "@/lib/i18n"

const faqs = [
  {
    bg: { q: "Колко струва монтажът на газова уредба?", a: "Цените варират в зависимост от типа двигател и избраната система. За индиректно впръскване цените започват от около 700–900 лв., а за директно впръскване — от 1500 лв. Точна оферта може да получите по телефона или на място в сервиза." },
    en: { q: "How much does LPG system installation cost?", a: "Prices vary depending on the engine type and chosen system. For indirect injection systems, prices start from around 700–900 BGN, and for direct injection — from 1500 BGN. An exact quote is available by phone or in person at our workshop." },
  },
  {
    bg: { q: "Колко бързо се изплаща газовата уредба?", a: "При среден пробег от 1500–2000 км/месец инвестицията се изплаща средно за 6–9 месеца. Разходът на газ е до 50% по-евтин от бензина, което прави спестяванията много осезаеми." },
    en: { q: "How quickly does the LPG system pay off?", a: "With an average mileage of 1,500–2,000 km/month, the investment pays off in approximately 6–9 months. LPG consumption is up to 50% cheaper than petrol, making the savings very tangible." },
  },
  {
    bg: { q: "Влияе ли газовата уредба на двигателя?", a: "При правилно монтирана и настроена система, газовата уредба не вреди на двигателя. Напротив, газът изгаря при по-ниски температури, което може да удължи живота на двигателя." },
    en: { q: "Does a gas system affect the engine?", a: "When properly installed and calibrated, a gas system does not harm the engine. On the contrary, gas burns at lower temperatures, which can actually extend engine life." },
  },
  {
    bg: { q: "Могат ли всички автомобили да имат газова уредба?", a: "Повечето бензинови автомобили могат да бъдат оборудвани с газова уредба. Дизеловите двигатели не са подходящи. Преди монтаж правим пълна диагностика и консултация за конкретния автомобил." },
    en: { q: "Can all cars have a gas system installed?", a: "Most petrol cars can be fitted with a gas system. Diesel engines are not compatible. Before installation, we perform a full diagnostic and consultation for the specific vehicle." },
  },
  {
    bg: { q: "Каква е гаранцията на монтираната система?", a: "Предлагаме гаранция от 24 месеца / 50 000 км за стандартни системи и 24 месеца / 100 000 км за OBD системи. Гаранционното обслужване е на всеки 10 000–15 000 км." },
    en: { q: "What warranty does the installed system carry?", a: "We offer a warranty of 24 months / 50,000 km for standard systems and 24 months / 100,000 km for OBD systems. Warranty service is carried out every 10,000–15,000 km." },
  },
  {
    bg: { q: "Трябва ли да узаконявам газовата уредба?", a: "Да. При монтаж на LPG или CNG уредба е задължително да заявите изменението в Пътна полиция. Разполагате до следващия ГТП за преминаване на първоначална проверка. Ние съдействаме с целия процес." },
    en: { q: "Is it mandatory to register the gas system?", a: "Yes. When installing an LPG or CNG system, it is mandatory to declare the modification at the Traffic Police. You have until your next MOT to complete the initial inspection. We assist with the entire process." },
  },
  {
    bg: { q: "Предлагате ли лизинг за газовата уредба?", a: "Да, предлагаме безлихвен лизинг за 6 месеца в партньорство с UniCredit Consumer Financing и БНП Париба. Одобрението става за около 20 минути, само с лична карта, в нашия сервиз." },
    en: { q: "Do you offer leasing for the gas system?", a: "Yes, we offer interest-free leasing for 6 months in partnership with UniCredit Consumer Financing and BNP Paribas. Approval takes approximately 20 minutes with just an ID card at our workshop." },
  },
  {
    bg: { q: "Работите ли с автомобили с директно впръскване (GDI/TFSI/TSI)?", a: "Да. Имаме опит с широка гама модели с директно впръскване — VW, Audi, BMW, Mercedes, Opel, Ford, Peugeot и др. Преди всяка инсталация правим диагностика и консултация." },
    en: { q: "Do you work with direct injection vehicles (GDI/TFSI/TSI)?", a: "Yes. We have experience with a wide range of direct injection models — VW, Audi, BMW, Mercedes, Opel, Ford, Peugeot and others. A full diagnostic and consultation is performed before each installation." },
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45 } }),
}

export default function FAQSection() {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            {lang === "bg" ? "Често Задавани Въпроси" : "Frequently Asked Questions"}
          </h2>
          <p className="text-muted-foreground">
            {lang === "bg"
              ? "Всичко, което трябва да знаете преди да вземете решение."
              : "Everything you need to know before making a decision."}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const item = lang === "bg" ? faq.bg : faq.en
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className={`glass-card rounded-2xl overflow-hidden border transition-colors duration-200 ${isOpen ? "border-primary/30" : "border-border"}`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm leading-snug text-foreground">{item.q}</span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={9}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            {lang === "bg"
              ? "Не намерихте отговора? Свържете се с нас директно."
              : "Didn't find your answer? Contact us directly."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 text-sm"
          >
            {lang === "bg" ? "Задай Въпрос" : "Ask a Question"}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
