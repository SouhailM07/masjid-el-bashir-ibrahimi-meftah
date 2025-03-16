import Image from "next/image";
import logo from "/public/mosque.svg";
import { headers } from "next/headers";
import MySidebar from "../MySidebar/MySidebar";
import { navLinks } from "@/lib/constants";

export default async function Navbar() {
  const headersList = headers();
  const fullUrl = (await headersList).get("referer");
  let currentUrl = fullUrl?.split("/")[3];
  return (
    <header className="bg-myPrimary py-2 px-[2rem] lg:px-[4rem] drop-shadow-xl">
      <nav className="flexBetween">
        <div className="text-myAccent flex flex-col items-center text-center w-[9rem]">
          {/* <Image className="size-[2rem]" src={logo} alt="logo" /> */}
          <h1 className="font-semibold">مسجد البشير الابراهيمي مفتاح</h1>
        </div>
        <ul className="flexBetween max-lg:hidden! w-[34rem] text-[1.6rem] text-mySecondary">
          {navLinks.map((link, index) => (
            <NavLink {...link} currentUrl={currentUrl} key={index} />
          ))}
        </ul>
        <div className="w-[9rem] text-mySecondary flex justify-end items-center text-[1.2rem]">
          <MySidebar />
        </div>
      </nav>
    </header>
  );
}

const NavLink = ({ Icon, text, currentUrl, link }) => {
  return (
    <li
      className={`hover:text-myAccent ${currentUrl == link && "text-myAccent"}`}
    >
      <a href={link} className="flex flex-col items-center text-center">
        <Icon />
        <span className="text-[0.8rem]">{text}</span>
      </a>
    </li>
  );
};
