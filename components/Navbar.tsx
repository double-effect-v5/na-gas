"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, Globe } from "lucide-react"
import { useLang, Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { labelBg: "За нас",   labelEn: "About",   href: "/about"   },
  { labelBg: "Цени",     labelEn: "Prices",  href: "/prices"  },
  { labelBg: "Лизинг",   labelEn: "Leasing", href: "/leasing" },
  { labelBg: "Контакти", labelEn: "Contact", href: "/contact" },
]

export default function Navbar() {
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleLang = () => setLang(lang === "bg" ? "en" : "bg")

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border/50"
            : "bg-white/85 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="НА ГАЗ лого"
              width={130}
              height={52}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map(({ labelBg, labelEn, href }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                    active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                  )}
                >
                  {lang === "bg" ? labelBg : labelEn}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-200",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-medium">{lang === "bg" ? "EN" : "BG"}</span>
            </button>

            <a
              href="tel:0878176227"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              {lang === "bg" ? "Обади се" : "Call Us"}
            </a>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border/50 bg-white/98 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map(({ labelBg, labelEn, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                    pathname === href
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-foreground/75 hover:text-foreground hover:bg-muted/60"
                  )}
                >
                  {lang === "bg" ? labelBg : labelEn}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                <button
                  onClick={toggleLang}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm rounded-xl border border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "bg" ? "Switch to English" : "Превключи на Български"}
                </button>
              </div>
              <a
                href="tel:0878176227"
                className="flex items-center justify-center gap-2 py-3 text-sm rounded-xl bg-primary text-white font-semibold mt-1 hover:bg-primary/90 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                {lang === "bg" ? "Обади се" : "Call Us"}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile call button */}
      <a
        href="tel:0878176227"
        className="fixed bottom-6 right-6 z-40 sm:hidden w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  )
}
