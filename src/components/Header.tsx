"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/logo.png';
import Link from 'next/link';
import { SlHeart, SlMagnifier } from 'react-icons/sl';
import { LuMenu, LuUser } from 'react-icons/lu';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Website Logo" width={120} height={40} />
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex gap-6 font-medium text-sm lg:text-base">
          <Link href="#" className="hover:text-gray-600 transition">Home</Link>
          <Link href="#" className="hover:text-gray-600 transition">Shop</Link>
          <Link href="#" className="hover:text-gray-600 transition">Blog</Link>
          <Link href="#" className="hover:text-gray-600 transition">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex gap-6 text-gray-600">
          <LuUser className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
          <SlMagnifier className="h-6  w-6 cursor-pointer hover:text-gray-800 transition" />
          <SlHeart className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
          <AiOutlineShoppingCart className="h-6 w-6 cursor-pointer hover:text-gray-800 transition" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <Link href="#" className="hover:text-gray-600 transition">Home</Link>
          <Link href="#" className="hover:text-gray-600 transition">Shop</Link>
          <Link href="#" className="hover:text-gray-600 transition">Blog</Link>
          <Link href="#" className="hover:text-gray-600 transition">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
