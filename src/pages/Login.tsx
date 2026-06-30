import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { FiArrowLeft } from "react-icons/fi";

const Login = () => {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-violet-600 lg:text-white lg:hover:text-white/90"
      >
        <FiArrowLeft />
        Go Back
      </Link>
      {/* Left */}
      <section className="gradient relative hidden items-center justify-center overflow-hidden p-16 text-white lg:flex">
        <div className="max-w-md">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            ✨ Welcome Back
          </span>

          <h1 className="mt-6 text-5xl leading-tight font-bold">
            Continue chatting with your documents.
          </h1>

          <p className="mt-6 text-white/80">
            Access your AI workspace, upload new documents and continue your
            conversations from where you left off.
          </p>
        </div>
      </section>

      {/* Right */}
      <section className="flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-zinc-900">Sign In</h2>

          <p className="mt-2 text-zinc-500">Welcome back to Neurix.</p>

          <form className="mt-10 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 transition outline-none focus:border-violet-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 transition outline-none focus:border-violet-600"
              />
            </div>

            <Button className="w-full">Sign In</Button>

            <p className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-violet-600 hover:underline"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
