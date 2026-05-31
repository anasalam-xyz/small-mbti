import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnswersProvider } from "@/context/AnswersContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Small MBTI",
  description: "Find out your personality type.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col justify-between items-center">
          <AnswersProvider>
        <Navigation/>
        <div className="h-full flex-1 flex items-center justify-center">
            {children}
        </div>
        <Footer/>
          </AnswersProvider>
      </body>
    </html>
  );
}
