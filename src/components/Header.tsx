"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { SlHeart, SlMagnifier } from "react-icons/sl";
import { LuMenu, LuUser } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useCart } from "@/app/context/cartProvider";
import SideCart from "./SideCart";
import { SignInButton, SignUpButton } from "@clerk/nextjs";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { countAllItems, countWishlistItems } = useCart();
   
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="p-8 bg-white relative">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo Section */}
        <div>
          <Image src={Logo} alt="Website Logo" width={120} height={50} />
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex gap-6 font-medium text-sm lg:text-xl">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="hidden md:flex gap-6 font-medium text-sm lg:text-xl">
        <Link href="/sign-up"><SignUpButton/></Link>
        <Link href="/sign-in"><SignInButton/></Link>
          <Link href="/user/profile">
            <LuUser className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
          </Link>
          <Link href="/search">
            <SlMagnifier className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
          </Link>
          <Link href="/wishlist">
            <div className="relative">
              <SlHeart className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
              {countWishlistItems() > 0 && (
                <div className="font-semibold absolute text-black bg-yellow-500 text-xs w-6 h-6 rounded-full flex items-center justify-center -top-2 -right-2 bg-opacity-90 animate-pulse">
                  <p>{countWishlistItems()}</p>
                </div>
              )}
            </div>
          </Link>
          <div onClick={toggleCart} className="relative cursor-pointer">
            <AiOutlineShoppingCart className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
            {countAllItems() > 0 && (
              <div className="font-semibold absolute text-black bg-yellow-500 text-xs w-6 h-6 rounded-full flex items-center justify-center -top-2 -right-2 bg-opacity-90 animate-pulse">
                <p>{countAllItems()}</p>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            {isMenuOpen ? (
              <IoMdClose className="h-7 w-7" />
            ) : (
              <LuMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden font-medium text-sm bg-gray-100 p-4 rounded-lg shadow-md">
          <Link href="/" className="hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-600 transition">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-gray-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition">
            Contact
          </Link>
          <div className="flex space-x-6 mt-4">
            <Link href="/sign-up"><SignUpButton/></Link>
        <Link href="/sign-in"><SignInButton/></Link>
      
            <Link href="/user/profile">
              <LuUser className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
            </Link>
            <Link href="/search">
              <SlMagnifier className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
            </Link>
            <Link href="/wishlist">
              <div className="relative">
                <SlHeart className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
                {countWishlistItems() > 0 && (
                  <div className="font-semibold absolute text-black bg-yellow-500 text-xs w-6 h-6 rounded-full flex items-center justify-center -top-2 -right-2 bg-opacity-90 animate-pulse">
                    <p>{countWishlistItems()}</p>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div onClick={toggleCart} className="relative cursor-pointer">
            <Image
              src="/icon4.svg"
              alt="Cart Icon"
              width={30}
              height={35}
              className="cursor-pointer hover:opacity-80 transition-all duration-300"
            />
            {countAllItems() > 0 && (
              <div className="font-semibold absolute text-black bg-yellow-500 text-xs w-6 h-6 rounded-full flex items-center justify-center -top-2 -right-2 bg-opacity-90 animate-pulse">
                <p>{countAllItems()}</p>
              </div>
            )}
          </div>
        </div>
      )}
      {/* <CartSlider/> */}

      {isCartOpen && <SideCart isOpen={isCartOpen} toggleCart={toggleCart} />}
    </div>
  );
};

export default Header;
