import ProductDescription from '@/components/ProductDescription'
import ProductDetails from '@/components/ProductDetails'
import SubProduct from '@/components/SubProduct'
import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
      <ProductDetails />
      <ProductDescription />
      <h1 className='text-4xl font-bold text-center pb-7'>Related Products</h1>
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
  )
}

export default page