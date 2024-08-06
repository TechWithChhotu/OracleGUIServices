import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400  h-[10%] flex items-center">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Oracle GUI Services. All rights
          reserved.
        </p>
        <div className="mt-1">
          <p>
            Design & Developed by CKumar | visit:{" "}
            <a href={`https://chhotupatel.netlify.app/`} target="_blank">
              https://chhotupatel.netlify.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
