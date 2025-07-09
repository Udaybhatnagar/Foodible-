import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <PropagateLoader color="#36d7b7" size={15} />
          <p className="text-sm text-gray-500">Processing your order...</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Order Successful!
          </h2>
          <p className="text-gray-600 mb-6">Your delicious food is on its way 🍽️</p>
          <button
            onClick={() => navigate("/")}
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-5 py-2 rounded-full transition"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
