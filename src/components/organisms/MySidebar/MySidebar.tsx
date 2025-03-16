import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";
import { headers } from "next/headers";
import { FaBars } from "react-icons/fa6";

export default async function MySidebar() {
  const headersList = headers();
  const fullUrl = (await headersList).get("referer");
  const currentUrl = fullUrl?.split("/")[3];
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
              <NavLink {...link} currentUrl={currentUrl} key={index} />
            ))}
          </ul>
          <SheetDescription />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

const NavLink = ({ Icon, text, currentUrl, link }) => {
  return (
    <li
      className={` hover:text-myAccent w-full ${
        currentUrl == link && "text-myAccent"
      }`}
    >
      <a href={link} className=" justify-between flex  ">
        <Icon />
        <span className="text-[1rem]">{text}</span>
      </a>
    </li>
  );
};
