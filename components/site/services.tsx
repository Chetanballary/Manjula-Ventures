'use client';

import { motion } from 'framer-motion';
import {
  Share2,
  Image,
  Video,
  FileImage,
  Target,
  Rocket,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { SectionHeading, GlowBlob } from './shared';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: <Share2 className="h-7 w-7" />,
    title: 'Social Media Management',
    description:
      'Keep your pages active, consistent, and growing with a strategic posting calendar tailored to your audience.',
    gradient: 'from-sky-500 to-teal-500',
  },
  {
    icon: <Image className="h-7 w-7" />,
    title: 'Creative Posts',
    description:
      'Professional creatives designed around your brand identity — scroll-stopping visuals that convert.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: <Video className="h-7 w-7" />,
    title: 'Reels & Video',
    description:
      'Short-form scroll-stopping videos built for engagement and optimized for every platform.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: <FileImage className="h-7 w-7" />,
    title: 'Poster Design',
    description:
      'Eye-catching visuals for offers, campaigns, and launches that grab attention instantly.',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: 'Social Media Ads',
    description:
      'High-ROI ad campaigns managed on top platforms — Meta, Instagram, Google, and more.',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    icon: <Rocket className="h-7 w-7" />,
    title: 'Digital Brand Promotion',
    description:
      'Complete digital identity setup across all platforms — from bio to banner to branding kit.',
    gradient: 'from-blue-500 to-cyan-600',
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      <GlowBlob className="left-[5%] top-[10%]" color="primary" size={400} />
      <GlowBlob className="right-[5%] bottom-[10%]" color="indigo" size={350} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title={
            <>
              Everything You Need to{' '}
              <span className="text-gradient-primary">Grow Online</span>
            </>
          }
          subtitle="From content creation to ad management — we handle your entire digital presence so you can focus on running your business."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card glass-card-hover group rounded-2xl p-7"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transition-transform group-hover:scale-110`}
              >
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                Included in our growth plans
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
