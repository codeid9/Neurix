import { BrainCircuitIcon, MenuIcon, X } from "lucide-react";
import Button from "../components/ui/Button";
import { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navLinks = ["Features", "Dashboard", "Pricing", "Testimonials"];
  return (
    <nav className="sticky top-0 backdrop-blur-md">
      <div className="hidden h-16 items-center justify-between border-b border-(--border) px-8 md:flex">
        <div className="flex items-center">
          <BrainCircuitIcon size={32} className="" />
          <h1 className="bg-linear-to-tr from-cyan-400 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Neurix
          </h1>
        </div>
        <ul className="flex gap-2 text-sm">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Button>Get Started</Button>
          <Button variant="secondary">Login</Button>
        </div>
      </div>

      {/* Navbar for small screen  */}
      <div className="relative z-100 flex h-16 items-center justify-between border-b border-(--border) px-8 md:hidden">
        <div className="flex items-center">
          <BrainCircuitIcon size={32} />
          <h1 className="bg-linear-to-tr from-cyan-400 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Neurix
          </h1>
        </div>
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="cursor-pointer"
        >
          {isNavOpen ? <X /> : <MenuIcon />}
        </div>
      </div>
      {/* menu */}
      <div
        className={`fixed z-100 flex h-[calc(100vh-4rem)] w-full flex-col gap-8 bg-(--background) px-4 py-10 sm:px-20 md:hidden ${isNavOpen ? "" : "left-full"}`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link} className="">
              <a
                href={`#${link}`}
                className="block py-4 font-sans text-xl font-light hover:bg-(--muted)"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <Button btnclasses="py-4">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
