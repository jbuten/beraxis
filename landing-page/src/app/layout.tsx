import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020813",
};

export const metadata: Metadata = {
  title: "Beraxis | Tecnología, Innovación e Impacto",
  description:
    "Beraxis desarrolla soluciones de software empresarial, automatización de procesos, integraciones, ciberseguridad e inteligencia artificial para organizaciones y empresas del sector financiero, cooperativo y comercial.",
  keywords: [
    "Beraxis",
    "Software Empresarial",
    "Automatización",
    "SaaS",
    "Integración Tecnológica",
    "José Buten",
    "Transformación Digital",
    "Fintech Dominicana",
    "Desarrollo de Software Dominicana"
  ],
  authors: [{ name: "José Buten" }],
  metadataBase: new URL("https://beraxis.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/assets/app_icon_512.png",
  },
  openGraph: {
    title: "Beraxis | Tecnología, Innovación e Impacto",
    description:
      "Desarrollamos software empresarial a medida, automatización e infraestructura tecnológica con enfoque en seguridad y escalabilidad.",
    url: "https://beraxis.com",
    siteName: "Beraxis",
    locale: "es",
    type: "website",
    images: [
      {
        url: "/assets/logo_principal.png",
        width: 1200,
        height: 630,
        alt: "Beraxis - Software Empresarial y Consultoría Estratégica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beraxis | Tecnología, Innovación e Impacto",
    description:
      "Software empresarial, automatización e innovación tecnológica para organizaciones modernas.",
    images: ["/assets/logo_principal.png"],
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
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#020813] text-[#F1F3F7]">
        {children}
      </body>
    </html>
  );
}
