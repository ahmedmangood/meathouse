"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Flame, Sparkles, Crown, Plus } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface Category {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  gradient: string;
  badge: string;
  products: Product[];
}

const allProducts: Product[] = [
  { id: 61, name: "مواسير", price: 40, category: "حجز مسبق" },
  { id: 62, name: "بوش عجالي", price: 119.99, category: "حجز مسبق" },
  { id: 63, name: "الطحال", price: 140, category: "حجز مسبق" },
  { id: 64, name: "حلويات", price: 120.99, category: "حجز مسبق" },
  { id: 65, name: "دهن كلاوي", price: 109.99, category: "حجز مسبق" },
  { id: 66, name: "فشة", price: 90, category: "حجز مسبق" },
  { id: 79, name: "مخاصي", price: 349.99, category: "حجز مسبق" },
  { id: 80, name: "كبده+قلب وكلاوي", price: 459.99, category: "حجز مسبق" },
  { id: 81, name: "مخ", price: 219.99, category: "حجز مسبق" },
  { id: 82, name: "لحمه راس", price: 339.99, category: "حجز مسبق" },
  { id: 83, name: "كوارع", price: 339.99, category: "حجز مسبق" },
  { id: 84, name: "عكاوي", price: 334.99, category: "حجز مسبق" },
  { id: 85, name: "قلب وكلاوي", price: 344.99, category: "حجز مسبق" },
  { id: 86, name: "كبده - بلدي صافي", price: 499.99, category: "حجز مسبق" },

  { id: 67, name: "لحم حواوشي بلدي", price: 359.99, category: "جاهز للتسوية" },
  { id: 68, name: "سجق شرقي", price: 399.99, category: "جاهز للتسوية" },
  { id: 69, name: "برجر بلدي", price: 409.99, category: "جاهز للتسوية" },
  { id: 70, name: "كفتة بلدي", price: 409.99, category: "جاهز للتسوية" },
  { id: 71, name: "كفتة ارز", price: 279.99, category: "جاهز للتسوية" },
  { id: 72, name: "شاورما لحمة متبلة", price: 434.99, category: "جاهز للتسوية" },
  { id: 73, name: "برجر شيدر", price: 419.99, category: "جاهز للتسوية" },
  { id: 74, name: "برجر رومي", price: 419.99, category: "جاهز للتسوية" },
  { id: 75, name: "شاورما لحم 15%", price: 479.99, category: "جاهز للتسوية" },
  { id: 76, name: "مفروم بلدي عادي 30%", price: 424.99, category: "جاهز للتسوية" },
  { id: 77, name: "ممبار", price: 169.99, category: "جاهز للتسوية" },
  { id: 78, name: "ممبار محشي", price: 139.99, category: "جاهز للتسوية" },
  { id: 91, name: "كباب حلة", price: 459.99, category: "جاهز للتسوية" },
  { id: 92, name: "كولاتة", price: 479.99, category: "جاهز للتسوية" },

  { id: 87, name: "عمود سن عادي 30%", price: 444.99, category: "الكندوز" },
  { id: 88, name: "ريش عجالي ملبس 30%", price: 429.99, category: "الكندوز" },
  { id: 89, name: "عمود سن أحمر 10%", price: 484.99, category: "الكندوز" },
  { id: 90, name: "عمود سن مميز 20%", price: 459.99, category: "الكندوز" },
  { id: 93, name: "ظهر فخدة", price: 474.99, category: "الكندوز" },
  { id: 94, name: "انتروكوت / ستيك", price: 479.99, category: "الكندوز" },
  { id: 95, name: "انتروكوت / قطع", price: 479.99, category: "الكندوز" },
  { id: 96, name: "موزة", price: 479.99, category: "الكندوز" },
  { id: 97, name: "بوفتيك", price: 489.99, category: "الكندوز" },
  { id: 98, name: "وش فخدة", price: 489.99, category: "الكندوز" },
  { id: 99, name: "فلتو", price: 499.99, category: "الكندوز" },
  { id: 100, name: "عرق ترياناكو", price: 484.99, category: "الكندوز" },
  { id: 101, name: "كتف عجالي", price: 479.99, category: "الكندوز" },
  { id: 102, name: "سمانه", price: 489.99, category: "الكندوز" },
  { id: 103, name: "قشرة", price: 479.99, category: "الكندوز" },
];

