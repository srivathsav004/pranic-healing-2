import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  showGoldDivider?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  showGoldDivider = false,
  className,
  ...props
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  };

  return (
    <div
      className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignmentStyles[align], className)}
      {...props}
    >
      {subtitle && (
        <span className="text-xs uppercase font-semibold font-mono tracking-widest text-[#0F766E] mb-2 sm:mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1B4B] tracking-tight leading-tight">
        {title}
      </h2>
      
      {showGoldDivider && (
        <div className="w-16 h-0.5 bg-[#D4AF37] mt-4 mb-2" />
      )}
      
      {description && (
        <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
