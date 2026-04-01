"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, TrendingDown, Calendar, Banknote, ChevronRight, Info } from "lucide-react"
import { useLang } from "@/lib/i18n"

// Current Bulgarian fuel prices — April 2026
// A95: ~2.72 лв/л  |  LPG: ~1.39 лв/л
const DEFAULT_PETROL = 2.72
const DEFAULT_GAS    = 1.39

interface Results {
  monthlySaving: number
  annualSaving:  number
  paybackMonths: number
}

function ResultCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5 shadow-sm"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <p className="text-xs text-muted-foreground font-medium leading-tight">{label}</p>
      <p className="text-2xl font-bold text-foreground leading-none">{value}</p>
    </motion.div>
  )
}

export default function SavingsCalculator() {
  const { t } = useLang()
  const ct = t.calc

  const [km,          setKm]          = useState("")
  const [consumption, setConsumption] = useState("")
  const [petrolPrice, setPetrolPrice] = useState(String(DEFAULT_PETROL))
  const [gasPrice,    setGasPrice]    = useState(String(DEFAULT_GAS))
  const [systemPrice, setSystemPrice] = useState("")
  const [results,     setResults]     = useState<Results | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const calculate = () => {
    const kmN   = parseFloat(km)
    const consN = parseFloat(consumption)
    const ppN   = parseFloat(petrolPrice)
    const gpN   = parseFloat(gasPrice)
    const spN   = parseFloat(systemPrice) || 0

    if (!kmN || !consN || !ppN || !gpN) return

    // LPG consumes ~10% more volume but costs less — apply 1.1 multiplier for gas consumption
    const monthlyLitresPetrol = (kmN / 100) * consN
    const monthlyLitresGas    = monthlyLitresPetrol * 1.10

    const monthlyCostPetrol = monthlyLitresPetrol * ppN
    const monthlyCostGas    = monthlyLitresGas    * gpN

    const monthlySaving = monthlyCostPetrol - monthlyCostGas
    const annualSaving  = monthlySaving * 12
    const paybackMonths = spN > 0 ? Math.ceil(spN / monthlySaving) : 0

    setResults({ monthlySaving, annualSaving, paybackMonths })
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }, 80)
  }

  const fmt = (n: number) =>
    n.toLocaleString("bg-BG", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " лв"

  return (
    <section id="calculator" className="py-20 bg-[var(--surface-2)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red-light text-primary text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            {ct.title}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-3">
            {ct.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{ct.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Form */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-5">

              {/* Monthly km */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">{ct.km}</label>
                <input
                  type="number"
                  min="0"
                  placeholder={ct.kmPlaceholder}
                  value={km}
                  onChange={e => setKm(e.target.value)}
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>

              {/* Consumption */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">{ct.consumption}</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder={ct.consumptionPlaceholder}
                  value={consumption}
                  onChange={e => setConsumption(e.target.value)}
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>

              {/* Petrol price */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">{ct.petrolPrice}</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={petrolPrice}
                  onChange={e => setPetrolPrice(e.target.value)}
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>

              {/* Gas price */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">{ct.gasPrice}</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={gasPrice}
                  onChange={e => setGasPrice(e.target.value)}
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>

              {/* System price — full width */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-sm font-medium text-foreground">{ct.systemPrice}</label>
                <input
                  type="number"
                  min="0"
                  placeholder={ct.systemPricePlaceholder}
                  value={systemPrice}
                  onChange={e => setSystemPrice(e.target.value)}
                  className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>
            </div>

            {/* Note */}
            <p className="flex items-start gap-1.5 text-xs text-muted-foreground mt-4">
              <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {ct.note}
            </p>

            {/* Calculate button */}
            <button
              onClick={calculate}
              className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-sm"
            >
              <Calculator className="w-4 h-4" />
              {ct.calculate}
            </button>
          </div>

          {/* Results */}
          <div ref={resultsRef} className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {results ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-lg font-bold text-foreground">{ct.results}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    <ResultCard
                      icon={<TrendingDown className="w-5 h-5 text-primary" />}
                      label={ct.monthlySaving}
                      value={fmt(results.monthlySaving)}
                      color="bg-brand-red-light"
                    />
                    <ResultCard
                      icon={<Banknote className="w-5 h-5 text-accent" />}
                      label={ct.annualSaving}
                      value={fmt(results.annualSaving)}
                      color="bg-brand-green-light"
                    />
                    {results.paybackMonths > 0 && (
                      <ResultCard
                        icon={<Calendar className="w-5 h-5 text-primary" />}
                        label={`${ct.paybackMonths} ... ${ct.paybackUnit}`}
                        value={`${results.paybackMonths} ${ct.paybackUnit}`}
                        color="bg-brand-red-light"
                      />
                    )}
                  </div>

                  {/* Savings bar */}
                  {results.monthlySaving > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="rounded-2xl border border-border bg-white p-5 shadow-sm"
                    >
                      <p className="text-xs font-medium text-muted-foreground mb-3">
                        {ct.monthlySaving} vs бензин
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((results.monthlySaving / (results.monthlySaving + (parseFloat(gasPrice) * ((parseFloat(km) / 100) * parseFloat(consumption) * 1.1)))) * 100, 100)}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-sm font-bold text-primary shrink-0">
                          {fmt(results.monthlySaving)}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {ct.cta}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-white p-10 text-center h-full min-h-[280px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-red-light flex items-center justify-center">
                    <Calculator className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm max-w-[200px]">
                    Попълнете формата и натиснете „{ct.calculate}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
