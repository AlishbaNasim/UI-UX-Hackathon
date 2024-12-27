"use client"
import ProductDescription from '@/components/ProductDescription'
import ProductDetails from '@/components/ProductDetails'
import SubProduct from '@/components/SubProduct'
import React, { useState } from 'react'
import Link from 'next/link'
import CartSlider from '@/components/CartSlider'

function Page() {
  const [isCartOpen] = useState(true);

  return (
    <div >
      {/* Overlay when CartSlider is active */}
      {isCartOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Main Content */}
      <div>
        <ProductDetails />
        <ProductDescription />
        <h1 className="text-4xl font-bold text-center pb-7">Related Products</h1>
        <SubProduct />
        <div className="flex flex-col items-center sm:items-start md:items-center lg:items-center mx-auto m-6">
          <Link href="/shop">
            <button
              className=" text-[#B88E2F] font-semibold text-base outline w-[234px] p-6">
              Show More
            </button>
          </Link>
        </div>
      </div>
      {/* CartSlider */}
      {isCartOpen && (
        <div className="absolute top-0 right-0 z-50">
          <CartSlider />
        </div>
      )}
    </div>
  );
}

export default Page;
