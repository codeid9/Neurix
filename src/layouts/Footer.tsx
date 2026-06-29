import { RiSparklingFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="inset-0 border-t border-zinc-200 py-16 backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <RiSparklingFill className="text-2xl text-violet-600" />

              <span className="text-xl font-bold">Neurix</span>
            </div>

            <p className="mt-4 text-zinc-600">
              AI-powered document intelligence for modern teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold">Product</h3>

            <ul className="mt-4 space-y-3 text-zinc-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Dashboard</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold">Resources</h3>

            <ul className="mt-4 space-y-3 text-zinc-600">
              <li>Blog</li>
              <li>Documentation</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-4 space-y-3 text-zinc-600">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-zinc-500">
          © 2026 Neurix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
