import { IoIosRadio } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { navLinks_i } from "@/types";

export const navLinks: navLinks_i[] = [
  { Icon: FaHome, text: "الرئيسية", link: "/" },
  { Icon: BiSolidDonateHeart, text: "التبرعات", link: "/donations" },
  { Icon: IoIosRadio, text: "البث المباشر", link: "/live" },
  { Icon: IoNewspaperOutline, text: "الأخبار", link: "/news" },
  { Icon: ImBooks, text: "المكتبة", link: "/library" },
];
