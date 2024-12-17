"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBarComponent";
import ThemeProvider from "@/components/utils/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  //TODO: add a clickable profile photo when clicked popup socia media links.
return (
  <html lang="en">
    <body id="particles-js" className={`bg-white dark:bg-black ${inter.className}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <NavBar/>
        {children}
        <script src="/particles.js"></script>
        <script src="/app.js"></script>
      </ThemeProvider>

      </body>
  </html>
);
}
