'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Instagram, Facebook, Linkedin, Twitter, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { GlowBlob } from './shared';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type FormState = {
  name: string;
  email_or_phone: string;
  business_name: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email_or_phone: '',
  business_name: '',
  message: '',
};

export function ContactFooter() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email_or_phone || !form.business_name || !form.message) {
      setStatus('error');
      setError('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setError('');

    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert([form]);

    if (insertError) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setForm(initialState);
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden pt-20 sm:pt-28">
      <GlowBlob className="left-[20%] top-[10%]" color="primary" size={400} />
      <GlowBlob className="right-[10%] bottom-[30%]" color="accent" size={350} />
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card mx-auto max-w-3xl rounded-3xl p-8 sm:p-10 lg:p-12"
        >
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Ready to <span className="text-gradient-primary">Grow?</span>
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Tell us about your business and we'll get back to you within 24 hours.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-10 text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-sky-600" />
              <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
              <p className="text-sm text-slate-600">
                Thanks for reaching out. We'll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email or Phone
                  </label>
                  <Input
                    name="email_or_phone"
                    value={form.email_or_phone}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Business Name
                </label>
                <Input
                  name="business_name"
                  value={form.business_name}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and what you need..."
                  rows={4}
                  className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-rose-600">{error}</p>
              )}

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="group relative h-12 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-500/30"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-gradient-primary text-xl font-bold">MANJULA VENTURES</span>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 text-sky-600" />
                Gadag, Karnataka, India
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', href: 'https://www.instagram.com/manjulaventures' },
                { icon: <Facebook className="h-5 w-5" />, label: 'Facebook', href: 'https://www.facebook.com/manjulaventures' },
                { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/manjula-ventures' },
                { icon: <Twitter className="h-5 w-5" />, label: 'Twitter', href: 'https://twitter.com/manjulaventures' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-sky-300 hover:text-sky-600 hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Manjula Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
