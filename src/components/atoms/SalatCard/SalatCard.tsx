import { isSalatPassed } from "@/lib/helpers";
import { FiClock } from "react-icons/fi";

export default function SalatCard({ time, name, img }) {
  return (
    <div
      className="drop-shadow-xl hover:scale-105 salat-card aspect-video h-[12rem] max-lg:h-[10rem] max-md:w-full flex items-end justify-between text-[1.2rem] p-[2rem] rounded-sm text-secondary bg-primary"
      style={{
        backgroundImage: `url(${img})`,
        filter: `drop-shadow(2px 4px 5px black) 
        `,
        // ${isSalatPassed(time) && "grayscale(100%)"}
      }}
    >
      <div className="flexCenter gap-x-3">
        <FiClock />
        <span>{time}</span>
      </div>
      <span>{name}</span>
    </div>
  );
}
