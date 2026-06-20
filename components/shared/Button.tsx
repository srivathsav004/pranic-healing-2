'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-colors focus:ring-2 focus:ring-offset-2 outline-none cursor-pointer';
  
  const variants = {
    primary: 'bg-[#1E1B4B] text-[#FAF8F3] hover:bg-[#2e2b69] focus:ring-[#1E1B4B]',
    secondary: 'border border-[#1E1B4B]/20 text-[#1E1B4B] bg-transparent hover:bg-[#1E1B4B]/5 focus:ring-[#1E1B4B]',
    accent: 'bg-[#0F766E] text-[#FAF8F3] hover:bg-[#0d635c] focus:ring-[#0F766E]',
    gold: 'bg-[#D4AF37] text-[#1E1B4B] hover:bg-[#c29e2e] focus:ring-[#D4AF37]',
    ghost: 'text-[#1E1B4B]/80 hover:text-[#1E1B4B] hover:bg-[#1E1B4B]/5 focus:ring-[#1E1B4B]/40',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-sm',
    md: 'text-sm px-5 py-2.5 rounded-sm leading-6 tracking-wide',
    lg: 'text-base px-8 py-3.5 rounded-sm tracking-wide',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
