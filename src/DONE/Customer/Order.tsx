import React from "react";
import Image from "next/image";

const orders = [
  {
    id: "88888888",
    name: "Gradient Graphic T-shirt",
    image: "/image/rabbit.png",
    price: "$180",
    quantity: 2,
  },
  {
    id: "88888888",
    name: "Checkered Shirt",
    image: "/image/rabbit.png",
    price: "$180",
    quantity: 1,
  },
  {
    id: "88888888",
    name: "Skinny Fit Jeans",
    image: "/image/rabbit.png",
    price: "$240",
    quantity: 1,
  },{
    id: "88888888",
    name: "Skinny Fit Jeans",
    image: "/image/rabbit.png",
    price: "$240",
    quantity: 1,
  },{
    id: "88888888",
    name: "Skinny Fit Jeans",
    image: "/image/rabbit.png",
    price: "$240",
    quantity: 1,
  },{
    id: "88888888",
    name: "Skinny Fit Jeans",
    image: "/image/rabbit.png",
    price: "$240",
    quantity: 1,
  },
];

const OrderList = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl text-rose-300 mb-4">รายการคำสั่งซื้อของคุณ</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div
          className="space-y-4 max-h-96 overflow-y-auto
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-300"
        >
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex items-center p-4 border-b border-gray-200"
            >
              <div className="flex w-full">
                <Image
                  src={order.image}
                  alt={order.name}
                  width={70}
                  height={70}
                  className="rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3>{order.name}</h3>
                  <p className="text-gray-500">จำนวน: {order.quantity} ชิ้น</p>
                  <p className="text-lg font-bold">{order.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    หมายเลขคำสั่งซื้อ: {order.id}
                  </p>
                  <button className="mt-2 text-rose-300 hover:underline">
                    ติดตามสินค้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
