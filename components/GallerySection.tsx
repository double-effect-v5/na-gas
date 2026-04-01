"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { useLang } from "@/lib/i18n"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80&auto=format&fit=crop",
    alt: "Car engine bay with LPG system",
    altBg: "Моторен отсек с монтирана газова система",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    alt: "Gas injection components",
    altBg: "Компоненти на газов инжекцион",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80&auto=format&fit=crop",
    alt: "Mechanic working on car",
    altBg: "Механик работи по автомобил",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&q=80&auto=format&fit=crop",
    alt: "LPG gas cylinder installation",
    altBg: "Монтаж на газова бутилка",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1597004282634-4bed18e30af2?w=600&q=80&auto=format&fit=crop",
    alt: "Car on a lift in service",
    altBg: "Автомобил на подемник в сервиза",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80&auto=format&fit=crop",
    alt: "Engine detail close-up",
    altBg: "Детайл на двигател",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80&auto=format&fit=crop",
    alt: "Car in professional service workshop",
    altBg: "Автомобил в сервиз",
    span: "col-span-2",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function GallerySection() {
  const { t, lang } = useLang()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background">
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
            {lang === "bg" ? "Галерия" : "Gallery"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.gallery.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.gallery.subtitle}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={lang === "bg" ? img.altBg : img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-white">{lang === "bg" ? img.altBg : img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[lightbox].src.replace("w=600", "w=1200")}
              alt={lang === "bg" ? galleryImages[lightbox].altBg : galleryImages[lightbox].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {lang === "bg" ? galleryImages[lightbox].altBg : galleryImages[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
