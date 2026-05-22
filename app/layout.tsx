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
  title: "Interior Studio - Premium Interior Design Solutions",
  description: "Premium interior design and modular kitchen solutions. Crafting beautiful spaces with quality materials and expert design.",
  keywords: "interior design, modular kitchen, plywood, home interiors, premium furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
