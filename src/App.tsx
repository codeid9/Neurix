import Navbar from "./layouts/Navbar";
import Dashboard from "./sections/Dashboard";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <div className="bg-grid fixed inset-0 top-0 left-0 h-full w-full"></div>
      <Navbar />
      <main className="relative z-10 px-2 sm:px-10">
        <Hero />
        <Features />
        <Dashboard />
        <HowItWorks />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
