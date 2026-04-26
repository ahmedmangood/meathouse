"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Flame,
  Sparkles,
  Crown,
  MessageCircle,
  X,
  Eye,
  Tag,
  Scale,
  Star,
  Truck,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { allProducts, categories, Category, Product } from "@/lib/products";

const categoryImages: Record<string, string> = {
  "جاهز للتسوية": "/images/cat-ready.png",
  الكندوز: "/images/cat-premium.png",
  "حجز مسبق": "/images/cat-preorder.png",
};

const categoryGradients: Record<string, string> = {
  "جاهز للتسوية": "from-crimson to-crimson-dark",
  الكندوز: "from-gold to-gold-dark",
  "حجز مسبق": "from-charcoal-lighter to-charcoal-light",
};

function formatPrice(price: number): string {
  return price.toFixed(2);
}

const WHATSAPP_NUMBER = "201556600033";

function getWhatsAppLink(productName: string): string {
  const message = encodeURIComponent(`مرحباً، أريد طلب: ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const activeCategory = categories[activeTab];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-charcoal to-black" />

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
            <span className="text-transparent bg-clip-text bg-linear-to-l from-crimson-light to-gold">
              المميزة
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            اكتشف مجموعتنا الواسعة من اللحوم الطازجة — {allProducts.length} منتج
            متنوع في 3 تصنيفات
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
                className={`relative flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-500 ${
                  isActive
                    ? "text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-2xl bg-linear-to-l ${cat.gradient}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  className={`w-5 h-5 relative z-10 ${isActive ? "text-white" : ""}`}
                />
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
              className={`absolute inset-0 bg-linear-to-l ${activeCategory.gradient} opacity-70`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <activeCategory.icon className="w-6 h-6 text-white" />
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeCategory.label}
                </h3>
              </div>
              <p className="text-white/70 text-sm sm:text-base">
                {activeCategory.products.length} منتج متاح — اضغط على أي منتج
                لعرض التفاصيل
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
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                category={activeCategory}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Products count */}
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Product Card ─── */

function ProductCard({
  product,
  index,
  category,
  onSelect,
}: {
  product: Product;
  index: number;
  category: Category;
  onSelect: () => void;
}) {
  const gradClass = category.gradient;
  const badgeText = category.badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6) }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative rounded-2xl overflow-hidden bg-charcoal-light/40 border border-white/5 hover:border-crimson/20 transition-all duration-500 hover:shadow-xl hover:shadow-crimson/5"
    >
      {/* Card image area - clickable */}
      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSelect();
        }}
        className="w-full h-56 bg-linear-to-br from-crimson/20 to-crimson/5 flex items-center justify-center relative overflow-hidden cursor-pointer"
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
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
        />
        {/* Hover overlay with eye icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={
              "px-2.5 py-1 rounded-lg text-[10px] font-bold text-white bg-linear-to-l " +
              gradClass
            }
          >
            {badgeText}
          </span>
        </div>

        {/* Price tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg text-xs font-black text-crimson-light bg-black/60 backdrop-blur-sm">
            {formatPrice(product.price)} ج.م
          </span>
        </div>

        {/* View hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            اضغط للتفاصيل
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          {category.label} • السعر بالكيلو
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-crimson-light">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-gray-500">ج.م</span>
          </div>

          <motion.a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
            title="اطلب عبر واتساب"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Product Detail Modal ─── */

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const catImage = categoryImages[product.category] || "/images/hero1.png";
  const catGrad =
    categoryGradients[product.category] || "from-crimson to-crimson-dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-charcoal border border-white/10 shadow-2xl shadow-crimson/10"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-crimson/80 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/40 to-transparent" />
          <div
            className={
              "absolute inset-0 bg-linear-to-l " + catGrad + " opacity-30"
            }
          /> */}

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span
              className={
                "px-4 py-1.5 rounded-full text-sm font-bold text-white bg-linear-to-l " +
                catGrad +
                " shadow-lg"
              }
            >
              {product.category}
            </span>
          </div>

          {/* Price tag */}
          <div className="absolute bottom-6 right-6">
            <div className="px-5 py-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-3xl font-black text-crimson-light">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-gray-300 mr-1">ج.م</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Product Name */}
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6 text-base">
            {product.description}
          </p>

          {/* Info chips */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="w-9 h-9 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                <Tag className="w-4 h-4 text-crimson-light" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">التصنيف</p>
                <p className="text-sm font-semibold text-white">
                  {product.category}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">السعر بالكيلو</p>
                <p className="text-sm font-semibold text-white">
                  {formatPrice(product.price)} ج.م
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">الجودة</p>
                <p className="text-sm font-semibold text-white">طازج يومياً</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">التوصيل</p>
                <p className="text-sm font-semibold text-white">توصيل مبرّد</p>
              </div>
            </div>
          </div>

          {/* Delivery note */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/10 mb-6">
            <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gold mb-1">
                ملاحظة التوصيل
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                يتم تجهيز الطلب في نفس اليوم. التوصيل خلال 2-4 ساعات داخل
                القاهرة والجيزة. للحصول على أفضل نضارة، يرجى الطلب مبكراً.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 bg-linear-to-l from-green-500 to-green-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              اطلب عبر واتساب
            </motion.a>
            <button
              onClick={onClose}
              className="px-6 py-4 border border-white/10 text-gray-400 font-semibold rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              إغلاق
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
