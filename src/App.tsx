import Navbar from "./layouts/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="relative">
      <div className="bg-grid absolute top-0 left-0 h-full w-full"></div>
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
