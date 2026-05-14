import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesOverview from '@/components/ServicesOverview';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <ServicesOverview />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
