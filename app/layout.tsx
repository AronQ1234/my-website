"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBarComponent";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
return (
  <html lang="en">
    <body>
      <NavBar/>
      {children}
      </body>
  </html>
);
}
