import React from "react";

export default function Trial() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Illustration and Headline */}
      <div className="md:w-1/2 bg-[#eaf1ff] flex flex-col justify-center items-center p-10">
        <img
          src="https://via.placeholder.com/500x300?text=Team+Structure"
          alt="Hierarchy"
          className="max-w-[500px] w-full"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-center mt-8 text-[#0d1c3f]">
          Manage Your End-to-End <br />
          Employee Lifecycle on Akul Dravin
        </h2>
        <p className="text-sm text-center text-gray-600 mt-2">
          Over 1000+ customers trust Akul Dravin.
        </p>

        {/* Client Logos */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            "https://placehold.co/100x40?text=JSW",
            "https://placehold.co/100x40?text=NSE",
            "https://placehold.co/100x40?text=AU+Bank",
            "https://placehold.co/100x40?text=TATA+AIA",
            "https://placehold.co/100x40?text=Ujjivan",
          ].map((logo, idx) => (
            <img key={idx} src={logo} className="h-10 object-contain" />
          ))}
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 bg-primary text-white flex items-center justify-center p-8">
        <form className="w-full max-w-md space-y-5">
          <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Schedule a 30-minute product demo with expert Q&A
          </p>

          <input
            type="email"
            placeholder="Work Email*"
            className="w-full px-4 py-2 rounded bg-primary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-light"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-1/2 px-4 py-2 rounded bg-primary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-light"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-1/2 px-4 py-2 rounded bg-primary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-light"
            />
          </div>

          <div className="flex gap-2">
            <select className="w-1/2 px-3 py-2 rounded bg-primary border border-gray-600 text-gray-300">
              <option>India (भारत)</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <input
              type="text"
              placeholder="+91"
              className="w-1/2 px-4 py-2 rounded bg-primary border border-gray-600 text-white focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Company Name*"
              className="w-1/2 px-4 py-2 rounded bg-primary border border-gray-600 focus:outline-none focus:ring-2 focus:ring-light"
            />
            <select className="w-1/2 px-3 py-2 rounded bg-primary border border-gray-600 text-gray-300">
              <option>Number of Employees*</option>
              <option>1-50</option>
              <option>51-200</option>
              <option>200+</option>
            </select>
          </div>

          <label className="flex items-center text-sm mt-2">
            <input type="checkbox" className="mr-2" defaultChecked />
            I have read and understood the&nbsp;
            <a href="#" className="underline text-blue-400">
              Privacy Policy
            </a>
            ,&nbsp;
            <a href="#" className="underline text-blue-400">
              Terms of Use
            </a>
          </label>

          <button
            type="submit"
            className="w-full bg-secondary hover:bg-light hover:text-primary text-white py-2 rounded font-semibold mt-3"
          >
            REQUEST A DEMO
          </button>
        </form>
      </div>
    </div>
  );
}
