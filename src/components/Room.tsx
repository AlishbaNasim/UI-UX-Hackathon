import Image from "next/image";
import Link from "next/link";
import Product from "@/public/Products.png"

function Room() {
  return (
    <div>
      <div className="lg:flex items-center bg-[#FCF8F3]">
        <div className="pt-9 p-8 items-center text-center">
          <h4 className=" font-extrabold  text-[2rem]">50+ Beautiful rooms inspiration</h4>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
         <Link href="/shop"><button className="bg-[#B88E2F]  mt-3 p-2 w-[176px] h-[48px]">Exlore More</button></Link> 
        </div>
        {/* Right Content */}
       <Image src={Product} alt="product"></Image>
      </div>
    </div>
  );
};
    
export default Room;