import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE, FAQ } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";
import ContactDialogProvider from "@/components/ContactDialogProvider";
import MatrixRain from "@/components/MatrixRain";

const aqua = localFont({
  src: "./fonts/Aqua.ttf",
  variable: "--font-aqua",
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "ByteCodex | Desarrollo de Software, IA y Automatización en Bolivia",
  description:
    "Sistemas a medida, chatbots de WhatsApp con IA, automatizaciones y hosting. Presupuesto cerrado, garantía por escrito y soporte real. Cotiza gratis.",
  keywords: [
    "desarrollo de software Bolivia",
    "chatbot WhatsApp",
    "automatización",
    "sistemas a medida",
    "IA para empresas",
  ],
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "ByteCodex | Desarrollo de Software, IA y Automatización en Bolivia",
    description:
      "Sistemas a medida, chatbots de WhatsApp con IA, automatizaciones y hosting. Presupuesto cerrado, garantía por escrito y soporte real.",
    url: SITE.url,
    siteName: SITE.fullName,
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteCodex | Desarrollo de Software, IA y Automatización en Bolivia",
    description: "Convertimos tu tiempo en software.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo-icon.png`,
  description:
    "Empresa boliviana de desarrollo de software: sistemas a medida, IA, chatbots automatizados, automatización de procesos y hosting.",
  areaServed: "BO",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Paz",
    addressCountry: "BO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "sales",
    areaServed: "BO",
    availableLanguage: ["es"],
  },
  makesOffer: [
    "Desarrollo a medida",
    "Inteligencia Artificial",
    "Chatbots automatizados",
    "Automatizaciones",
    "Hosting y cloud",
    "Consultoría técnica",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${aqua.variable} ${nunito.variable} antialiased`}>
        <MatrixRain />
        <ContactDialogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ContactDialogProvider>
        <Toaster />
      </body>
    </html>
  );
}
