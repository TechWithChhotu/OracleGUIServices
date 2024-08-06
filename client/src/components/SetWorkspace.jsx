import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SetWorkspace = () => {
  const [dbUsername, setDbUsername] = useState("");
  const [dbPassword, setDbPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/set-workspace",
        {
          dbUsername,
          dbPassword,
        },
        { withCredentials: true }
      );
      alert(response.data.msg);
      navigate("/");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[80%] bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Set Workspace</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="dbUsername"
              className="block text-sm font-medium text-gray-700"
            >
              Database Username
            </label>
            <input
              id="dbUsername"
              name="dbUsername"
              type="text"
              required
              value={dbUsername}
              onChange={(e) => setDbUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="dbPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Database Password
            </label>
            <input
              id="dbPassword"
              name="dbPassword"
              type="password"
              required
              value={dbPassword}
              onChange={(e) => setDbPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Set Workspace
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetWorkspace;
