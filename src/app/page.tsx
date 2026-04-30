"use client";

import Navbar from "@/components/meathouse/Navbar";
import HeroSlider from "@/components/meathouse/HeroSlider";
import Features from "@/components/meathouse/Features";
import ProductsTabs from "@/components/meathouse/ProductsTabs";
import SpecialOffers from "@/components/meathouse/SpecialOffers";
import About from "@/components/meathouse/About";
import Testimonials from "@/components/meathouse/Testimonials";
import Contact from "@/components/meathouse/Contact";
import Footer from "@/components/meathouse/Footer";
import FloatingWhatsApp from "@/components/meathouse/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ProductsTabs />
      <Features />
      <About />
      {/* <SpecialOffers /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
