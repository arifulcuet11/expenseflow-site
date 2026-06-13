import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { UseCases } from '@/components/UseCases';
import { SpotlightAI } from '@/components/SpotlightAI';
import { HowSteps } from '@/components/HowSteps';
import { GetStarted } from '@/components/GetStarted';
import { Platforms } from '@/components/Platforms';
import { Pricing } from '@/components/Pricing';
import { TrialBanner } from '@/components/TrialBanner';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="atmos" />
      <div className="grid-noise" />
      <div className="wrap">
        <Nav />
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
        <Footer />
      </div>
    </>
  );
}
