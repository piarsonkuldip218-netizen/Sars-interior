import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "TAMS Dental — Dr. T Hussain | Premium Dental Care in Rangapara",
  description: "TAMS Dental, Rangapara — Premium dental clinic by Dr. T Hussain. Teeth whitening, dental implants, cosmetic dentistry, and check-ups. 4.8★ rated, 68+ reviews.",
  keywords: "dental clinic Rangapara, Dr T Hussain dentist, teeth whitening, dental implants, cosmetic dentistry, TAMS Dental, Sonitpur dentist, Assam dental care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
