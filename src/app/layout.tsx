import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from './components/Navbar'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next E-commerce 15",
  description: "Next E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" " lang="en">
      <body className={`${clsx('antialiased', 'bg-slate-700', 'p-4')} `}>
        <Navbar />

        <main className=" h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
