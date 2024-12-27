import React from "react";
import Image from "next/image";
import Lock from "@/public/Vector.png"
import pic1 from "@/public/Asgaard sofa 3.png"
import pic2 from "@/public/Asgaard sofa 5.png"
import cross from "@/public/Vector (4).png"
import Link from "next/link";
const CartSlider = () => {
  return (
    <div className="w-full max-w-[417px] bg-white shadow-2xl z-50 p-4 md:p-3">
      {/* Cart Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg md:text-xl font-semibold">Shopping Cart</h2>
        <Image src={Lock} alt="lock-icon"></Image>
      </div>

      {/* Cart Items */}
      <div className="p-4 md:p-6 space-y-4 h-[calc(100%-120px)] overflow-y-auto">
        {/* Item 1 */}
        <div className="flex items-center gap-4 flex-wrap">
          <Image
            src={pic1}
            alt="Product"
            className="w-[80px] h-[80px] md:w-[104px] md:h-[104px] bg-[#B88E2F38] rounded-md"
          ></Image>
          <div className="flex-1 pl-3 md:pl-5">
            <h3 className="text-[14px] md:text-[16px] font-medium">Asgaard sofa</h3>
            <p className="text-gray-500 text-[12px] md:text-[13px]">
              1 X <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </p>
          </div>
          <Image src={cross} alt="cross icon"></Image>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4 flex-wrap">
          <Image
            src={pic2}
            alt="Product"
            className="w-[80px] h-[80px] md:w-[104px] md:h-[104px] bg-gray-100 rounded-md"
          ></Image>
          <div className="flex-1 pl-3 md:pl-5">
            <h3 className="text-[14px] md:text-[16px] font-medium">Casaliving Wood</h3>
            <p className="text-gray-500 text-[12px] md:text-[13px]">
              1 X <span className="text-[#B88E2F]">Rs. 270,000.00</span>
            </p>
          </div>
          <Image src={cross} alt="cross icon"></Image>
        </div>
      </div>

      {/* Cart Footer */}
      <div className="border-b p-4">
        <div className="flex justify-between mb-2 mt-8 md:mt-[212px]">
          <p className="font-medium text-gray-700 text-sm md:text-base">Subtotal</p>
          <p className="font-bold text-md md:text-lg text-[#B88E2F]">Rs. 520,000.00</p>
        </div>
      </div>

      {/* Cart Actions */}
      <div className="p-2 flex flex-wrap gap-4 md:justify-center">
        <Link href="/cart">
          <button className="rounded-full px-4 py-2 md:px-6 md:py-3 border border-black">
            Cart
          </button>
        </Link>
        <Link href="/checkout">
          <button className="rounded-full px-4 py-2 md:px-6 md:py-3 border border-black">
            Checkout
          </button>
        </Link>
        <Link href="/compare">
          <button className="rounded-full px-4 py-2 md:px-6 md:py-3 border border-black">
            Comparison
          </button>
        </Link>
      </div>
    </div>

  );
};

export default CartSlider;
