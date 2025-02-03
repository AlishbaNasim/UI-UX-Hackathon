import React from "react";
import Image from "next/image";
import image from "@/public/room.png";

const Furniture = () => {
  return (
    <div className="bg-white p-4">
      <div className="text-center mt-8">
        <p className="font-semibold text-[20px]">Share your setup with</p>
        <h1 className="font-bold text-[40px]">#FuniroFurniture</h1>
      </div>
      <div>
        <Image src={image} alt={"room"}></Image>
      </div>
    </div>
  );
};

export default Furniture;
