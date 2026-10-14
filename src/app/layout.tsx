import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b2e17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Salato Food Hub | Bhatta Chowk, Kasur — Delightful Taste With Trust",
  description:
    "Award-winning fast food & artisan pizza in Kasur. Signature Tikka Pizzas, Crown Crust, crispy Zinger Burgers, Shawarmas, and Family Deals. Open late until 4 AM! Free home delivery on Rs 1000+. Call 0321-7170063.",
  keywords: [
    "Salato Food Hub",
    "Pizza Kasur",
    "Bhatta Chowk Kasur restaurant",
    "Best Zinger burger Kasur",
    "Late night food Kasur 4 AM",
    "Shawarma Kasur",
    "Fast food Kasur delivery",
    "Jumbo Family Deal Kasur",
  ],
  authors: [{ name: "Salato Food Hub" }],
  openGraph: {
    title: "Salato Food Hub — Delightful Taste With Trust",
    description:
      "Kasur's favorite late-night food spot at Bhatta Chowk. Open daily until 4:00 AM. Free delivery over Rs 1000. Phone: 0321-7170063.",
    url: "https://salatofoodhub.pk",
    siteName: "Salato Food Hub",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Salato Food Hub Signature Pizza & Fast Food",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salato Food Hub Kasur | Open until 4 AM",
    description: "Famous Pizzas, Burgers & Shawarmas at Bhatta Chowk, Kasur. Call 0321-7170063.",
    images: ["https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  "name": BUSINESS_INFO.name,
  "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80",
  "telephone": "+923217170063",
  "servesCuisine": ["Pizza", "Fast Food", "Burgers", "Shawarma", "Pakistani Street Food"],
  "priceRange": "PKR 180 - 3799",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bhatta Goryanwala, Bhatta Chowk",
    "addressLocality": "Kasur",
    "addressRegion": "Punjab",
    "addressCountry": "PK",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.1156",
    "longitude": "74.4500",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "12:00",
      "closes": "04:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "reviewCount": "61",
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
      className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
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
