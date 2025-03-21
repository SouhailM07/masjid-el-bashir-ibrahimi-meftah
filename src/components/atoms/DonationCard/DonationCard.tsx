"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiHandCoinFill } from "react-icons/ri";

export interface DonationCard_i {
  type: "charity" | "blood" | "build";
  title: string;
  description: string;
}

export default function DonationCard({
  type,
  title,
  description,
  index,
}: DonationCard_i & { index: number }) {
  const buttonTxt = (type: string) => {
    switch (type) {
      case "charity":
        return (
          <>
            <RiHandCoinFill />
            <span>تبرع الآن</span>
          </>
        );
      case "blood":
        return (
          <>
            <RiHandCoinFill />
            <span>تبرع بالدم</span>
          </>
        );
      case "build":
        return (
          <>
            <span>تبرع للمسجد</span>
            <RiHandCoinFill />
          </>
        );
      default:
        return <span>تبرع</span>;
    }
  };

  const bgType = {
    charity: "/donation.webp",
    blood: "/blood_donation.webp",
    build: "/mosque_donation.webp",
  };
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.24 }}
      className={`group relative flex items-center rounded-md w-full min-h-[8rem] overflow-hidden`}
    >
      {/* Background Image */}
      <Image
        src={bgType[type]} // Ensure these images exist in your public/images folder
        alt={type}
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:object-[0%_80%]  duration-500 ease-out"
      />

      {/* Content */}
      <div className="flexBetween p-4 rounded-md w-full relative z-10">
        <div className="text-white">
          <h1 className="text-[1.6rem] max-md:text-xl font-bold">{title}</h1>
          <p className="text-[0.88rem] max-md:text-sm mt-2">{description}</p>
        </div>
        <button className="bg-myPrimary hover:scale-110 text-white hover:bg-myAccent hover:text-black duration-200 flexCenter gap-x-3 min-w-[8rem] drop-shadow-lg py-[0.8rem] mt-4 rounded-sm">
          {buttonTxt(type)}
        </button>
      </div>
    </motion.div>
  );
}
