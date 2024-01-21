"use client"
import { Accordion, NextUIProvider } from "@nextui-org/react";
import Nav from "./components/nav";
import Accordian from "./components/accordion";
import {Image} from "@nextui-org/react";
import Timeline from "./components/timeline";

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

<div className=" my-8 px-4 m-auto max-w-7xl flex gap-4  w-full items-center justify-evenly max-md:flex-col">
<div className="flex flex-col gap-2 my-4">
  <div className=" flex items-center gap-6 max-w-md max-md:flex-col-reverse">
    <Image src="/images/headshot-4.jpg" width={80} height={10}  alt="Ari headshot" className="rounded-full border-solid border-2 border-violet-950"/>
    <h2 className="font-bold text-2xl max-md:text-center ">A Coach, Bodybuilder and a dedicated<span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> Mentor </span> </h2>
    </div>
    <p className="max-w-md max-md:text-center max-md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>

<Image isZoomed isBlurred src="/images/posing-pic.jpg" width={300} height={300}  alt="Ari posing" />
</div>

<Timeline />

<h2 className="font-bold text-2xl m-auto px-4 w-full text-center my-6">Frequently Asked Questions</h2>

<div className="px-4 items-center justify-center flex">


<Accordian  />


</div>
</NextUIProvider>
  )
}
