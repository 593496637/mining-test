import React from 'react';
import { SummaryData } from '../types';

interface Props {
  data: SummaryData;
  variant?: 'metal' | 'salt';
}

const SummaryCard: React.FC<Props> = ({ data, variant = 'metal' }) => {
  return (
    <div className={`card summary-card ${variant}`}>
      <div className="summary-header">
        <div className="icon-wrapper">
          <div className="icon-dot"></div>
          <div className="icon-pulse"></div>
        </div>
        <span className="summary-name">{data.name}</span>
        {data.subName && (
          <span className="summary-badge max-w-[80px] md:max-w-none truncate">{data.subName}</span>
        )}
      </div>

      <div className="summary-value-container">
        <div className="value-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className={`summary-value ${data.value.length > 8 ? 'long-value' : ''}`} title={data.value}>
          {data.value}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;