import type { Metadata } from "next";
import React from "react";
import { House, Clapperboard, Theater, Pizza } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { NavigationBarType } from "@/types/navbar.types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CineMax App",
  description: "An theatre & cinema application",
};

const navbarItems: NavigationBarType[] = [
  { icon: House, title: "Home", links: "/" },
  { icon: Clapperboard, title: "Movie Tickets", links: "/movies" },
  { icon: Theater, title: "Find Theater", links: "/theatres" },
  { icon: Pizza, title: "Foods & Drinks", links: "/foodndrinks" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <nav className="bg-black w-full h-14 px-6 flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">
            <Link href={"/"}>CineMax</Link>
          </h1>
          <div className="flex items-center space-x-8">
            {navbarItems.map((item, key) => (
              <div
                key={key}
                className="flex items-center space-x-2 text-white hover:text-blue-300 cursor-pointer transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  <Link href={item.links}>{item.title}</Link>
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span className="font-semibold text-sm bg-blue-500 h-8 w-20 py-1.5 rounded-md text-center hover:text-blue-300 cursor-pointer transition-colors">
              <Link href="/">Login</Link>
            </span>
            <span className="font-semibold text-sm text-center hover:text-blue-300 cursor-pointer transition-colors">
              <Link href="/">Sign Up</Link>
            </span>
          </div>
        </nav>

        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
