import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F3] text-[#0A0A0A] font-sans selection:bg-[#EAD3CA]">
      {/* NAVIGATION */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="font-serif font-bold text-xl tracking-tighter">WC</span>
        <div className="space-x-8 text-sm uppercase tracking-widest font-medium opacity-70">
          <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
          <a href="#articles" className="hover:opacity-100 transition-opacity">Articles</a>
        </div>
      </nav>

      {/* HERO */}
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
            Driving 10+ years of hands-on, cross-channel growth for high-growth tech brands across APAC, EMEA, and the US.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EBEBE8] -z-10 -skew-x-12 transform translate-x-20"></div>
      </header>

      {/* ARTICLES / THOUGHT LEADERSHIP */}
      <section id="articles" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#DADAD5]">
        <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-16 text-[#947862]">Articles & Strategy</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <article className="group cursor-pointer">
            <p className="text-[10px] font-bold tracking-widest text-[#BFA38A] uppercase mb-4">Performance Strategy</p>
            <h3 className="text-3xl font-serif mb-4 group-hover:text-[#A86544] transition-colors leading-tight">Beyond the Click: Shifting B2B Focus to Qualified Pipeline.</h3>
            <p className="text-[#544538] leading-relaxed mb-6">How I restructured global marketing engines to move away from vanity metrics and toward sales-validated revenue.</p>
            <span className="text-xs font-bold border-b border-[#0A0A0A] pb-1">Read Article -></span>
          </article>

          <article className="group cursor-pointer">
            <p className="text-[10px] font-bold tracking-widest text-[#BFA38A] uppercase mb-4">Career Leadership</p>
            <h3 className="text-3xl font-serif mb-4 group-hover:text-[#A86544] transition-colors leading-tight">The Agency-to-Client Pivot: A Performance Lead’s Perspective.</h3>
            <p className="text-[#544538] leading-relaxed mb-6">Navigating the transition from high-volume agency life to driving deep commercial value in-house.</p>
            <span className="text-xs font-bold border-b border-[#0A0A0A] pb-1">Read Article -></span>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-16 text-[#947862]">Professional History</h2>
          <div className="space-y-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-sm font-bold uppercase tracking-widest text-[#BFA38A]">2022 — Present</div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-serif mb-2">Senior Manager, Global Performance Marketing</h3>
                <p className="text-lg text-[#75604E] mb-4">Sinch</p>
                <p className="text-[#544538] leading-relaxed">Managing multi-million dollar annual marketing budgets and holding full accountability for ROAS and pipeline targets across APAC, EMEA, and the US.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
{/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-32 border-t border-[#DADAD5]">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-[#947862]">Contact</h2>
            <h3 className="text-4xl font-serif mb-6">Let’s discuss your next growth engine.</h3>
            <p className="text-[#75604E] leading-relaxed max-w-sm">
              Currently open to Head of Performance or Senior Marketing Leadership opportunities in Melbourne or remotely.
            </p>
          </div>
          
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-50">Direct Email</p>
              <a href="mailto:winniechan.sem@gmail.com" className="text-2xl font-serif hover:text-[#A86544] transition-colors border-b border-[#0A0A0A] pb-1">
                winniechan.sem@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-50">Social</p>
              <a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" className="text-2xl font-serif hover:text-[#A86544] transition-colors border-b border-[#0A0A0A] pb-1">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white text-center">
         <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">
           © 2026 Winnie Chan &middot; Melbourne, VIC
         </p>
      </footer>

export default App;
