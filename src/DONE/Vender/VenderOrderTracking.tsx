import React, { useState } from "react";
import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import { useRouter } from "next/navigation";  // เพิ่มการใช้ useRouter สำหรับการนำทาง
import '@/app/globals.css';
import Footer from "@/components/Footer";

const orders = [
    {
        id: "99999999",
        name: "Noodee",
        image: "/image/doll.png",
        price: "$260",
        quantity: 2,
        status: "รอดำเนินการ",
        statusColor: "text-[#666666]",
    },
    {
        id: "88888888",
        name: "Chickey Pie",
        image: "/image/doll.png",
        price: "$599",
        quantity: 3,
        status: "ตอบรับคำสั่งซื้อ",
        statusColor: "text-[#16A509]",
    },
    {
        id: "77777777",
        name: "Som_sor",
        image: "/image/doll.png",
        price: "$890",
        quantity: 6,
        status: "ปฏิเสธคำสั่งซื้อ",
        statusColor: "text-[#D60C0C]",
    },
    {
        id: "66666666",
        name: "Som_sor",
        image: "/image/doll.png",
        price: "$890",
        quantity: 2,
        status: "ปฏิเสธคำสั่งซื้อ",
        statusColor: "text-[#D60C0C]",
    },
];

const OrderTracking = () => {
    const [searchTerm, setSearchTerm] = useState("");  // ค่าค้นหาจาก input
    const [selectedStatus, setSelectedStatus] = useState("ทั้งหมด");  // ค่าสถานะที่เลือก
    const router = useRouter();  // สำหรับการนำทางไปหน้าติดตาม

    // ฟังก์ชันสำหรับกรองข้อมูลตามสถานะ
    const filteredOrders = orders.filter((order) => {
        const isStatusMatch = selectedStatus === "ทั้งหมด" || order.status === selectedStatus;
        const isSearchMatch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.includes(searchTerm);
        return isStatusMatch && isSearchMatch;
    });

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Breadcrumb */}
            <nav className="text-gray-500 text-sm mb-4">
                คลังสินค้าของฉัน &gt; <span className="text-black">ติดตามสินค้าของลูกค้า</span>
            </nav>

            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-5xl text-[#6DB6AE] font-bold">ติดตามสินค้าของลูกค้า</h2>
                <div className="flex flex-col items-center space-y-6">
                    <div className="relative py-3">
                        <input
                            type="text"
                            placeholder="ค้นหาชื่อ/ หมายเลขคำสั่งซื้อ..."
                            className="p-2 rounded-full w-85 bg-[#F0F0F0] pl-10 "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}  // ค้นหาข้อมูล
                        />
                        <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                    <button className="bg-[#C03643] w-85 text-white px-4 py-2 rounded-lg font-semibold">
                        ยอดการขายทั้งหมด  | <span className="text-xl">20K</span>
                    </button>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="mb-4 space-x-6 px-4 text-sm font-semibold">
                <button
                    className={`text-black border-b-2 pb-1 px-4 ${selectedStatus === "ทั้งหมด" ? "border-black" : "text-gray-500"}`}
                    onClick={() => setSelectedStatus("ทั้งหมด")}
                >
                    ทั้งหมด
                </button>
                <button
                    className={`px-4 ${selectedStatus === "รอดำเนินการ" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
                    onClick={() => setSelectedStatus("รอดำเนินการ")}
                >
                    รอดำเนินการ
                </button>
                <button
                    className={`px-4 ${selectedStatus === "ตอบรับคำสั่งซื้อ" ? "text-black border-b-2 border-black" : "text-[#16A509]"}`}
                    onClick={() => setSelectedStatus("ตอบรับคำสั่งซื้อ")}
                >
                    ตอบรับคำสั่งซื้อ
                </button>
                <button
                    className={`px-4 ${selectedStatus === "ปฏิเสธคำสั่งซื้อ" ? "text-black border-b-2 border-black" : "text-[#D60C0C]"}`}
                    onClick={() => setSelectedStatus("ปฏิเสธคำสั่งซื้อ")}
                >
                    ปฏิเสธคำสั่งซื้อ
                </button>
            </div>

            {/* Order List */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {filteredOrders.map((order, index) => (
                        <div key={index} className="flex items-center p-4 border-b border-gray-200">
                            <div className="flex w-full">
                                <Image src={order.image} alt={order.name} width={70} height={70} className="rounded-md" />
                                <div className="ml-4 flex-1">
                                    <h3 className="font-semibold text-lg">{order.name}</h3>
                                    <p className="text-gray-500">หมายเลขคำสั่งซื้อ: {order.id}</p>
                                    <p className="text-gray-500">{order.quantity} รายการ</p>
                                    <p className="text-lg font-bold">{order.price}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-black">สถานะ: <span className={order.statusColor}>{order.status}</span></p>
                                    <button
                                        className="mt-2 text-[#6DB6AE] hover:underline text-2xl"
                                        onClick={() => router.push(`/DONE/Customer/Tracking?id=${order.id}`)}  // ใช้เส้นทางตรงกับโครงสร้างของคุณ
                                    >
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

export default OrderTracking;
