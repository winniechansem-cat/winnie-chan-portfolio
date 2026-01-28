import React from 'react';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans">
      <header className="mb-20">
        <h1 className="text-5xl font-serif mb-4">Winnie Chan</h1>
        <p className="text-xl text-gray-600 mb-6">Global Senior Performance Marketing Leader | B2B SaaS</p>
        <p className="leading-relaxed text-lg">
          Global Senior Performance Marketer with over 10 years of experience driving revenue for high-growth tech brands. 
          Managed multi-million dollar budgets at Sinch and GrowthOps with a focus on ROI and qualified pipeline.
        </p>
      </header>

      <section className="mb-20">
        <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-8">Professional Experience</h2>
        <div className="mb-10">
          <h3 className="font-bold text-lg">Sinch | Senior Manager, Global Performance Marketing</h3>
          <p className="text-sm text-gray-500 mb-3">11/2022 – Present</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Managed multi-million dollar budgets across APAC, EMEA, and the US.</li>
            <li>Shifted focus from 'Leads' to 'Qualified Pipeline' to improve sales acceptance rates.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">GrowthOps | Paid Media & Strategy Director</h3>
          <p className="text-sm text-gray-500 mb-3">07/2020 – 11/2022</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Achieved 40% YoY revenue increase for high-value portfolios (AUD$1M+ monthly spend).</li>
            <li>Led a high-performing team of 6 specialists in data-driven excellence.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-8">Technical Expertise</h2>
        <div className="flex flex-wrap gap-2 text-sm font-medium">
          {["Google Ads (Certified)", "LinkedIn Campaign Manager", "Meta Business Suite", "6Sense", "Salesforce", "HubSpot", "GA4", "Tableau"].map(skill => (
            <span key={skill} className="bg-white border border-gray-200 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;