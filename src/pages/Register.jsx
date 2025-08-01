// src/pages/Register.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from '../api/axios';
import register from "../assets/login_image.png"
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registering:", { name, email, password });
    
    // Example: You can make an API call to register the user
    // await axios.post('/api/register', { name, email, password });
    try {
      await axios.get("sanctum/csrf-cookie", { withCredentials: true });
      const res = await axios.post("api/register", {
        name,email, password
      }, { withCredentials: true });

      toast.success("Registration successful 🎉");
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
    
    // Redirect or show success message
  }

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

          <form onSubmit={handleRegister}>
            <label className="block mb-4">
              <span className="text-gray-700 text-sm">Full Name</span>
              <input
                type="text"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent py-1"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 text-sm">Email / Mobile Number</span>
              <input
                type="text"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent py-1"
                placeholder="Enter email or phone"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block mb-6">
              <span className="text-gray-700 text-sm">Password</span>
              <input
                type="password"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent py-1"
                placeholder="Create password"
                value={password} onChange={(e) => setPassword(e.target.value)}
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
