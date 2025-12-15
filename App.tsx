import React from 'react';
import ResourceCard from './components/ResourceCard';
import SummaryCard from './components/SummaryCard';
import LicenseList from './components/LicenseList';
import { RESOURCE_SITES, RESOURCE_SUMMARY, SALT_LAKE_SUMMARY, MINING_LICENSES, EXPLORATION_LICENSES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 text-slate-800 py-6 px-3 sm:py-10 sm:px-6 lg:px-8 font-sans relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10 md:space-y-14 relative z-10">

        {/* Header Title (Optional wrapper) */}
        <header className="mb-8 md:mb-12 px-1 hidden md:block">
          <div className="relative">
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent tracking-tight leading-tight drop-shadow-sm">
              2025年第三季度资源报告
            </h1>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </header>

        {/* Section 1: Resource Sites */}
        <section className="animate-fadeIn">
          <div className="flex items-center mb-6 px-1 group">
            <div className="w-1.5 h-8 md:h-9 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full mr-3 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent tracking-tight">
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
        <section className="animate-fadeIn" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center mb-6 px-1 group">
            <div className="w-1.5 h-8 md:h-9 bg-gradient-to-b from-indigo-600 to-purple-500 rounded-full mr-3 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent tracking-tight">
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
        <section className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center mb-6 px-1 group">
            <div className="w-1.5 h-8 md:h-9 bg-gradient-to-b from-teal-500 to-cyan-400 rounded-full mr-3 shadow-lg shadow-teal-200 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-slate-800 to-teal-800 bg-clip-text text-transparent tracking-tight">
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
        <section className="animate-fadeIn" style={{animationDelay: '0.3s'}}>
           <div className="flex items-center mb-6 px-1 group">
            <div className="w-1.5 h-8 md:h-9 bg-gradient-to-b from-amber-500 to-orange-400 rounded-full mr-3 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-slate-800 to-amber-800 bg-clip-text text-transparent tracking-tight">
              矿业权证
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <LicenseList data={MINING_LICENSES} />
            <LicenseList data={EXPLORATION_LICENSES} />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-slate-200/50 mt-20 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          <p className="text-slate-400 text-xs md:text-sm font-medium">
            © 2025 Resource Management Report. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;