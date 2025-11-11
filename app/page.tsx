import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import FuturesFoundation from '@/components/FuturesFoundation';
import Platform from '@/components/Platform';
import Mentor from '@/components/Mentor';
import Offer from '@/components/Offer';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Problem />
      <FuturesFoundation />
      <Platform />
      <Mentor />
      <Offer />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
