"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiShareNetworkFill } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { LuArrowRightLeft } from "react-icons/lu";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { subProductQueries } from "@/sanity/lib/queries";
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

function SubProduct() {
  const [subProducts, setSubProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sanityFetch({ query: subProductQueries }) as ProductType[];
        setSubProducts(data);
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
    <div className="mb-7">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
        {subProducts.map((product: ProductType) => (
          <div
            key={product.id}
            className="relative group bg-[#F4F5F7] w-[285px] h-[480px] mx-auto"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={285}
              height={100}
              className="h-80 object-cover"
            />
            {product.isNew && (
              <span
                className={`absolute top-4 right-4 text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full flex items-center justify-center`}
              >
                {product.isNew}
              </span>
            )}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href={`/product/${product.slug.current}`}>
                <button className="bg-white text-[#B88E2F] px-9 py-2 mb-2 font-bold">
                  View Details
                </button>
              </Link>
              <div className="flex space-x-4 text-white font-bold text-base">
                <div className="flex gap-2">
                  <PiShareNetworkFill />

                  <button onClick={handleShare}>Share</button>
                </div>
                <div className="flex gap-2">
                  <LuArrowRightLeft />
                  <Link href="/compare">
                    <button>Compare</button>
                  </Link>
                </div>
                <div className="flex gap-2 ">
                  <BsHeart />
                  <button onClick={() => addToWishlist(product)}>Like</button>
                </div>
                {/* <BuyingOptions product={product} tags={product.tags} /> */}
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 mx-2">{product.title}</h3>
            {product.description && (
              <p className="text-sm text-gray-600 mx-2 mt-2 line-clamp-2">
                {product.description}
              </p>
            )}
            <div className="mt-4 mx-2">
              <span className="text-lg font-bold text-black">
                Rp{product.price}
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

export default SubProduct;
