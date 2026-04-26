"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    image: "/images/product-steak.png",
    name: "ستيك ريب آي",
    description: "لحم بقري ممتاز بتشكيلة ريب آي الشهيرة",
    price: "89",
    originalPrice: "120",
    badge: "الأكثر مبيعاً",
    badgeColor: "from-crimson to-crimson-dark",
  },
  {
    image: "/images/product-lamb.png",
    name: "ضلع غنم",
    description: "ضلع غنم طازج بالعظم مع الروزماري",
    price: "110",
    originalPrice: "145",
    badge: "عرض خاص",
    badgeColor: "from-gold to-gold-dark",
  },
  {
    image: "/images/product-chicken.png",
    name: "دجاج كامل",
    description: "دجاج طازج مزارع محلية 100%",
    price: "35",
    originalPrice: "45",
    badge: "طازج",
    badgeColor: "from-green-500 to-green-600",
  },
  {
    image: "/images/product-kebab.png",
    name: "كباب لحم",
    description: "كباب لحم مفروم ممتاز مع التوابل",
    price: "55",
    originalPrice: "70",
    badge: "مميز",
    badgeColor: "from-crimson to-gold",
  },
  {
    image: "/images/product-fish.png",
    name: "سمك فيليه",
    description: "فيليه سمك طازج مجمد ومعبأ بعناية",
    price: "65",
    originalPrice: "80",
    badge: "جديد",
    badgeColor: "from-blue-500 to-blue-600",
  },
];

export default function ProductsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-charcoal to-black" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-crimson/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            تشكيلة متنوعة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            منتجاتنا{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-crimson-light to-gold">
              المميزة
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            اكتشف مجموعتنا الواسعة من اللحوم الطازجة والمميزة
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex items-center justify-between mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-white"
          >
            الأكثر طلباً
          </motion.h3>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "bg-white/10 text-white hover:bg-crimson hover:text-white"
                  : "bg-white/5 text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white/10 text-white hover:bg-crimson hover:text-white"
                  : "bg-white/5 text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              ref={sectionRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-70 sm:min-w-75 snap-start group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-charcoal-light/50 border border-white/5 hover:border-crimson/30 transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/10">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-linear-to-l ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Discount percentage */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-lg text-xs font-bold text-white bg-crimson/90 backdrop-blur-sm">
                      -
                      {Math.round(
                        ((+product.originalPrice - +product.price) /
                          +product.originalPrice) *
                          100,
                      )}
                      %
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-crimson-light">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500">ج.م / كجم</span>
                    </div>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-3 bg-linear-to-l from-crimson to-crimson-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-crimson/20 transition-all duration-300 text-sm"
                  >
                    أضف للسلة
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
