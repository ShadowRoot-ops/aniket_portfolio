"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Aniket</span>
          <span className="w-22 h-8 bg-white text-black rounded-sm flex items-center justify-center">
            Sharma
          </span>
        </Link>
        {/* SOCIAL */}
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        <Link
          href="https://github.com/ShadowRoot-ops"
          target="blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="github image" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aniket-sharma-1a686522a/"
          target="blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin image"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENNU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-[#f4f4f4] rounded"></div>
          <div className="w-10 h-1 bg-[#f4f4f4] rounded"></div>
          <div className="w-10 h-1 bg-[#f4f4f4] rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-customblack text-customred flex flex-col items-center justify-center gap-8 font-bold text-[2rem]">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
