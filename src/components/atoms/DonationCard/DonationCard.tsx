"use client";
import "./styles.css";
import { motion } from "framer-motion";
import { RiHandCoinFill } from "react-icons/ri";

export interface donationCard_i {
  type: "charity" | "blood" | "build";
  title: string;
  description: string;
}

export default function DonationCard({
  type,
  title,
  description,
  index,
}: donationCard_i & { index: number }) {
  const buttonTxt = (type) => {
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
    }
  };
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.12 }}
      className={`donation-card--${type} flex items-center bg-cover bg-[80%] transition-all rounded-md w-full min-h-[8rem]`}
    >
      <div className="flexBetween p-4 rounded-md w-full">
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
