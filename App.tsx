import React from 'react';
import ResourceCard from './components/ResourceCard';
import SummaryCard from './components/SummaryCard';
import LicenseList from './components/LicenseList';
import { RESOURCE_SITES, RESOURCE_SUMMARY, SALT_LAKE_SUMMARY, MINING_LICENSES, EXPLORATION_LICENSES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-4 px-2 sm:py-10 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        
        {/* Header Title (Optional, added for completeness) */}
        <header className="mb-6 md:mb-10 px-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            2025年第三季度 <span className="text-blue-600">资源报告</span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2">
            矿产资源保有量与矿业权证统计概览
          </p>
        </header>

        {/* Section 1: Resource Sites */}
        <section>
          <div className="flex items-center mb-4 px-1">
            <div className="w-1 h-6 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">
              各矿区保有资源量
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
          <div className="flex items-center mb-4 px-1">
            <div className="w-1 h-6 bg-indigo-600 rounded-full mr-3"></div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">
              资源量汇总 <span className="text-slate-400 font-normal text-sm ml-2">金属矿产</span>
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
          <div className="flex items-center mb-4 px-1">
            <div className="w-1 h-6 bg-teal-500 rounded-full mr-3"></div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">
              资源量汇总 <span className="text-slate-400 font-normal text-sm ml-2">盐湖资源</span>
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
           <div className="flex items-center mb-4 px-1">
            <div className="w-1 h-6 bg-amber-500 rounded-full mr-3"></div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">
              矿业权证概览
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <LicenseList data={MINING_LICENSES} />
            <LicenseList data={EXPLORATION_LICENSES} />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-200 mt-12">
          <p className="text-slate-400 text-xs">
            © 2025 Resource Management Report. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;