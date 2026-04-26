"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Heart, Star } from "lucide-react";

const milestones = [
  "بدأنا كمحل لحوم صغير في الفيوم عام 2002",
  "أطلقنا خدمة التوصيل لتلبية احتياجات عملائنا",
  "أصبحنا الخيار الأول لأكثر من 10,000 عائلة",
];

const values = [
  {
    icon: Heart,
    title: "شغف بالجودة",
    description: "نحب ما نقدمه ونحرص على أن يكون كل منتج بجودة استثنائية",
  },
  {
    icon: Star,
    title: "ثقة العملاء",
    description:
      "بنينا علاقة قوية مع عملائنا على مدار سنوات من الخدمة المتميزة",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "فريق من الجزارين المحترفين والخبراء في اختيار أفضل القطع",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-charcoal to-black" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 rounded-full bg-crimson/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-gold font-semibold text-sm tracking-widest mb-4">
              قصتنا
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              أكثر من{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-l from-crimson-light to-gold">
                15 عاماً
              </span>{" "}
              من الخبرة والتميز
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              منذ تأسيسنا عام 2002، ونحن نسعى لتقديم أفضل تجربة شراء لحوم
              لعملائنا الكرام. بدأنا بحلم صغير وأصبحنا اليوم من أبرز معارض
              اللحوم في محافظة الفيوم، بفضل التزامنا بالجودة والنضارة ورضا
              العملاء.
            </p>

            {/* Milestones */}
            <div className="space-y-4 mb-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-crimson-light shrink-0" />
                  <span className="text-gray-300 font-medium">{milestone}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-l from-crimson to-crimson-dark text-white font-bold rounded-full hover:shadow-2xl hover:shadow-crimson/30 transition-all duration-300"
            >
              تواصل معنا
            </motion.a>
          </motion.div>

          {/* Values Side */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="group flex gap-5 p-6 rounded-2xl bg-charcoal-light/30 border border-white/5 hover:border-crimson/20 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-crimson/20 to-gold/20 flex items-center justify-center shrink-0 group-hover:from-crimson/30 group-hover:to-gold/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative quote
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative p-6 rounded-2xl bg-linear-to-l from-crimson/10 to-gold/5 border border-crimson/10"
            >
              <div className="absolute -top-3 right-6 px-3 py-1 bg-crimson rounded-full text-xs text-white font-bold">
                كلمة المؤسس
              </div>
              <p className="text-gray-300 italic leading-relaxed text-sm">
                &ldquo;الجودة ليست ما تفعله أحياناً، إنها ما تفعله دائماً. نحن
                في بيت اللحوم نعيش هذا المبدأ في كل قطعة لحوم نقدمها.&rdquo;
              </p>
              <p className="text-gold font-bold mt-3 text-sm">
                — عبدالله المالكي، المؤسس
              </p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
