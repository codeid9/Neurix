import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-zinc-50 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            Loved by teams worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            See how professionals use Neurix to work smarter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-yellow-500">⭐⭐⭐⭐⭐</div>

              <p className="mb-6 text-zinc-600">"{item.review}"</p>

              <div>
                <h3 className="font-semibold text-zinc-900">{item.name}</h3>

                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
