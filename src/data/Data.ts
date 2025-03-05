interface Product {
  id: number;
  name: string;
  price: number;
  fabricOptions: string[];
  fillingOptions: string[];
  colors?: string[];
  images: string[];
  customerNotes?: string;
  category: string;
  style: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Custom Pet Pillow",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Pillow",
    style: "Cute"
  },
  {
    id: 2,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Minimal"
  },
  {
    id: 3,
    name: "Custom Pet Pillow",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Pillow",
    style: "Minimal"
  },
  {
    id: 4,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Fancy"
  },
  {
    id: 5,
    name: "Custom Pet Pillow",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Pillow",
    style: "Cute"
  },
  {
    id: 6,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Minimal"
  },
  {
    id: 7,
    name: "Custom Pet Pillow",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Pillow",
    style: "Cute"
  },
  {
    id: 8,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Minimal"
  },
  {
    id: 9,
    name: "Custom Pet Pillow",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Pillow",
    style: "Cute"
  },
  {
    id: 10,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Fancy"
  },
  {
    id: 11,
    name: "Custom Pet Pillow",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Pillow",
    style: "Minimal"
  },
  {
    id: 12,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Cute"
  },
  {
    id: 13,
    name: "Custom Teddy Bear",
    price: 260,
    fabricOptions: ["ไมโครไฟเบอร์", "คอตตอนออร์แกนิก", "ผ้าพลีช", "ผ้ากำมะหยี่"],
    fillingOptions: ["ใยสังเคราะห์", "ใยขนหนูเทียม", "เม็ดซิลิโคน", "ใยไผ่"],
    colors: ["#FFF5E1", "#D4A373", "#F28E8E"],
    images: [
      "/image/rabbit.png",
      "/image/rabbit.png",
      "/image/rabbit.png"
    ],
    customerNotes: "",
    category: "Doll",
    style: "Fancy"
  }
];

export default products;
