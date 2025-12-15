import React from 'react';
import { SummaryData } from '../types';

interface Props {
  data: SummaryData;
  variant?: 'metal' | 'salt';
}

const SummaryCard: React.FC<Props> = ({ data, variant = 'metal' }) => {
  const isMetal = variant === 'metal';
  
  return (
    <div className={`
      relative p-3 md:p-5 rounded-xl border flex flex-col justify-between h-auto min-h-[5rem] md:h-28 transition-all duration-300 hover:-translate-y-1 hover:shadow-md
      bg-white border-slate-100 shadow-sm
    `}>
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl ${isMetal ? 'bg-gradient-to-r from-indigo-500 to-blue-400' : 'bg-gradient-to-r from-teal-400 to-emerald-500'}`} />
      
      <div className="flex flex-col mt-1">
        <div className="flex justify-between items-start">
            <span className="text-slate-500 text-xs md:text-sm font-medium">{data.name}</span>
            {data.subName && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isMetal ? 'bg-indigo-50 text-indigo-600' : 'bg-teal-50 text-teal-600'}`}>
                {data.subName}
            </span>
            )}
        </div>
      </div>
      
      <div className="mt-2">
        <div className={`font-bold text-slate-800 text-lg md:text-2xl leading-tight tracking-tight break-words ${data.value.length > 8 ? 'text-base md:text-xl' : ''}`}>
          {data.value}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;