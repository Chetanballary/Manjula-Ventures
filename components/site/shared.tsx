'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowBlobProps {
  className?: string;
  color?: 'primary' | 'accent' | 'indigo';
  size?: number;
}

export function GlowBlob({ className, color = 'primary', size = 400 }: GlowBlobProps) {
  const colors = {
    primary: 'rgba(14, 165, 233, 0.12)',
    accent: 'rgba(244, 63, 94, 0.08)',
    indigo: 'rgba(99, 102, 241, 0.08)',
  };

  return (
    <div
      className={cn('absolute pointer-events-none filter blur-3xl rounded-full', className)}
      style={{
        width: size,
        height: size,
        background: colors[color],
      }}
    />
  );
}

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-700 uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
