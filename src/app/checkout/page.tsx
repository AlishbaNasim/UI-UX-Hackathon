import Features from "@/components/Features";
import SubhHero from "@/components/SubhHero";
import React from "react";

const page = () => {
  return (
    <div>
        <SubhHero title="Checkout" subtitle="Home > Checkout"/>
    <div className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      {/* Left Section - Billing Details */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
        <form className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm mb-1">Company Name (Optional)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm mb-1">Country / Region</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Pakistan</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>

          {/* Street Address */}
          <div>
            <label className="block text-sm mb-1">Street Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* City and Province */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Town / City</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Province</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Sindh</option>
                <option>Punjab</option>
                <option>Western Province</option>
              </select>
            </div>
          </div>

          {/* ZIP Code */}
          <div>
            <label className="block text-sm mb-1">ZIP Code</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Additional Information */}
          <div>
            <input
              type="text"
              placeholder="Additional Information"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/2 bg-white rounded-md p-6 lg:p-12">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mb-4">Product</h2>
          <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
        </div>

        {/* Product Details */}
        <div className="flex justify-between text-gray-600 text-[16px] mb-4">
          <span>Asgaard sofa × 1</span>
          <span>Rs. 250,000.00</span>
        </div>

        {/* Subtotal and Total */}
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex justify-between mb-2 text-[16px]">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mb-4 text-lg font-semibold">
          <span>Total</span>
          <span className="text-[#B88E2F] text-xl">Rs. 250,000.00</span>
        </div>

        {/* Payment Options */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start">
            <input type="radio" id="bank" name="payment" className="mr-2 mt-1" />
            <label className="text-sm">
              Direct Bank Transfer
              <p className="text-gray-500 text-[16px] mt-1">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </label>
          </div>

          <div className="flex items-center">
            <input type="radio" id="check" name="payment" className="mr-2" />
            <label htmlFor="check" className="text-[16px]">
              Direct Bank Transfer
            </label>
          </div>

          <div className="flex items-center">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-[16px]">
              Cash on delivery
            </label>
          </div>

          <p className="text-[16px] text-gray-500">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>

        {/* Place Order Button */}
        <button className="w-full py-3 mt-8 rounded-md outline">
          Place Order
        </button>
      </div>
    </div>
    <Features/>
    </div>
  );
};

export default page;
