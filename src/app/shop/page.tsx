"use client";
import SubhHero from "@/components/SubhHero";
import React from "react";
import filter2 from "@/public/Vector (1).png";
import filter1 from "@/public/Vector_3.png";
import dots4 from "@/public/Vector (2).png";
import line from "@/public/Line 5.png";
import Image from "next/image";
import Features from "@/components/Features";
import Product from "@/components/Product";
import Button from "@/components/Button";

function shop() {
  return (
    <div>
      <SubhHero title="Shop" subtitle="Home > Shop" />
      <div className="bg-[#F9F1E7] w-full h-auto py-4 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 items-center">
          <Image src={filter1} alt="filter" />
          <h2 className="font-medium text-lg md:text-[24px]">Filter</h2>
          <Image src={dots4} alt="dots" />
          <Image src={filter2} alt="filter2" />
          <Image src={line} alt="line5" />
          <p className="text-sm md:text-base">Showing 1–16 of 32 results</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base">Show</p>
            <input
              type="text"
              placeholder="16"
              className="w-[50px] h-[40px] sm:w-[55px] sm:h-[55px] p-2 sm:p-3 text-center border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-base">Sort by</p>
            <input
              type="text"
              placeholder="Default"
              className="w-[140px] h-[40px] sm:w-[188px] sm:h-[55px] px-4 sm:px-9 text-sm border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <div className="mt-10 mx-auto">
          <Product />
        </div>
        <Button/>
      </div>
      <Features />
    </div>
  );
}

export default shop;
