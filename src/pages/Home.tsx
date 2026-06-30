import Hero from "../sections/Hero";
import Features from "../sections/Features";
import DashboardPreview from "../sections/DashboardPreview";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";
import Cta from "../sections/Cta";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

function Home() {
  return (
    <>
      <div className="bg-grid fixed inset-0 top-0 left-0 h-full w-full"></div>
      <Navbar />
      <main className="relative z-10 px-2 sm:px-10">
        <Hero />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default Home;
