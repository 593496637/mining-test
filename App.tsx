import React from 'react';
import ResourceCard from './components/ResourceCard';
import SummaryCard from './components/SummaryCard';
import LicenseList from './components/LicenseList';
import { RESOURCE_SITES, RESOURCE_SUMMARY, SALT_LAKE_SUMMARY, MINING_LICENSES, EXPLORATION_LICENSES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 py-6 px-3 sm:py-10 sm:px-6 lg:px-8 font-sans bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
        
        {/* Header Title (Optional wrapper) */}
        <header className="mb-8 md:mb-12 px-1 hidden md:block">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            2025年第三季度资源报告
          </h1>
        </header>

        {/* Section 1: Resource Sites */}
        <section>
          <div className="flex items-center mb-5 px-1">
            <div className="w-1.5 h-6 md:h-7 bg-blue-600 rounded-full mr-3 shadow-sm"></div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">
              25年第三季度末保有资源量
            </h2>
          </div>
          {/* Force 2 columns on mobile, optimized gap */}
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-6">
            {RESOURCE_SITES.map((site, index) => (
              <ResourceCard key={index} data={site} />
            ))}
          </div>
        </section>

        {/* Section 2: Resource Summary */}
        <section>
          <div className="flex items-center mb-5 px-1">
            <div className="w-1.5 h-6 md:h-7 bg-indigo-600 rounded-full mr-3 shadow-sm"></div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">
              25年第三季度末保有资源量汇总
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
            {RESOURCE_SUMMARY.map((item, index) => (
              <SummaryCard key={index} data={item} variant="metal" />
            ))}
          </div>
        </section>

        {/* Section 3: Salt Lake Summary */}
        <section>
          <div className="flex items-center mb-5 px-1">
            <div className="w-1.5 h-6 md:h-7 bg-teal-500 rounded-full mr-3 shadow-sm"></div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">
              25年第三季度末盐湖保有资源量汇总
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
            {SALT_LAKE_SUMMARY.map((item, index) => (
              <SummaryCard key={index} data={item} variant="salt" />
            ))}
          </div>
        </section>

        {/* Section 4: Mining Rights/Licenses */}
        <section>
           <div className="flex items-center mb-5 px-1">
            <div className="w-1.5 h-6 md:h-7 bg-amber-500 rounded-full mr-3 shadow-sm"></div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">
              矿业权证
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <LicenseList data={MINING_LICENSES} />
            <LicenseList data={EXPLORATION_LICENSES} />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 border-t border-slate-200 mt-16">
          <p className="text-slate-400 text-xs md:text-sm">
            © 2025 Resource Management Report. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;