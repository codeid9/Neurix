import { pricingPlans } from "../data/pricing";

const Pricing = () => {
  return (
    <section className="py-28" id="Pricing">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            Simple pricing for everyone
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Choose the plan that fits your workflow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular ? "border-violet-500 shadow-lg" : "border-zinc-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-6 right-6 rounded-full bg-violet-600 px-3 py-1 text-sm text-white">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <div className="mt-4 text-5xl font-bold">
                {plan.price}
                <span className="text-lg text-zinc-500">/month</span>
              </div>

              <p className="mt-4 text-zinc-600">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-xl bg-violet-600 py-3 text-white transition hover:bg-violet-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
