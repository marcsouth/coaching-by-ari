"use client"
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/nav";
import Accordian from "./components/accordion";
import {Image} from "@nextui-org/react";
import Timeline from "./components/timeline";
import Services from "./components/services";
import Footer from "./components/footer";
import Form from "./components/form";

export default function Home() {
  return (
<NextUIProvider>
  <Nav />
  <div className="relative flex py-12 flex-col items-center w-full h-96 px-4 m-auto">
  <div className="absolute inset-0 bg-[url('/images/landing-3.jpg')] bg-cover bg-top w-full  brightness-50"></div>

  {/* Text elements */}
  <div className="relative z-41">
    <h1 className="font-bold text-7xl text-center text-white">COACHING <span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> BY ARI </span></h1>
    <p className="text-center text-white mt-2">an award-winning coach that truly cares</p>
  </div>
</div>

<br id='about' />
<br />

<div className=" mb-8 px-4 m-auto max-w-7xl flex gap-4  w-full items-center justify-evenly max-md:flex-col" >
<div className="flex flex-col gap-2 my-4">
  <div className=" flex items-center gap-6 max-w-md max-md:flex-col-reverse">
    <Image src="/images/headshot-4.jpg" width={80} height={10}  alt="Ari headshot" className="rounded-full border-solid border-2 border-violet-950"/>
    <h2 className="font-bold text-2xl max-md:text-center ">A Coach, Bodybuilder and a dedicated<span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> Mentor </span> </h2>
    </div>
    <p className="max-w-md max-md:text-center max-md:mt-4">Ari , it’s been a true pleasure and an honor getting to know someone as unique, beautiful and smart as yourself. You’re truly one of one. Your strength and dedication is something to be admired greatly. Not only that but your ability to brighten someone’s cloudiest day with that smile of yours. Not only
Are you strong and dedicated but also
Incredibly talented in so many ways. You never fail to amaze me. I hope this site helps you on your fitness and coaching journey. Peace and love x2 

- Mayor Mike </p>

</div>



<div>

<Image isZoomed isBlurred src="/images/posing-pic.jpg" width={300} height={300}  alt="Ari posing" />
<p className="text-gray-400 italic text-center">NPC 2023 Championship</p>

</div>
</div>


<Timeline />


<div className="px-4 items-center justify-center flex max-w-2xl m-auto my-6 max-md:text-center">
<blockquote className="relative">
  <svg className="absolute -top-6 -start-4 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
  </svg>

  <div className="relative z-10">
    <p className="text-large font-semibold text-white"><em>
    A coaches strategy to increase muscle size and strength apply not only to athletic performance, but also to the health and quality of life for any clients they train throughout their career as a fitness professional
    </em></p>
  </div>

  <footer className="mt-6">
    <div className="text-base font-normal text-gray-800 dark:text-gray-400"><span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> Arianna Wasley </span></div>
  </footer>
</blockquote>



</div>

<br id="services" />
<br />



<h2 className="font-bold text-2xl m-auto px-4 w-full text-center my-6" id="services"> Services </h2>


<div className="bg-[url('/images/blurry-balls.svg')] bg-cover w-full bg-center py-24 max-md:py-0 ">

<Services />
</div>

<br id="faq" />
<br />

<h2 className="font-bold text-2xl m-auto px-4 w-full text-center mb-6" >Frequently Asked Questions</h2>

<div className="px-4 items-center justify-center flex">


<Accordian  />


</div>

<div className="flex items-center w-full justify-evenly max-w-7xl m-auto px-4 flex-col mt-12 gap-8" >

  <Image src='./images/qoute-image.jpg' width={400} height={400} alt="ari posing" className="m-auto px-8 " isBlurred />

<div className="px-4 items-center justify-center flex max-w-md  mt-6 text-center">
<blockquote className="relative">
  <svg className="absolute -top-6 -start-4 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
  </svg>

  <div className="relative z-10">
    <p className="text-large font-semibold text-white"><em>
    Bodybuilding is an art, your body is the canvas, weights are your brush and nutrition is your paint. We all have the ability to turn a self-portrait into a masterpiece.
    </em></p>
  </div>

  <footer className="mt-6">
    <div className="text-base font-normal text-gray-800 dark:text-gray-400"><span className="bg-gradient-to-r from-sky-400 to-violet-600 bg-clip-text text-transparent"> Kai Greene </span></div>
  </footer>
</blockquote>



</div>

</div>

<div className="bg-[url('/images/contact-design.svg')] bg-cover bg-top w-full py-28 flex items-center justify-center flex-col">

<br id="contact" />
<br />



<h2 className="font-bold text-2xl m-auto px-4 w-full text-center my-2  ">Contact</h2>

<p className="text-center text-gray-400 mb-8 ">Take a step forward in your fitness journey today</p>

<Form />
</div>
<Footer />
</NextUIProvider>
  )
}
