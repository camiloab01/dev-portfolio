import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Loader from "@/components/Loader";
import Header from "@/components/layouts/header";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "camiloab01.dev",
  description: "Software Developer",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://www.camiloab01.dev",
    title: "camiloab01.dev",
    description:
      "Software Developer based in Chicago, specializing in Web3 technologies and full-stack development.",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://ibb.co/BVZRHGFJ",
      },
    ],
  },
  authors: {
    name: "Camilo Aguero",
  },
  generator: "NextJs",
  keywords: [
    "Portfolio",
    "Software Developer",
    "Web3",
    "Chicago",
    "Camilo Aguero Botero",
    "camiloab01",
    "camiloab01.dev",
    "React",
    "NextJS",
    "TypeScript",
    "Frontend",
    "Backend",
    "Full Stack",
  ],
  creator: "Camilo Aguero",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVJDG3WKDN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVJDG3WKDN');
        `}
      </Script>
      <Analytics />
      <body className={jetbrainsMono.className}>
        <Loader />
        <Header />
        {children}
      </body>
    </html>
  );
}
