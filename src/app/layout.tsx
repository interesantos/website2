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
  icons: {
    icon: '/favicon.ico',
  },
  title: "SamuiWater.com - Pure Bottled Water Delivery in Koh Samui",
  description: "TFDA-approved bottled water delivered to your hotel, villa, Airbnb or home in Koh Samui. Perfect for tourists and expats.",
  openGraph: {
    title: "SamuiWater.com - Pure Bottled Water Delivery in Koh Samui",
    description: "TFDA-approved bottled water delivered to your hotel, villa, Airbnb or home in Koh Samui. Perfect for tourists and expats.",
    url: "https://samuiwater.com",
    siteName: "Samui Water Delivery",
    images: [
      {
        url: "https://samuiwater.com/images/checkout_laptop-min.webp",
        width: 1200,
        height: 630,
        alt: "Checkout process on SamuiWater.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SamuiWater.com - Pure Bottled Water Delivery in Koh Samui",
    description: "TFDA-approved bottled water delivered to your hotel, villa, Airbnb or home in Koh Samui. Perfect for tourists and expats.",
    images: ["https://samuiwater.com/images/checkout_laptop-min.webp"],
  },
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
