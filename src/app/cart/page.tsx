import React from 'react'
import Image from "next/image"
import sofa from "@/public/Asgaard sofa 3.png"
import { AiFillDelete } from "react-icons/ai";
const page = () => {
    return (
        <div><div className="container mx-auto p-12">
            {/* Cart Table  */}
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-3/4">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 items-center bg-[#F9F1E7] p-4 font-medium text-center text-black">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    {/* {/* Table Row */}
                    <div className="grid grid-cols-4 items-center p-4 border-b">
                        {/* Product Column  */}
                        <div className="flex items-center gap-4">
                            <Image
                                src={sofa}
                                alt="Product Image"
                                className="w-20 h-20 rounded"
                            ></Image>
                            <p>Asgaard Sofa</p>
                        </div>

                        {/* Price Column  */}
                        <div className="text-center text-gray-700">Rs. 250,000.00</div>

                        {/*  Quantity Column  */}
                        <div className="flex justify-center">
                            <input
                                type="number"
                                value="1"
                                className="w-12 border border-gray-300 text-center rounded-md"
                            />
                        </div>

                        {/* Subtotal Column  */}
                        <div className="flex justify-between items-center">
                            <p>Rs. 250,000.00</p>
                            <button>
                            <AiFillDelete  className="text-[#B88E2F]"/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cart Totals  */}
                <div className="w-full lg:w-1/4 bg-[#F9F1E7] p-6 rounded-md">
                    <h2 className="text-lg font-medium mb-4">Cart Totals</h2>
                    <div className="flex justify-between mb-2">
                        <p>Subtotal</p>
                        <p>Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="font-medium">Total</p>
                        <p className="text-orange-500 font-medium">Rs. 250,000.00</p>
                    </div>
                    <button className="w-full bg-white border border-black rounded-md py-2 font-medium hover:bg-gray-100">
                        Check Out
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default page