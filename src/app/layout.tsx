import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ChatBot from "@/components/ChatBot";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://polystyrene-recycling.vercel.app"),
  title: {
    default: "PolyRecycle | Polystyrene Recycling Education",
    template: "%s | PolyRecycle",
  },
  description:
    "Learn about polystyrene recycling, environmental impact, and sustainable solutions. Discover how to recycle polystyrene, explore fun facts, and find recycling locations near you.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PolyRecycle",
    images: [
      {
        url: "/images/hero-recycling.jpg",
        width: 1200,
        height: 630,
        alt: "PolyRecycle - Polystyrene Recycling Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <NewsletterSignup />
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
