import CTA from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/howitworks";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CTA />
    </div>
  );
}
