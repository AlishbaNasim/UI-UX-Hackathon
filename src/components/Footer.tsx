import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="font-bold text-lg mb-4">Funiro.</h2>
            <p className="text-sm text-gray-600">
              4870 University Drive Suite 200 Coral Gables, FL 33146-4104NameName
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-2">Links</h3>
            <ul className="list-none">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Shop</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-2">Help</h3>
            <ul className="list-none">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Payment Options</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Privacy Policies</a></li>
            </ul>Name
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-sm mb-2">Newsletter</h3>
            <div className="flex">
              <input type="email" placeholder="Enter your email address" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          © 2023 Funiro. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer