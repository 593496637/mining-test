import React from 'react';
import { SummaryData } from '../types';

interface Props {
  data: SummaryData;
  variant?: 'metal' | 'salt';
}

const SummaryCard: React.FC<Props> = ({ data, variant = 'metal' }) => {
  return (
    <div className={`card summary-card ${variant}`}>
      {/* Decorative Background */}
      <div className="summary-bg-decoration"></div>

      <div className="summary-header">
        <div className="icon-wrapper">
          <div className="icon-dot"></div>
        </div>
        <span className="summary-name">{data.name}</span>
        {data.subName && (
          <span className="summary-badge">{data.subName}</span>
        )}
      </div>

      {/* Main Value */}
      <div className="summary-value-container">
        <div className="value-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className={`summary-value ${data.value.length > 8 ? 'long-value' : ''}`} title={data.value}>
          {data.value}
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="summary-pattern">
        <div className="pattern-line"></div>
        <div className="pattern-line"></div>
        <div className="pattern-line"></div>
      </div>
    </div>
  );
};

export default SummaryCard;