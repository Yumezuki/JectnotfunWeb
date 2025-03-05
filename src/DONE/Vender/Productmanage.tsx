import React from "react";
import Image from "next/image";
import { HiTrash, HiOutlinePencilAlt } from "react-icons/hi";

const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "ใหญ่",
    color: "ขาว",
    price: "$145",
    image: "/image/rabbit.png",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "กลาง",
    color: "ขาว",
    price: "$180",
    image: "/image/rabbit.png",
  },
];

const ProductInventory = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-3xl text-center text-teal-600 mb-4">
        คลังสินค้าของฉัน
      </h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button className="px-4 py-2 bg-orange-300 text-white rounded-lg hover:bg-orange-400">
          + เพิ่มสินค้าใหม่
        </button>
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
          ติดตามสินค้าลูกค้า
        </button>
      </div>
      <div
        className="bg-white"
      >
        <h3 className="text-center font-semibold mb-2">
          {products.length} รายการ
        </h3>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center border border-gray-200 p-6 rounded-lg mt-6"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={70}
              height={70}
              className="rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="font-bold text-lg">{product.price}</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-rose-300 hover:text-rose-400">
                <HiTrash size={20} />
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <HiOutlinePencilAlt size={23} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInventory;
