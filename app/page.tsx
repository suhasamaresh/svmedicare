import Image from "next/image";
import Link from "next/link";
import About from "./pages/About";
import Tesimonials from "./pages/Carousel"
import Contact from "./pages/Contact";

export default function Home(){
  return (
    <div >
      <div className=" bg-black items-center  justify-evenly md:flex xs:justify-between,items-center text-center md:pt-10 sm:pt-5 md:pb-10">
        <h1 className="text-bold font-goblin text-4xl text-[#FFCA3A] pt-10">SV MEDICARE SYSTEMS</h1>
        <p className="text-[#FFCA3A] pt-5 pr-10">
        Revolutionizing the world of hospital equipment, one gadget at a time.<br></br> Discover our jaw-dropping range of medical marvels.
        </p>
      </div>
      <img src="/web.jpg" alt="An operation lab" className="bg-black rounded-b-[100px] grayscale object-contain pt-10"/>
      <About/>
      <Tesimonials/>
      <Contact/>
    </div>
  );
}


