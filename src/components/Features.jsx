import { motion } from "framer-motion";
import {
  FaUserTie,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaUsers,
  FaRobot,
  FaChartLine,
  FaHandsHelping,
  FaBuilding,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie size={40} />,
    title: "Core HR",
    desc: [
      "Digital employee profiles",
      "Secure document vault",
      "Hierarchy mapping",
    ],
  },
  {
    icon: <FaCalendarCheck size={40} />,
    title: "Attendance & Leave",
    desc: [
      "Geo-tagging & biometric integration",
      "Shift & leave scheduling",
      "Automated approvals",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={40} />,
    title: "Payroll & Compliance",
    desc: [
      "Automated PF, ESI, TDS",
      "Real-time compliance dashboard",
      "Salary & bonus management",
    ],
  },
  {
    icon: <FaUsers size={40} />,
    title: "Recruitment & Onboarding",
    desc: [
      "AI-powered resume screening",
      "Automated job posting",
      "Offer letter & joining automation",
    ],
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Face Attendance",
    desc: [
      "Free AI-powered recognition",
      "Seamless & secure check-ins",
      "Eliminates buddy-punching",
    ],
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Performance & Analytics",
    desc: [
      "KPI, OKR & 360° Feedback",
      "Attrition & productivity reports",
      "Employee engagement surveys",
      "AI-driven analytics dashboard",
    ],
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: "Employee Services",
    desc: [
      "Loan & advance requests",
      "Travel & expense claim portal",
      "Training & certification tracker",
      "Self-service (Payslip, Leave, Docs)",
      "Rewards & recognition programs",
    ],
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Enterprise Features",
    desc: [
      "Multi-branch & multi-company setup",
      "Visitor & contractor management",
      "E-learning & training portal",
      "Full & final settlement automation",
      "Custom branding & workflows",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Powerful Features for Modern HR Teams
        </motion.h2>

        {/* Responsive Grid: 1 col mobile, 2 on md, 4 on lg */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-secondary mb-4 flex justify-center">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                {f.title}
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                {f.desc.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
