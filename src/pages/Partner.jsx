// src/pages/Partner.jsx
import React from "react";

export default function Partner() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-primary bg-cover bg-center h-[100vh] text-white flex items-center justify-center">
        <div className=" bg-opacity-60 p-8 rounded-md text-center max-w-5xl">
          <h1 className="text-5xl font-bold mb-7">
            Drive Growth with{" "}
            <span className="text-secondary">AI-Powered HRMS</span> <br /> for
            Chartered Accountants
          </h1>
          <p className="text-lg mb-6">
            Start your journey with Kredily’s Partner Program, grow your
            business with powerful AI-driven HR solutions — and earn up to{" "}
            <strong>50% revenue share</strong> on every client you bring.
          </p>
          <button className="bg-secondary hover:bg-light hover:text-primary px-6 py-3 rounded-md text-white font-semibold transition">
            Partner with Us
          </button>
        </div>
      </div>

      {/* Foundation Plan */}
      <div className="text-center py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold mb-4">
          First Year Absolutely Free! – Foundation Plan
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience premium HR features at zero cost for the first year.
          Whether you’re starting out or scaling fast, Kredily makes
          enterprise-grade HR tech accessible.
        </p>
      </div>

      {/* Tools for CA Firms */}
      <div className="bg-light py-12 px-4">
        <h2 className="text-3xl text-center font-semibold mb-10">
          Purpose-Built Tools for Modern CA Firms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Digitize Payroll Workflow Across Clients",
              desc: "Automate payslips, compliance filings, and leave approvals. Empower your Chartered Accountant firm to scale without scaling manual work.",
            },
            {
              title: "Stay Audit-Ready with Smart Reports",
              desc: "Effortlessly generate audit-ready reports including payroll summaries, TDS trackers, and compliance logs.",
            },
            {
              title: "Serve More Clients in Less Time",
              desc: "Handle 5x more SMEs using bulk actions, automation, and centralized dashboards — no need to hire more staff.",
            },
            {
              title: "Power Up Your Brand with Every Payslip",
              desc: "Every payslip and report carries your firm’s branding — position yourself as the trusted payroll partner for SMEs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          Help & FAQs for CA Firms
        </h2>
        {[
          {
            q: "What is the Kredily CA Partner Program?",
            a: "The Kredily CA Partner Program is designed for Chartered Accountants and CA firms to manage payroll, attendance, and compliance for SME clients from a single dashboard, while earning commissions and building brand visibility.",
          },
          {
            q: "How can Kredily help me manage multiple clients?",
            a: "Kredily provides a central dashboard to manage multiple SME clients seamlessly with automation.",
          },
          {
            q: "Do I need to pay anything to join the Kredily CA Partner Program?",
            a: "No, joining is completely free. You can start using tools and onboarding clients instantly.",
          },
          {
            q: "What revenue opportunities are available for CA partners?",
            a: "You can earn up to 50% revenue share on every client you bring to Kredily.",
          },
          {
            q: "Can I showcase my CA firm’s brand on Kredily?",
            a: "Yes, Kredily allows co-branding across reports, payslips, and dashboards.",
          },
          {
            q: "How is Kredily better than Excel or Tally for payroll & compliance?",
            a: "It offers automation, smart reports, and compliance tracking out of the box.",
          },
          {
            q: "What compliance features does Kredily offer?",
            a: "It includes TDS, PF, ESI, professional tax, and statutory compliance tracking.",
          },
        ].map((faq, idx) => (
          <details
            key={idx}
            className="mb-4 border border-gray-200 rounded-md p-4 hover:shadow-md transition"
          >
            <summary className="cursor-pointer font-medium text-gray-800">
              {faq.q}
            </summary>
            <p className="text-gray-600 mt-2">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
