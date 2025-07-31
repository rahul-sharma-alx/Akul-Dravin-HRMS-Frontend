// src/pages/Welcome.jsx
import React from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/Welcome.jpg";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 py-12">
      {/* Illustration Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={welcome}
          alt="Job Search Illustration"
          className="w-3/4 md:w-[400px] max-w-xs md:max-w-md object-contain"
        />
      </div>

      {/* Text & Buttons Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary leading-snug">
          Find your dream job now
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Over <span className="font-semibold text-secondary">500,000+ jobs</span> waiting for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col w-full max-w-xs md:max-w-sm space-y-4 mt-4">
  <Link to="/login">
    <button className="w-full py-3 rounded-full bg-secondary text-white font-semibold hover:bg-gray-200 hover:text-primary transition">
      Login
    </button>
  </Link>
  <Link to="/register">
    <button className="w-full py-3 rounded-full bg-primary text-white font-semibold hover:bg-light hover:text-primary transition">
      Register
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}
