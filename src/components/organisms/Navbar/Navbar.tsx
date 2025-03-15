import { IoIosRadio } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "/public/mosque.svg";

export default function Navbar() {
  const navLinks = [
    { Icon: FaHome, text: "الرئيسية" },
    { Icon: BiSolidDonateHeart, text: "التبرعات" },
    { Icon: IoIosRadio, text: "البث المباشر" },
    { Icon: IoNewspaperOutline, text: "الأخبار" },
    { Icon: ImBooks, text: "المكتبة" },
  ];
  return (
    <header className="bg-primary py-2 px-[4rem]">
      <nav className="flexBetween">
        <div className="text-accent flex flex-col items-center text-center w-[9rem]">
          {/* <Image className="size-[2rem]" src={logo} alt="logo" /> */}
          <h1>مسجد البشير الابراهيمي مفتاح</h1>
        </div>
        <ul className="flexBetween w-[34rem] text-[1.6rem] text-secondary">
          {navLinks.map((link, index) => (
            <NavLink key={index} Icon={link.Icon} text={link.text} />
          ))}
        </ul>
        <div className="w-[9rem]"></div>
      </nav>
    </header>
  );
}

const NavLink = ({ Icon, text }) => {
  return (
    <li className="hover:text-accent">
      <a href="#" className="flex flex-col items-center text-center">
        <Icon />
        <span className="text-[0.8rem]">{text}</span>
      </a>
    </li>
  );
};
