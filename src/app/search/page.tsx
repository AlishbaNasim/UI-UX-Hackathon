"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PulseLoader } from "react-spinners";
import { PiShareNetworkFill } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import { BsHeart } from "react-icons/bs";
import { useCart } from "../context/cartProvider";
import Product from "@/components/Product";
import SubhHero from "@/components/SubhHero";
import { allProductsQueries } from "@/sanity/lib/queries";
import Features from "@/components/Features";

export interface Product {
  id: string;
  description: string;
  title: string;
  price: number;
  discountPercentage: number;
  tags: [];
  isNew: boolean;
  imageUrl: string;
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Product link copied to clipboard!");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const query = await client.fetch(allProductsQueries);
      setProducts(query);
      setFilteredProducts(query);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [query, products]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const { addToWishlist } = useCart();
  return (
    <div className="w-full bg-white">
      {/* Loading  */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PulseLoader color="#000" />
        </div>
      ) : (
        <>
          <div className="relative w-full">
            <SubhHero title="Search" subtitle="Home < Search" />
          </div>
          {/* Search Bar */}
          <div className="w-full p-4 bg-gray-200 flex justify-center items-center">
            <form
              onSubmit={handleSearchSubmit}
              className="flex w-full max-w-4xl items-center bg-white p-2 rounded-lg shadow-lg"
            >
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for products, categories, etc."
                className="w-full p-2 rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-yellow-500 text-black rounded-lg"
              >
                Search
              </button>
            </form>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto my-8 ">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center text-xl text-gray-500">
                No products found for &quot;{query}&quot;
              </div>
            ) : (
              filteredProducts.map((product) => (
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
                    <Link href={`/product/${product.title}`}>
                      {" "}
                      <button className="bg-white text-[#B88E2F] px-9 py-2 mb-2 font-bold">
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
                        <button onClick={() => addToWishlist(product)}>
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Product Details */}
                  <h3 className="text-lg font-semibold mt-4 mx-4">
                    {product.title}
                  </h3>
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
              ))
            )}
          </div>
        </>
      )}
      <Features />
    </div>
  );
};

export default Search;
