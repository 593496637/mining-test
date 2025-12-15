import React from 'react';
import { ResourceData } from '../types';

interface Props {
  data: ResourceData;
}

const ResourceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] border border-slate-200/80 flex flex-col h-full hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden group relative">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

      {/* Header - Increased font size and contrast */}
      <div className="bg-gradient-to-r from-slate-50 via-blue-50/30 to-white p-3 md:p-4 border-b border-slate-100 relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-blue-300"></div>
        <h3 className="font-bold text-slate-900 text-base md:text-xl truncate tracking-tight leading-tight group-hover:text-blue-900 transition-colors" title={data.title}>
          {data.title}
        </h3>
      </div>
      
      <div className="p-3 md:p-5 flex-1 flex flex-col gap-3 md:gap-5 relative z-10">
        {/* Main Stats Area - More distinct card look */}
        <div className="flex flex-col gap-2">
          {data.mainStats.map((stat, idx) => (
            <div key={idx} className="flex flex-row justify-between items-center bg-gradient-to-r from-blue-50/70 to-indigo-50/50 rounded-lg px-3 py-2 border border-blue-100/60 hover:border-blue-200 hover:shadow-sm transition-all group/stat">
              <span className="text-slate-600 text-xs md:text-sm font-semibold group-hover/stat:text-blue-700 transition-colors">{stat.label}</span>
              <span className="font-bold text-slate-800 text-sm md:text-base group-hover/stat:text-blue-900 transition-colors">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Table Area - Larger text and better header contrast */}
        <div className="overflow-hidden rounded-xl border border-slate-200/80 flex-1 shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-slate-100 to-blue-50/50 border-b border-slate-200">
                <th className="px-2 md:px-3 py-2.5 text-left font-bold text-slate-700 whitespace-nowrap">元素</th>
                <th className="px-2 md:px-3 py-2.5 text-left font-bold text-slate-700 whitespace-nowrap">品位</th>
                <th className="px-2 md:px-3 py-2.5 text-right font-bold text-slate-700 whitespace-nowrap">金属量</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {data.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-transparent transition-all group/row">
                  <td className="px-2 md:px-3 py-2.5 font-bold text-slate-800 group-hover/row:text-blue-900">{row.element}</td>
                  <td className="px-2 md:px-3 py-2.5 text-slate-600 font-medium group-hover/row:text-slate-700">{row.grade}</td>
                  <td className="px-2 md:px-3 py-2.5 text-slate-600 text-right font-mono font-semibold group-hover/row:text-slate-800">{row.amount}</td>
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