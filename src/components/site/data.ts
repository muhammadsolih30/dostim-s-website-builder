import brand1 from "@/assets/brand-1.jpg.asset.json";
import brand2 from "@/assets/brand-2.jpg.asset.json";
import brand3 from "@/assets/brand-3.jpg.asset.json";
import brand4 from "@/assets/brand-4.jpg.asset.json";
import brand5 from "@/assets/brand-5.jpg.asset.json";
import brand6 from "@/assets/brand-6.jpg.asset.json";
import brand7 from "@/assets/brand-7.jpg.asset.json";
import brand8 from "@/assets/brand-8.jpg.asset.json";
import portrait from "@/assets/marjona.jpg.asset.json";

export const portraitUrl = portrait.url;

export type CaseStudy = {
  name: string;
  sphere: string;
  logo: string;
  leads: string;
  budget: string;
  cpl: string;
  quality: string;
};

export const cases: CaseStudy[] = [
  {
    name: "Jahon House",
    sphere: "Qurilish",
    logo: brand3.url,
    leads: "23,002",
    budget: "$23,002",
    cpl: "$1.45",
    quality: "70%",
  },
  {
    name: "Obod Makon",
    sphere: "Qurilish",
    logo: brand1.url,
    leads: "7,042",
    budget: "$9,167.24",
    cpl: "$1.30",
    quality: "70%",
  },
  {
    name: "Milliy Makon",
    sphere: "Qurilish",
    logo: brand2.url,
    leads: "6,163",
    budget: "$9,445.75",
    cpl: "$1.53",
    quality: "70%",
  },
  {
    name: "Bodor",
    sphere: "B2B",
    logo: brand6.url,
    leads: "1,393",
    budget: "$4,614.82",
    cpl: "$3.31",
    quality: "70%",
  },
  {
    name: "Ulug' House residence",
    sphere: "Qurilish",
    logo: brand5.url,
    leads: "686",
    budget: "$1,085.91",
    cpl: "$1.58",
    quality: "70%",
  },
];

export const brands = [
  { name: "Obod Makon", logo: brand1.url },
  { name: "Milliy Makon", logo: brand2.url },
  { name: "Jahon House", logo: brand3.url },
  { name: "Global Avenue", logo: brand4.url },
  { name: "Ulug' House", logo: brand5.url },
  { name: "Bodor", logo: brand6.url },
  { name: "Dahan Crane", logo: brand7.url },
  { name: "Muhammadali Academy", logo: brand8.url },
];

export const problems = [
  {
    icon: "wallet",
    title: "Reklama xarajati",
    text: "Byudjet sarflanyapti, ammo sotuv yetarli emas",
  },
  {
    icon: "target",
    title: "Noto‘g‘ri auditoriya",
    text: "Lidlar keladi, lekin xarid qilishga tayyor mijozlar kam",
  },
  {
    icon: "trending-down",
    title: "Qimmat lidlar",
    text: "Har bir mijoz uchun reklamada ortiqcha pul sarflanyapti",
  },
  {
    icon: "timer",
    title: "Javob berishdagi kechikish",
    text: "Kelgan lidlarga vaqtida javob berilmagani uchun mijozlar yo‘qoladi",
  },
  {
    icon: "chart",
    title: "Nazorat yo‘q",
    text: "Reklama qayerga ketayotgani va qaysi kanal ishlayotgani ko‘rinmaydi",
  },
];

export const packages = [
  {
    name: "Standart",
    price: "$200",
    period: "/oy",
    tagline: "Targetni professional yo‘lga qo‘yish uchun.",
    features: [
      "Target strategiya",
      "Pro target",
      "10+ kreativ uchun ssenariy",
      "Haftalik hisobot",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "$350",
    period: "/oy",
    tagline: "Ko‘proq kreativ va sotuvchi funnel kerak bo‘lgan biznes uchun.",
    features: [
      "Target strategiya",
      "Pro target",
      "15+ kreativ uchun ssenariy",
      "Sotuvchi sayt",
      "Kunlik hisobot",
    ],
    featured: true,
  },
  {
    name: "Vip",
    price: "$500",
    period: "/oy",
    tagline: "Reklamadan CRMgacha to‘liq lead generatsiya infratuzilmasi.",
    features: [
      "Target strategiya",
      "Pro target",
      "25+ kreativ uchun ssenariy",
      "Sotuvchi sayt",
      "24/7 AI chatbot",
      "Kunlik hisobot",
      "CRM o‘rnatib berish (bo‘lmasa)",
    ],
    featured: false,
  },
];
