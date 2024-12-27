import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import pic1 from "@/public/Asgaard sofa 3.png";
import pic2 from "@/public/Outdoor sofa set 2.png";
import pic3 from "@/public/Outdoor sofa set_2 1.png";
import pic4 from "@/public/Stuart sofa 1.png";
import pic5 from "@/public/Maya sofa three seater (1) 1.png";
import star from "@/public/stars.png";
import line from "@/public/Line 5.png";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="text-sm bg-[#F9F1E7] text-gray-500 gap-2 flex items-center px-4 lg:px-12 py-2 lg:py-4 w-full">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        &gt;
        <a href="/shop" className="hover:underline ml-1">
          Shop
        </a>{" "}
        &gt;
        <Image src={line} alt="line" />
        <span className="ml-1 text-gray-700">Asgaard sofa</span>
      </nav>

      {/* Product Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 my-8">
        {/* Left: Images */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Small Images */}
          <div className="flex md:flex-col gap-5 mb-4 md:mb-0">
            {[pic2, pic3, pic4, pic5].map((pic, index) => (
              <Image
                key={index}
                src={pic}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16  bg-[#F9F1E7] rounded-md cursor-pointer"
              />
            ))}
          </div>

          {/* Big Image */}
          <div className="bg-[#F9F1E7] rounded-md  ml-5 mr-0 w-full max-w-[450px] h-auto">
            <Image src={pic1} alt="Asgaard sofa" className="w-full h-auto" />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="pl-3">
          <h1 className="text-2xl mt-7 font-bold">Asgaard sofa</h1>
          <p className="text-lg text-[#9F9F9F] mt-2">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center mt-2 gap-2">
            <Image src={star} alt="stars" />
            <Image src={line} alt="line" />
            <p className="text-gray-500 text-sm">5 Customer Review</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4 max-w-[400px] text-[14px] font-medium leading-6">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="mt-4">
            <p className="font-medium">Size</p>
            <div className="flex gap-2 mt-2 text-sm">
              <button className="px-4 py-2 border rounded-md bg-[#B88E2F]">
                L
              </button>
              <button className="px-4 py-2 border rounded-md bg-[#F9F1E7]">
                XL
              </button>
              <button className="px-4 py-2 border rounded-md bg-[#F9F1E7]">
                XS
              </button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-4">
            <p className="font-medium">Color</p>
            <div className="flex gap-2 mt-2">
              <button className="w-8 h-8 rounded-full bg-[#816DFA] border"></button>
              <button className="w-8 h-8 rounded-full bg-black border"></button>
              <button className="w-8 h-8 rounded-full bg-[#B88E2F] border"></button>
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <div className="flex items-center border rounded-md">
              <button className="px-2 py-1">-</button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center border-l border-r outline-none"
              />
              <button className="px-2 py-1">+</button>
            </div>
            <Link href="/cart">
              <button className="px-6 py-2 border rounded-md">Add To Cart</button>
            </Link>
            <button className="px-6 py-2 border rounded-md">+ Compare</button>
          </div>

          {/* Additional Details */}
          <hr className="my-6" />
          <div className="text-sm text-gray-500 space-y-2">
            <p>
              <span className="font-medium">SKU:</span> 59001
            </p>
            <p>
              <span className="font-medium">Category:</span> Sofas
            </p>
            <p>
              <span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop
            </p>
            <div className="flex items-center gap-2">
              <p className="font-medium">Share:</p>
              <span className="flex gap-2 text-black">
                <FaFacebook />
                <FaLinkedinIn />
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
