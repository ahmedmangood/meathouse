"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Truck, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "جودة عالية",
    description: "نختار أفضل القطع من أفضل المزارع لضمان أعلى جودة",
    gradient: "from-crimson to-crimson-dark",
  },
  {
    icon: Clock,
    title: "طازج يومياً",
    description: "لحومنا تصل إليك طازجة",
    gradient: "from-gold to-gold-dark",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "خدمة توصيل لجميع المناطق ",
    gradient: "from-crimson to-crimson-dark",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الصحة",
    description: "جميع منتجاتنا خاضعة لفحص صحي دقيق وشهادات جودة معتمدة",
    gradient: "from-gold to-gold-dark",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-charcoal to-black" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-gold font-semibold text-sm tracking-widest mb-4"
          >
            لماذا تختارنا
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            نقدم لك{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-crimson-light to-gold">
              الأفضل دائماً
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نلتزم بأعلى معايير الجودة والسلامة لتقديم لحوم طازجة ومميزة
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-charcoal-light/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 right-0 h-1 bg-linear-to-l ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
