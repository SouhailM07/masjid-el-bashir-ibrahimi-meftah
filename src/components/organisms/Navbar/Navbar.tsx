import { IoIosRadio } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "/public/mosque.svg";
import { headers } from "next/headers";

interface navLinks_i {
  Icon: any;
  text: string;
  link: string;
}

export default async function Navbar() {
  const navLinks: navLinks_i[] = [
    { Icon: FaHome, text: "الرئيسية", link: "" },
    { Icon: BiSolidDonateHeart, text: "التبرعات", link: "/donations" },
    { Icon: IoIosRadio, text: "البث المباشر", link: "/live" },
    { Icon: IoNewspaperOutline, text: "الأخبار", link: "/news" },
    { Icon: ImBooks, text: "المكتبة", link: "/library" },
  ];
  const headersList = headers();
  const fullUrl = (await headersList).get("referer");
  const currentUrl = fullUrl?.split("/")[3];
  return (
    <header className="bg-primary py-2 px-[2rem] lg:px-[4rem] drop-shadow-xl">
      <nav className="flexBetween">
        <div className="text-accent flex flex-col items-center text-center w-[9rem]">
          {/* <Image className="size-[2rem]" src={logo} alt="logo" /> */}
          <h1 className="font-semibold">مسجد البشير الابراهيمي مفتاح</h1>
        </div>
        <ul className="flexBetween w-[34rem] text-[1.6rem] text-secondary">
          {navLinks.map((link, index) => (
            <NavLink {...link} currentUrl={currentUrl} key={index} />
          ))}
        </ul>
        <div className="w-[9rem]"></div>
      </nav>
    </header>
  );
}

const NavLink = ({ Icon, text, currentUrl, link }) => {
  return (
    <li className={`hover:text-accent ${currentUrl == link && "text-accent"}`}>
      <a href="#" className="flex flex-col items-center text-center">
        <Icon />
        <span className="text-[0.8rem]">{text}</span>
      </a>
    </li>
  );
};
