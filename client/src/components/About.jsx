import React from "react";
import { FaInfoCircle, FaUsers, FaShieldAlt, FaClock } from "react-icons/fa";

function About() {
  return (
    <div className="py-8 px-10 bg-gray-50 min-h-[80%]">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        About Our Service
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Welcome to our database management platform. We provide a range of tools
        designed to streamline and enhance your database operations, from
        creating and modifying tables to managing and analyzing data. Our
        platform is built with a focus on simplicity, efficiency, and security
        to support your data management needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaInfoCircle className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Comprehensive Tools
            </h3>
            <p className="text-gray-600 mt-2">
              Our platform offers a wide range of tools to manage your databases
              effectively, including table creation, data insertion, updates,
              and more.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaUsers className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              User-Friendly
            </h3>
            <p className="text-gray-600 mt-2">
              Designed with user experience in mind, our platform provides an
              intuitive interface for easy database management.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaShieldAlt className="text-red-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Secure Operations
            </h3>
            <p className="text-gray-600 mt-2">
              We prioritize security to ensure your data remains protected
              through robust access controls and encryption.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaClock className="text-purple-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              24/7 Availability
            </h3>
            <p className="text-gray-600 mt-2">
              Our platform is available round the clock, ensuring that you can
              manage and access your data anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
