'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { GlowBlob } from './shared';
import { LogoIcon } from './logo';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <GlowBlob className="left-[-10%] top-[10%]" color="primary" size={500} />
      <GlowBlob className="right-[-5%] top-[30%]" color="accent" size={450} />
      <GlowBlob className="left-[40%] bottom-[-10%]" color="indigo" size={400} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Text content */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 shadow-sm px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur-sm"
            >
              <LogoIcon className="h-4 w-4" mColor="#0F172A" vColor="#7A0C16" />
              <span className="italic text-[#7A0C16] font-semibold">“Helping You to Digitally Grow”</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              YOUR BUSINESS DESERVES TO BE{' '}
              <span className="text-gradient-primary animate-gradient">SEEN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Build a stronger digital presence through creative content, social media
              management, reels, posters, and targeted online advertising.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-7 py-3.5 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-500/30"
              >
                Start Growing Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-sky-400 hover:text-sky-600 hover:shadow-md"
              >
                <Play className="h-4 w-4" />
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 flex items-center gap-8"
            >
              {[
                { value: '50+', label: 'Brands Managed' },
                { value: '500+', label: 'Posts Created' },
                { value: '10x', label: 'Avg. Engagement' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-gradient-primary">{stat.value}</span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-[3rem] bg-gradient-to-br from-sky-300/30 to-rose-300/20 blur-3xl" />

      {/* Phone frame */}
      <div className="relative h-[600px] w-[300px] rounded-[2.5rem] border-[3px] border-slate-200 bg-white p-3 shadow-2xl shadow-sky-500/10">
        {/* Notch */}
        <div className="absolute left-1/2 top-3 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

        {/* Screen */}
        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-50 to-slate-100">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-6 pb-3 text-[10px] text-slate-500">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-sky-500/60" />
              <div className="h-2.5 w-4 rounded-sm bg-slate-300" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 p-1 shadow-sm">
                <LogoIcon className="h-4 w-4" mColor="#FFFFFF" vColor="#E11D48" />
              </div>
              <span className="text-xs font-bold text-slate-800">@manjulaventures</span>
            </div>
            <div className="flex gap-3 text-slate-400">
              <Heart className="h-4 w-4" />
              <MessageCircle className="h-4 w-4" />
            </div>
          </div>

          {/* Feed posts */}
          <div className="flex flex-col gap-3 px-3 pb-4">
            <FeedPost
              gradient="from-sky-500 to-teal-500"
              icon="reel"
              delay={0.5}
            />
            <FeedPost
              gradient="from-rose-500 to-pink-600"
              icon="post"
              delay={0.7}
            />
            <FeedPost
              gradient="from-amber-400 to-orange-500"
              icon="story"
              delay={0.9}
            />
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -left-8 top-24 hidden animate-float sm:block"
      >
        <div className="glass-card rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
              <Heart className="h-4 w-4 text-sky-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">+340%</p>
              <p className="text-[10px] text-slate-500">Engagement</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute -right-6 bottom-28 hidden animate-float-delayed sm:block"
      >
        <div className="glass-card rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100">
              <Share2 className="h-4 w-4 text-rose-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">2.4k</p>
              <p className="text-[10px] text-slate-500">Shares</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeedPost({
  gradient,
  icon,
  delay,
}: {
  gradient: string;
  icon: 'reel' | 'post' | 'story';
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className={`h-5 w-5 rounded-full bg-gradient-to-br ${gradient}`} />
          <span className="text-[10px] font-semibold text-slate-700">@manjulaventures</span>
        </div>
        <span className="text-[8px] text-slate-400">2h</span>
      </div>
      <div className={`relative h-28 bg-gradient-to-br ${gradient}`}>
        {icon === 'reel' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
              <Play className="h-5 w-5 fill-white text-white" />
            </div>
          </div>
        )}
        <div className="absolute bottom-2 left-2 rounded bg-black/30 px-1.5 py-0.5 text-[8px] font-medium text-white backdrop-blur-sm">
          {icon === 'reel' ? 'REEL' : icon === 'post' ? 'POST' : 'STORY'}
        </div>
      </div>
      <div className="flex items-center gap-3 px-3 py-2 text-slate-400">
        <Heart className="h-3.5 w-3.5" />
        <MessageCircle className="h-3.5 w-3.5" />
        <Share2 className="h-3.5 w-3.5" />
        <Bookmark className="ml-auto h-3.5 w-3.5" />
      </div>
    </motion.div>
  );
}
