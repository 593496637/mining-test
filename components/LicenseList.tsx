import React from 'react';
import { LicenseSection } from '../types';

interface Props {
  data: LicenseSection;
}

const LicenseList: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 h-full">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <h3 className="text-slate-800 font-bold text-base md:text-lg flex items-center gap-2">
          {data.title}
        </h3>
        <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded-full">
          {data.count} 张
        </span>
      </div>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {data.items.map((item, idx) => (
          <div key={idx} className="group p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
            <div className="font-semibold text-slate-800 text-sm mb-2 group-hover:text-blue-700 transition-colors">
                {item.company}
            </div>
            
            <div className="flex flex-col gap-1 mb-2">
                 <div className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 flex-shrink-0"></span>
                    <span>{item.detail1}</span>
                 </div>
                 {item.detail2 && (
                    <div className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 flex-shrink-0"></span>
                        <span>{item.detail2}</span>
                    </div>
                 )}
            </div>

            <div className="text-[10px] md:text-xs text-slate-400 pt-2 border-t border-slate-50 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>
              {item.validity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseList;