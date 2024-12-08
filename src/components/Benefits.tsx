import Image from 'next/image';

function Benefits() {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="flex flex-col items-center">
        <Image 
          src="/trophy-icon.svg" 
          alt="High Quality" 
          width={40} 
          height={40} 
        />
        <p className="text-xs text-gray-500 mt-2">
          Crafted from top materials
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image 
          src="/shield-icon.svg" 
          alt="Warranty Protection" 
          width={40} 
          height={40} 
        />
        <p className="text-xs text-gray-500 mt-2">
          Over 2 years
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image 
          src="/shipping-icon.svg" 
          alt="Free Shipping" 
          width={40} 
          height={40} 
        />
        <p className="text-xs text-gray-500 mt-2">
          Order over 150$
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image 
          src="/headset-icon.svg" 
          alt="24/7 Support" 
          width={40} 
          height={40} 
        />
        <p className="text-xs text-gray-500 mt-2">
          Dedicated support
        </p>
      </div>
    </div>
  );
}

export default Benefits;