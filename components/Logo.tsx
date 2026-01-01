
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="#E83E00">
        {/* Recreating the dotted mandala style logo with brand color #E83E00 */}
        {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <React.Fragment key={i}>
              {/* Outer ring */}
              <circle cx={50 + 42 * Math.cos(rad)} cy={50 + 42 * Math.sin(rad)} r={i % 2 === 0 ? 4 : 2.5} />
              {/* Middle ring */}
              <circle cx={50 + 28 * Math.cos(rad + 0.2)} cy={50 + 28 * Math.sin(rad + 0.2)} r={i % 3 === 0 ? 3 : 1.5} />
              {/* Inner ring */}
              <circle cx={50 + 15 * Math.cos(rad - 0.1)} cy={50 + 15 * Math.sin(rad - 0.1)} r={i % 4 === 0 ? 2 : 1} />
            </React.Fragment>
          );
        })}
      </svg>
      <span className="text-[20px] md:text-[24px] font-black text-[#E83E00] tracking-[-0.05em] leading-none uppercase">
        PETROLCHEM
      </span>
    </div>
  );
};

export default Logo;
