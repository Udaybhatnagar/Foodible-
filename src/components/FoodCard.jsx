import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[260px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group cursor-pointer border border-gray-100 hover:border-pink-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-[160px] object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[200px]">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
          <span className="text-green-500 text-md font-bold">₹{price}</span>
        </div>

        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
          {desc.length > 60 ? desc.slice(0, 60) + "..." : desc}
        </p>

        {/* Rating + Button */}
        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="flex items-center text-yellow-500 text-sm font-medium bg-yellow-100 px-2 py-1 rounded-full">
            <AiFillStar className="mr-1" /> {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
              handleToast(name);
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-3 py-1.5 rounded-full font-medium transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
