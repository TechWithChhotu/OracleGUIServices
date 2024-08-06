import React from "react";
import { Link } from "react-router-dom";
import {
  FaTable,
  FaPlus,
  FaEdit,
  FaTrash,
  FaDatabase,
  FaPen,
  FaEye,
  FaBoxOpen,
} from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";

function Services() {
  return (
    <div className="py-8 px-10 min-h-[80%]">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Database Management Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaTable className="text-blue-500 text-3xl mr-4" />
          <Link
            to="/create-table"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600"
          >
            Create Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaEye className="text-green-500 text-3xl mr-4" />
          <Link
            to="/view-data"
            className="text-lg font-semibold text-gray-800 hover:text-green-600"
          >
            Select From Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaPlus className="text-purple-500 text-3xl mr-4" />
          <Link
            to="/insert-into-table"
            className="text-lg font-semibold text-gray-800 hover:text-purple-600"
          >
            Insert into Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaEdit className="text-yellow-500 text-3xl mr-4" />
          <Link
            to="/update-table-record"
            className="text-lg font-semibold text-gray-800 hover:text-yellow-600"
          >
            Update Record
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaTrash className="text-red-500 text-3xl mr-4" />
          <Link
            to="/delete-from-table"
            className="text-lg font-semibold text-gray-800 hover:text-red-600"
          >
            Delete from Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaDatabase className="text-orange-500 text-3xl mr-4" />
          <Link
            to="/truncate-table"
            className="text-lg font-semibold text-gray-800 hover:text-orange-600"
          >
            Truncate Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaBoxOpen className="text-teal-500 text-3xl mr-4" />
          <Link
            to="/drop-table"
            className="text-lg font-semibold text-gray-800 hover:text-teal-600"
          >
            Drop Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaPen className="text-cyan-500 text-3xl mr-4" />
          <Link
            to="/alter-table"
            className="text-lg font-semibold text-gray-800 hover:text-cyan-600"
          >
            Alter Table
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FaBoxOpen className="text-indigo-500 text-3xl mr-4" />
          <Link
            to="/table-schema-viewer"
            className="text-lg font-semibold text-gray-800 hover:text-indigo-600"
          >
            Display Table Schema
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <HiTerminal className="text-lime-500 text-3xl mr-4" />
          <Link
            to="/sql-terminal"
            className="text-lg font-semibold text-gray-800 hover:text-lime-600"
          >
            Go to Terminal
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <FiUserPlus className="text-sky-500 text-3xl mr-4" />
          <Link
            to="/create-db-user"
            className="text-lg font-semibold text-gray-800 hover:text-sky-600"
          >
            Create User
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <GrUserAdmin className="text-pink-500 text-3xl mr-4" />
          <Link
            to="/grant-permission"
            className="text-lg font-semibold text-gray-800 hover:text-pink-600"
          >
            Grant Permission
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
