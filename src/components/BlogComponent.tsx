import React from "react";
import Image from "next/image";
import pic1 from "@/public/Rectangle 68.png"
import pic2 from "@/public/Rectangle 68 (1).png"
import pic4 from "@/public/Rectangle 69 (1).png"
import pic5 from "@/public/Rectangle 69 (2).png"
import pic6 from "@/public/Rectangle 69 (3).png"
import pic7 from "@/public/Rectangle 69 (4).png"
import pic8 from "@/public/Rectangle 69.png"
import pic9 from "@/public/Rectangle 68-2.png"
import { BiSolidUser } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


const BlogComponent = () => {
  return (
    <div className="max-w-7xl mx-auto md:p-6 mt-6 grid lg:grid-cols-3 gap-8">
      {/* Blog Posts */}
      <div className="lg:col-span-2 space-y-9">
        {/* Post 1 */}
        <div className="overflow-hidden ">
          <Image
            src={pic1}
            alt="Blog Post 1"
            className="w-full p-5 rounded-lg object-cover"
          ></Image>
          <div className="p-6">
            <div className="flex items-center text-base text-gray-500 space-x-4 mb-4">
              <span className="flex items-center space-x-1">
                <span><BiSolidUser/></span>
                <span>Admin</span>
              </span>
              <span><FaCalendar/></span>
              <span>14 Oct 2022</span>
              <span><FaTag/></span>
              <span>Wood</span>
            </div>
            <h2 className="text-3xl font-bold mb-3">Going all-in with millennial design</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="underline font-semibold">
              Read more
            </a>
          </div>
        </div>

        {/* Post 2 */}
        <div className="overflow-hidden">
          <Image
            src={pic9}
            alt="Blog Post 2"
            className="w-full p-5 rounded-lg object-cover"
          ></Image>
          <div className="p-6">
            <div className="flex items-center text- text-gray-500 space-x-4 mb-4">
              <span className="flex items-center space-x-1">
                <span><BiSolidUser/></span>
                <span>Admin</span>
              </span>
              <span><FaCalendar/></span>
              <span>13 Oct 2022</span>
              <span><FaTag/></span>
              <span>Handmade</span>
            </div>
            <h2 className="text-3xl font-bold mb-3">Exploring new ways of decorating</h2>
            <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="underline font-semibold">
              Read more
            </a>
          </div>
        </div>
        {/* Post 2 */}
        <div className="overflow-hidden ">
          <Image
            src={pic2}
            alt="Blog Post 2"
            className="w-full p-5 rounded-lg object-cover"
          ></Image>
          <div className="p-6">
            <div className="flex items-center text-base text-gray-500 space-x-4 mb-4">
              <span className="flex items-center space-x-1">
                <span><BiSolidUser/></span>
                <span>Admin</span>
              </span>
              <span><FaCalendar/></span>
              <span>13 Oct 2022</span>
              <span><FaTag/></span>
              <span>Wood</span>
            </div>
            <h2 className="text-3xl font-bold mb-3">Handmade pieces that took time to make</h2>
            <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <a href="#" className="underline font-semibold">
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        {/* Categories */}
        <div className="mb-8 px-8">
            <div className="flex justify-between items-center border rounded-xl px-4 py-2 w-full max-w-md mb-2">
            <input className="outline-none">
            </input>
            <FiSearch/> 
            </div>
          <h3 className="text-lg font-bold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="flex justify-between  text-gray-700">
              <span>Crafts</span>
              <span>2</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Design</span>
              <span>4</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Handmade</span>
              <span>7</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Interior</span>
              <span>1</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Wood</span>
              <span>1</span>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="px-8">
          <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
          <ul className="space-y-6">
            {/* Post 1 */}
            <li className="flex items-center space-x-4">
              <Image
                src={pic7}
                alt="Recent Post 1"
                className="w-16 h-16 object-cover rounded"
              ></Image>
              <a href="#" className="text-gray-700 hover:text-blue-500">
              Going all-in with millennial design
              <br/>
              03 Aug 2022
              </a>
            </li>
            {/* Post 2 */}
            <li className="flex items-center space-x-4">
              <Image
                src={pic6}
                alt="Recent Post 2"
                className="w-16 h-16 object-cover rounded"
              ></Image>
              <a href="#" className="text-gray-700 hover:text-blue-500">
              Exploring new ways of decorating
              <br/>
              03 Aug 2022
              </a>
            </li>
            {/* Post 3 */}
            <li className="flex items-center space-x-4">
              <Image
                src={pic5}
                alt="Recent Post 3"
                className="w-16 h-16 object-cover rounded"
              ></Image>
              <a href="#" className="text-gray-700 hover:text-blue-500">
              Handmade pieces that took time to make
              <br/>
              03 Aug 2022
              </a>
            </li>
            {/* Post 4 */}
            <li className="flex items-center space-x-4">
              <Image
                src={pic4}
                alt="Recent Post 4"
                className="w-16 h-16 object-cover rounded"
              ></Image>
              <a href="#" className="text-gray-700 hover:text-blue-500">
              Modern home in Milan
              <br/>
              03 Aug 2022
              </a>
            </li>
            {/* Post 5 */}
            <li className="flex items-center space-x-4">
              <Image
                src={pic8}
                alt="Recent Post 4"
                className="w-16 h-16 object-cover rounded"
              ></Image>
              <a href="#" className="text-gray-700 hover:text-blue-500">
              Colorful office redesign
              <br/>
              03 Aug 2022
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogComponent;
