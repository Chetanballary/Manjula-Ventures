'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading, GlowBlob } from './shared';

const steps = [
  {
    num: '01',
    title: 'UNDERSTAND',
    description:
      'Learning your business, target audience, and core goals to build a foundation that drives real results.',
  },
  {
    num: '02',
    title: 'PLAN',
    description:
      'Mapping out high-converting content strategies with a clear posting schedule and campaign roadmap.',
  },
  {
    num: '03',
    title: 'CREATE',
    description:
      'Producing posts, reels, posters, and digital creatives — all designed around your brand identity.',
  },
  {
    num: '04',
    title: 'PUBLISH & PROMOTE',
    description:
      'Publishing content across platforms and managing active ad campaigns to reach the right audience.',
  },
  {
    num: '05',
    title: 'MANAGE',
    description:
      'Maintaining presence, analyzing results, and optimizing over time for continuous growth.',
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-28">
      <GlowBlob className="right-[15%] top-[15%]" color="primary" size={400} />
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title={
            <>
              Our 5-Step{' '}
              <span className="text-gradient-primary">Growth Process</span>
            </>
          }
          subtitle="A proven, systematic approach that turns your social media from an afterthought into a growth engine."
        />

        {/* Desktop: horizontal steps */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-slate-200">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-500 to-teal-500"
                initial={{ width: '0%' }}
                whileInView={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex justify-between">
              {steps.map((step, i) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setActiveStep(i)}
                  className="group flex flex-1 flex-col items-center"
                >
                  <div
                    className={cn(
                      'relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300',
                      i <= activeStep
                        ? 'border-sky-500 bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/30'
                        : 'border-slate-200 bg-white text-slate-400'
                    )}
                  >
                    {step.num}
                  </div>
                  <span
                    className={cn(
                      'mt-4 text-xs font-semibold tracking-wide transition-colors',
                      i <= activeStep ? 'text-slate-800' : 'text-slate-400'
                    )}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card mx-auto mt-10 max-w-2xl rounded-2xl p-8 text-center"
            >
              <div className="mb-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
                STEP {steps[activeStep].num}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{steps[activeStep].title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {steps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 flex flex-col gap-6 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex gap-5"
            >
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-16 h-full w-0.5 bg-gradient-to-b from-sky-400/40 to-transparent" />
              )}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 bg-gradient-to-br from-sky-500 to-teal-500 text-sm font-bold text-white shadow-lg shadow-sky-500/25">
                {step.num}
              </div>
              <div className="glass-card flex-1 rounded-2xl p-5">
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
