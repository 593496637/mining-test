import React from 'react';
import { ResourceData } from '../types';

interface Props {
  data: ResourceData;
}

const ResourceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col h-full hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden group">
      {/* Header - Increased font size and contrast */}
      <div className="bg-gradient-to-r from-slate-50 to-white p-3 md:p-4 border-b border-slate-100 relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-xl rounded-bl-xl"></div>
        <h3 className="font-bold text-slate-900 text-base md:text-xl truncate tracking-tight leading-tight" title={data.title}>
          {data.title}
        </h3>
      </div>
      
      <div className="p-3 md:p-5 flex-1 flex flex-col gap-3 md:gap-5">
        {/* Main Stats Area - More distinct card look */}
        <div className="flex flex-col gap-2">
          {data.mainStats.map((stat, idx) => (
            <div key={idx} className="flex flex-row justify-between items-center bg-blue-50/50 rounded px-2 py-1.5 border border-blue-50/50">
              <span className="text-slate-600 text-xs md:text-sm font-medium">{stat.label}</span>
              <span className="font-bold text-slate-800 text-sm md:text-base">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Table Area - Larger text and better header contrast */}
        <div className="overflow-hidden rounded-lg border border-slate-200 flex-1">
          <table className="min-w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="px-2 md:px-3 py-2 text-left font-bold text-slate-600 whitespace-nowrap">元素</th>
                <th className="px-2 md:px-3 py-2 text-left font-bold text-slate-600 whitespace-nowrap">品位</th>
                <th className="px-2 md:px-3 py-2 text-right font-bold text-slate-600 whitespace-nowrap">金属量</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-2 md:px-3 py-2 font-semibold text-slate-800">{row.element}</td>
                  <td className="px-2 md:px-3 py-2 text-slate-600 font-medium">{row.grade}</td>
                  <td className="px-2 md:px-3 py-2 text-slate-600 text-right font-mono font-medium">{row.amount}</td>
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