import SubhHero from '@/components/SubhHero'
import React from 'react'
import Link from 'next/link'
import filter2 from "@/public/Vector (1).png"
import filter1 from "@/public/Vector_3.png"
import dots4 from "@/public/Vector (2).png"
import line from "@/public/Line 5.png"
import Image from "next/image"
import Product1 from "@/public/p1.png";
import Product2 from "@/public/p2.png";
import Product3 from "@/public/p3.png";
import Product4 from "@/public/p4.png";
import SubProduct from '@/components/SubProduct'
import Button from '@/components/Button'
import Features from '@/components/Features'
function shop() {
  return (
    <div>
      <SubhHero title='Shop' subtitle='Home > Shop' />
      <div className='bg-[#F9F1E7] w-full h-auto py-4 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 space-y-4 md:space-y-0'>
        {/* Left Section */}
        <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-8 items-center'>
          <Image src={filter1} alt="filter" />
          <h2 className='font-medium text-lg md:text-[24px]'>Filter</h2>
          <Image src={dots4} alt="dots"  />
          <Image src={filter2} alt="filter2"  />
          <Image src={line} alt="line5"/>
          <p className='text-sm md:text-base'>Showing 1–16 of 32 results</p>
        </div>

        {/* Right Section */}
        <div className='flex flex-col sm:flex-row gap-3 md:gap-6 items-center'>
          <div className='flex items-center gap-2'>
            <p className='text-sm md:text-base'>Show</p>
            <input
              type="text"
              placeholder="16"
              className="w-[50px] h-[40px] sm:w-[55px] sm:h-[55px] p-2 sm:p-3 text-center border border-gray-300 rounded-md"
            />
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-sm md:text-base'>Sort by</p>
            <input
              type="text"
              placeholder='Default'
              className="w-[140px] h-[40px] sm:w-[188px] sm:h-[55px] px-4 sm:px-9 text-sm border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className='mt-10 px-12'>
        <div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Product 1 */}
           <Link href="/shop/product" >
           <div className="relative bg-white w-[285px] h-[446px]">
              <div className="relative">
                <Image src={Product1} alt="Syltherine" className="w-full h-auto" />
                <span className="absolute top-4 right-4  bg-[#E97171] text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full">
                  -30%
                </span>
              </div>
              <div className="p-4 text-start bg-[#F4F5F7]">
                <h3 className="text-2xl font-semibold text-black">Syltherine</h3>
                <p className="text-sm font-medium text-[#898989]">Stylish cafe chair</p>
                <div className="mt-2 flex items-start space-x-3">
                  <span className="text-lg font-semibold text-black">Rp 2.500.000</span>
                  <span className="text-[16px] line-through text-gray-500 ">Rp 3.500.000</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 2 */}
            <div className="relative bg-white w-[285px] h-[446px]">
              <div className="relative">
                <Image src={Product2} alt="Leviosa" className="w-full h-[310px]" />
                <div className="absolute inset-0 bg-black/15  opacity-100 flex items-center justify-center transition duration-300">
                <Link href="/cart"> <button className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-100">
                    Add to cart
                  </button></Link> 
                </div>
              </div>
              <div className="p-4 text-start bg-[#F4F5F7]">
                <h3 className="text-2xl font-semibold text-black">Leviosa</h3>
                <p className="text-sm font-medium text-[#898989]">Stylish cafe chair</p>
                <span className="text-lg font-semibold text-black">Rp 2.500.000</span>
              </div>
            </div>
            {/* Product 3 */}
            <div className="relative bg-white w-[285px] h-[446px]">
              <div className="relative">
                <Image src={Product3} alt="Lolito" className="w-full h-auto" />
                <span className="absolute top-4 right-4 bg-[#E97171] text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full">
                  -50%
                </span>
              </div>
              <div className="p-4 text-start bg-[#F4F5F7]">
                <h3 className="text-2xl font-semibold text-black">Lolito</h3>
                <p className="text-sm  font-medium text-[#898989]">Luxury big sofa</p>
                <div className="mt-2 flex items-start space-x-3">
                  <span className="text-lg font-semibold text-black">Rp 7.000.000</span>
                  <span className="text-[16px] line-through text-gray-500 ">Rp 14.000.000</span>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="relative bg-white w-[285px] h-[446px]">
              <div className="relative">
                <Image src={Product4} alt="Respira" className="w-full h-[310px]" />
                <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs  px-3 py-4 h-[48px] w-[48px] rounded-full">
                  New
                </span>
              </div>
              <div className="p-4 text-start bg-[#F4F5F7]">
                <h3 className="text-2xl font-semibold text-black">Respira</h3>
                <p className="text-sm  font-medium text-[#898989]">Outdoor bar table and stool</p>
                <span className="text-lg font-semibold text-black">Rp 500.000</span>
              </div>
            </div>
          </div>
        </div>
        <SubProduct />
        <SubProduct />
        <SubProduct />

        <Button />
      </div>
      <Features />
    </div>
  )
}

export default shop