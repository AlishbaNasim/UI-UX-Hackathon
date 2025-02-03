import React from "react";
const Button = () => {
    return (
      <div className="flex items-center mt-5 justify-center space-x-2">
       {/* Inactive Buttons */}
        <button
          className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-yellow-700"
        >
          1
        </button>
        <button className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-yellow-700">
          2
        </button>
        <button className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-yellow-700">
          3
        </button>
  
        {/* Next Button */}
        <button className="bg-amber-50 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-yellow-700">
          Next
        </button>
      </div>
    );
  };
  
  export default Button;
  