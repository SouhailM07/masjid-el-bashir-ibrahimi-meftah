"use client";
import { isSalatPassed } from "@/lib/helpers";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SalatCard({ time, name, img, index }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.12 }}
      className="drop-shadow-xl hover:scale-105 salat-card aspect-video h-[12rem] max-lg:h-[10rem] overflow-hidden max-md:w-full flex items-end justify-between text-[1.2rem] p-[2rem] rounded-sm text-secondary bg-primary"
      style={{
        filter: `drop-shadow(2px 4px 5px black) 
        `,
        // ${isSalatPassed(time) && "grayscale(100%)"}
      }}
    >
      <Image
        src={img}
        height={300}
        width={768}
        alt="img"
        className="absolute object-fill inset-0 z-[-1]"
      />
      <div className="flexCenter gap-x-3">
        <FiClock />
        <span>{time}</span>
      </div>
      <span>{name}</span>
    </motion.div>
  );
}
