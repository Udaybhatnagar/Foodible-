import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const dispatch = useDispatch();
  const today = new Date().toUTCString().slice(0, 16);

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-md px-6 py-4 rounded-b-xl flex flex-col lg:flex-row justify-between items-center gap-4">
      {/* Left Section: Logo + Date */}
      <div className="text-center lg:text-left">
        <p className="text-sm text-gray-500 font-medium">{today}</p>
        <h1 className="text-2xl font-extrabold text-pink-600 tracking-wide">
          Foodible 🍽️ Foods
        </h1>
      </div>

      {/* Right Section: Search Box */}
      <div className="w-full lg:w-[25vw] relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-md" />
        <input
          type="search"
          placeholder="Search delicious items..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none text-sm transition bg-white shadow-sm"
        />
      </div>
    </nav>
  );
};

export default Navbar;
