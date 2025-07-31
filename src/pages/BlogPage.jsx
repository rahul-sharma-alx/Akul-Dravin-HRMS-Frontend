import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import bgPattern from "../assets/b03d76b1-0336-4e04-969f-e513bfc8cd26.png"; // your uploaded pattern
import Blog from "../components/Blog";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Banner Section */}
      <div
        className="relative w-11/12 md:w-4/5 rounded-3xl bg-[#1B2B3A] h-64 flex items-center justify-center text-white"
        style={{
          // backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated Circles */}
        <div className="absolute top-10 left-20 w-12 h-12 border border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-6 h-6 border border-red-400 rounded-full animate-pulse"></div>

        <h1 className="text-4xl font-bold z-10">Blog</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-11/12 md:w-1/2 bg-white shadow-md rounded-full px-4 py-2 -mt-6 relative z-20">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
        <FaSearch className="text-gray-400" />
      </div>
      <Blog/>
    </div>
  );
}
