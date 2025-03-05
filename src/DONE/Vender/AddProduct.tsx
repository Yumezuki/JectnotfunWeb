"use client";

import React, { useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    size: "",
    color: "",
    quantity: "",
    description: "",
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProduct({ ...product, image: e.target.files[0] });
    } else {
      setProduct({ ...product, image: null });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product submitted: ", product);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg border border-gray-300">
        <h2 className="text-3xl text-center text-teal-500 mb-4">
          เพิ่มรายละเอียดสินค้า
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">ชื่อสินค้า</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:outline-teal-500"
              required
            />
          </div>
          <div>
            <label className="block">ประเภท</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:outline-teal-500"
            />
          </div>
          <div>
            <label className="block">ขนาด</label>
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:outline-teal-500"
            />
          </div>
          <div>
            <label className="block">สี</label>
            <input
              type="text"
              name="color"
              value={product.color}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:outline-teal-500"
            />
          </div>
          <div>
            <label className="block">จำนวน</label>
            <select
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:outline-teal-500"
            >
              <option value="">เลือกจำนวน</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <label className="block">คำอธิบายสินค้า</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline focus:outline-teal-500"
            ></textarea>
          </div>
          <div>
            <label className="block">อัพโหลดรูป</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="block cursor-pointer bg-gray-200 text-gray-500 py-2 px-4 rounded-lg text-center text-2xl"
            >
              +
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-teal-600 transition-all mt-4"
          >
            เพิ่มสินค้า
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
