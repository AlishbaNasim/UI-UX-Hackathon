import React from 'react'
import Image from "next/image";
import Product1 from "@/public/p1.png";
import Product2 from "@/public/p2.png";
import Product3 from "@/public/p3.png";
import Product4 from "@/public/p4.png";
const SubProduct = () => {
    return (
        <div>
            {/* Products Grid */}
            <div className="grid grid-cols-1 mt-0  sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {/* Product 1 */}
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

                {/* Product 2 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product2} alt="Leviosa" className="w-full h-[310px]" />
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
    )
}

export default SubProduct