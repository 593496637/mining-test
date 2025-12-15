import React from 'react';
import { SummaryData } from '../types';

interface Props {
  data: SummaryData;
  variant?: 'metal' | 'salt';
}

const SummaryCard: React.FC<Props> = ({ data, variant = 'metal' }) => {
  const isMetal = variant === 'metal';

  // Define colors based on variant - subtle, elegant colors with slight tint
  const dotColor = isMetal ? 'bg-gradient-to-br from-blue-400/70 to-indigo-400/70' : 'bg-gradient-to-br from-teal-400/70 to-cyan-400/70';
  const badgeBg = isMetal ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/80 text-indigo-600/80 border-indigo-200/50' : 'bg-gradient-to-r from-teal-50/80 to-cyan-50/80 text-teal-600/80 border-teal-200/50';
  const hoverBorder = isMetal ? 'group-hover:border-indigo-200/60' : 'group-hover:border-teal-200/60';
  const hoverShadow = isMetal ? 'group-hover:shadow-2xl group-hover:shadow-indigo-100/30' : 'group-hover:shadow-2xl group-hover:shadow-teal-100/30';
  const bgGradient = isMetal ? 'bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/25' : 'bg-gradient-to-br from-white via-teal-50/20 to-cyan-50/25';
  const borderColor = isMetal ? 'border-indigo-100/40' : 'border-teal-100/40';
  const textHoverColor = isMetal ? 'group-hover:text-indigo-800' : 'group-hover:text-teal-800';
  const iconBg = isMetal ? 'bg-gradient-to-br from-blue-50/90 to-indigo-100/90' : 'bg-gradient-to-br from-teal-50/90 to-cyan-100/90';
  const iconColor = isMetal ? 'text-indigo-500/80' : 'text-teal-500/80';
  const iconBorder = isMetal ? 'border-indigo-100/60' : 'border-teal-100/60';
  const valueGradient = isMetal ? 'from-indigo-800/90 via-slate-700 to-slate-800' : 'from-teal-800/90 via-slate-700 to-slate-800';

  return (
    <div className={`
      group relative p-6 rounded-2xl border-2 ${bgGradient} ${borderColor}
      shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)]
      transition-all duration-300 hover:-translate-y-2 ${hoverBorder} ${hoverShadow}
      flex flex-col justify-between h-auto min-h-[8rem] overflow-hidden
      backdrop-blur-sm
    `}>
      {/* Corner decoration - top right */}
      <div className={`absolute -top-2 -right-2 w-20 h-20 rounded-full ${isMetal ? 'bg-gradient-to-br from-indigo-300/15 to-blue-300/15' : 'bg-gradient-to-br from-teal-300/15 to-cyan-300/15'} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

      {/* Corner decoration - bottom left */}
      <div className={`absolute -bottom-2 -left-2 w-16 h-16 rounded-full ${isMetal ? 'bg-gradient-to-tr from-blue-300/15 to-indigo-300/15' : 'bg-gradient-to-tr from-cyan-300/15 to-teal-300/15'} blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

      {/* Sparkle decorations */}
      <div className={`absolute top-3 right-3 w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg ${isMetal ? 'bg-gradient-to-br from-indigo-200/60 to-blue-300/60' : 'bg-gradient-to-br from-teal-200/60 to-cyan-300/60'} pointer-events-none`} />

      {/* Geometric pattern overlay - increased opacity */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${isMetal ? 'metal' : 'salt'}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${isMetal ? 'metal' : 'salt'})`} />
        </svg>
      </div>

      {/* Inner glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${isMetal ? 'shadow-[inset_0_0_20px_rgba(99,102,241,0.02)]' : 'shadow-[inset_0_0_20px_rgba(20,184,166,0.02)]'} pointer-events-none`} />

      <div className="flex justify-between items-start mb-4 relative z-10">
         <div className="flex items-center gap-2">
            {/* Icon decoration */}
            <div className="relative flex-shrink-0">
              <div className={`w-3 h-3 rounded-full ${dotColor} shadow-lg group-hover:scale-125 transition-transform`} />
              <div className={`absolute inset-0 w-3 h-3 rounded-full ${dotColor} animate-ping opacity-20`} />
            </div>
            <span className={`text-slate-700 text-xs md:text-sm font-extrabold transition-colors whitespace-nowrap ${textHoverColor}`}>{data.name}</span>
         </div>
         {data.subName && (
           <span className={`text-[11px] px-3 py-1.5 rounded-full font-extrabold border-2 ${badgeBg} shadow-md group-hover:shadow-lg transition-all relative overflow-hidden`}>
             <span className={`absolute inset-0 ${isMetal ? 'bg-gradient-to-r from-indigo-50/70 to-blue-50/70' : 'bg-gradient-to-r from-teal-50/70 to-cyan-50/70'} opacity-0 group-hover:opacity-100 transition-opacity`} />
             <span className="relative z-10">{data.subName}</span>
           </span>
         )}
      </div>

      {/* Value section with icon */}
      <div className="relative z-10 flex items-center gap-2">
        {/* Decorative icon with glow */}
        <div className={`relative w-8 h-8 md:w-10 md:h-10 rounded-xl ${iconBg} shadow-md ${isMetal ? 'shadow-indigo-100/40' : 'shadow-teal-100/40'} flex items-center justify-center group-hover:scale-110 transition-transform border ${iconBorder} flex-shrink-0`}>
          <svg className={`w-4 h-4 md:w-5 md:h-5 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          {/* Icon glow */}
          <div className={`absolute inset-0 rounded-xl ${isMetal ? 'bg-indigo-300/80' : 'bg-teal-300/80'} opacity-0 group-hover:opacity-20 blur-md transition-opacity`} />
        </div>

        <div className={`font-extrabold bg-gradient-to-r ${valueGradient} bg-clip-text text-transparent text-lg md:text-2xl tracking-tight leading-none drop-shadow-sm whitespace-nowrap ${data.value.length > 8 ? 'text-base md:text-xl' : ''}`}>
          {data.value}
        </div>
      </div>

      {/* Decorative gradient blob on hover for subtle effect */}
      <div className={`absolute -right-6 -bottom-6 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-3xl ${isMetal ? 'bg-gradient-to-br from-indigo-200/80 to-blue-300/80' : 'bg-gradient-to-br from-teal-200/80 to-cyan-300/80'} pointer-events-none`} />

      {/* Shine effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${isMetal ? 'bg-gradient-to-tr from-transparent via-indigo-50/30 to-transparent' : 'bg-gradient-to-tr from-transparent via-teal-50/30 to-transparent'}`} style={{transform: 'translateX(-100%)', animation: 'shine 2s infinite'}} />
    </div>
  );
};

export default SummaryCard;