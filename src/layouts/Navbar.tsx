import { BrainCircuitIcon } from "lucide-react";
import Button from "../components/ui/Button";

function Navbar() {
  const navLinks = ["Features", "Dashboard", "Pricing", "Testimonials"];
  return (
    <div className="flex items-center justify-between border-b border-white/30 py-4">
      <div className="flex items-center">
        <BrainCircuitIcon size={32} className="" />
        <h1 className="bg-linear-to-tr from-cyan-400 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
          Neurix
        </h1>
      </div>
      <ul className="flex gap-2 text-sm">
        {navLinks.map((link) => (
          <li>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Button>Get Started</Button>
        <Button variant="secondary">Login</Button>
      </div>
    </div>
  );
}

export default Navbar;
