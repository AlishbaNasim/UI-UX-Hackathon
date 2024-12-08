import Image from 'next/image';
import React from 'react';
import DiningImage from '@/public/dining.png';
import LivingImage from '@/public/living.png';
import BedroomImage from '@/public/bedroom.png';

const BrowseRange = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Browse The Range
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Explore premium quality furniture designed for modern and comfortable living spaces.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Dining Section */}
        <div className="text-center">
          <Image
            src={DiningImage}
            alt="Dining"
            className="w-full h-auto rounded-md"
          />
          <p className="mt-4 text-2xl font-semibold text-[#333333]">Dining</p>
        </div>

        {/* Living Section */}
        <div className="text-center">
          <Image
            src={LivingImage}
            alt="Living"
            className="w-full h-auto rounded-md"
          />
          <p className="mt-4 text-2xl font-semibold text-[#333333]">Living</p>
        </div>

        {/* Bedroom Section */}
        <div className="text-center">
          <Image
            src={BedroomImage}
            alt="Bedroom"
            className="w-full h-auto rounded-md"
          />
          <p className="mt-4 text-2xl font-semibold text-[#333333]">Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
