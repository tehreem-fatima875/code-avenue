
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/sections/PageTransition";
import GlobalReveal from "@/components/sections/GlobalReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Code Avenue | Web Development & Digital Growth",
    template: "%s | Code Avenue",
  },
  description:
    "Code Avenue helps businesses grow with professional websites, e-commerce solutions, and Meta and Google advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
       <PageTransition>
  <GlobalReveal />
  {children}
</PageTransition>
      </body>
    </html>
  );
}
