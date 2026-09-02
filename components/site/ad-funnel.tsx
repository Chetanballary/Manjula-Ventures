'use client';

import { motion } from 'framer-motion';
import { Briefcase, Palette, Users, TrendingUp, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { SectionHeading, GlowBlob } from './shared';

interface FunnelStage {
  icon: ReactNode;
  label: string;
  description: string;
  width: string;
  gradient: string;
}

const stages: FunnelStage[] = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    label: 'Business Goal',
    description: 'Define what success looks like',
    width: 'w-full',
    gradient: 'from-sky-500 to-teal-500',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    label: 'Creative',
    description: 'Design scroll-stopping visuals',
    width: 'w-[85%]',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    icon: <Users className="h-6 w-6" />,
    label: 'Target Audience',
    description: 'Reach the right people precisely',
    width: 'w-[70%]',
    gradient: 'from-cyan-600 to-indigo-500',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    label: 'High Performing Ad',
    description: 'Convert attention into results',
    width: 'w-[55%]',
    gradient: 'from-indigo-500 to-violet-600',
  },
];

export function AdFunnel() {
  return (
    <section id="funnel" className="relative overflow-hidden py-20 sm:py-28">
      <GlowBlob className="left-[20%] top-[20%]" color="accent" size={400} />
      <GlowBlob className="right-[20%] bottom-[20%]" color="primary" size={350} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Ad Strategy"
          title={
            <>
              Turn Attention Into{' '}
              <span className="text-gradient-accent">Opportunity</span>
            </>
          }
          subtitle="Our ad funnel strategy maps every step from your business goal to a high-performing ad campaign that delivers measurable ROI."
        />

        <div className="mt-16 flex flex-col items-center gap-4">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex w-full flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass-card-hover relative ${stage.width} max-w-lg`}
              >
                <div className="glass-card flex items-center gap-4 rounded-2xl p-5 sm:p-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stage.gradient} text-white shadow-lg`}
                  >
                    {stage.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-sky-600">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{stage.label}</h3>
                    </div>
                    <p className="mt-0.5 text-sm text-slate-600">{stage.description}</p>
                  </div>
                </div>
              </motion.div>

              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                >
                  <ArrowRight className="my-2 h-6 w-6 rotate-90 text-sky-500/50" />
                </motion.div>
              )}
            </div>
          ))}

          {/* Result badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-gradient-to-r from-sky-50 to-teal-50 px-6 py-3 text-base font-bold text-slate-900 shadow-sm">
              <TrendingUp className="h-5 w-5 text-sky-600" />
              Measurable Growth & ROI
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
