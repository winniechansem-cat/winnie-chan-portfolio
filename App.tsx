import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F3] text-[#0A0A0A] font-sans selection:bg-[#EAD3CA]">
      {/* NAVIGATION */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="font-serif font-bold text-xl tracking-tighter">WC</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium opacity-70">
          <a href="#articles" className="hover:opacity-100 transition-opacity underline decoration-[#A86544] underline-offset-4">Insights</a>
          <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-12 pb-24 overflow-hidden border-b border-[#DADAD5]">
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
          <p className="text-xl md:text-2xl text-[#75604E] mb-10 max-w-2xl leading-relaxed font-light italic">
            "Driving revenue for high-growth tech brands across APAC, EMEA, and the US."
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EBEBE8] -z-10 -skew-x-12 transform translate-x-20"></div>
      </header>

      {/* ARTICLES & STRATEGY SECTION */}
      <section id="articles" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-16 text-[#947862]">Articles & Strategy</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <article className="group">
            <p className="text-[10px] font-bold tracking-widest text-[#BFA38A] uppercase mb-4">Performance Strategy</p>
            <h3 className="text-3xl font-serif mb-4 group-hover:text-[#A86544] transition-colors leading-tight">Beyond the Click: Shifting B2B Focus to Qualified Pipeline.</h3>
            <p className="text-[#544538] leading-relaxed mb-6">How I restructured global marketing engines to move away from vanity metrics toward sales-validated revenue.</p>
            <a href="https://linkedin.com/in/winnie-chan" target="_blank" rel="noreferrer" className="text-xs font-bold border-b border-[#0A0A0A] pb-1 uppercase tracking-widest">Read Article -></a>
          </article>

          <article className="group">
            <p className="text-[10px] font-bold tracking-widest text-[#BFA38A] uppercase mb-4">Leadership</p>
            <h3 className="text-3xl font-serif mb-4 group-hover:text-[#A86544] transition-colors leading-tight">The Agency-to-Client Pivot: A Performance Lead’s Perspective.</h3>
            <p className="text-[#544538] leading-relaxed mb-6">Navigating the transition from high-volume agency life to driving deep commercial value in-house.</p>
            <a href="https://linkedin.com/in/winnie-chan" target="_blank" rel="noreferrer" className="text-xs font-bold border-b border-[#0A0A0A] pb-1 uppercase tracking-widest">Read Article -></a>
          </article>
        </div>
      </section>

      {/* PROFESSIONAL HISTORY SECTION */}
      <section id="experience" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-16 text-[#947862]">Professional History</h2>
          <div className="space-y-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-sm font-bold uppercase tracking-widest text-[#BFA38A]">2022 — 2026</div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-serif mb-2 text-[#0A0A0A]">Senior Manager, Global Performance Marketing</h3>
                <p className="text-lg text-[#75604E] mb-4">Sinch</p>
                <p className="text-[#544538] leading-relaxed">Managed multi-million dollar annual budgets and led the shift from lead-gen to qualified pipeline targets across global markets.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 border-t border-[#F5F5F3] pt-20">
              <div className="text-sm font-bold uppercase tracking-widest text-[#BFA38A]">2020 — 2022</div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-serif mb-2 text-[#0A0A0A]">Paid Media & Strategy Director</h3>
                <p className="text-lg text-[#75604E] mb-4">GrowthOps</p>
                <p className="text-[#544538] leading-relaxed">Led a high-performing team of 6 specialists to achieve 40% YoY revenue growth for high-value portfolios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-32">
        <div className="bg-[#EBEBE8] p-12 md:p-20 shadow-sm border border-[#DADAD5]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-[#947862]">Contact</h2>
              <h3 className="text-4xl font-serif mb-6 leading-tight">Let’s discuss your next growth engine.</h3>
              <p className="text-[#75604E] leading-relaxed mb-8 italic">
                Currently open to Senior Performance Marketing or Head of Performance roles.
              </p>
              <div className="space-y-4">
                <a href="mailto:winniechan.sem@gmail.com" className="block text-xl font-serif hover:text-[#A86544] transition-colors underline decoration-[#A86544] underline-offset-8">
                  winniechan.sem@gmail.com
                </a>
                <a href="https://linkedin.com/in/winnie-chan" target="_blank" className="block text-xl font-serif hover:text-[#A86544] transition-colors underline decoration-[#A86544] underline-offset-8">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="hidden md:block">
               <div className="border border-[#DADAD5] p-8 space-y-6 bg-white shadow-xl">
                 <div className="h-4 w-1/2 bg-[#F5F5F3]"></div>
                 <div className="h-4 w-full bg-[#F5F5F3]"></div>
                 <div className="h-24 w-full bg-[#F5F5F3]"></div>
                 <div className="h-12 w-full bg-[#0A0A0A]"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-[10px] tracking-[0.4em] uppercase opacity-40">
        © 2026 Winnie Chan &middot; Melbourne, Australia
      </footer>
    </div>
  );
};

export default App;
