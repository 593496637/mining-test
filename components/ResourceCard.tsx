import React from 'react';
import { ResourceData } from '../types';

interface Props {
  data: ResourceData;
}

const ResourceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="card resource-card">
      <div className="card-shine"></div>
      
      {/* Header */}
      <div className="resource-header">
        <h3 title={data.title}>{data.title}</h3>
      </div>
      
      <div className="resource-body">
        {/* Main Stats */}
        <div className="stats-container">
          {data.mainStats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <div className="stat-bg"></div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="resource-table">
            <thead>
              <tr>
                <th className="th-element">元素</th>
                <th className="th-grade">品位</th>
                <th className="th-amount">金属量</th>
              </tr>
            </thead>
            <tbody>
              {data.table.map((row, idx) => (
                <tr key={idx}>
                  <td className="td-element">
                    <span className="element-marker"></span>
                    {row.element}
                  </td>
                  <td className="td-grade">{row.grade}</td>
                  <td className="td-amount">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;