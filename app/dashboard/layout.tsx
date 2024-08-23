import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { Metadata } from 'next';

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


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div >
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav />
        </div>

        <div className='md:ml-64'>
            <Header />
            {children}
        </div>
        
    </div>
  )
}

export default layout