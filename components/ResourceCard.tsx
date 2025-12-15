import React from 'react';
import { ResourceData } from '../types';

interface Props {
  data: ResourceData;
}

const ResourceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full hover:shadow-lg hover:border-blue-100 transition-all duration-300 overflow-hidden group">
      {/* Header */}
      <div className="bg-slate-50/50 p-2 md:p-4 border-b border-slate-100 group-hover:bg-blue-50/30 transition-colors">
        <h3 className="font-bold text-slate-800 text-sm md:text-lg truncate tracking-tight" title={data.title}>
          {data.title}
        </h3>
      </div>
      
      <div className="p-2 md:p-4 flex-1 flex flex-col gap-2 md:gap-4">
        {/* Main Stats Area - Clean list style */}
        <div className="space-y-1.5">
          {data.mainStats.map((stat, idx) => (
            <div key={idx} className="flex flex-row justify-between items-center text-xs md:text-sm whitespace-nowrap">
              <span className="text-slate-500 mr-1 scale-90 origin-left md:scale-100">{stat.label}</span>
              <span className="font-bold text-slate-700 bg-slate-50 px-1.5 py-0.5 rounded text-xs md:text-sm">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Table Area - Minimalist */}
        <div className="overflow-hidden rounded-lg border border-slate-100 flex-1">
          <table className="min-w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-2 py-2 text-left font-semibold text-slate-400 text-[10px] md:text-xs uppercase tracking-wider">元素</th>
                <th className="px-2 py-2 text-left font-semibold text-slate-400 text-[10px] md:text-xs uppercase tracking-wider">品位</th>
                <th className="px-2 py-2 text-right font-semibold text-slate-400 text-[10px] md:text-xs uppercase tracking-wider">金属量</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-2 py-1.5 font-medium text-slate-700">{row.element}</td>
                  <td className="px-2 py-1.5 text-slate-500">{row.grade}</td>
                  <td className="px-2 py-1.5 text-slate-500 text-right font-mono">{row.amount}</td>
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