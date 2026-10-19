import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";

export const viewport: Viewport = {
  themeColor: "#06190e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "BURAK Crispy Juicy Legendary | Kasur, Pakistan",
  description:
    "BURAK Crispy Juicy Legendary located near Railway Crossing (Phatak), Kasur. Signature Injected Broast, Wood-fired Pizzas, Beef Smash Burgers, Mandi Pulao, and Bar B.Q. Dine-in, Takeaway & Free Delivery on Rs 1,000+. Call 0322 1711222.",
  keywords: [
    "BURAK Restaurant Kasur",
    "BURAK Crispy Juicy Legendary",
    "Railway Crossing Kasur food",
    "Best Broast in Kasur",
    "Injected broast Kasur",
    "Pizza Kasur",
    "Kasur restaurant dine-in",
    "Mandi Pulao Kasur",
    "BBQ Kasur",
    "0322 1711222",
  ],
  authors: [{ name: "BURAK Crispy Juicy Legendary" }],
  openGraph: {
    title: "BURAK Crispy Juicy Legendary — Kasur",
    description:
      "Kasur's celebrated dining destination near Railway Crossing (Phatak). Modern ambiance, Injected Broast, Pizzas, Burgers & Bar B.Q. Delivery: 0322 1711222.",
    url: "https://burakrestaurant.pk",
    siteName: "BURAK Crispy Juicy Legendary",
    images: [
      {
        url: "/images/burak_cover.png",
        width: 1200,
        height: 630,
        alt: "BURAK Crispy Juicy Legendary Kasur",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BURAK Crispy Juicy Legendary Kasur",
    description: "Famous Injected Broast, Pizzas, Burgers & Bar B.Q in Kasur. Call 0322 1711222.",
    images: ["/images/burak_cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": BUSINESS_INFO.name,
  "image": "/images/burak_cover.png",
  "telephone": "+923221711222",
  "servesCuisine": ["Fast Food", "Pizza", "Broast", "Burgers", "Pakistani Food", "Barbecue", "Mandi Pulao"],
  "priceRange": "PKR 1000 - 2000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Railway Crossing (Phatak), 4C8V+GPC",
    "addressLocality": "Kasur",
    "addressRegion": "Punjab",
    "addressCountry": "PK",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.1156",
    "longitude": "74.4500",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.9",
    "reviewCount": "39",
  },
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://wa.me/${BUSINESS_INFO.whatsappNumber}`,
      "inLanguage": "en",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    "deliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-forest-dark font-body text-brand-cream selection:bg-brand-pink selection:text-white flex flex-col relative">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
