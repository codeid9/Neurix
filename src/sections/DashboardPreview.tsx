const DashboardPreview = () => {
  return (
    <section className="py-28" id="Dashboard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-3xl font-bold text-zinc-900 sm:text-4xl">
            See Neurix in Action
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Upload documents, ask questions, and receive intelligent answers
            instantly.
          </p>
        </div>

        {/* Dashboard */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-md transition-all duration-150 hover:shadow-2xl">
          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <div className="border-b border-zinc-200 bg-zinc-50 p-6 lg:border-r lg:border-b-0">
              <h3 className="mb-6 text-lg font-semibold">Documents</h3>

              <div className="space-y-3">
                <div className="cursor-pointer rounded-xl border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md">
                  📄 Research.pdf
                </div>

                <div className="cursor-pointer rounded-xl border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md">
                  📄 Company Policy.pdf
                </div>

                <div className="cursor-pointer rounded-xl border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md">
                  📄 Meeting Notes.pdf
                </div>

                <div className="cursor-pointer rounded-xl border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-md">
                  📄 Product Docs.pdf
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-5 sm:p-6 lg:p-8">
              {/* User Message */}
              <div className="mb-6 flex justify-end">
                <div className="w-fit max-w-[85%] rounded-2xl bg-violet-600 px-4 py-3 text-sm break-words text-white sm:max-w-md sm:px-5 sm:py-4 sm:text-base">
                  What is the refund policy?
                </div>
              </div>

              {/* AI Response */}
              <div className="max-w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:max-w-xl">
                <p className="text-zinc-700">
                  The refund policy allows customers to request a refund within
                  30 days of purchase, provided the service terms are met.
                </p>

                <div className="mt-4 text-sm text-violet-600">
                  Source: Company Policy.pdf
                </div>
              </div>

              {/* Input */}
              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-zinc-200 p-3 sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 outline-none"
                />

                <button className="w-full rounded-xl bg-violet-600 px-5 py-2 text-white transition hover:bg-violet-700 sm:w-auto">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
