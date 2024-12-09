import React from 'react'
import Image from 'next/image'
import Background from "@/public/Rectangle 1.png"

const SubhHero = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="relative w-full h-[316px]">
            {/* Background Image */}
            <Image
                src={Background}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover" 
            />

            {/* Semi-Transparent Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Text Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold">{title}</h1>
                <p className="text-lg sm:text-xl mt-4">{subtitle}</p>
            </div>
        </div>
    );
}

export default SubhHero;
