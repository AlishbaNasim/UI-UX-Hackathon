"use client";
import React from "react";
import { useCart } from "@/app/context/cartProvider";
import BuyingOptions from "@/components/BuyingOptions";
import {  Trash } from "lucide-react";
import SubhHero from "@/components/SubhHero";
import Features from "@/components/Features";
import Image from "next/image";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useCart();

  return (
    <div className="relative w-full">
      <SubhHero title="Wishlist" subtitle="Home > Wishlist" />
      {/* Wishlist Items */}
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-medium text-center">
                {product.title}
              </h2>
              <p className="text-gray-600">
                Price: {product.price.toFixed(2)}
              </p>
              <BuyingOptions product={product} tags={product.tags} />
              <button
                className="mt-2  text-red-600 px-4 py-2 rounded-md  flex items-center"
                onClick={() => removeFromWishlist(product)}
              >
                <Trash className="mr-2" /> Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-9 justify-center  text-center text-gray-500">
          <p className="text-2xl">Your wishlist is empty.</p>
        </div>
      )}
      <Features />
    </div>
  );
};

export default WishlistPage;
