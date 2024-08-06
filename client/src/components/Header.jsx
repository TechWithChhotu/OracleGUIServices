import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogout } from "../store/user.slice";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.userSlice.login);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const res = await axios.get("http://localhost:3000/logout", {
      withCredentials: true,
    });
    alert(res.data.msg);
    dispatch(setLogout());
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md h-[10%] flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">
          Oracle GUI Services
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link to="/team-member" className="hover:text-gray-400">
            Team Members
          </Link>
        </nav>
        <div>
          {!isLoggedIn ? (
            <Link
              to={"/login"}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
