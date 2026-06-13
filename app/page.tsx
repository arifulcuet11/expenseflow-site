import dynamic from 'next/dynamic';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

// Below-fold components — lazy-loaded to reduce initial JS bundle and TBT
const UseCases    = dynamic(() => import('@/components/UseCases').then(m => ({ default: m.UseCases })));
const SpotlightAI = dynamic(() => import('@/components/SpotlightAI').then(m => ({ default: m.SpotlightAI })));
const HowSteps    = dynamic(() => import('@/components/HowSteps').then(m => ({ default: m.HowSteps })));
const GetStarted  = dynamic(() => import('@/components/GetStarted').then(m => ({ default: m.GetStarted })));
const Platforms   = dynamic(() => import('@/components/Platforms').then(m => ({ default: m.Platforms })));
const Pricing     = dynamic(() => import('@/components/Pricing').then(m => ({ default: m.Pricing })));
const TrialBanner = dynamic(() => import('@/components/TrialBanner').then(m => ({ default: m.TrialBanner })));
const FAQ         = dynamic(() => import('@/components/FAQ').then(m => ({ default: m.FAQ })));

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="atmos" />
      <div className="grid-noise" />
      <div className="wrap">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Features />
          <UseCases />
          <SpotlightAI />
          <HowSteps />
          <GetStarted />
          <Platforms />
          <Pricing />
          <TrialBanner />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
