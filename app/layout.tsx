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
  const particlesInit = useCallback(async (engine: Engine | any) => {
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
  
return (
  <html lang="en">
    <body>
      <NavBar/>
      {children}
      </body>
  </html>
);
}
