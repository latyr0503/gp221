"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <nav
      className={`fixed flex justify-between items-center w-[100vw] px-10 py-4 shadow-lg z-10 ${
        colorChange ? "bg-white" : "bg-green-800 text-white"
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="Logo" width={125} height={125} />
      </Link>
      <div className="hidden md:flex lg:flex space-x-64 justify-between items-center  ">
        <NavigationMenu>
          <NavigationMenuList className="uppercase">
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}  `}
                >
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="uppercase"> Sama GP</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <Link href="/" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </Link>
                  <Link href="/" title="Installation">
                    How to install dependencies and structure your app.
                  </Link>
                  <Link href="/" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="uppercase">Components</span>{" "}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  A propos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4">
          <div className="relative">
            <Link href="/">
              <MdOutlineAirplanemodeActive className=" w-8 h-8" />
            </Link>
            <div className="bg-red-800 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 left-5 font-bold text-sm">
              0
            </div>
          </div>
          <Link href="/">
            <FaRegUser className=" w-8 h-8" />
          </Link>
        </div>
      </div>

      <div className="lg:hidden sm:flex justify-center items-center  ">
        <div
          className={`flex gap-4 mr-8 ${
            colorChange ? "text-yellow-500 " : " text-white"
          }`}
        >
          <div className="relative">
            <Link href="/">
              <MdOutlineAirplanemodeActive className=" w-8 h-8" />
            </Link>
            <div className="bg-red-800 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 left-5 font-bold text-sm">
              0
            </div>
          </div>
          <Link href="/">
            <FaRegUser className=" w-7 h-7" />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger
            className={`p-2 rounded-lg ${
              colorChange ? "text-green-800 " : " text-white"
            }`}
          >
            <MdMenuOpen size={38} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <hr />
              <SheetDescription>
                <ul className="uppercase text-lg text-green-950 font-bold flex flex-col gap-7 mt-8">
                  <li>Accueil</li>
                  <li>Services</li>
                  <li>Sama GP</li>
                  <li>Components</li>
                  <li>a propos</li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}