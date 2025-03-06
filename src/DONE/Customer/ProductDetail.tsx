import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function ProductDetail() {
  // สถานะสินค้า
  const [product, setProduct] = useState({
    name: "One Life Graphic T-shirt",
    price: 260,
    image: "/img/ProductDetail-img00.png",
    fabric: "คาโต้โพลีเอสเตอร์",
    filling: "ใยสังเคราะห์",
    color: "#EAD8C0", // สีเริ่มต้น
    description: "",
  });

  // ฟังก์ชั่นเพิ่มสินค้าลงในตะกร้า
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("เพิ่มสินค้าลงในตะกร้าแล้ว!");
  };

  // ฟังก์ชั่นที่ใช้เลือกเนื้อผ้า
  const selectFabric = (fabric: string) => {
    setProduct((prevProduct) => ({ ...prevProduct, fabric }));
  };

  // ฟังก์ชั่นที่ใช้เลือกวัสดุเติม
  const selectFilling = (filling: string) => {
    setProduct((prevProduct) => ({ ...prevProduct, filling }));
  };

  // ฟังก์ชั่นที่ใช้เลือกสี
  const selectColor = (color: string) => {
    setProduct((prevProduct) => ({ ...prevProduct, color }));
  };

  // ฟังก์ชั่นที่ใช้ใส่รายละเอียดเพิ่มเติม
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProduct((prevProduct) => ({ ...prevProduct, description: event.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Product Section */}
      <div className="flex-grow max-w-[1700px] w-full bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-[500px_1fr] gap-8 mx-auto">

        {/* Product Images (Left Side) */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <img
              src="/img/ProductDetail-img01.png"
              alt="thumb1"
              className="w-32 h-32 rounded-2xl object-cover cursor-pointer"
            />
            <img
              src="/img/ProductDetail-img02.png"
              alt="thumb2"
              className="w-32 h-32 rounded-2xl object-cover cursor-pointer"
            />
            <img
              src="/img/ProductDetail-img00.png"
              alt="thumb3"
              className="w-32 h-32 rounded-2xl object-cover cursor-pointer"
            />
          </div>
          <img
            src={product.image}
            alt="Main Product"
            className="w-[400px] h-[400px] rounded-2xl object-cover"
          />
        </div>

        {/* Product Details (Right Side) */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-black">${product.price}</p>
          <div className="border-t border-gray-300 my-4"></div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-600">เลือกเนื้อผ้า:</p>
            <div className="flex gap-2">
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.fabric === "คาโต้โพลีเอสเตอร์" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFabric("คาโต้โพลีเอสเตอร์")}
              >
                คาโต้โพลีเอสเตอร์
              </Button>
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.fabric === "ผ้าคอตตอนออร์แกนิค" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFabric("ผ้าคอตตอนออร์แกนิค")}
              >
                ผ้าคอตตอนออร์แกนิค
              </Button>
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.fabric === "ผ้าพลีส" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFabric("ผ้าพลีส")}
              >
                ผ้าพลีส
              </Button>
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.fabric === "ผ้าฝ้ายแท้" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFabric("ผ้าฝ้ายแท้")}
              >
                ผ้าฝ้ายแท้
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-300 my-4"></div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-600">เลือกวัสดุเติมด้านใน:</p>
            <div className="flex gap-2">
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.filling === "ใยสังเคราะห์" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFilling("ใยสังเคราะห์")}
              >
                ใยสังเคราะห์
              </Button>
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.filling === "ใยขนห่านเทียม" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFilling("ใยขนห่านเทียม")}
              >
                ใยขนห่านเทียม
              </Button>
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.filling === "เม็ดซิลิโคน" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFilling("เม็ดซิลิโคน")}
              >
                เม็ดซิลิโคน
              </Button>
              <Button
                className={`bg-[#F0F0F0] rounded-2xl hover:bg-[#F2B3B9] active:bg-[#F2B3B9] ${product.filling === "ใยไผ่" ? "bg-[#F2B3B9]" : ""}`}
                onClick={() => selectFilling("ใยไผ่")}
              >
                ใยไผ่
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-300 my-4"></div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-600">เลือกสี:</p>
            <div className="flex gap-4">
              <Button
                className={`w-8 h-8 rounded-full ${product.color === "#EAD8C0" ? "border-4 border-[#F2B3B9]" : ""}`}
                style={{ backgroundColor: "#EAD8C0" }}
                onClick={() => selectColor("#EAD8C0")}
              ></Button>
              <Button
                className={`w-8 h-8 rounded-full ${product.color === "#F2B3B9" ? "border-4 border-[#F2B3B9]" : ""}`}
                style={{ backgroundColor: "#F2B3B9" }}
                onClick={() => selectColor("#F2B3B9")}
              ></Button>
              <Button
                className={`w-8 h-8 rounded-full ${product.color === "#F3F3F3" ? "border-4 border-[#F2B3B9]" : ""}`}
                style={{ backgroundColor: "#F3F3F3" }}
                onClick={() => selectColor("#F3F3F3")}
              ></Button>
            </div>
          </div>
          <div className="border-t border-gray-300 my-4"></div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-600">รายละเอียดเพิ่มเติม:</p>
            <div className="flex gap-4">
              <textarea
                className="bg-[#F3F3F3] p-2 rounded-lg w-full"
                value={product.description}
                onChange={handleDescriptionChange}
                rows={4}
              />
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <Button
              className="bg-[#F2B3B9] text-white w-50 py-3 text-lg rounded-xl hover:bg-[#F2A3A3] transition duration-300"
              onClick={addToCart}
            >
              <FaShoppingCart className="mr-2" /> เพิ่มลงในตะกร้า
            </Button>
          </div>
        </div>
      </div>
      {/* Recommended Products */}
<div className="w-full mt-3 mx-auto px-4 mb-0">
  <h2 className="text-5xl font-bold mb-4 text-[#F2B3B9] text-center">You might also like</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[{ name: "Polo with Contrast Trims", price: 212, img: "/img/CategoryPage-img07.jpg" },
    { name: "Gradient Graphic T-shirt", price: 145, img: "/img/CategoryPage-img09.jpg" },
    { name: "Polo with Tipping Details", price: 180, img: "/img/CategoryPage-img06.jpg" },
    { name: "Black Striped T-shirt", price: 120, img: "/img/CategoryPage-img08.jpg" }
    ].map((item, index) => (
      <Card key={index} className="shadow-md rounded-lg w-full">
        <CardContent className="p-4 w-full">
          <img src={item.img} alt={item.name} className="w-full h-80 object-cover rounded-2xl" />
          <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
          <p className="text-black">${item.price}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>


      {/* Footer */}
<div className="mt-auto">
  <Footer />
</div>
    </div>
  );
}
