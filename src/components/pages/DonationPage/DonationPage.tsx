import DonationCard, {
  donationCard_i,
} from "@/components/atoms/DonationCard/DonationCard";

const donationData: donationCard_i[] = [
  {
    type: "charity",
    title: "تبرع لتنمو الحياة",
    description: "مساهمتك تزرع الأمل في حياة المحتاجين وتساعدهم على النهوض.",
  },
  {
    type: "blood",
    title: "تبرع بدمك لتنقذ حياة",
    description: "كل قطرة دم قد تعني الحياة لشخص بحاجة ماسة إليها.",
  },
  {
    type: "build",
    title: "ساهم في بناء بيت من بيوت الله",
    description:
      "اجعل لك صدقة جارية بالمساهمة في بناء مسجد يجمع المصلين على الخير والعبادة.",
  },
];

export default function DonationPage() {
  return (
    <main className="px-[1.2rem] max-lg:px-[0.8rem] max-w-[54rem] gap-[1.2rem] flex flex-col max-lg:gap-[0.8rem] mx-auto my-[1.2rem]">
      {donationData.map((donation, index) => (
        <DonationCard key={index} index={index} {...donation} />
      ))}
    </main>
  );
}
