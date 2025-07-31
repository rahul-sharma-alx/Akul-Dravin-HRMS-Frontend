// src/pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import register from "../assets/login_image.png"
export default function Register() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f7fe]">
      {/* Illustration */}
      <div className="md:w-1/2 hidden md:flex justify-center items-center">
        <img
          src={register}
          alt="HRMS"
          className="w-[90%] max-w-lg"
        />
      </div>

      {/* Form */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <div className="text-right text-sm text-gray-500 mb-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Sign In
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-[#0a1d44]">Register</h2>

          <form>
            <label className="block mb-4">
              <span className="text-gray-700 text-sm">Full Name</span>
              <input
                type="text"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent py-1"
                placeholder="Enter your full name"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 text-sm">Email / Mobile Number</span>
              <input
                type="text"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent py-1"
                placeholder="Enter email or phone"
              />
            </label>

            <label className="block mb-6">
              <span className="text-gray-700 text-sm">Password</span>
              <input
                type="password"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent py-1"
                placeholder="Create password"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#f86c6c] text-white py-2 rounded-full hover:bg-[#f45b5b] transition"
            >
              Sign Up
            </button>
          </form>

          <footer className="text-xs text-center text-gray-400 mt-6">
            © YourApp. All rights reserved.
            <br />
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
