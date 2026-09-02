'use client';

import { motion } from 'framer-motion';
import { Palette, Zap, Target, Rocket } from 'lucide-react';
import type { ReactNode } from 'react';
import { SectionHeading, GlowBlob } from './shared';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Creative',
    description: 'Fresh, engaging visual content that stops the scroll and builds brand recall.',
    gradient: 'from-sky-500 to-teal-500',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Consistent',
    description: 'Active and professional brand presence that your audience can count on.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Business-Focused',
    description: 'Strategy driven by real goals — not vanity metrics. We focus on what grows your bottom line.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'All-In-One Team',
    description: 'Design, reels, ads, and management under one roof. No juggling multiple agencies.',
    gradient: 'from-emerald-400 to-teal-600',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 sm:py-28">
      <GlowBlob className="left-[10%] bottom-[20%]" color="indigo" size={400} />
      <div className="bg-dots absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title={
            <>
              We're Not Just Another{' '}
              <span className="text-gradient-primary">Agency</span>
            </>
          }
          subtitle="We combine creativity with strategy to deliver real business results. Here's what sets us apart."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover group relative overflow-hidden rounded-2xl p-8"
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />

              <div className="relative flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg transition-transform group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
