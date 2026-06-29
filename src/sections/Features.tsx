import { features } from "../data/features";

const Features = () => {
  return (
    <section className="bg-transparent py-28" id="Features">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            Everything you need to work with documents
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Neurix helps you upload, search, and chat with your documents using
            AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                  {feature.title}
                </h3>

                <p className="text-zinc-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
