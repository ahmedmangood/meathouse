import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "بيت اللحوم | MeatHouse - أجود أنواع اللحوم",
  description:
    "بيت اللحوم - وجهتكم الأولى للحصول على أجود أنواع اللحوم الطازجة. نوفر لكم أفضل اللحوم بجودة عالية وأسعار مناسبة مع خدمة توصيل مميزة.",
  keywords: [
    "بيت اللحوم",
    "MeatHouse",
    "لحوم طازجة",
    "لحوم",
    "ذبيحة",
    "توصيل لحوم",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
