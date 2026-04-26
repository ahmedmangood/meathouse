"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  MessageCircle,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "منتجاتنا", href: "#products" },
  { label: "عروضنا", href: "#offers" },
  { label: "من نحن", href: "#about" },
  { label: "اتصل بنا", href: "#contact" },
];

const categoryLinks = ["جاهز للتسوية", "الكندوز", "حجز مسبق"];

const socialLinks = [
  {
    icon: "/icons/instagram.svg",
    label: "انستقرام",
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmeathouse.eg%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExcm1qOU1WY0VzR1JJWXZSUHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR48nZn5ivpuiI80mdV3pmQd-tjbcFV5-g25WzRC48yyISj9Hw9c9azP4mbVOg_aem_v_WNH3ziPGRVW1NHcjbwtQ&h=AT5vf_zfKfXt_PUwPni-aRRlTkoFJTabtGbD5AJdgssy09TpgpIFZZKNSh_pKKCXFVyoeYtSni-3pjYlV5jDyJ1m54ncKWOkLxCVfgoDXFGE35ODIR0WG6tGjLqCapdzsRuzvP_83V6RcX5rz4dE",
  },
  {
    icon: "/icons/tiktok.svg",
    label: "تيك توك",
    href: "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40meathouse.eg%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExcm1qOU1WY0VzR1JJWXZSUHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7CgYd3CatTLlipExeDnCsYCJqMqU3K8ocbanafAXk8nDv3LurzhA2CWPJ0eA_aem_1qmBN6-14qNAeB7bcUcRBg&h=AT6g1cJnNpR-D3867YFj1Wb16eB14j7i-ZEiKpq3xyzJ25TVor_RN52fw6mPBL4o-vhlh7itcsIAV-n8UtC1s6dU_YByH2G9YfX7B0RNbE42kjS_-zHnIJamE2JabR5pGPzv3TtWpYLo9JWl5xUT",
  },
  {
    icon: "/icons/whatsapp.svg",
    label: "واتساب",
    href: `https://wa.me/201556600033?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن منتجاتكم")}`,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black to-charcoal-dark" />

      {/* Top decorative line */}
      <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-l from-transparent via-crimson/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="بيت اللحوم"
                width={45}
                height={45}
                className="rounded-full"
              />
              <div>
                <span className="text-lg font-bold text-white">MeatHouse</span>
                <span className="block text-sm text-gold">بيت اللحوم</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              وجهتكم الأولى للحصول على أجود أنواع اللحوم الطازجة. نلتزم بأعلى
              معايير الجودة والسلامة الغذائية.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+201556600033"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+20 155 660 0033</span>
              </a>
              <a
                href="mailto:info@meathouse.shop"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span dir="ltr">info@meathouse.shop</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <Link
                  href="https://maps.app.goo.gl/bvasBjTrDfuye4SG7"
                  target="_blank"
                >
                  دله_شارع مدرسة الزراعة أمام أبراج القضاة بجوار هايبر الأبرار ,
                  Faiyum, Egypt, 63511
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson/50 group-hover:bg-gold transition-colors duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">التصنيفات</h3>
            <ul className="space-y-3">
              {categoryLinks.map((category, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson/50 group-hover:bg-gold transition-colors duration-300" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">تابعنا</h3>
            <p className="text-gray-400 text-sm mb-5">
              تابعنا على وسائل التواصل الاجتماعي لمعرفة آخر العروض والتحديثات
            </p>

            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-crimson hover:border-crimson transition-all duration-300"
                  >
                    <Image
                      src={Icon}
                      alt={social.label}
                      width={20}
                      height={20}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} بيت اللحوم | MeatHouse. جميع الحقوق
              محفوظة.
            </p>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-crimson/20 text-crimson-light flex items-center justify-center hover:bg-crimson hover:text-white transition-all duration-300"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
