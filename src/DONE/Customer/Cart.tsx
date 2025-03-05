"use client";
import React, { useState } from "react";
import { HiTrash, HiOutlinePencilAlt } from "react-icons/hi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const initialCart = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "ใหญ่",
    price: 145,
    image: "/image/rabbit.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "กลาง",
    price: 180,
    image: "/image/rabbit.png",
    quantity: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "ใหญ่",
    price: 240,
    image: "/image/rabbit.png",
    quantity: 1,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    size: "ใหญ่",
    price: 240,
    image: "/image/rabbit.png",
    quantity: 1,
  },
  {
    id: 5,
    name: "Skinny Fit Jeans",
    size: "ใหญ่",
    price: 240,
    image: "/image/rabbit.png",
    quantity: 1,
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const router = useRouter();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = 15;
  const finalPrice = totalPrice + shippingCost;

  return (
    <div className="flex justify-center items-start gap-8 p-10 h-screen">
      {/* Cart Section */}
      <div>
        <h2 className="text-3xl text-rose-300 mb-4">ตะกร้าของคุณ</h2>

        <div className="flex gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 w-[50rem]">
            <div
              className="items-center max-h-96 overflow-y-auto m-4 pr-4
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-lg font-semibold">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-300 ml-4"
                    onClick={() => removeItem(item.id)}
                  >
                    <HiTrash size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white p-6 rounded-lg border border-gray-200 w-80 mb-6">
              <h2 className="text-xl text-rose-300 mb-4">ที่อยู่</h2>
              <div className="flex justify-between">
                <div>
                  <p>(ชื่อ-นามสกุล) (เบอร์โทรศัพท์)</p>
                  <p>(บ้านเลขที่) (จังหวัด)...</p>
                </div>
                <button
                  className="text-rose-300 rounded-lg hover:text-rose-400"
                  onClick={() => router.push(`/`)}
                >
                  <HiOutlinePencilAlt size={23} />
                </button>
              </div>
            </div>

            {/* Checkout Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 w-80">
              <h2 className="text-xl text-rose-300 mb-4">ยอดรวมการสั่งซื้อ</h2>
              <div className="flex justify-between text-gray-600">
                <p>ราคาทั้งหมด</p>
                <p>${totalPrice}</p>
              </div>
              <div className="flex justify-between text-gray-600 mt-2">
                <p>ค่าจัดส่ง</p>
                <p>${shippingCost}</p>
              </div>
              <hr className="my-4 text-gray-200" />
              <div className="flex justify-between font-semibold text-lg">
                <p>ราคารวมทั้งสิ้น</p>
                <p>${finalPrice}</p>
              </div>
              <button
                className="mt-6 w-full bg-rose-300 text-white py-2 rounded-lg hover:bg-rose-400"
                onClick={() => router.push(`/payment?amount=${finalPrice}`)}
              >
                ชำระเงิน →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
