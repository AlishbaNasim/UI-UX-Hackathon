import SubhHero from "@/components/SubhHero";
import { FaClock, FaPhoneAlt  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <SubhHero title="Contact" subtitle="Home > Contact"/>
    <div className="mx-auto mt-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-base text-gray-600 text-center items-center leading-relaxed">
          For more information about our products & services, please feel
          free to drop us <br/> an email. Our staff is always here to help you out.
          Do not hesitate!
        </p>
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section: Contact Information */}
        <div>
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl"><FaLocationDot/></div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-600 text-sm">
                  238 5th SN Avenue, New York NY10001, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl"><FaPhoneAlt/></div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Mobile: (+64) 546-0789 <br />
                  Hotline: (+64) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl"><FaClock/></div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Working Time</h3>
                <p className="text-gray-600 text-sm">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 8:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="p-8 rounded-lg ">
          <form className="space-y-6">
            {/* Your Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Abc"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Abc@dpt.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="This is an optional"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Hi, I'd like to ask about..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
