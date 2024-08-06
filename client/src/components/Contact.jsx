import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-8 px-10 bg-gray-50 min-h-[80%]">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <form className="bg-white p-6 shadow-md rounded-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h3>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-blue-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-700 text-lg">Phone:</p>
              <p className="text-gray-600">+91 7549478347</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-blue-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-700 text-lg">Email:</p>
              <p className="text-gray-600">chhotustudymail@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
            <div>
              <p className="text-gray-700 text-lg">Address:</p>
              <p className="text-gray-600">
                1234 Main Street, Jaimangla, Sheikhpura, Bihar, 811107
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Find Us Here
        </h3>
        <div className="relative h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.648245089833!2d85.9534714739463!3d25.147580433711337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f23f6e45cb23e5%3A0xe6f904041cca5cfa!2sSoftware%20Solution%20by%20Ckumar!5e0!3m2!1sen!2sin!4v1722666943937!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
