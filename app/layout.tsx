require('dotenv').config();

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {Navbar} from "@/components/Navbar";
import About from "./pages/About";
import Image from "next/image";;


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SV Medicare Systems",
  description: "Get World Class medical Equipments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
