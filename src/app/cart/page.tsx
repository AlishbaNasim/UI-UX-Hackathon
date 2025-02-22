"use client";
import { useCart } from "@/app/context/cartProvider";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import SubhHero from "@/components/SubhHero";
import Features from "@/components/Features";

const CartPage = () => {
  const {
    items,
    countTotalPrice,
    countAllItems,
    removeFromCart,
    updateCartQuantity,
  } = useCart();
  const totalPrice = countTotalPrice();
  const totalItems = countAllItems();
  const handleIncreaseQuantity = (itemId:string) => {
    updateCartQuantity(itemId, 1);
  };
  const handleDecreaseQuantity = (itemId:string) => {
    updateCartQuantity(itemId, -1);
  };
  return (
    <div className="w-full bg-white">
      <SubhHero title="Cart" subtitle=" Home < Cart" />
      {items.length > 0 ? (
        <div className="flex flex-wrap justify-between items-start my-8 mx-auto">
          <div className="w-full lg:w-[70%]">
            {/* Table Header */}
            <div className="grid grid-cols-4 items-center bg-[#F9F1E7] p-4 font-medium text-center text-black">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white py-4 px-6 border-b border-[#E0E0E0] flex flex-wrap justify-between items-center"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-[25%]">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      width={111}
                      height={90}
                    />
                    <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl">
                      {item.product.title}
                    </p>
                  </div>

                  <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl pl-12 w-full sm:w-[25%]">
                    Rp {item.product.price.toLocaleString()}
                  </p>

                  <div className="flex items-center gap-4 border  px-6 py-3 rounded-md">
                    <Minus
                      className="cursor-pointer text-gray-500"
                      onClick={() => handleDecreaseQuantity(item.product.id)}
                    />
                    <span>{item.count}</span>
                    <Plus
                      className="cursor-pointer text-gray-500"
                      onClick={() => handleIncreaseQuantity(item.product.id)}
                    />
                  </div>

                  <p className="text-black text-sm sm:text-base lg:text-lg xl:text-xl w-full pl-28 sm:w-[25%]">
                    Rp {(item.product.price * item.count).toLocaleString()}
                  </p>
                  <AiFillDelete
                    className="cursor-pointer w-[10%] sm:w-[5%]"
                    onClick={() => removeFromCart(item.product)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[28%] bg-[#F9F1E7] mt-6 lg:mt-0 p-9 flex flex-col justify-between mx-auto">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-center sm:text-left">
              Cart Totals
            </h2>
            <div className="mt-4">
              <p className="text-black text-sm sm:text-base">
                Subtotal:
                <span className="text-gray-400 pl-5">
                  Rs. {totalPrice.toLocaleString()}
                </span>
              </p>
              <p className="text-black text-sm sm:text-base  mt-2">
                Total:
                <span className="text-[#B88E2F]  pl-2 text-lg sm:text-xl md:text-2xl ">
                  Rs.  {totalPrice.toLocaleString()}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <p className="text-black text-sm sm:text-base lg:text- xl:text-">
                Total Items:
                <span className="text-gray-400 pl-5">{totalItems} items</span>
              </p>
            </div>

            <Link href="/checkout">
              <button className="border-black border-[1px] text-black rounded-[15px] w-full sm:w-[222px] h-[58.95px] mt-6 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // If cart is empty
        <div className="flex flex-col items-center justify-center text-center bg-white  text-black mt-9">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Your Cart is Empty
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link href="/shop" passHref>
            <button className="mt-6 text-lg sm:text-xl px-6 py-3 bg-yellow-600 text-white rounded-md">
              Continue to Shop
            </button>
          </Link>
        </div>
      )}

      <div className="w-full my-6">
        <Features />
      </div>
    </div>
  );
};

export default CartPage;
