import SalatCard from "@/components/atoms/SalatCard/SalatCard";
import { getAdhanTimes } from "@/lib/helpers";

export default async function HomePage() {
  const timings = await getAdhanTimes(); // Wait for the API response
  const salatTimes = [
    {
      time: timings.Fajr,
      name: "صلاة الفجر",
      img: "/fajr.jpg",
    },
    {
      time: timings.Sunrise,
      name: "صلاة الصبح",
      img: "/subh.jpg",
    },
    {
      time: timings.Dhuhr,
      name: "صلاة الظهر",
      img: "/lora-p-hVb6RvCJ_ug-unsplash.jpg",
    },
    {
      time: timings.Asr,
      name: "صلاة العصر",
      img: "/3asr.jpg",
    },
    {
      time: timings.Maghrib,
      name: "صلاة المغرب",
      img: "/maghreb.jpg",
    },
    {
      time: timings.Isha,
      name: "صلاة العشاء",
      img: "/3isha.jpg",
    },
  ];
  if (timings.Imsak) {
    salatTimes.push({
      time: timings.Imsak,
      name: "امساك",
      img: "/imsak.jpg",
    });
    salatTimes.push({
      name: "صلاة التراويح",
      img: "/tarawih.jpg",
      time: timings.Isha,
    });
  }
  return (
    <main className="flex px-[1.2rem] max-w-[70rem] gap-[1.2rem] mx-auto flex-wrap my-[1.2rem]">
      {salatTimes
        .sort(
          (a, b) => +a.time.split(":").join("") - +b.time.split(":").join("")
        )
        .map((salat, index) => (
          <SalatCard key={index} {...salat} />
        ))}
    </main>
  );
}
