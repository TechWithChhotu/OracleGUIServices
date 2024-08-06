import React from "react";
import { Link } from "react-router-dom";

const ProjectCoverPage = () => {
  return (
    <div className="rounded-lg my-5 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center text-gray-800">
        <h1 className="text-5xl font-bold mb-4">BCA 6th Semester Project</h1>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">
          Team: The Innovators
        </h2>
        <p className="text-lg mb-6">
          Welcome to our project! We are excited to present our work in building
          an innovative and efficient solution for managing and interacting with
          database services.
        </p>
        <p className="text-lg mb-6 font-semibold">
          <strong>Project Leader:</strong> Chhotu Kumar
        </p>
        <p className="text-lg mb-6 font-semibold">
          <strong>Team Members:</strong> Soni Kumari, Moni Kumari, Swati Kumari
        </p>
        <Link
          to="/services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default ProjectCoverPage;
