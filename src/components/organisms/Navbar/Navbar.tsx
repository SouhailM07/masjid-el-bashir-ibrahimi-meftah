"use client";
import Image from "next/image";
import logo from "/public/mosque.svg";
import MySidebar from "../MySidebar/MySidebar";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <header className="bg-myPrimary py-2 px-[2rem] lg:px-[4rem] drop-shadow-xl">
      <nav className="flexBetween">
        <div className="text-myAccent flex flex-col items-center text-center w-[9rem]">
          {/* <Image className="size-[2rem]" src={logo} alt="logo" /> */}
          <h1 className="font-semibold">مسجد البشير الابراهيمي مفتاح</h1>
        </div>
        <ul className="flexBetween max-lg:hidden! w-[34rem] text-[1.6rem] text-mySecondary">
          {navLinks.map((link, index) => (
            <NavLink {...link} key={index} />
          ))}
        </ul>
        <div className="w-[9rem] text-mySecondary flex justify-end items-center text-[1.2rem]">
          <MySidebar />
        </div>
      </nav>
    </header>
  );
}

const NavLink = ({ Icon, text, link }) => {
  const pathname = usePathname();
  let currentUrl = pathname.split("/")[1];
  return (
    <li
      className={`hover:text-myAccent ${
        currentUrl == link.slice(1) && "text-myAccent"
      }`}
    >
      <a href={link} className="flex flex-col items-center text-center">
        <Icon />
        <span className="text-[0.8rem]">{text}</span>
      </a>
    </li>
  );
};
