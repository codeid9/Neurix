const Cta = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 to-cyan-500 p-12 text-center text-white shadow-2xl md:p-20">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            🚀 Get Started Today
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Ready to chat with your documents?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Upload your files, ask questions, and get intelligent answers
            powered by AI.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-violet-600 transition hover:scale-105">
              Start Free
            </button>

            <button className="rounded-xl border border-white/30 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
