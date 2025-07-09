import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 min-h-screen flex flex-col items-center px-6 pt-16 pb-10">
      {/* Hero Section */}
      <header className="text-center max-w-4xl mb-20">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-pink-600 mb-6 leading-tight">
          Welcome to <span className="text-purple-600">Foodible</span> 🍽️
        </h1>
        <p className="text-gray-700 text-xl sm:text-2xl mb-10">
          Your ultimate destination for delicious food, seamless ordering, and delightful experiences. Discover meals you love with Flavoro.
        </p>
        <button
          onClick={() => navigate("/Home")}
          className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="w-full max-w-6xl grid md:grid-cols-3 gap-10 mb-24">
        {[
          {
            title: "Fresh Ingredients",
            description: "We use only the best and freshest ingredients to ensure your meals are healthy and tasty.",
          },
          {
            title: "Fast Delivery",
            description: "Your order will reach your doorstep hot and fresh within minutes.",
          },
          {
            title: "Easy Ordering",
            description: "A seamless and smooth ordering experience built with love for foodies.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-5xl mb-24 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[{
            name: "Riya Sharma",
            review: "Flavoro made my lunch breaks exciting again! The desserts are incredible.",
          }, {
            name: "Anuj Mehta",
            review: "I love ordering from Flavoro, and I always get my food hot and fresh.",
          }].map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md text-left">
              <p className="text-gray-700 italic mb-4">“{t.review}”</p>
              <h4 className="text-md font-bold text-pink-600">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Again */}
      <div className="text-center mt-auto mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to order your favorite meal?</h3>
        <button
          onClick={() => navigate("/Home")}
          className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition"
        >
          Get Started Now
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} Foodible Foods. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
