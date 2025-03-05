"use client";
import React, { useRef, useState } from "react";
import products from "@/data/Data";
import ProductCard from "@/components/ProductCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const HomePage = () => {
  const [priceRange, setPriceRange] = useState([100, 300]);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerRow = 4;
  const maxRowsPerPage = 3;
  const productsPerPage = productsPerRow * maxRowsPerPage;

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "ทั้งหมด" ||
        product.category === selectedCategory) &&
      (selectedStyle === "ทั้งหมด" ||
        selectedStyle === "" ||
        product.style === selectedStyle) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  paginatedProducts = paginatedProducts.concat(
    Array(Math.max(0, productsPerPage - paginatedProducts.length)).fill(null)
  );

  const shopSectionRef = useRef<HTMLDivElement | null>(null);
  const handleScrollToShop = () => {
    if (shopSectionRef.current) {
      shopSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <header
        className="p-8 bg-cover bg-center bg-no-repeat flex items-center justify-start lg:h-[50em] md:h-[30em]"
        style={{
          backgroundImage: "url('/image/BG-Homepage.png')",
        }}
      >
        <div className="text-left w-2/5 ml-16">
          <h1 className="lg:text-5xl text-4xl font-bold text-gray-600 md:leading-12 lg:leading-16">
            ออกแบบตุ๊กตาในแบบของคุณ ให้เป็นของขวัญที่พิเศษ!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            ให้คุณได้ครอบครองความเป็นเอกลักษณ์และ ความพิเศษในแบบของตัวเอง
          </p>
          <button
            className="bg-rose-300 text-white text-lg px-8 py-2 rounded-full mt-8 hover:bg-rose-400 hover:scale-105 transition-transform"
            onClick={handleScrollToShop}
          >
            สั่งซื้อเลย!
          </button>
        </div>
      </header>

      <div ref={shopSectionRef} className="flex gap-4 lg:m-20 m-15">
        {/* Sidebar Filter */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl text-rose-300">ตัวกรอง</h2>

          <hr className="text-gray-200 my-4" />

          <div>
            <h3 className=" mb-4">หมวดหมู่</h3>
            <div className="flex gap-2">
              {["ทั้งหมด", "Pillow", "Doll"].map((category) => (
                <button
                  key={category}
                  className={`py-1 px-4 rounded-full ${
                    selectedCategory === category
                      ? "bg-rose-300 text-white"
                      : "bg-gray-100 border-none"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <hr className="text-gray-200 my-4" />

          <div>
            <h3 className=" mb-3">ราคา</h3>
            <input
              type="range"
              id="price-range"
              min="100"
              max="300"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([100, Math.max(100, Number(e.target.value))])
              }
              className="w-full accent-rose-200"
            />
            <p className="text-center">สูงสุด {priceRange[1]} บาท</p>
          </div>

          <hr className="text-gray-200 my-4" />

          <div className="w-full">
            <h3 className="mb-4">ประเภท</h3>
            <div className="flex flex-wrap gap-2">
              {["ทั้งหมด", "Cute", "Minimal", "Fancy"].map((style) => (
                <button
                  key={style}
                  className={`py-1 px-4 rounded-full ${
                    selectedStyle === style
                      ? "bg-rose-300 text-white"
                      : "bg-gray-100 border-none"
                  }`}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full">
          <div>
            <h1 className="text-4xl m-4 text-rose-300">ร้านค้า</h1>
            <div className="grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-6 gap-4 min-h-[600px]">
              {paginatedProducts.map((product, index) =>
                product ? (
                  <ProductCard key={product.id} {...product} />
                ) : (
                  <div
                    key={`placeholder-${index}`}
                    className="w-full h-48"
                  ></div>
                )
              )}
            </div>
          </div>

          <hr className="text-gray-200 my-10" />

          {/* Pagination Controls */}
          <div className="flex items-center justify-between gap-2 p-4">
            {/* ปุ่ม Previous */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              <HiChevronLeft size={16} />
              Previous
            </button>

            {/* หมายเลขหน้า */}
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-gray-200 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* ปุ่ม Next */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              Next
              <HiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
