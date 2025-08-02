import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "₹999 / Month",
    employees: "Up to 10 Employees",
    features: [
      "Core HR & Digital Profiles",
      "Web & Mobile Attendance",
      "Leave & Payroll Management",
      "5 Job Posts + Self-Service Portal",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹2,999 / Month",
    employees: "Up to 100 Employees",
    features: [
      "Biometric Attendance & AI Screening",
      "Unlimited Job Posts",
      "Performance Reviews & Grievance Mgmt",
      "Expense, Loan & Asset Tracking",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "₹5,999 / Month",
    employees: "Unlimited Employees",
    features: [
      "Multi-Company & Advanced Analytics",
      "Custom Branding & Chatbot",
      "Full Automation (Onboarding → Exit)",
      "E-Learning & Wellness Tools",
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime Deal",
    price: "₹2,50,000 (One-Time)",
    employees: "Unlimited Employees",
    highlight: true,
    features: [
      "All Premium HRMS Features Forever",
      "1-Year Free Updates & Support",
      "Custom Workflow Design",
      "Free Job Posting for Life",
    ],
  },
];

export default function Pricing() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handlePricingpage = ()=>{
    navigate('/trial');
  }
  const handleGetStarted = async (planId, planName, price) => {
    try {
      if (!user) {
        // Redirect to login with return URL
        window.location.href = `/login?returnTo=${encodeURIComponent('/pricing')}`;
        return;
      }

      // Start checkout process
      const response = await axios.post('/api/subscriptions/checkout', {
        plan: planId
      });

      // Here you would typically redirect to payment gateway
      // For this example, we'll proceed directly to subscription
      const subscribeResponse = await axios.post('/api/subscriptions/start-trial', {
        plan: planId,
        price: price
      });

      // Redirect to dashboard or payment success page
      window.location.href = '/dashboard?subscription=success';
    } catch (error) {
      console.error('Subscription error:', error);
      alert(error.response?.data?.message || 'Failed to start subscription');
    }
  };


  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Flexible Plans for Every Business
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              className={`flex flex-col justify-between rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 bg-white border ${p.highlight ? "border-secondary bg-light" : "border-gray-200"
                }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div>
                {/* Plan Title */}
                <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
                  {p.name}
                </h3>

                {/* Price & Employees */}
                <p className="text-3xl font-bold text-secondary mb-2 text-center">
                  {p.price}
                </p>
                <p className="text-gray-600 mb-6 text-center">{p.employees}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {p.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-2 text-sm"
                    >
                      <span className="text-secondary font-bold">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button - always aligned at bottom */}
              <button type="button" onClick={handlePricingpage}
                className="block mt-auto bg-secondary text-dark text-center py-3 rounded-md font-medium hover:bg-primary hover:text-white transition"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
