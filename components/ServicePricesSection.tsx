"use client"

import { motion } from "framer-motion"
import { Info } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const serviceCategories = [
  {
    categoryBg: "Преход за Външно Зарядно Устройство (ВЗУ)",
    categoryEn: "External Filling Device (EFD) Adapter",
    items: [
      { nameBg: "Италия / Европа", nameEn: "Italy / Europe", price: "30 лв." },
      { nameBg: "Германия, Холандия, Англия, Испания", nameEn: "Germany, Netherlands, UK, Spain", price: "40 лв." },
    ],
  },
  {
    categoryBg: "Диагностика и Електроника",
    categoryEn: "Diagnostics & Electronics",
    items: [
      { nameBg: "Диагностика на газови инжекциони", nameEn: "Gas injector diagnostics", price: "30 лв." },
      { nameBg: "Прочитане на грешки в автомобилната електроника", nameEn: "Vehicle electronics error reading", price: "50 лв." },
    ],
  },
  {
    categoryBg: "Поддръжка и Подмяна на Компоненти",
    categoryEn: "Maintenance & Component Replacement",
    items: [
      { nameBg: "Подмяна на филтри на газови инжекциони", nameEn: "Gas injector filter replacement", price: "50–100 лв." },
      { nameBg: "Подмяна на Външно Зарядно Устройство (ВЗУ)", nameEn: "External Filling Device replacement", price: "50 лв." },
      { nameBg: "Подмяна на инжекторна рейка (4 цил.)", nameEn: "Injector rail replacement (4 cyl.)", price: "130–250 лв." },
      { nameBg: "Подмяна на изпарител", nameEn: "Vaporizer replacement", price: "150–350 лв." },
      { nameBg: "Подмяна на изгорял нивомер на сондата", nameEn: "Sensor level meter replacement", price: "30 лв." },
      { nameBg: "Подмяна на маркучите за изпарен газ", nameEn: "Vaporized gas hose replacement", price: "50 лв." },
      { nameBg: "Подмяна на вакуумни маркучи до колектора", nameEn: "Vacuum hose replacement to manifold", price: "50 лв." },
    ],
  },
  {
    categoryBg: "Газови Тръбопроводи",
    categoryEn: "Gas Pipelines",
    items: [
      { nameBg: "Подмяна на тръбопровод бутилка → изпарител", nameEn: "Cylinder → vaporizer pipeline replacement", price: "80–150 лв." },
    ],
  },
  {
    categoryBg: "Промени по Монтаж",
    categoryEn: "Installation Modifications",
    items: [
      { nameBg: "Промяна на мястото на ВЗУ", nameEn: "Relocation of EFD", price: "50 лв." },
    ],
  },
  {
    categoryBg: "Други Ремонти",
    categoryEn: "Other Repairs",
    items: [
      { nameBg: "Различни леки ремонти по газова уредба", nameEn: "Various light repairs on gas system", price: "по договаряне" },
    ],
  },
]

export default function ServicePricesSection() {
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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            {lang === "bg" ? "Услуги" : "Services"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {serviceCategories.map(({ categoryBg, categoryEn, items }, catIdx) => (
            <motion.div
              key={categoryBg}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={catIdx}
              className="glass-card rounded-2xl p-5"
            >
              <p className="font-bold text-sm text-foreground mb-4 pb-3 border-b border-border">
                {lang === "bg" ? categoryBg : categoryEn}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li
                    key={item.nameBg}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-sm text-muted-foreground">
                      {lang === "bg" ? item.nameBg : item.nameEn}
                    </span>
                    <span className="text-sm font-semibold text-primary shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
          className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-muted/20 border border-border"
        >
          <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">{t.services.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
