import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Diensten from "@/components/Diensten";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Diensten />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
