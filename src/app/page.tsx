"use client"
import { Accordion, NextUIProvider } from "@nextui-org/react";
import Nav from "./components/nav";
import Accordian from "./components/accordion";

export default function Home() {
  return (
<NextUIProvider>
  <Nav />
  <div className="relative flex py-12 flex-col items-center w-full h-96 px-4">
  <div className="absolute inset-0 bg-[url('/images/landing-3.jpg')] bg-cover bg-top w-full  brightness-50"></div>

  {/* Text elements */}
  <div className="relative z-41">
    <h1 className="font-bold text-7xl text-center text-white">COACHING <span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> BY ARI </span></h1>
    <p className="text-center text-white mt-2">an award-winning coach that truly cares</p>
  </div>
</div>

<div className="px-4 ">

<Accordian  />


</div>
</NextUIProvider>
  )
}
