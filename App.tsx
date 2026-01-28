import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F3] text-[#0A0A0A] font-sans selection:bg-[#EAD3CA]">
      {/* NAVIGATION PLACEHOLDER */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="font-serif font-bold text-xl tracking-tighter">WC</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium opacity-70">
          <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
          <a href="#expertise" className="hover:opacity-100 transition-opacity">Expertise</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white text-[#A86544] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-[#EAD3CA]">
            Media Strategy Expert
          </span>
          <h1 className="text-6xl md:text-7xl font-serif font-bold leading-[1.1] mb-8 text-[#0A0A0A]">
            Winnie Chan: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A86544] to-[#947862]">
              Global Performance Leader
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#75604E] mb-10 max-w-2xl leading-relaxed font-light">
            Driving 10+ years of hands-on, cross-channel growth for high-growth tech and enterprise brands across APAC, EMEA, and the US.
          </p>
          <div className="flex gap-6">
            <a href="mailto:winniechan.sem@gmail.com" className="bg-[#0A0A0A] text-white px-8 py-4 text-sm font-medium hover:bg-[#332A22] transition-colors">
              Get in Touch ->
