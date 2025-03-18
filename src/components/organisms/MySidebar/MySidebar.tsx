"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";

export default function MySidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <FaBars className="lg:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">الصفحات </SheetTitle>
          <ul className="flex flex-col mt-[2rem] gap-y-[1.6rem] w-[80%] mx-auto items-center  text-[1.6rem] ">
            {navLinks.map((link, index) => (
              <NavLink {...link} key={index} />
            ))}
          </ul>
          <SheetDescription />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

const NavLink = ({ Icon, text, link }) => {
  const pathname = usePathname();
  let currentUrl = pathname.split("/")[1];
  return (
    <li
      className={` hover:text-myPrimary w-full ${
        currentUrl == link.slice(1) && "text-myPrimary"
      }`}
    >
      <a href={link} className=" justify-between flex  ">
        <Icon />
        <span className="text-[1rem]">{text}</span>
      </a>
    </li>
  );
};
