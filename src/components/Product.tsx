"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiShareNetworkFill } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { LuArrowRightLeft } from "react-icons/lu";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProductsQueries } from "@/sanity/lib/queries";
import { useCart } from "@/app/context/cartProvider";

type ProductType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage: number;
  isNew: boolean;
  slug: {
    _type: "slug";
    current: string;
  };
  tags: [];
};

function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // State to hold cart items
  // const [cartItems, setCartItems] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sanityFetch({ query: allProductsQueries });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Product link copied to clipboard!");
  };
  const { addToWishlist } = useCart();

  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-6">Our Products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-[#F4F5F7] w-[285px] h-[480px] mx-auto"
          >
            {/* Product Image */}
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={285}
              height={100}
              className="h-80 object-cover"
            />
            {/* Badge */}
            {product.isNew && (
              <span
                className={`absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full flex items-center justify-center`}
              >
                New
              </span>
            )}
            {/* Hover Options */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href={`/product/${product.slug.current}`}>
                
                <button className="bg-white text-[#b67c26] px-9 py-2 mb-2 font-bold">
                  View details
                </button>
              </Link>
              <div className="flex space-x-4 text-white font-bold text-base">
                <div className="flex gap-2 items-center">
                  <PiShareNetworkFill />
                  <button onClick={handleShare}>Share</button>
                </div>
                <div className="flex gap-2 items-center">
                  <LuArrowRightLeft />
                  <Link href="/compare">
                    <button>Compare</button>
                  </Link>
                </div>
                <div className=" flex gap-2 items-center">
                  <BsHeart />
                  <button onClick={() => addToWishlist(product)}>Like</button>
                </div>
              </div>
            </div>
            {/* Product Details */}
            <h3 className="text-lg font-semibold mt-4 mx-4">{product.title}</h3>
            {product.description && (
              <p className="text-sm text-gray-600 mt-2 line-clamp-2 mx-4">
                {product.description}
              </p>
            )}
            <div className="mt-4">
              <span className="text-lg font-bold text-black mx-4">
                Rp {product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.discountPercentage}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
export default Product;
