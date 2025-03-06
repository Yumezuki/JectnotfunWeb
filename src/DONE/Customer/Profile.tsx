"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import Footer from "@/components/Footer";
import '@/app/globals.css';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1700px] mx-auto px-8 md:px-12 lg:px-16 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold mb-4">Profile</h1>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Pencil size={18} /> {isEditing ? "บันทึก" : "แก้ไข"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          <div className="flex justify-center sm:justify-start">
            <label className="cursor-pointer relative">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover"
                />
              ) : (
                <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-[#FCE9EA]" />
              )}
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              )}
            </label>
          </div>

          <div className="sm:col-span-1 lg:col-span-3 space-y-5">
            <div className="flex flex-col space-y-7">
              {[ 
                { label: "ชื่อ-นามสกุล", name: "name" },
                { label: "Email", name: "email" },
                { label: "เบอร์โทรศัพท์", name: "phone" },
              ].map((field) => (
                <div className="flex items-center gap-4" key={field.name}>
                  <label className="w-28">{field.label} :</label>
                  {isEditing ? (
                    <Input
                      type="text"
                      name={field.name}
                      value={profile[field.name]}
                      onChange={handleChange}
                      className="bg-[#FCE9EA] w-80 rounded-full border-none"
                    />
                  ) : (
                    <span className="w-80 px-4 py-2 font-bold">{profile[field.name]}</span>
                  )}
                </div>
              ))}
              <div className="flex items-start gap-4">
                <label className="w-28 mt-2 ">ที่อยู่ :</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    className="bg-[#FCE9EA] w-80 rounded-xl border-gray-100 p-2"
                    rows="7"
                  />
                ) : (
                  <span className="w-80 px-4 py-2 block font-bold">{profile.address}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
