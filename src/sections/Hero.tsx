import Button from "../components/ui/Button";
function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col py-8 md:flex-row">
      <div className="flex-1 pt-8 sm:text-start md:flex-8">
        <span className="gradient mb-8 inline-block rounded-4xl px-4 py-3 text-white shadow-xl shadow-black/20">
          ✨ Powered by RAG Technology
        </span>
        <h1 className="mb-4 text-4xl font-extrabold text-shadow-black text-shadow-lg md:text-5xl lg:text-6xl">
          Turn your documents into intelligent conversations.
        </h1>
        <p className="py-3">
          Upload PDFs, ask questions, and get instant AI-powered answers using
          semantic search.
        </p>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Button>Get Started Free</Button>
          <Button variant="secondary">Watch Demo</Button>
        </div>
      </div>
      <div className="min-h-72 w-full flex-4 bg-fuchsia-700"></div>
    </div>
  );
}

export default Hero;
