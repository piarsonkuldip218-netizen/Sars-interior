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
  title: "SARS Interiors - Premium Plywood & Interior Solutions",
  description: "SARS Interiors, Tezpur - Leading provider of premium plywood, modular kitchen accessories, glass, wallpapers, and aluminum doors & windows. ISO 9001:2015 certified.",
  keywords: "plywood, interior design, modular kitchen, Tezpur, Assam, glass, wallpapers, aluminum doors, windows",
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
