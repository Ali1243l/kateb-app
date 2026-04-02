import type { Metadata } from "next";
import { Tajawal, Cairo } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"], // Display/Headlines
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600"], // Body text reading format
});

export const metadata: Metadata = {
  title: "منصة الأرشيف الرقمي | التقارير الأكاديمية",
  description: "نظام كتابة وتوليد التقارير الجامعية الأكاديمية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-[var(--color-surface)] text-[var(--color-on-surface)] leading-[1.6]">
        {children}
      </body>
    </html>
  );
}
