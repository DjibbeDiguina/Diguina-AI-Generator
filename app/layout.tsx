import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HomeHeader from "./_component/HomeHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diguina AI Generator | Effortlessly Generate High-Quality Content with AI",
  description: "Diguina AI Content Generator allows you to effortlessly create high-quality content using AI. Transform your ideas into polished text and visuals in seconds—no coding required. Try it for free today!",
  keywords: "AI Content Generator, No-Code AI Tool, Effortless Content Creation, AI-Powered Content",
  openGraph: {
    title: "Diguina AI Generator",
    description: "Transform your ideas into polished text and visuals in seconds—no coding required.",
    url: "https://www.diguina-ai-generator.com",
    type: "website",
   
  },
  twitter: {
    card: "summary_large_image",
    title: "Diguina AI Generator",
    description: "Effortlessly generate high-quality content with AI.",
   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div>
        
        {children}
        </div>
        </body>
    </html>
    </ClerkProvider>
  );
}
