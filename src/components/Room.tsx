import Image from "next/image";
import Product from "@/public/Products.png"
function Room() {
  return (
    <div>
      <div className="slideSection flex items-center bg-[#FCF8F3]">
        <div className="slideText pt-9 p-8 items-center">

          <h4 className=" font-extrabold text-[2rem]  ">50+ Beautiful rooms inspiration</h4>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F]  mt-3 p-2 w-[176px] h-[48px]">Exlore More</button>
        </div>
        <div className="flex ">
          <div>
            <Image src={Product} alt={"Product"}></Image>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Room;