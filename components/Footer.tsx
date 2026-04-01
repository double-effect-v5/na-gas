"use client"

import { Flame, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useLang } from "@/lib/i18n"

const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "injectors", href: "#injectors" },
  { key: "direct", href: "#direct" },
  { key: "indirect", href: "#indirect" },
  { key: "leasing", href: "#leasing" },
  { key: "prices", href: "#prices" },
  { key: "legalization", href: "#legalization" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
] as const

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[oklch(0.09_0.01_240)] border-t border-white/10" style={{ "--foreground": "oklch(0.95 0.005 240)", "--muted-foreground": "oklch(0.62 0.01 240)", "--border": "oklch(1 0 0 / 0.10)", "--primary": "oklch(0.62 0.20 255)" } as React.CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Flame className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                NA<span className="text-primary">-</span>GAS
                <span className="text-primary">.BG</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {t.footer.desc}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{t.footer.links}</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{t.footer.contactTitle}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:0878176227" className="flex items-start gap-2.5 group">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    0878 176 227
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@na-gas.bg" className="flex items-start gap-2.5 group">
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    info@na-gas.bg
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {t.contact.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{t.footer.hoursTitle}</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.weekdays}</p>
                  <p className="text-sm text-muted-foreground">{t.contact.saturday}</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {t.cta.consultBtn}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {year} NA-GAS.BG. {t.footer.copyright}
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
