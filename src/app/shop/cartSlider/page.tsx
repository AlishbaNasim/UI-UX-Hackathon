"use client"
import ProductDescription from '@/components/ProductDescription'
import ProductDetails from '@/components/ProductDetails'
import SubProduct from '@/components/SubProduct'
import React, { useState } from 'react'
import Link from 'next/link'
import CartSlider from '@/components/CartSlider'

function Page() {
  const [isCartOpen, setIsCartOpen] = useState(true); 

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
        <Link href="/shop">
          <button className="mt-4 mb-8 md:ml-[550px] text-center sm:px-10 sm:py-4 md:px-[72px] md:py-[25px] outline text-[#B88E2F] font-semibold">
            Show More
          </button>
        </Link>
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
