import { Crown, Flame, Sparkles } from "lucide-react";

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

export const allProducts: Product[] = [
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
  {
    id: 72,
    name: "شاورما لحمة متبلة",
    price: 434.99,
    category: "جاهز للتسوية",
  },
  { id: 73, name: "برجر شيدر", price: 419.99, category: "جاهز للتسوية" },
  { id: 74, name: "برجر رومي", price: 419.99, category: "جاهز للتسوية" },
  { id: 75, name: "شاورما لحم 15%", price: 479.99, category: "جاهز للتسوية" },
  {
    id: 76,
    name: "مفروم بلدي عادي 30%",
    price: 424.99,
    category: "جاهز للتسوية",
  },
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

export const categories: Category[] = [
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
