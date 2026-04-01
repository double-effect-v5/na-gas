"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useLang } from "@/lib/i18n"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function ContactSection() {
  const { t, lang } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", car: "", service: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-card/10">
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
            {lang === "bg" ? "Контакти" : "Contact"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Info + Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-5">
              <a
                href="tel:0878176227"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{lang === "bg" ? "Телефон" : "Phone"}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@na-gas.bg"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{lang === "bg" ? "Имейл" : "Email"}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t.contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{lang === "bg" ? "Адрес" : "Address"}</p>
                  <p className="font-semibold text-foreground">{t.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t.contact.hours}</p>
                  <p className="text-sm text-foreground">{t.contact.weekdays}</p>
                  <p className="text-sm text-foreground">{t.contact.saturday}</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-72 lg:flex-1 relative">
              <iframe
                title="NA-GAS.BG Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.7854!2d23.3219!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa857a5d3e3a37%3A0x0!2z0YPQuy4g0J_QsNC90LDQs9GO0YDQuNGJ0LUgMTUsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct call CTA */}
            <a
              href="tel:0878176227"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              {t.contact.callNow} — 0878 176 227
            </a>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {lang === "bg" ? "Запитването е изпратено!" : "Inquiry Sent!"}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    {lang === "bg"
                      ? "Ще се свържем с вас в рамките на работния ден."
                      : "We will get back to you within the working day."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-xl border border-border text-sm hover:border-primary/50 transition-colors"
                  >
                    {lang === "bg" ? "Изпрати ново" : "Send Another"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold mb-2">
                    {lang === "bg" ? "Изпрати Запитване" : "Send an Inquiry"}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground font-medium">{t.contact.formName}</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="px-4 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder={lang === "bg" ? "Иван Иванов" : "John Smith"}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-muted-foreground font-medium">{t.contact.formPhone}</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="px-4 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder="+359 8XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground font-medium">{t.contact.formCar}</label>
                    <input
                      type="text"
                      value={form.car}
                      onChange={(e) => setForm({ ...form, car: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder={lang === "bg" ? "напр. VW Golf 2.0 TDI 2018" : "e.g. VW Golf 2.0 TSI 2018"}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground font-medium">{t.contact.formService}</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    >
                      <option value="">{lang === "bg" ? "Изберете услуга" : "Select service"}</option>
                      <option value="indirect">{lang === "bg" ? "Индиректно впръскване" : "Indirect injection"}</option>
                      <option value="direct">{lang === "bg" ? "Директно впръскване" : "Direct injection"}</option>
                      <option value="service">{lang === "bg" ? "Сервизна проверка" : "Service check"}</option>
                      <option value="legalization">{lang === "bg" ? "Узаконяване" : "Legalization"}</option>
                      <option value="leasing">{lang === "bg" ? "Лизинг" : "Leasing"}</option>
                      <option value="other">{lang === "bg" ? "Друго" : "Other"}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-muted-foreground font-medium">{t.contact.formMessage}</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                      placeholder={
                        lang === "bg"
                          ? "Допълнителна информация или въпроси..."
                          : "Additional information or questions..."
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    {t.contact.formSubmit}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    {lang === "bg"
                      ? "Или се обадете директно: "
                      : "Or call us directly: "}
                    <a href="tel:0878176227" className="text-primary hover:underline">
                      0878 176 227
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
