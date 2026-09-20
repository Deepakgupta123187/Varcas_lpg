import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import { WhatsAppFloat } from "@/components/home/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VARCAS | Heavy Duty LPG Iron Press",
    template: "%s | VARCAS",
  },
  description:
    "Made in India Heavy Duty LPG Iron Press with Infra Heat Technology for professional laundries and dry cleaners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
