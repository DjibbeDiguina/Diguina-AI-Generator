import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeHeader from "./_component/HomeHeader";
import Hero from "./_component/Hero";

export default function Home() {
  return (
<div className="relative w-full ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>
      <div className="relative p-2 py-8 md:px-10 lg:px-20 ">
        <HomeHeader />
        <Hero />
      </div>
    </div>
  )
}
