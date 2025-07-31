import React from "react";
import { FaSearch } from "react-icons/fa";
import hire from "../assets/hire.jpg";
import qrCodeImg from "../assets/qr.png";
import phoneIllustration from "../assets/phoneApp.png";
import playStoreImg from "../assets/google-play.png";

export default function HirePage() {
  return (
    <>
    <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        India’s <span className="font-bold text-primary">Largest</span> Job Portal
      </h1>
      <p className="text-gray-700 text-center mt-4 text-lg md:text-xl">
        Hire the Top 1% Skilled Staff from 4Cr+ Candidates
      </p>

      {/* Center Image */}
      <div className="my-8 w-full max-w-4xl flex justify-center">
        <img
          src={hire}
          alt="Central Illustration"
          className="w-full max-w-[500px]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-md">
          Hire now
        </button>
        <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-md">
          Get a job
        </button>
      </div>

      {/* Search Box */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <label className="block text-gray-600 mb-1">Select job title</label>
          <select className="w-full border px-4 py-2 rounded">
            <option>Eg. Back Office job</option>
            <option>Telecaller</option>
            <option>Delivery Executive</option>
          </select>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-gray-600 mb-1">Select city</label>
          <select className="w-full border px-4 py-2 rounded">
            <option>Pick Your City</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
          </select>
        </div>

        <button className="bg-primary text-white p-3 rounded-full">
          <FaSearch />
        </button>
      </div>

      {/* Recruiter App Download Section */}
      
    </div>
    <div className="bg-secondary text-white px-6 py-16 md:px-20 md:py-24 w-full mt-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              Download the <span className="border-b-4 border-yellow-400">Work</span> for Recruiters App
            </h2>

            {/* QR & Phone Input */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* QR Code */}
              <div className="flex flex-col items-center">
                <p className="mb-2 text-sm text-gray-200">Scan this QR code</p>
                <img src={qrCodeImg} alt="QR Code" className="w-36 h-36 object-cover" />
              </div>

              {/* Phone input */}
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-200">
                  or tell us your phone number, we’ll send you an SMS link
                </p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="+91"
                    className="px-3 py-2 border border-gray-300 rounded-l-md text-black w-16"
                  />
                  <input
                    type="text"
                    placeholder="938-289-4892"
                    className="px-4 py-2 border border-gray-300 text-black w-full"
                  />
                  <button className="bg-primary text-white border border-white px-4 py-2 rounded-r-md hover:bg-white hover:text-primary transition">
                    Download App
                  </button>
                </div>
                <img
                  src={playStoreImg}
                  alt="Get it on Google Play"
                  className="w-36 mt-2"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src={phoneIllustration}
              alt="Phone with recruiter app"
              className="w-72 sm:w-80 md:w-96"
            />
          </div>
        </div>
      </div>
      </>
  );
}
