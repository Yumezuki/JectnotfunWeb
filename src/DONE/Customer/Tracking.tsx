import React from "react";
import Image from "next/image";
import { HiCheck } from "react-icons/hi";

const steps = [
  {
    title: "กำลังจัดทำตุ๊กตาของคุณ",
    description: "ขณะนี้ทางร้านกำลังจัดทำตุ๊กตาของคุณ",
    image: "/image/dino.svg",
  },
  {
    title: "นำส่งพัสดุ",
    description: "เรากำลังจัดส่งตุ๊กตาไปที่บ้านของคุณ...",
    image: "/image/pack.svg",
  },
  {
    title: "จัดส่งสำเร็จ",
    description:
      "ตุ๊กตาของคุณถึงบ้านของคุณเรียบร้อยแล้ว ขอให้คุณมีวันที่ดีกับตุ๊กตาสุดพิเศษจากพวกเรา",
    image: "/image/home.svg",
  },
];

const TrackingStatus = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-4xl text-rose-300">ติดตามสินค้า</h2>
      <div className="flex justify-between items-start mt-10">
        {steps.map((step, index) => (
          <div key={index} className="w-1/3 flex flex-col items-center">
            <div className="w-[120px] h-[120px] flex items-center justify-center">
              <Image
                src={step.image}
                alt={step.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-2xl text-rose-300">{step.title}</h3>
            <p className="text-gray-500 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center">
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-300 text-white">
        <HiCheck size={28} />
        </span>
        <div className="w-1/3 h-1 bg-gray-300"></div>
        <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600">
          2
        </span>
        <div className="w-1/3 h-1 bg-gray-300"></div>
        <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600">
          3
        </span>
      </div>
    </div>
  );
};

export default TrackingStatus;