const categories: Category[] = [
  {
    key: "جاهز للتسوية",
    label: "جاهز للتسوية",
    icon: Flame,
    image: "/images/cat-ready.png",
    gradient: "from-crimson to-crimson-dark",
    badge: "الأكثر طلباً",
    products: allProducts.filter((p) => p.category === "جاهز للتسوية"),
  },
  {
    key: "الكندوز",
    label: "الكندوز",
    icon: Crown,
    image: "/images/cat-premium.png",
    gradient: "from-gold to-gold-dark",
    badge: "مميز",
    products: allProducts.filter((p) => p.category === "الكندوز"),
  },
  {
    key: "حجز مسبق",
    label: "حجز مسبق",
    icon: Sparkles,
    image: "/images/cat-preorder.png",
    gradient: "from-charcoal-lighter to-charcoal-light",
    badge: "حجز الآن",
    products: allProducts.filter((p) => p.category === "حجز مسبق"),
  },
];

const cardGradients = [
  "from-crimson/20 to-crimson/5",
  "from-gold/20 to-gold/5",
  "from-charcoal-lighter/40 to-charcoal-light/20",
];

function formatPrice(price: number): string {
  return price.toFixed(2);
}

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />

      {/* Decorative */}
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
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest mb-4">
            تشكيلة متنوعة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            منتجاتنا{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-crimson-light to-gold">
              المميزة
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            اكتشف مجموعتنا الواسعة من اللحوم الطازجة —{" "}
            {allProducts.length} منتج متنوع في 3 تصنيفات
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeTab === index;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  relative flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-500
                  ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/5"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-l ${cat.gradient}`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 ${isActive ? "text-white" : ""}`} />
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-gray-500"
                  }`}
                >
                  {cat.products.length}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Category Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden mb-10 h-48 sm:h-56"
          >
            <Image
              src={activeCategory.image}
              alt={activeCategory.label}
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-l ${activeCategory.gradient} opacity-70`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                {(() => {
                  const Icon = activeCategory.icon;
                  return <Icon className="w-6 h-6 text-white" />;
                })()}
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeCategory.label}
                </h3>
              </div>
              <p className="text-white/70 text-sm sm:text-base">
                {activeCategory.products.length} منتج متاح — اضغط على أي منتج
                لإضافته للسلة
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.key + "-grid"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {activeCategory.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.04, 0.6),
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-light/40 border border-white/5 hover:border-crimson/20 transition-all duration-500 hover:shadow-xl hover:shadow-crimson/5"
              >
                {/* Card gradient top */}
                <div
                  className={`h-28 bg-gradient-to-br ${cardGradients[activeTab]} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <ShoppingBag className="w-12 h-12 text-white/10 group-hover:text-white/20 transition-colors duration-500" />

                  {/* Category badge on card */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold text-white bg-gradient-to-l ${activeCategory.gradient}`}
                    >
                      {activeCategory.badge}
                    </span>
                  </div>

                  {/* Price tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black text-crimson-light bg-black/60 backdrop-blur-sm">
                      {formatPrice(product.price)} ر.س
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    {activeCategory.label} • السعر بالكيلو
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-crimson-light">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-gray-500">ر.س</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeCategory.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Scroll to top of products hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            عرض{" "}
            <span className="text-gold font-bold">
              {activeCategory.products.length}
            </span>{" "}
            منتج في تصنيف{" "}
            <span className="text-white font-semibold">
              {activeCategory.label}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
