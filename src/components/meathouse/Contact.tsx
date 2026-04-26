"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "العنوان",
    details: "شارع الملك فهد، حي العليا، الرياض",
    lines: ["الرياض، المملكة العربية السعودية"],
  },
  {
    icon: Phone,
    title: "الهاتف",
    details: "966-11-XXX-XXXX",
    lines: ["واتساب: 966-50-XXX-XXXX"],
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: "يومياً من 8 صباحاً",
    lines: ["حتى 11 مساءً"],
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    details: "info@meathouse.sa",
    lines: ["للاستفسارات والطلبات"],
  },
];

const socialLinks = [
  { icon: Instagram, label: "انستقرام", href: "#" },
  { icon: Twitter, label: "تويتر", href: "#" },
  {
    icon: MessageCircle,
    label: "واتساب",
    href: `https://wa.me/201556600033?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن منتجاتكم")}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-charcoal via-black to-charcoal" />

      {/* Decorative */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-crimson/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            نحن هنا{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-crimson-light to-gold">
              لخدمتك
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            لا تتردد في التواصل معنا لأي استفسار أو طلب
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-charcoal-light/30 border border-white/5 hover:border-crimson/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-crimson/20 to-crimson/5 flex items-center justify-center shrink-0 group-hover:from-crimson/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-crimson-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-sm">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium">
                      {info.details}
                    </p>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-gray-500 text-xs">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3 pt-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-crimson hover:border-crimson transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form className="p-8 rounded-2xl bg-charcoal-light/30 border border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    placeholder="05X XXX XXXX"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 text-sm"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 text-sm"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  نوع الطلب
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 text-sm appearance-none">
                  <option value="">اختر نوع الطلب</option>
                  <option value="order">طلب شراء</option>
                  <option value="wholesale">طلب جملة</option>
                  <option value="complaint">شكوى</option>
                  <option value="inquiry">استفسار عام</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  الرسالة
                </label>
                <textarea
                  rows={4}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 transition-all duration-300 text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-l from-crimson to-crimson-dark text-white font-bold rounded-xl hover:shadow-lg hover:shadow-crimson/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
