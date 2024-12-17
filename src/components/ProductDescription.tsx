import React from "react";
import Image from "next/image";
import sofa1 from "@/public/Cloud sofa three seater + ottoman_1 1.png";
import sofa2 from "@/public/Cloud sofa three seater + ottoman_2 1.png";

function ProductDescription() {
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 border-t">
      {/* Tabs */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center justify-center">
        <button className="pb-2 border-b-2 text-lg md:text-2xl border-black font-semibold">
          Description
        </button>
        <button className="pb-2 text-lg md:text-2xl text-[#9F9F9F]">
          Additional Information
        </button>
        <button className="pb-2 text-lg md:text-2xl text-[#9F9F9F]">
          Reviews <span className="text-lg md:text-2xl text-center">[5]</span>
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4 text-sm md:text-base leading-6 px-2 md:px-6 text-justify text-[#9F9F9F] font-normal max-w-full md:max-w-4xl lg:max-w-5xl mx-auto">
        <p>
          Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplug the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analog
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div className="bg-[#F9F1E7] flex justify-center items-center p-4">
          <Image
            src={sofa1}
            alt="Sofa Image 1"
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="bg-[#F9F1E7] flex justify-center items-center p-4">
          <Image
            src={sofa2}
            alt="Sofa Image 2"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
