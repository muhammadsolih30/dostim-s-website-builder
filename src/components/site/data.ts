export const portraitUrl = "/photo_2026-08-28_20-45-07.jpg";

const brand1 = "/sayt%20uchun%201.jpg";
const brand2 = "/sayt%20uchun%202.jpg";
const brand3 = "/sayt%20uchun%203.jpg";
const brand4 = "/sayt%20uchun%204.jpg";
const brand5 = "/sayt%20uchun%205.jpg";
const brand6 = "/sayt%20uchun%206.jpg";
const brand7 = "/sayt%20uchun%207.jpg";
const brand8 = "/sayt%20uchun%208.jpg";

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
    logo: brand3,
    leads: "23,002",
    budget: "$23,002",
    cpl: "$1.45",
    quality: "70%",
  },
  {
    name: "Obod Makon",
    sphere: "Qurilish",
    logo: brand1,
    leads: "7,042",
    budget: "$9,167.24",
    cpl: "$1.30",
    quality: "70%",
  },
  {
    name: "Milliy Makon",
    sphere: "Qurilish",
    logo: brand2,
    leads: "6,163",
    budget: "$9,445.75",
    cpl: "$1.53",
    quality: "70%",
  },
  {
    name: "Bodor",
    sphere: "B2B",
    logo: brand6,
    leads: "1,393",
    budget: "$4,614.82",
    cpl: "$3.31",
    quality: "70%",
  },
  {
    name: "Ulug' House residence",
    sphere: "Qurilish",
    logo: brand5,
    leads: "686",
    budget: "$1,085.91",
    cpl: "$1.58",
    quality: "70%",
  },
];

export const brands = [
  { name: "Obod Makon", logo: brand1 },
  { name: "Milliy Makon", logo: brand2 },
  { name: "Jahon House", logo: brand3 },
  { name: "Global Avenue", logo: brand4 },
  { name: "Ulug' House", logo: brand5 },
  { name: "Bodor", logo: brand6 },
  { name: "Dahan Crane", logo: brand7 },
  { name: "Muhammadali Academy", logo: brand8 },
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
