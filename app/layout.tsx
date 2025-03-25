import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { CountryProvider } from './context/CountryContext';
import { ThemeToggle } from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Learn some facts about any country in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider>
          <header className='flex justify-between py-8 px-4 bg-transparent dark:bg-secondary'>
          <h1 className='font-bold text-xl'>Where in the world?</h1>
          <ThemeToggle/>
        </header>
        <CountryProvider>
          {children}
        </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
