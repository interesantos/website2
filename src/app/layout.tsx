import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
// Layout component imported in [lang]/layout.tsx
import { CartProvider } from "@/context/CartContext";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SamuiWater.com - Pure Water Delivery in Koh Samui",
  description: "FDA-approved bottled water delivered to your hotel, villa, or home in Koh Samui. Perfect for tourists and expats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
