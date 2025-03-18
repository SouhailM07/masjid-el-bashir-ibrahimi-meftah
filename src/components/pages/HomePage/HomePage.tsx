import SalatCard from "@/components/atoms/SalatCard/SalatCard";
import { getAdhanTimes } from "@/lib/helpers";

export default async function HomePage() {
  const timings = await getAdhanTimes(); // Wait for the API response
  const salatTimes = [
    {
      time: timings.Fajr,
      name: "صلاة الفجر",
      img: "/fajr.webp",
    },
    {
      time: timings.Sunrise,
      name: "صلاة الصبح",
      img: "/subh.webp",
    },
    {
      time: timings.Dhuhr,
      name: "صلاة الظهر",
      img: "/duhr.webp",
    },
    {
      time: timings.Asr,
      name: "صلاة العصر",
      img: "/3asr.webp",
    },
    {
      time: timings.Maghrib,
      name: "صلاة المغرب",
      img: "/maghreb.webp",
    },
    {
      time: timings.Isha,
      name: "صلاة العشاء",
      img: "/3isha.webp",
    },
  ];
  if (timings.Imsak) {
    salatTimes.push({
      time: timings.Imsak,
      name: "امساك",
      img: "/imsak.webp",
    });
    salatTimes.push({
      name: "صلاة التراويح",
      img: "/tarawih.webp",
      time: timings.Isha,
    });
  }
  return (
    <main className="flex px-[1.2rem] max-lg:px-[0.8rem] max-w-[70rem] max-lg1:justify-center gap-[1.2rem] max-lg:gap-[0.8rem] mx-auto flex-wrap my-[1.2rem]">
      {salatTimes
        .sort(
          (a, b) => +a.time.split(":").join("") - +b.time.split(":").join("")
        )
        .map((salat, index) => (
          <SalatCard key={index} index={index} {...salat} />
        ))}
    </main>
  );
}
