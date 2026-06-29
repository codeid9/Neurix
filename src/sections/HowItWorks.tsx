import { steps } from "../data/steps";

const HowItWorks = () => {
  return (
    <section className="relative py-28">
      <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            Simple workflow. Powerful AI.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Upload your documents and let Neurix transform them into intelligent
            conversations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 hover:border-violet-300 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-zinc-100">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                  {step.title}
                </h3>

                <p className="text-zinc-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
