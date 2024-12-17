import React from "react";
import Image from "next/image";
import Lock from "@/public/Vector.png"
import pic1 from "@/public/Asgaard sofa 3.png"
import pic2 from "@/public/Asgaard sofa 5.png"
import cross from "@/public/Vector (4).png"
import Link from "next/link";
const CartSlider = () => {
  return (
    <div className="w-[417px] bg-white shadow-2xl z-50 p-4 ">
      {/* Cart Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <Image src={Lock} alt="lock-icon"></Image>
      </div>

      {/* Cart Items */}
      <div className="p-6 space-y-4 h-[calc(100%-120px)] overflow-y-auto">
        {/* Item 1 */}
        <div className="flex items-center  gap-4">
          <Image
            src={pic1}
            alt="Product"
            className="w-[104px] h-[104px] bg-[#B88E2F38] top-[132px] rounded-md"
          ></Image>
          <div className="flex-1 pl-5">
            <h3 className="text-[16px] pl-5 font-medium">Asgaard sofa</h3>
            <p className="text-gray-500 pl-2 text-[13px]">1  X <span className="text-[#B88E2F]">Rs. 250,000.00</span></p>
          </div>
          <Image src={cross} alt="cross icon"></Image>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <Image
            src={pic2}
            alt="Product"
            className="w-[104px] h-[104px] rounded-md bg-gray-100"
          ></Image>
          <div className="flex-1 pl-5">
            <h3 className="text-[16px]  font-medium">Casaliving Wood</h3>
            <p className="text-gray-500  text-[13px]">1  X <span className="text-[#B88E2F]">Rs. 270,000.00</span></p>
          </div>
          <Image src={cross} alt="cross icon"></Image>
        </div>
      </div>

      {/* Cart Footer */}
      <div className="border-b p-4">
        <div className="flex justify-between mb-2 mt-[212px]">
          <p className="font-medium text-gray-700">Subtotal</p>
          <p className="font-bold text-lg text-[#B88E2F]">Rs. 520,000.00</p>
        </div>
      </div>
      <div className="p-4">
        <Link href="/cart"> <button className="rounded-full px-6 py-3 border  border-black ml-3 ">Cart</button></Link>
        <Link href="/checkout"> <button className="rounded-full px-6 py-3 border border-black ml-4">Checkout</button></Link>
        <Link href="/"><button className="rounded-full px-6 py-3 border border-black ml-3">Comparison</button></Link>
      </div>
    </div>
  );
};

export default CartSlider;
