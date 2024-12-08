import Image from 'next/image';
import Background from "@/public/background.png";

function Hero() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Background}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative  z-10 bg-[#FFF3E3] backdrop-blur-md p-6 xl:left-[320px] md:p-12 shadow-lg max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
        <div className="space-y-4 text-center md:text-left">
          {/* Subtitle */}
          <p className="text-sm text-gray-600">New Arrival</p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-600 leading-tight">
            Discover Our <br />
            <span className="text-gray-800">New Collection</span>
          </h1>

          {/* Description */}
          <p className="mt-2 md:mt-4  md:w-[470px] text-sm sm:text-base md:text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 sm:px-10 sm:py-4 md:px-[72px] md:py-[25px] bg-yellow-600 text-white font-semibold shadow-lg hover:bg-yellow-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
