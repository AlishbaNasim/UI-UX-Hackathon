import Hero from "../components/Hero";
import React from "react";
import BrowseRange from "../components/BrowseRange";
import Room from "@/components/Room";
import Furniture from "@/components/Furniture";
import SubProduct from "@/components/SubProduct";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Hero />
      <BrowseRange />
      <h1 className="text-center font-bold text-4xl mb-6">Our Products</h1>
      <SubProduct />
      <div className="flex flex-col items-center sm:items-start md:items-center lg:items-start lg:ml-[545px] m-6">
        <Link href="/shop">
          <button className="text-[#B88E2F] font-semibold text-base outline w-[234px] p-6">
            Show More
          </button>
        </Link>
      </div>
      <Room />
      <Furniture />
    </div>
  );
}
