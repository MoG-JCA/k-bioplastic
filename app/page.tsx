import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SolutionSection } from '@/components/home/SolutionSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { CredibilitySection } from '@/components/home/CredibilitySection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { NewsSection } from '@/components/NewsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductShowcase />
      <CredibilitySection />
      <PartnersSection />
      <NewsSection />
      <CTASection />
    </div>
  );
}
