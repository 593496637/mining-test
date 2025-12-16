import React from 'react';
import ResourceCard from './components/ResourceCard';
import SummaryCard from './components/SummaryCard';
import LicenseList from './components/LicenseList';
import { RESOURCE_SITES, RESOURCE_SUMMARY, SALT_LAKE_SUMMARY, MINING_LICENSES, EXPLORATION_LICENSES } from './constants';

function App() {
  return (
    <div className="app-layout">
      {/* Background Ambience */}
      <div className="ambient-bg">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>

      <main className="container">
        {/* Header */}


        <div className="sections-wrapper">
          {/* Section 1: Resource Sites */}
          <section className="section animate-enter">
            <div className="section-header">
              <div className="section-pill pill-blue"></div>
              <h2>25年第三季度末保有资源量</h2>
            </div>
            <div className="grid-2">
              {RESOURCE_SITES.map((site, index) => (
                <ResourceCard key={index} data={site} />
              ))}
            </div>
          </section>

          {/* Section 2: Resource Summary */}
          <section className="section animate-enter" style={{ animationDelay: '0.1s' }}>
            <div className="section-header">
              <div className="section-pill pill-indigo"></div>
              <h2>25年第三季度末保有资源量汇总</h2>
            </div>
            <div className="grid-responsive">
              {RESOURCE_SUMMARY.map((item, index) => (
                <SummaryCard key={index} data={item} variant="metal" />
              ))}
            </div>
          </section>

          {/* Section 3: Salt Lake Summary */}
          <section className="section animate-enter" style={{ animationDelay: '0.2s' }}>
            <div className="section-header">
              <div className="section-pill pill-teal"></div>
              <h2>25年第三季度末盐湖保有资源量汇总</h2>
            </div>
            <div className="grid-responsive">
              {SALT_LAKE_SUMMARY.map((item, index) => (
                <SummaryCard key={index} data={item} variant="salt" />
              ))}
            </div>
          </section>

          {/* Section 4: Mining Rights/Licenses */}
          <section className="section animate-enter" style={{ animationDelay: '0.3s' }}>
             <div className="section-header">
              <div className="section-pill pill-amber"></div>
              <h2>矿业权证</h2>
            </div>
            <div className="grid-1">
              <LicenseList data={MINING_LICENSES} />
              <LicenseList data={EXPLORATION_LICENSES} />
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="app-footer animate-enter" style={{ animationDelay: '0.4s' }}>
          <div className="footer-dots">
            <span className="dot dot-blue"></span>
            <span className="dot dot-indigo"></span>
            <span className="dot dot-purple"></span>
          </div>
          <p>© 2025 Resource Management Report. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;