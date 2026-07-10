import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BERAXIS | Tecnología empresarial y productos digitales",
  description: "BERAXIS desarrolla plataformas empresariales, soluciones digitales e integraciones para cooperativas, instituciones y negocios en crecimiento.",
  keywords: ["BERAXIS", "NexCoopCore", "VeriDoc360", "URUPOS", "software empresarial", "transformación digital", "core cooperativo", "firma digital", "ERP", "automatización", "República Dominicana"],
  authors: [{ name: "BERAXIS" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "BERAXIS | Tecnología empresarial y productos digitales",
    description: "BERAXIS desarrolla plataformas empresariales, soluciones digitales e integraciones para cooperativas, instituciones y negocios en crecimiento.",
    type: "website",
    locale: "es_DO",
    url: "https://beraxis.com",
    siteName: "BERAXIS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${orbitron.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
