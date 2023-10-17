// Navbar.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHome, AiFillMedicineBox, AiOutlineContacts } from "react-icons/ai";
import { FcAbout } from 'react-icons/fc';
import { FaWpforms } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className=" bg-black md:pt-14">
      <div className="container mx-auto flex justify-between items-center xl:px-32">
        <div className="flex pl-12">
          <Link href={"/"}>
            <Image src="/next.svg" alt="logo" width={30} height={30} />
            <p className="max-sm:hidden font-satoshi  text-lg text-[#FFCA3A] tracking-wide ">
              Equipments Galore
            </p>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 pr-10">
          <Link href="/" className="text-[#FFCA3A] font-satoshi max-w-xs transition duration-300 ease-in-out hover:scale-110 link link-underline link-underline-white ">
            Home
          </Link>
          <Link href="#about" className="text-[#FFCA3A] font-satoshi max-w-xs transition duration-300 ease-in-out hover:scale-110 link link-underline link-underline-white ">
            About
          </Link>
          <Link href="#Products" className="text-[#FFCA3A] font-satoshi max-w-xs transition duration-300 ease-in-out hover:scale-110 link link-underline link-underline-white ">
            Products
          </Link>
          <Link href="#testimonials" className="text-[#FFCA3A] font-satoshi max-w-xs transition duration-300 ease-in-out hover:scale-110 link link-underline link-underline-white ">
            Testimonials
          </Link>
          <Link href="#contact" className="text-[#FFCA3A] font-satoshi max-w-xs transition duration-300 ease-in-out hover:scale-110 link link-underline link-underline-white ">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuVisible && (
        <div className="md:hidden fixed inset-0 bg-black z-50 ">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-[#FFCA3A]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="border-b border-black my-4 ">
              <p className="w-full md:w-[90%] py-4 text-[#FFCA3A]">
                HELLO THERE!
              </p>
              <Image src='/hi-hello.gif' alt="waving gif" width={30} height={30} object-center />
            </div>
            <Link href="/" className="text-[#FFCA3A] py-8 flex">
              <button onClick={toggleMobileMenu} className="flex">
                <AiOutlineHome className='mr-4' />
                HOME
              </button>
            </Link>
            <Link href="/About.tsx" className="text-[#FFCA3A] py-8 flex">
              <FcAbout className='mr-4' />
              ABOUT
            </Link>
            <Link href="/Products.tsx" className="text-[#FFCA3A] py-8 flex">
              <AiFillMedicineBox className='mr-4' />
              PRODUCTS
            </Link>
            <Link href="Testimonials.tsx" className="text-[#FFCA3A] py-8 flex">
              <FaWpforms className='mr-4' />
              TESTIMONIALS
            </Link>
            <Link href="Contact.tsx" className="text-[#FFCA3A] py-8 flex">
              <AiOutlineContacts className='mr-4' />
              CONTACT US
            </Link>
          </div>
        </div>

      )}
    </nav>
  );
};
