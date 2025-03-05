"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductCard = ({
  name,
  price,
  images,
}: {
  name: string;
  price: number;
  images: string[];
}) => {
  const router = useRouter();

  return (
    <div
      className="bg-white p-4 shadow-md rounded-lg hover:scale-105 transition-transform cursor-pointer"
      onClick={() => router.push(``)}
    >
      <Image
        src={images[0]}
        alt={`${name}`}
        width={350}
        height={350}
        className="object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default ProductCard;