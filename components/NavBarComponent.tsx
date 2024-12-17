"use client"
import Link from "next/link"
import ThemeSwitcher from "@/components/ThemeSwitcher";
import DropdownMenuAvatar from "./Dropdown-menu";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
 
export default function NavBar() {
  return (
        <nav className="w-full flex flex-row justify-between p-3 absolute z-10">
          <DropdownMenuAvatar />
          <button className="">
            <Link href="/" legacyBehavior passHref>
              <h1 className="font-semibold text-3xl text-center text-rose-700 hover:!text-blue-400 p-1">
                <span className="text-3xl">Home</span>
              </h1>
            </Link>
          </button>
          <button className="">
            <Link href="/about" legacyBehavior passHref>
              <h1 className="font-semibold text-3xl text-center text-rose-700 hover:!text-blue-400 p-1">
                <span className="text-3xl">About me</span>
              </h1>
            </Link>
          </button>
          <button className="">
            <Link href="/projects" legacyBehavior passHref>
              <h1 className="font-semibold text-3xl text-center text-rose-700 hover:!text-blue-400 p-1">
                <span className="text-3xl">Projects</span>
              </h1>
            </Link>
          </button>
          <div>
            <ThemeSwitcher />
          </div>
        </nav>
  )
}
 
{/* <NavigationMenu className="w-full">
          <NavigationMenuList className="flex justify-between w-full">
            <NavigationMenuItem className="">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                 Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        // </NavigationMenu> */}