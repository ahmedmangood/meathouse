"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Timer, MessageCircle } from "lucide-react";
import Image from "next/image";

const offers = [
  {
    image: "/images/hero1.png",
    title: "باقة العائلة",
    description: "5 كجم لحوم ممتازة + 2 كجم كباب + توابل مجانية",
    originalPrice: "550",
    price: "399",
    tag: "وفر 150 ج.م",
    tagColor: "from-crimson to-crimson-dark",
  },
  {
    image: "/images/hero2.png",
    title: "باقة المشويات",
    description: "3 كجم ضلع غنم + 2 كجم رibs + صوص باربيكيو",
    originalPrice: "420",
    price: "299",
    tag: "وفر 121 ج.م",
    tagColor: "from-gold to-gold-dark",
  },
  {
    image: "/images/hero3.png",
    title: "باقة الأسبوع",
    description: "تشكيلة متنوعة من أفضل اللحوم تكفي لمدة أسبوع",
    originalPrice: "750",
    price: "549",
    tag: "الأكثر طلباً",
    tagColor: "from-crimson to-gold",
  },
];

const stats = [
  { value: "+10,000", label: "عميل سعيد" },
  { value: "+50,000", label: "طلب شهرياً" },
  { value: "+100", label: "منتج متنوع" },
  { value: "4.9", label: "تقييم العملاء" },
];

const WHATSAPP_NUMBER = "201556600033";

export default function SpecialOffers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offers" className="py-24 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black to-charcoal" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,97,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 border border-crimson/20 rounded-full text-crimson-light text-sm font-semibold mb-6"
          >
            <Flame className="w-4 h-4" />
            عروض محدودة المدة
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            عروض{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-crimson-light to-gold">
              لا تفوتها
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            استمتع بباقاتنا المميزة بأسعار لا تُقاوم - العرض ينتهي قريباً!
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl overflow-hidden bg-charcoal-light/30 border border-white/5 hover:border-crimson/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-l ${offer.tagColor} shadow-lg`}
                  >
                    {offer.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <Timer className="w-5 h-5 text-crimson-light flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-crimson-light">
                      {offer.price}
                    </span>
                    <span className="text-sm text-gray-500">ج.م</span>
                  </div>
                  <span className="text-lg text-gray-500 line-through">
                    {offer.originalPrice}
                  </span>
                </div>

                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`مرحباً، أريد طلب: ${offer.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-5 py-3.5 bg-gradient-to-l from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  اطلب عبر واتساب
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-crimson/5 to-transparent border border-white/5"
            >
              <motion.span
                className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold to-gold-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.span>
              <p className="text-sm text-gray-400 mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
