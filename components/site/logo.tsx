import React from 'react';
import { cn } from '@/lib/utils';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  mColor?: string;
  vColor?: string;
}

export function LogoIcon({
  className = 'h-9 w-9',
  mColor = 'currentColor',
  vColor = '#7A0C16',
  ...props
}: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0 transition-transform duration-300 group-hover:scale-105', className)}
      {...props}
    >
      {/* 'M' geometry (Left part) */}
      <path
        d="M6 10H23V75H6V10Z"
        fill={mColor}
      />
      <path
        d="M23 10L50 56L40 70L15 28V10H23Z"
        fill={mColor}
      />
      <path
        d="M50 56L68 25H53L43 42L50 56Z"
        fill={mColor}
      />

      {/* 'V' geometry (Right bold maroon accent) */}
      <path
        d="M45 42L62 75L94 10H75L58 50L45 42Z"
        fill={vColor}
      />
      <path
        d="M62 75L94 10H76L57 51L47 43L62 75Z"
        fill={vColor}
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'glass';
}

export function Logo({
  className,
  showTagline = false,
  size = 'md',
  variant = 'light',
}: LogoProps) {
  const sizeConfig = {
    sm: {
      icon: 'h-7 w-7',
      nameText: 'text-sm',
      taglineText: 'text-[9px]',
      gap: 'gap-2',
    },
    md: {
      icon: 'h-9 w-9',
      nameText: 'text-base sm:text-lg',
      taglineText: 'text-[10px] sm:text-xs',
      gap: 'gap-2.5',
    },
    lg: {
      icon: 'h-12 w-12',
      nameText: 'text-xl sm:text-2xl',
      taglineText: 'text-xs sm:text-sm',
      gap: 'gap-3.5',
    },
    xl: {
      icon: 'h-16 w-16',
      nameText: 'text-2xl sm:text-3xl',
      taglineText: 'text-sm sm:text-base',
      gap: 'gap-4',
    },
  }[size];

  const mColor = variant === 'dark' ? '#FFFFFF' : '#0F172A';
  const vColor = '#7A0C16';

  return (
    <div className={cn('group flex items-center', sizeConfig.gap, className)}>
      <LogoIcon
        className={sizeConfig.icon}
        mColor={mColor}
        vColor={vColor}
      />
      <div className="flex flex-col">
        <div className="flex flex-col leading-none font-bold tracking-tight">
          <span className={cn('font-black uppercase tracking-wider', sizeConfig.nameText, variant === 'dark' ? 'text-white' : 'text-slate-900')}>
            MANJULA
          </span>
          <span className={cn('font-black uppercase tracking-wider text-[#7A0C16]', sizeConfig.nameText)}>
            VENTURES
          </span>
        </div>
        {showTagline && (
          <span className={cn('mt-1 font-medium tracking-normal text-[#7A0C16] italic', sizeConfig.taglineText)}>
            “Helping You to Digitally Grow”
          </span>
        )}
      </div>
    </div>
  );
}
