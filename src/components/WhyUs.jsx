import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Made for India, Trusted Globally",
  "End-to-End HR Automation",
  "Affordable Plans for Every Business",
  "Dedicated 24x7 Support",
  "Secure, Scalable & User-Friendly",
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-light relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Akul Dravin HRMS?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A next-gen HR platform designed for businesses of all sizes, combining
          automation, security, and a world-class user experience.
        </motion.p>

        {/* Features List */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg rounded-2xl py-8 px-6 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <FaCheckCircle className="text-secondary text-4xl mb-4" />
              <p className="text-gray-800 font-medium text-center">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="#trial"
            className="bg-secondary text-dark font-semibold px-8 py-4 rounded-lg shadow hover:bg-primary hover:text-white transition"
          >
            Start Your Free Trial Today
          </a>
        </motion.div>
      </div>

      {/* Background Accent (Diagonal Shape) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-secondary/10 rotate-1 transform"></div>
    </section>
  );
}
