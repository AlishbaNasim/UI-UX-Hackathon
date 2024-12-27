import React from 'react'
import Image, { StaticImageData } from "next/image";
import Product1 from "@/public/p1.png";
import Product2 from "@/public/p2.png";
import Product3 from "@/public/p3.png";
import Product4 from "@/public/p4.png";
import { PiShareNetworkFill } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { LuArrowRightLeft } from "react-icons/lu";
import Link from "next/link";
type subProduct = {
    id: number;
    image: StaticImageData;
    title: string;
    description?: string;
    price: string;
    originalPrice?: string;
    badge?: string;
    badgeColor?: string;
    button?: string;
};
const subproduct: subProduct[] = [
    {
        id: 1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        image: Product1,
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        badge: "-30%",
        badgeColor: "[#E97171]",
    },
    {
        id: 2,
        title: "Leviosa",
        description: "Stylish cafe chair",
        image: Product2,
        price: "Rp 2.500.000",
    },
    {
        id: 3,
        title: "Lolito",
        description: "Luxury big sofa",
        image: Product3,
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        badge: "-50%",
        badgeColor: "[#E97171]",
    },
    {
        id: 4,
        title: "Respira",
        description: "Outdoor bar table and stool",
        image: Product4,
        price: "Rp 500.000",
        badge: "New",
        badgeColor: "teal-500",
    }]
const SubProduct = () => {
    return (
        <div>
            {/* Products Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                {subproduct.map((subProduct) => (
                    <div
                        key={subProduct.id}
                        className="relative group bg-[#F4F5F7] w-[285px] h-[436px] mx-auto"
                    >
                        {/* Product Image */}
                        <Image
                            src={subProduct.image}
                            alt={subProduct.title}
                            width={285}
                            height={200}
                            className="w-full h-auto object-cover"
                        />
                        {/* Badge */}
                        {subProduct.badge && (
                            <span
                                className={`absolute top-4 right-4 bg-${subProduct.badgeColor} text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full flex items-center justify-center`}
                            >
                                {subProduct.badge}
                            </span>
                        )}
                        {/* Hover Options */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link href="/cart">
                            <button className="bg-white text-[#B88E2F] px-9 py-2 mb-2  font-bold">
                                Add to cart
                            </button>
                            </Link>
                            <div className="flex space-x-4 text-white font-bold text-base">
                                <div className="flex gap-2">
                                    <PiShareNetworkFill />
                                  <Link href="/shop/product"><button>Share</button></Link> 
                                </div>
                                <div className="flex gap-2 ">
                                    <LuArrowRightLeft />
                                    <Link href="#"> <button>Compare</button></Link>
                                </div>
                                <div className="flex gap-2">
                                    <BsHeart />
                                    <Link href="/shop/cartSlider">
                                        <button >Like</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <h3 className="text-lg font-semibold mt-4 mx-2">{subProduct.title}</h3>
                        {subProduct.description && (
                            <p className="text-sm text-gray-600 mx-2 mt-2">{subProduct.description}</p>
                        )}
                        <div className="mt-4 mx-2">
                            <span className="text-lg font-bold text-black">{subProduct.price}</span>
                            {subProduct.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                    {subProduct.originalPrice}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubProduct