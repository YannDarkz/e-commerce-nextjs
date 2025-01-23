import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import Navbar from './components/Navbar'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

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
    <ClerkProvider localization={ptBR}>
      <html className=" " lang="en">
        <body className={`${clsx('antialiased', 'bg-slate-700', 'p-4')} `}>
          <Navbar />

          <main className=" h-screen p-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
