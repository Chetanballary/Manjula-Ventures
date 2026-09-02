'use client';

import { Navbar } from '@/components/site/navbar';
import { Hero } from '@/components/site/hero';
import { PainPoints } from '@/components/site/pain-points';
import { Services } from '@/components/site/services';
import { Process } from '@/components/site/process';
import { AdFunnel } from '@/components/site/ad-funnel';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { ContactFooter } from '@/components/site/contact-footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <AdFunnel />
      <WhyChooseUs />
      <ContactFooter />
    </main>
  );
}
