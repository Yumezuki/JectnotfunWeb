"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน! กรุณากรอกใหม่");
      return;
    }
    console.log("Registering with", email, password);
    // TODO: เชื่อม API ลงทะเบียนที่นี่
    router.push("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-rose-50">
      <div className="bg-white rounded-lg shadow-lg flex">
        <div className="flex w-xs items-center justify-center pl-10">
          <Image src="/image/doll.png" alt="doll" width={200} height={200} />
        </div>
        <div className="p-8 w-96">
          <h2 className="text-3xl text-center text-rose-300">ลงทะเบียน</h2>
          <form onSubmit={handleRegister} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-md">อีเมลผู้ใช้</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
                placeholder="อีเมล"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md">
                ตั้งรหัสผ่านใหม่
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
                placeholder="กรอกรหัสผ่านใหม่"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md">
                ยืนยันรหัสผ่านอีกครั้ง
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
                placeholder="กรอกรหัสผ่านอีกครั้ง"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-300 text-white p-2 rounded-lg hover:bg-rose-400 transition"
            >
              สมัครสมาชิก
            </button>
          </form>
          <p className="text-center  text-gray-600 mt-4">
            <a href="/login" className="text-rose-300 hover:underline">
              เข้าสู่ระบบ
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="flex h-screen items-center justify-center bg-rose-50">
  //       <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
  //         <h2 className="text-3xl text-center text-rose-300">ลงทะเบียน</h2>
  //         <form onSubmit={handleRegister} className="mt-4">
  //           <div className="mb-4">
  //             <label className="block text-gray-700 text-md">อีเมลผู้ใช้</label>
  //             <input
  //               type="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
  //               placeholder="อีเมล"
  //               required
  //             />
  //           </div>
  //           <div className="mb-4">
  //             <label className="block text-gray-700 text-md">ตั้งรหัสผ่านใหม่</label>
  //             <input
  //               type="password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
  //               placeholder="กรอกรหัสผ่านใหม่"
  //               required
  //             />
  //           </div>
  //           <div className="mb-4">
  //             <label className="block text-gray-700 text-md">ยืนยันรหัสผ่านอีกครั้ง</label>
  //             <input
  //               type="password"
  //               value={confirmPassword}
  //               onChange={(e) => setConfirmPassword(e.target.value)}
  //               className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
  //               placeholder="กรอกรหัสผ่านอีกครั้ง"
  //               required
  //             />
  //           </div>
  //           <button
  //             type="submit"
  //             className="w-full bg-rose-300 text-white p-2 rounded-lg hover:bg-rose-400 transition"
  //           >
  //             สมัครสมาชิก
  //           </button>
  //         </form>
  //         <p className="text-center  text-gray-600 mt-4">
  //           <a href="/login" className="text-rose-300 hover:underline">
  //             เข้าสู่ระบบ
  //           </a>
  //         </p>
  //         <div className="absolute bottom-0 right-0 -mb-10 -mr-6">
  //           <Image src="/image/doll.png" alt="doll" width={90} height={90} />
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default RegisterPage;
