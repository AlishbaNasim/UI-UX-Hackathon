import React from "react";
import Image from "next/image";
import sofa1 from "@/public/Asgaard sofa 3.png";
import sofa2 from "@/public/Outdoor sofa set 2.png";
import star from "@/public/stars.png";
import line from "@/public/Line 5.png";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const ProductShow = () => {
  return (
    <div className="bg-white p-6 lg:px-14 md:py-6">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Column 1: Title and View More */}
        <div className="mx-auto text-center md:text-left mb-4">
          <h2 className="text-[28px] font-medium text-gray-800 leading-normal mt-2 mb-2">
            Go to Product page for more Products
          </h2>
          <a
            href="/shop"
            className="text-xl text-gray-500 hover:text-blue-600  pt-6 underline"
          >
            View More
          </a>
        </div>

        {/* Column 2: Product Card 1 */}
        <div className="mx-auto">
          <Image
            src={sofa1}
            alt="Asgaard Sofa"
            className="h-[142px] w-[229px] rounded-md bg-[#F9F1E7] mb-4"
          ></Image>
          <h3 className="text-2xl font-medium text-gray-800">Asgaard Sofa</h3>
          <p className="text-lg font-medium text-gray-600 mt-1">
            Rs. 250,000.00
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-lg font-medium">
              <h2>4.7</h2>
              <Image src={star} alt="star"></Image>
            </div>
            <Image src={line} alt="alt"></Image>
            <span className="text-sm text-gray-500">204 Review</span>
          </div>
        </div>

        {/* Column 3: Product Card 2 */}
        <div className="mx-auto">
          <Image
            src={sofa2}
            alt="Outdoor Sofa Set"
            className="bg-[#F9F1E7] h-[142px] w-[229px] rounded-md mb-4"
          ></Image>
          <h3 className="text-2xl font-medium text-gray-800">
            Outdoor Sofa Set
          </h3>
          <p className="text-lg font-medium text-gray-600 mt-1">
            Rs. 224,000.00
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-lg font-medium">
              <h2>4.2</h2>
              <Image src={star} alt="star"></Image>
            </div>
            <Image src={line} alt="alt"></Image>
            <span className="text-sm text-gray-500">145 Review</span>
          </div>
        </div>

        {/* Column 4: Add a Product Button */}
        <div className="mt-12 mx-auto">
          <h1 className="text-2xl font-medium ">Add A Product</h1>
          <div className="flex justify-between items-center mt-5">
            <Link href="/shop">
              {" "}
              <button className="bg-[#B88E2F] w-[223px] text-white px-6 py-3 text-sm font-medium rounded-md flex items-center">
                Choose a Product
                <span className="pl-12 text-2xl">
                  <IoIosArrowDown />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
