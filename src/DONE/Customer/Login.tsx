"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
    // TODO: เชื่อม API Login ที่นี่
    router.push("/dashboard"); // ไปหน้า Dashboard หลัง Login สำเร็จ
  };

  return (
    <div className="flex h-screen items-center justify-center bg-rose-50">
      <div className="flex bg-white rounded-lg shadow-lg">
        <div className="w-xs justify-items-center text-center">
          <Image
            src={"/image/doll.png"}
            alt={"doll"}
            width={200}
            height={200}
            className="rounded-md pt-10"
          />
        </div>
        <div className="p-8 w-96">
          <h2 className="text-3xl text-center text-rose-300">เข้าสู่ระบบ</h2>
          <form onSubmit={handleLogin} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-600 text-md font-medium">
                อีเมล
              </label>
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
              <label className="block text-gray-600 text-md font-medium">
                รหัสผ่าน
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
                placeholder="รหัสผ่าน"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-300 text-white p-2 rounded-lg hover:bg-rose-400 transition"
            >
              เข้าสู่ระบบ
            </button>
          </form>
          <p className="text-center text-md text-gray-500 mt-4">
            ยังไม่มีบัญชี?{" "}
            <a
              href="/register"
              className="text-md text-rose-300 hover:underline"
            >
              สมัครสมาชิก
            </a>
          </p>
        </div>
      </div>
    </div>
  );

//   return (
//     <div className="flex h-screen items-center justify-center bg-rose-50">
//       <div>
//         <div className="justify-items-end">
//           <Image
//             src={"/image/doll.png"}
//             alt={"doll"}
//             width={120}
//             height={120}
//             className="rounded-md"
//           />
//         </div>
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-3xl text-center text-rose-300">เข้าสู่ระบบ</h2>
//           <form onSubmit={handleLogin} className="mt-4">
//             <div className="mb-4">
//               <label className="block text-gray-600 text-md font-medium">
//                 อีเมล
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600 text-md font-medium">
//                 รหัสผ่าน
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 border border-gray-200 rounded mt-1 focus:outline focus:outline-rose-300"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-rose-300 text-white p-2 rounded-lg hover:bg-rose-400 transition"
//             >
//               เข้าสู่ระบบ
//             </button>
//           </form>
//           <p className="text-center text-md text-gray-500 mt-4">
//             ยังไม่มีบัญชี?{" "}
//             <a
//               href="/register"
//               className="text-md text-rose-300 hover:underline"
//             >
//               สมัครสมาชิก
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
};

export default LoginPage;
