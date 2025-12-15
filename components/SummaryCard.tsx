import React from 'react';
import { SummaryData } from '../types';

interface Props {
  data: SummaryData;
  variant?: 'metal' | 'salt';
}

const SummaryCard: React.FC<Props> = ({ data, variant = 'metal' }) => {
  const isMetal = variant === 'metal';
  
  // Define colors based on variant
  const dotColor = isMetal ? 'bg-indigo-500' : 'bg-teal-500';
  const badgeBg = isMetal ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-teal-50 text-teal-700 border-teal-100';
  const hoverBorder = isMetal ? 'group-hover:border-indigo-200' : 'group-hover:border-teal-200';
  const hoverShadow = isMetal ? 'group-hover:shadow-indigo-50' : 'group-hover:shadow-teal-50';

  return (
    <div className={`
      group relative p-4 rounded-2xl border bg-white border-slate-100 
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${hoverBorder} ${hoverShadow}
      flex flex-col justify-between h-auto min-h-[6.5rem] overflow-hidden
    `}>
      <div className="flex justify-between items-start mb-3 relative z-10">
         <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${dotColor} shadow-sm`} />
            <span className="text-slate-500 text-sm font-semibold">{data.name}</span>
         </div>
         {data.subName && (
           <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${badgeBg}`}>
             {data.subName}
           </span>
         )}
      </div>
      
      <div className={`font-extrabold text-slate-800 text-xl md:text-2xl tracking-tight leading-none relative z-10 ${data.value.length > 8 ? 'text-lg md:text-xl' : ''}`}>
        {data.value}
      </div>
      
      {/* Decorative gradient blob on hover for subtle effect */}
      <div className={`absolute -right-4 -bottom-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl ${isMetal ? 'bg-indigo-500' : 'bg-teal-500'} pointer-events-none`} />
    </div>
  );
};

export default SummaryCard;