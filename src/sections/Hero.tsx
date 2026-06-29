import Button from "../components/ui/Button";
function Hero() {
  return (
    <div
      className="flex min-h-[calc(100vh-4rem)] flex-col gap-8 pt-20 lg:flex-row"
      id="Hero"
    >
      <div className="flex-1 pt-8 lg:text-start">
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
        <div className="mb-8 flex flex-col gap-4 py-8 sm:flex-row sm:justify-center">
          <Button>Get Started Free</Button>
          <Button variant="secondary">Watch Demo</Button>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-lg flex-1">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-violet-500/20 blur-3xl" />

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <p className="text-sm text-zinc-500">AI Workspace</p>

              <h3 className="font-semibold text-zinc-900">Neurix Assistant</h3>
            </div>

            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* Upload Card */}
          <div className="mb-4 rounded-2xl border border-violet-100 bg-violet-50 p-4">
            <p className="text-sm text-zinc-500">Uploaded Document</p>

            <p className="mt-1 font-medium">📄 Research Paper.pdf</p>
          </div>

          {/* User Message */}
          <div className="mb-4 flex justify-end">
            <div className="max-w-xs rounded-2xl bg-violet-600 px-4 py-3 text-sm text-white">
              What is Retrieval Augmented Generation?
            </div>
          </div>

          {/* AI Message */}
          <div className="rounded-2xl bg-zinc-100 p-4">
            <p className="text-sm text-zinc-700">
              RAG combines information retrieval with large language models to
              generate more accurate responses.
            </p>

            <div className="mt-3 text-xs text-violet-600">
              Source: research.pdf
            </div>
          </div>

          {/* Input */}
          <div className="mt-6 flex items-center gap-2 rounded-2xl border border-zinc-200 p-3">
            <input
              placeholder="Ask anything..."
              className="flex-1 text-sm outline-none"
            />

            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
