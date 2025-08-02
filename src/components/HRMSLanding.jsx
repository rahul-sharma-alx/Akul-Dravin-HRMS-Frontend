import { FaHome, FaBuilding, FaRupeeSign, FaBriefcase, FaChartLine, FaUserTie, FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import careerVector from "../assets/career.png";
import ApplyButton from './ApplyButton';

const jobCategories = [
  { icon: <FaHome />, title: "Remote" },
  { icon: <FaBuilding />, title: "MNC" },
  { icon: <FaRupeeSign />, title: "Banking & Finance" },
  { icon: <FaBriefcase />, title: "Internships" },
  { icon: <FaChartLine />, title: "Marketing" },
  { icon: <FaUserTie />, title: "Fresher" },
  { icon: <FaChartLine />, title: "Analytics" },
  { icon: <FaBriefcase />, title: "Sales" },
  { icon: <FaChartLine />, title: "Data Science" },
  { icon: <FaBriefcase />, title: "Engineering" },
];

const companies = [
  { name: "Capgemini", rating: "3.7", reviews: "47K+", desc: "Global leader in technology services.", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Capgemini_201x_logo.svg" },
  { name: "Persistent", rating: "3.6", reviews: "4.5K+", desc: "Trusted global solutions company.", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Persistent_Systems_logo.svg" },
  { name: "Empower", rating: "3.9", reviews: "296", desc: "Financial services company.", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Empower_Retirement_logo.svg" },
  { name: "FIS", rating: "3.9", reviews: "6K+", desc: "Financial services technology leader.", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Fidelity_National_Information_Services_logo.svg" },
];

const jobRoles = [
  "Full Stack Developer (20K+ Jobs)",
  "Mobile / App Developer (3K+ Jobs)",
  "Front End Developer (5K+ Jobs)",
  "DevOps Engineer (3K+ Jobs)",
  "Engineering Manager (1.5K+ Jobs)",
  "Technical Lead (10K+ Jobs)",
];

const sponsoredCompanies = [
  { name: "Cyient", rating: "3.6", reviews: "4.9K+", tags: ["Engineering", "Consulting"], logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Cyient_Logo.svg" },
  { name: "Titan Company", rating: "4.2", reviews: "2.8K+", tags: ["Retail", "B2B"], logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/Titan_Company_Logo.png" },
  { name: "Shell Recharge", rating: "4.7", reviews: "101", tags: ["Software Product"], logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Shell_logo.svg" },
  { name: "Aptean", rating: "3.2", reviews: "291", tags: ["B2B", "Service"], logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Aptean_Logo.svg" },
];

export default function HRMSLanding() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('api/job/list');
        console.log("Fetched jobs:", Object.entries(response.data));

        const entries = Object.entries(response.data);

        // Find the array containing the job data
        const dataEntry = entries.find(([key]) => key === 'data');
        const jobsArray = dataEntry ? dataEntry[1] : [];
        setJobs(jobsArray);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load jobs');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const renderJobCategories = () => (
    <div className="flex flex-wrap justify-center gap-4">
      {jobCategories.map((cat, i) => (
        <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer border transition">
          <span className="text-primary">{cat.icon}</span>
          <span className="text-gray-700 font-medium">{cat.title}</span>
        </div>
      ))}
    </div>
  );

  const renderTopCompanies = () => (
    <div>
      <h2 className="text-2xl font-bold text-center text-primary mb-8">Top Companies Hiring Now</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {companies.map((c, i) => (
          <div key={i} className="bg-white border rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center text-center">
            <img src={c.logo} alt={c.name} className="h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{c.name}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
            <p className="text-sm mt-2 text-yellow-500 flex items-center gap-1">
              <FaStar /> {c.rating} | {c.reviews} reviews
            </p>
            <button className="mt-4 px-4 py-2 text-sm font-medium bg-secondary text-dark rounded-lg hover:bg-primary hover:text-white transition">View Jobs</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderJobListings = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8 text-red-500">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
          >
            Retry
          </button>
        </div>
      );
    }

    if (jobs.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <p>No jobs available at the moment.</p>
        </div>
      );
    }

    return (
      <div>
        <h2 className="text-2xl font-bold text-center text-primary mb-8">Available Job Opportunities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white border rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.job_title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{job.company_name || 'Company not specified'}</p>
                </div>
                {job.company_logo && (
                  <img
                    src={`https://placehold.co/600x400?text=+${job.job_title}`}
                    alt={job.company_name || 'Company logo'}
                    className="h-10 w-10 object-contain rounded"
                  />
                )}
              </div>

              <p className="text-gray-600 text-sm mt-3 line-clamp-2">{job.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.job_location && (
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded">{job.job_location}</span>
                )}
                {job.job_type && (
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded">{job.job_type}</span>
                )}
                {
                  job.experience && (
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded">{job.experience} years</span>
                )}
                {job.salary_from && (
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded">₹{job.salary_from} - ₹{job.salary_to}</span>
                )}
              </div>

              <ApplyButton jobId={job.id || i} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCareerSection = () => (
    <section className="py-12">
      <div className="bg-gradient-to-r from-orange-100 to-orange-60 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="flex items-center space-x-4 md:space-x-6">
          <img src={careerVector} alt="Career" className="w-28 md:w-36" />
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Discover jobs across popular roles
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Select a role and we'll show you relevant jobs for it!
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2 relative z-10 bg-white p-4 rounded-xl shadow-2xl">
          <div className="grid grid-cols-2 gap-3">
            {jobRoles.map((role, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 px-4 py-3 rounded-lg text-gray-800 shadow hover:shadow-md cursor-pointer text-sm font-medium flex justify-between items-center transition"
              >
                {role}
                <span className="text-gray-400">&gt;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderSponsoredCompanies = () => (
    <div>
      <h2 className="text-2xl font-bold text-center text-primary mb-8">Sponsored Companies</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sponsoredCompanies.map((sc, i) => (
          <div key={i} className="bg-white border rounded-xl shadow-md p-6 hover:shadow-xl transition text-center">
            <img src={sc.logo} alt={sc.name} className="h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{sc.name}</h3>
            <p className="text-yellow-500 flex justify-center gap-1 text-sm mt-1">
              <FaStar /> {sc.rating} | {sc.reviews} reviews
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {sc.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-xs bg-gray-100 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition">
          View All Companies
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-light py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {renderJobCategories()}
        {renderTopCompanies()}
        {renderJobListings()}
        {renderCareerSection()}
        {renderSponsoredCompanies()}
      </div>
    </section>
  );
}