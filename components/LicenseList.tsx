import React from 'react';
import { LicenseSection } from '../types';

interface Props {
  data: LicenseSection;
}

const LicenseList: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 rounded-2xl shadow-lg border border-slate-200/80 p-5 md:p-6 h-full hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/60">
        <h3 className="text-slate-800 font-bold text-base md:text-xl flex items-center gap-2 group-hover:text-amber-900 transition-colors">
          <div className="w-1.5 h-6 bg-gradient-to-b from-amber-500 to-orange-400 rounded-full group-hover:scale-110 transition-transform"></div>
          {data.title}
        </h3>
        <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
          {data.count} 张
        </span>
      </div>
      
      {/* Removed max-h and overflow-y-auto to allow full expansion */}
      <div className="space-y-3">
        {data.items.map((item, idx) => (
          <div key={idx} className="group/item relative p-4 rounded-xl border border-slate-200/80 bg-white hover:border-amber-300 hover:bg-gradient-to-r hover:from-amber-50/40 hover:to-orange-50/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>

            <div className="font-bold text-slate-800 text-sm mb-3 group-hover/item:text-amber-900 transition-colors pl-1">
                {item.company}
            </div>

            <div className="flex flex-col gap-2 mb-3">
                 <div className="flex items-start gap-2.5 text-xs text-slate-600 group-hover/item:text-slate-700">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="leading-relaxed">{item.detail1}</span>
                 </div>
                 {item.detail2 && (
                    <div className="flex items-start gap-2.5 text-xs text-slate-600 group-hover/item:text-slate-700">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="leading-relaxed">{item.detail2}</span>
                    </div>
                 )}
            </div>

            <div className="text-[10px] md:text-xs text-slate-500 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 group-hover/item:text-amber-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{item.validity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseList;