import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-amber-50 mt-5 h-auto w-full py-[90px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
        {/* High Quality */}
        <div className="flex items-center space-x-4">
          <FaTrophy className=" text-3xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">High Quality</h3>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4">
          <FaShieldAlt className="text-3xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-4">
          <FaShippingFast className="text-3xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Free Shipping</h3>
            <p className="text-sm text-gray-600">Orders over 150$</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4">
          <FaHeadset className=" text-3xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">24/7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
