import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-primary text-white mt-12  mb-4 py-40 relative mx-auto max-w-7xl rounded-2xl px-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Free Forever HR, Attendance & Payroll Platform
            <br />
            <span className="text-secondary">For Unlimited Employees</span>
          </h1>
          <p className="text-lg text-gray-200">
            Trusted by 20,000+ Companies & 8,00,000+ Employees.
          </p>

         
        </motion.div>

        {/* Right Signup Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
            Get Started Now
          </h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Official Email"
              className="w-full border border-gray-300 text-primary rounded-md p-3 focus:outline-none focus:border-secondary"
            />
            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="w-full border border-gray-300 text-primary rounded-md p-3 focus:outline-none focus:border-secondary"
            />
            <button
              type="submit"
              className="w-full bg-secondary text-dark font-semibold py-3 rounded-md hover:bg-primary hover:text-white transition"
            >
              Get Started
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
