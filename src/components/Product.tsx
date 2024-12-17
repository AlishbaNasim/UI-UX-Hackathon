import Image from "next/image";
import Product1 from "@/public/p1.png";
import Product2 from "@/public/p2.png";
import Product3 from "@/public/p3.png";
import Product4 from "@/public/p4.png";
import Product5 from "@/public/p5.png";
import Product6 from "@/public/p6.png";
import Product7 from "@/public/p7.png";
import Product8 from "@/public/p8.png";
import Link from "next/link";
const Product = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-16">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <Link href="/shop">
                    {/* Product 1 */}
                    <div className="relative bg-white w-[285px] h-[446px]">
                        <div className="relative">
                            <Image src={Product1} alt="Syltherine" className="w-full h-auto" />
                            <span className="absolute top-4 right-4  bg-[#E97171] text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full">
                                -30%
                            </span>
                        </div>
                        <div className="p-4 text-start bg-[#F4F5F7]">
                            <h3 className="text-2xl font-semibold text-black">Syltherine</h3>
                            <p className="text-sm font-medium text-[#898989]">Stylish cafe chair</p>
                            <div className="mt-2 flex items-start space-x-3">
                                <span className="text-lg font-semibold text-black">Rp 2.500.000</span>
                                <span className="text-[16px] line-through text-gray-500 ">Rp 3.500.000</span>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* Product 2 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product2} alt="Leviosa" className="w-full h-[310px]" />
                        <div className="absolute inset-0 bg-black/8  opacity-100 flex items-center justify-center transition duration-300">
                            <Link href="/cart">
                                <button className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-100">
                                    Add to cart
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Leviosa</h3>
                        <p className="text-sm font-medium text-[#898989]">Stylish cafe chair</p>
                        <span className="text-lg font-semibold text-black">Rp 2.500.000</span>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product3} alt="Lolito" className="w-full h-auto" />
                        <span className="absolute top-4 right-4 bg-[#E97171] text-white text-xs px-3 py-4 h-[48px] w-[48px] rounded-full">
                            -50%
                        </span>
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Lolito</h3>
                        <p className="text-sm  font-medium text-[#898989]">Luxury big sofa</p>
                        <div className="mt-2 flex items-start space-x-3">
                            <span className="text-lg font-semibold text-black">Rp 7.000.000</span>
                            <span className="text-[16px] line-through text-gray-500 ">Rp 14.000.000</span>
                        </div>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product4} alt="Respira" className="w-full h-[310px]" />
                        <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs  px-3 py-4 h-[48px] w-[48px] rounded-full">
                            New
                        </span>
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Respira</h3>
                        <p className="text-sm  font-medium text-[#898989]">Outdoor bar table and stool</p>
                        <span className="text-lg font-semibold text-black">Rp 500.000</span>
                    </div>
                </div>

                {/* Product 5 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product5} alt="Grifo" className="w-full h-auto" />
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Grifo</h3>
                        <p className="text-sm font-medium text-[#898989]">Night lamp</p>
                        <span className="text-lg font-semibold text-black">Rp 1.500.000</span>
                    </div>
                </div>

                {/* Product 6 */}
                <div className="relative bg-white w-[285px] h-[436px]">
                    <div className="relative">
                        <Image src={Product6} alt="Pingky" className="w-full h-[292px]" />
                        <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs  px-3 py-4 h-[48px] w-[48px] rounded-full">
                            New
                        </span>
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Pingky</h3>
                        <p className="text-sm font-medium text-[#898989]">Cute bed set</p>
                        <div className="mt-2 flex items-start justify-start space-x-3">
                            <span className="text-lg font-semibold text-black">Rp 7.000.000</span>
                            <span className="text-[16px] line-through text-gray-500">Rp 14.000.000</span>
                        </div>
                    </div>
                </div>

                {/* Product 7 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product7} alt="Muggo" className="w-full h-auto" />
                        <span className="absolute top-4 right-4 bg-[#E97171] text-white text-xs  px-3 py-4 h-[48px] w-[48px] rounded-full">
                            -50%
                        </span>
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Muggo</h3>
                        <p className="text-sm font-medium text-[#898989]">Small mug</p>
                        <span className="text-lg font-semibold text-black">Rp 150.000</span>
                    </div>
                </div>

                {/* Product 8 */}
                <div className="relative bg-white w-[285px] h-[446px]">
                    <div className="relative">
                        <Image src={Product8} alt="Potty" className="w-full h-auto" />
                        <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs  px-3 py-4 h-[48px] w-[48px] rounded-full">
                            New
                        </span>
                    </div>
                    <div className="p-4 text-start bg-[#F4F5F7]">
                        <h3 className="text-2xl font-semibold text-black">Potty</h3>
                        <p className="text-sm font-medium text-[#898989]">Minimalist flower pot</p>
                        <span className="text-lg font-semibold text-black">Rp 500.000</span>
                    </div>
                </div>
            </div>
            <Link href="/shop">
  <button
    className="mt-6 px-6 py-3 text-[#B88E2F] font-semibold outline 
    sm:px-10 sm:py-4 sm:ml-28
    md:px-12 md:py-5 md:ml-56 
    lg:px-16 lg:py-6 lg:ml-72 
    xl:ml-80"
  >
    Show More
  </button>
</Link>

        </section>
    );
};

export default Product;
