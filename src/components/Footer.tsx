import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8  px-5 ">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="font-bold text-lg mb-4">Funiro.</h2>
            <p className="text-sm text-gray-600">
              4870 University Drive Suite 200 Coral Gables,<br/> FL 33146-4104
            </p>
          </div>

          <div className="col-span-1 ml-4">
            <h3 className="font-semibold text-sm mb-2">Links</h3>
            <ul className="list-none">
              <li><a href="#" className="text-sm top-[266px] text-gray-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-sm top-[266px] text-gray-600 hover:underline">Shop</a></li>
              <li><a href="#" className="text-sm top-[266px] text-gray-600 hover:underline">About</a></li>
              <li><a href="#" className="text-sm top-[266px] text-gray-600 hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-2">Help</h3>
            <ul className="list-none">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Payment Options</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Privacy Policies</a></li>
            </ul>
          </div>
          <div className="col-span-1 ">
            <h3 className="font-semibold text-sm mb-2">Newsletter</h3>
            <div className="flex">
              <p className="py-2 underline">Enter your email address</p>
              <button className="underline text-black px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-start text-sm ml-7 text-gray-500 mt-8">
          © 2023 Funiro. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer