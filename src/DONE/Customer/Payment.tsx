"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { HiRefresh } from "react-icons/hi";

const PaymentPage = () => {
  const [timeLeft, setTimeLeft] = useState(180);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const generateQRCodeAndStartCountdown = () => {
    // const paymentData = `promptpay://1234567890?amount=100`;
    // setQrData(paymentData);
    setTimeLeft(180);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          router.push("/cart");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    generateQRCodeAndStartCountdown();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-3xl text-rose-300">ชำระเงินผ่าน คิวอาร์โค้ด</h2>
      <p className="text-gray-600 mt-2 text-xl">กรุณาชำระเงินภายใน</p>
      <p className="text-xl font-bold mt-1 text-black">
        {`${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")}`}
      </p>
      <div className="my-4 p-4 bg-white rounded-lg shadow-md">
        {/* <QRCodeCanvas value={qrData} size={200} /> */}
      </div>
      <a
        onClick={generateQRCodeAndStartCountdown}
        className="mt-4 text-rose-300 px-4 py-2 rounded-lg hover:text-rose-400 hover:underline transition text-xl flex items-center"
      >
        <HiRefresh />รีเฟรช QR Code
      </a>
    </div>
  );
};

export default PaymentPage;
