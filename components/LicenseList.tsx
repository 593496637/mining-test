import React from 'react';
import { LicenseSection } from '../types';

interface Props {
  data: LicenseSection;
}

const LicenseList: React.FC<Props> = ({ data }) => {
  return (
    <div className="card license-list">
      <div className="license-header">
        <h3>
          <span className="license-icon"></span>
          {data.title}
        </h3>
        <span className="license-badge">
          {data.count} 张
        </span>
      </div>
      
      <div className="license-items">
        {data.items.map((item, idx) => (
          <div key={idx} className="license-item">
            <div className="item-company">
                {item.company}
            </div>

            <div className="item-details">
                 <div className="detail-row">
                    <span className="detail-dot"></span>
                    <span className="detail-text">{item.detail1}</span>
                 </div>
                 {item.detail2 && (
                    <div className="detail-row">
                        <span className="detail-dot"></span>
                        <span className="detail-text">{item.detail2}</span>
                    </div>
                 )}
            </div>

            <div className="item-validity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="validity-icon">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>
              <span>{item.validity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseList;