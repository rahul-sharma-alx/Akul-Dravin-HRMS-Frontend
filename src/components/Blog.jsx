import { useState } from "react";
import blog1 from "../assets/blog.jpg";
import blog2 from "../assets/blog.jpg";
import blog3 from "../assets/blog.jpg";

export default function Blog() {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      id: 1,
      title: "HR Leave Policy Guide: Rules, Trends & Compliance 2025",
      date: "May 14th, 2025",
      author: "Sannivas J Shanbhag",
      description:
        "In 2025, organisations will continue to understand the necessity and importance of comprehensive HR leave policies with respect to changing workforce conditions and legal...",
      img: blog1,
    },
    {
      id: 2,
      title: "10 Effective Performance Management Strategies for 2025",
      date: "May 10th, 2025",
      author: "Sannivas J Shanbhag",
      description:
        "Performance management has transitioned away from the traditional model of an annual review to a more continuous and strategic process, given the 2025 business context...",
      img: blog2,
    },
    {
      id: 3,
      title: "Union Budget 2025: Key Tax, Payroll & MSME Reforms You Need to Know",
      date: "February 27th, 2025",
      author: "Prashirsh Kumar",
      description:
        "The Union Budget 2025-26, presented by Finance Minister Nirmala Sitharaman, introduces key reforms in taxation, payroll compliance, and MSME support. As India’s trusted payroll and...",
      img: blog3,
    },
    {
      id: 3,
      title: "Union Budget 2025: Key Tax, Payroll & MSME Reforms You Need to Know",
      date: "February 27th, 2025",
      author: "Prashirsh Kumar",
      description:
        "The Union Budget 2025-26, presented by Finance Minister Nirmala Sitharaman, introduces key reforms in taxation, payroll compliance, and MSME support. As India’s trusted payroll and...",
      img: blog3,
    },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
    

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-8 px-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100"
          >
            <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
              <div className="flex justify-between text-gray-400 text-sm">
                <p>{blog.date}</p>
                <p>{blog.author}</p>
              </div>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center py-10">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
          Load More
        </button>
      </div>
    </div>
  );
}
