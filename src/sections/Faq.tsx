import { useState } from "react";
import { faqs } from "../data/faqs";
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28" id="Faq">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-zinc-600">
            Everything you need to know about Neurix.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-zinc-900">
                  {faq.question}
                </span>

                <FiChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-zinc-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
