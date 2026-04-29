"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero1.webp",
    title: "أجود أنواع اللحوم",
    subtitle: "لحم طازج يوصل لباب بيتك",
    description: "نختار لك أفضل القطع بعناية فائقة من أفضل المزارع",
    cta: "تصفح المنتجات",
    ctaLink: "#products",
  },
  {
    image: "/images/hero2.webp",
    title: "قطع مختارة بعناية",
    subtitle: "نلتزم بجودة القطع المختارة",
    description: "كل قطعة تمر بفحص دقيق لضمان أعلى معايير الجودة ",
    cta: "اعرف المزيد",
    ctaLink: "#about",
  },
  {
    image: "/images/hero3.webp",
    title: "عروض حصرية",
    subtitle: "",
    description: "استمتع بعروضنا على مجموعة واسعة من المنتجات",
    cta: "شاهد العروض",
    ctaLink: "#offers",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            sizes="100vw"
            className="object-cover"
            loading={`eager`}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-crimson/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-gold/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-1 bg-linear-to-l from-gold to-crimson rounded-full mb-6"
              />
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl font-semibold text-gold mb-3"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={slides[currentSlide].ctaLink}
                  className="px-8 py-4 bg-linear-to-l from-crimson to-crimson-dark text-white font-bold rounded-full text-base hover:shadow-2xl hover:shadow-crimson/30 transition-all duration-300 hover:scale-105"
                >
                  {slides[currentSlide].cta}
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-gold/50 text-gold font-bold rounded-full text-base hover:bg-gold/10 hover:border-gold transition-all duration-300"
                >
                  اتصل بنا
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="relative"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-linear-to-l from-gold to-crimson"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs text-gray-400 -rotate-90 origin-center whitespace-nowrap">
          اكتشف المزيد
        </span>
        <div className="w-px h-8 bg-linear-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
