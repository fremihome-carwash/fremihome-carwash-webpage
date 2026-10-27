import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import WorkGallery from "../components/WorkGallery";
import PlansTeaser from "../components/PlansTeaser";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WorkGallery />
        <PlansTeaser />
        <Testimonials audience="negocio" />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
