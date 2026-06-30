import { BrainCircuitIcon, MenuIcon, X } from "lucide-react";
import Button from "../components/ui/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navLinks = [
    {
      label: "Features",
      href: "#Features",
    },
    {
      label: "Preview",
      href: "#Dashboard",
    },
    {
      label: "Testimonials",
      href: "#Testimonials",
    },
    {
      label: "Pricing",
      href: "#Pricing",
    },
    {
      label: "Faq",
      href: "#Faq",
    },
  ];
  return (
    <nav className="sticky top-0 z-100 backdrop-blur-md">
      <div className="hidden h-16 items-center justify-between border-b border-(--border) px-8 md:flex">
        <a className="flex items-center" href="#Hero">
          <BrainCircuitIcon size={32} />
          <h1 className="bg-linear-to-tr from-cyan-400 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Neurix
          </h1>
        </a>
        <ul className="flex gap-2 text-sm">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </div>

      {/* Navbar for small screen  */}
      <div className="relative z-100 flex h-16 items-center justify-between border-b border-(--border) px-8 md:hidden">
        <a className="flex items-center" href="#Hero">
          <BrainCircuitIcon size={32} />
          <h1 className="bg-linear-to-tr from-cyan-400 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Neurix
          </h1>
        </a>
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="cursor-pointer"
        >
          {isNavOpen ? <X /> : <MenuIcon />}
        </div>
      </div>
      {/* menu */}
      <div
        className={`fixed z-100 flex h-[calc(100vh-4rem)] w-full flex-col gap-8 bg-(--background) px-4 py-10 sm:px-20 md:hidden ${isNavOpen ? "" : "left-full hidden"}`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block py-4 font-sans text-xl font-light hover:bg-(--muted)"
                onClick={() => setIsNavOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <Link to="/signup" onClick={() => setIsNavOpen(false)}>
            <Button className="h-full w-full py-4">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
