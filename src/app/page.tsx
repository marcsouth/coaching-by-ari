"use client"
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/nav";

export default function Home() {
  return (
<NextUIProvider>
  <Nav />

  <div className=" flex py-12  flex-col items-center bg-[url('/images/landing-image.jpg')] bg-cover bg-top w-full h-96 brightness-75">


    </div>


    <h1 className="font-bold text-7xl text-center"> COACHING BY ARI</h1>

<p className="text-center"> an award winning coach that truly cares</p>

</NextUIProvider>
  )
}
