"use client";
import React, { useState } from "react";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PulseLoader } from "react-spinners";
import SubhHero from "@/components/SubhHero";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <PulseLoader color="#B88E2F" size={15} />
        </div>
      )}
      {!loading && (
        <>
          <SubhHero title="Contact" subtitle="Home < Contact" />

          <div className="p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-black font-bold text-[32px] sm:text-[28px] md:text-[30px] lg:text-[32px]">
                Get In Touch With Us
              </h2>
              <p className="text-gray-500 text-[16px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-4">
                For More Information About Our Product & Services. Please Feel
                Free To Drop Us An Email. Our Staff Always Be There To Help You
                Out. Do Not Hesitate!
              </p>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 ">
              {/* Left Section: Contact Information */}
              <div>
                <div className="py-5 space-y-8 pl-10">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">
                      <FaLocationDot />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-gray-600 text-sm">
                        238 5th SN Avenue, New York NY10001, United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">
                      <FaPhoneAlt />
                    </div>
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
                    <div className="text-2xl">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Working Time
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Monday-Friday: 9:00 - 22:00 <br />
                        Saturday-Sunday: 8:00 - 21:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6">
                <form action="" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-black">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="ABC"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-black">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="Abc@def.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-black">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="This is an optional"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black">
                      Message
                    </label>
                    <input
                      id="message"
                      name="message"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                      placeholder="Hi! I’d like to ask about"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#B88E2F] w-full sm:w-[237px] h-[55px] text-white p-3 rounded-md mt-4 hover:bg-[#A67D2D]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
