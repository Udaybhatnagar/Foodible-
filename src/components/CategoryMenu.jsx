import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { MdOutlineFastfood } from "react-icons/md";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="px-6 mb-6">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <MdOutlineFastfood className="text-2xl text-pink-500" />
        <h3 className="text-2xl font-bold text-gray-800">
          Find the Best Food
        </h3>
      </div>

      {/* Category Scrollable Buttons */}
      <div className="flex gap-3 overflow-x-auto lg:overflow-x-visible scrollbar-hide py-2">
        {/* All Button */}
        <CategoryButton
          label="All"
          isActive={selectedCategory === "All"}
          onClick={() => dispatch(setCategory("All"))}
        />

        {/* Dynamic Buttons */}
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => dispatch(setCategory(category))}
          />
        ))}
      </div>
    </div>
  );
};

// Reusable Button Component
const CategoryButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap border
        ${
          isActive
            ? "bg-green-500 text-white shadow-md border-green-600"
            : "bg-gray-100 text-gray-700 hover:bg-green-100 border-gray-200"
        }`}
    >
      {label}
    </button>
  );
};

export default CategoryMenu;
