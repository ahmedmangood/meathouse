"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الشمري",
    location: "الرياض",
    rating: 5,
    text: "أفضل معرض لحوم في المنطقة! اللحوم دائماً طازجة وجودة ممتازة. خدمة التوصيل سريعة ومحترفة.",
    avatar: "أ",
  },
  {
    name: "فاطمة العتيبي",
    location: "جدة",
    rating: 5,
    text: "نعتمد على بيت اللحوم منذ سنوات. الجودة ثابتة والأسعار منافسة. أنصح الجميع بتجربتهم.",
    avatar: "ف",
  },
  {
    name: "محمد القحطاني",
    location: "الدمام",
    rating: 5,
    text: "تجربة رائعة من البداية للنهاية. اللحوم ممتازة والتغليف محترف جداً. سأكرر الطلب بالتأكيد.",
    avatar: "م",
  },
  {
    name: "نورة السبيعي",
    location: "المدينة المنورة",
    rating: 5,
    text: "من أفضل التجارب! اللحوم طازجة وذبح على الشريعة. التوصيل في الوقت المحدد بدقة.",
    avatar: "ن",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black to-charcoal" />

      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            ماذا يقول{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-crimson-light to-gold">
              عملاؤنا
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نفخر بثقة آلاف العملاء الذين يختاروننا يومياً
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 100 : -100,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -100 : 100,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative p-8 sm:p-12 rounded-3xl bg-charcoal-light/30 border border-white/5 backdrop-blur-sm">
                  {/* Quote icon */}
                  <div className="absolute -top-5 right-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-crimson to-gold flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crimson to-gold flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {testimonials[current].avatar}
                    </div>

                    <div className="flex-1">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-gold text-gold"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        &ldquo;{testimonials[current].text}&rdquo;
                      </p>

                      {/* Name & Location */}
                      <div>
                        <p className="text-white font-bold text-base">
                          {testimonials[current].name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[current].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-gradient-to-l from-crimson to-gold"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-crimson transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
