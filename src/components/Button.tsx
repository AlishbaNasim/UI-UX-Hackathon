import React from "react";
const Button = () => {
    return (
      <div className="flex items-center mt-5 justify-center space-x-2">
       {/* Inactive Buttons */}
        <button
          className="bg-yellow-700 text-white px-4 py-2 rounded-md shadow-sm"
        >
          1
        </button>
        <button className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-amber-100">
          2
        </button>
        <button className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-amber-100">
          3
        </button>
  
        {/* Next Button */}
        <button className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-amber-100">
          Next
        </button>
      </div>
    );
  };
  
  export default Button;
  