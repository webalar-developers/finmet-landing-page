import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { LogoBar } from "@/components/sections/logo-bar";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyUs } from "@/components/sections/why-us";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { QuoteBanner } from "@/components/sections/quote-banner";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Pricing />
        <Features />
        <HowItWorks />
        <WhyUs />
        <Stats />
        <Testimonials />
        {/* <QuoteBanner /> */}
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
