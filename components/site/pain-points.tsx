'use client';

import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { SectionHeading, GlowBlob } from './shared';

const painPoints = [
  'Inconsistent posting schedules',
  'No time to create quality content',
  'Unprofessional-looking designs',
  'Difficulty creating engaging reels',
  'Inactive pages & no consistent digital identity',
];

export function PainPoints() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <GlowBlob className="right-[10%] top-[20%]" color="accent" size={350} />
      <div className="bg-dots absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Problem"
          title={
            <>
              Your Business is Great.{' '}
              <span className="text-gradient-accent">But is Your Social Media Showing It?</span>
            </>
          }
          subtitle="Most businesses struggle to maintain a consistent, professional online presence. Here's what holds them back:"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group rounded-2xl p-6 transition-all hover:border-rose-300 hover:shadow-[0_8px_30px_rgba(244,63,94,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 transition-colors group-hover:bg-rose-100">
                  <XCircle className="h-6 w-6 text-rose-500" />
                </div>
                <div className="pt-1">
                  <p className="text-base font-semibold text-slate-800">{point}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card to fill the grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card flex flex-col items-center justify-center rounded-2xl border-sky-200 bg-gradient-to-br from-sky-50 to-teal-50 p-6 text-center"
          >
            <p className="text-lg font-bold text-slate-900">Sound familiar?</p>
            <p className="mt-2 text-sm text-slate-600">
              We fix all of this — and more.
            </p>
            <a
              href="#services"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 hover:underline"
            >
              See how we help →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
