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
      <Link href="/shop">
        <button
          className="mt-6 px-6 py-3 text-[#B88E2F] font-semibold outline transition 
             sm:px-10 sm:py-4 sm:ml-28
             md:px-12 md:py-5 md:ml-56 
             lg:px-16 lg:py-6 lg:ml-72 
             xl:ml-80 
             mb-6"
             
        >
          Show More
        </button>
      </Link>
    </div>
  )
}

export default page