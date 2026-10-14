
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const websiteExamples = [
  {
    number: "01",
    category: "Payments & SaaS",
    title: "Business platforms",
    description:
      "Explore how a business platform can present complex services through clear messaging, structured pages, and intuitive user journeys.",
    website: "Stripe",
    url: "https://stripe.com/",
    preview: "stripe",
    features: ["Service pages", "Integrations", "Customer journeys"],
  },
  {
    number: "02",
    category: "Marketplace",
    title: "Booking & marketplace websites",
    description:
      "See how listings, search, filters, and booking flows can help visitors find what they need and take action.",
    website: "Airbnb",
    url: "https://www.airbnb.com/",
    preview: "airbnb",
    features: ["Search & filters", "Listings", "Booking flows"],
  },
  {
    number: "03",
    category: "Web application",
    title: "Interactive digital products",
    description:
      "Explore an interactive product experience with organised information, collaborative workflows, and features designed around users.",
    website: "Notion",
    url: "https://www.notion.com/",
    preview: "notion",
    features: ["Interactive interfaces", "User workflows", "Dynamic content"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the requirements",
    description:
      "We discuss your business, audience, goals, required features, and the problems your website needs to solve.",
  },
  {
    number: "02",
    title: "Plan the experience",
    description:
      "We map out the pages, user journeys, functionality, and technical approach before development begins.",
  },
  {
    number: "03",
    title: "Design and develop",
    description:
      "We build the interface and functionality, connecting the frontend with the required backend services and data.",
  },
  {
    number: "04",
    title: "Test and refine",
    description:
      "We check responsiveness, navigation, forms, core functionality, and compatibility, then address issues before launch.",
  },
  {
    number: "05",
    title: "Launch and support",
    description:
      "Once approved, we prepare the website for deployment and discuss any ongoing maintenance or improvements needed.",
  },
];

const faqs = [
  {
    question: "What is full-stack web development?",
    answer:
      "Full-stack development covers both the frontend that visitors interact with and the backend that powers features, data, and business logic.",
  },
  {
    question: "What types of websites can you build?",
    answer:
      "Depending on your requirements, we can develop business websites, dashboards, booking platforms, portals, and custom web applications.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "We plan responsive layouts so the website can adapt to mobile phones, tablets, and desktop screens. The final experience is tested across relevant screen sizes.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on the number of pages, design complexity, integrations, and functionality. We can provide a more useful estimate after discussing your requirements.",
  },
  {
    question: "Can you update my website after launch?",
    answer:
      "Yes, future improvements and maintenance can be discussed separately. The scope, availability, and cost of ongoing support should be agreed before work begins.",
  },
];

function WebsitePreview({ type }: { type: string }) {
  if (type === "stripe") {
    return (
      <div className="min-h-[210px] overflow-hidden rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            stripe<span className="text-cyan-600">.</span>
          </span>
          <span className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
            Get started
          </span>
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-3 pt-6">
          <div>
            <div className="h-2.5 w-4/5 rounded bg-slate-900" />
            <div className="mt-2 h-2.5 w-full rounded bg-slate-800" />
            <div className="mt-2 h-2 w-3/4 rounded bg-slate-200" />
            <div className="mt-4 h-7 w-24 rounded-md bg-cyan-600" />
          </div>
          <div className="rounded-xl bg-gradient-to-br from-indigo-100 via-cyan-100 to-blue-200 p-3">
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <div className="h-2 w-1/2 rounded bg-slate-200" />
              <div className="mt-3 h-7 rounded bg-indigo-100" />
              <div className="mt-2 h-2 w-2/3 rounded bg-slate-200" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-[10px] text-slate-400">
          Illustrative preview · Not an actual screenshot
        </p>
      </div>
    );
  }

  if (type === "airbnb") {
    return (
      <div className="min-h-[210px] overflow-hidden rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-sm font-bold text-rose-500">stay.</span>
          <span className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] text-slate-500">
            Find a stay
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-24 rounded-lg bg-gradient-to-br from-amber-100 to-orange-200" />
          <div className="h-24 rounded-lg bg-gradient-to-br from-teal-100 to-emerald-200" />
          <div className="h-24 rounded-lg bg-gradient-to-br from-sky-100 to-indigo-200" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div className="h-2 w-full rounded bg-slate-300" />
              <div className="mt-2 h-2 w-2/3 rounded bg-slate-100" />
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-slate-400">
          Illustrative preview · Not an actual screenshot
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[210px] overflow-hidden rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <span className="text-sm font-bold text-slate-800">Workspace</span>
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
          Dashboard
        </span>
      </div>
      <div className="mt-5 grid grid-cols-[0.65fr_1.35fr] gap-3">
        <div className="space-y-3 rounded-lg bg-slate-50 p-3">
          <div className="h-2 w-4/5 rounded bg-slate-300" />
          <div className="h-2 w-full rounded bg-slate-200" />
          <div className="h-2 w-3/4 rounded bg-slate-200" />
          <div className="h-2 w-4/5 rounded bg-cyan-200" />
        </div>
        <div className="rounded-lg border border-slate-100 p-3">
          <div className="h-2 w-2/3 rounded bg-slate-300" />
          <div className="mt-4 space-y-2">
            <div className="rounded-md bg-violet-50 p-3">
              <div className="h-2 w-3/4 rounded bg-violet-200" />
            </div>
            <div className="rounded-md bg-cyan-50 p-3">
              <div className="h-2 w-1/2 rounded bg-cyan-200" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] text-slate-400">
        Illustrative preview · Not an actual screenshot
      </p>
    </div>
  );
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative isolate flex min-h-[590px] items-center justify-center overflow-hidden bg-[#06111e] px-6 pb-20 pt-36 text-center sm:min-h-[620px] sm:px-8 sm:pb-24 sm:pt-40">
          {/* Existing project background asset */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-background.png')" }}
          />

          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[#030813]/85"
          />

          {/* Subtle colour atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 20%, rgba(8,145,178,0.16), transparent 58%)",
            }}
          />

          <div className="mx-auto w-full max-w-6xl">
            <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200">
              Full-Stack Web Development
            </span>

            <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Professional Websites
              <span className="mt-2 block text-cyan-400">
                Built to Do More
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              From business websites to interactive web applications, we build
              responsive digital experiences around your goals, your customers,
              and the way your business works.
            </p>

            <a
              href="/#contact"
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-7 py-4 text-sm font-semibold text-[#06111e] shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-cyan-500/30"
            >
              Discuss Your Project
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>
          </div>
        </section>

        {/* What we can build */}
        <section id="examples" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                What We Can Build
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Different ideas. Different possibilities.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                Explore established websites for inspiration and see the kinds
                of experiences we can plan and develop around your own
                requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {websiteExamples.map((example) => (
                <article
                  key={example.number}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-5"
                >
                  <WebsitePreview type={example.preview} />

                  <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                        {example.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {example.number}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                      {example.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {example.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {example.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href={example.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900 transition hover:text-cyan-700"
                    >
                      Explore {example.website}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-slate-500">
              External references: Stripe, Airbnb, and Notion are owned by
              their respective organisations. They are shown for inspiration
              only. These illustrative previews are not screenshots, client
              work, or projects developed by Code Avenue.
            </p>
          </div>
        </section>

        {/* Process */}
        <section
          id="development-process"
          className="border-y border-slate-200 bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A clear path from idea to launch.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Every project has different needs. Our process helps establish
                the right priorities, keep the work organised, and make
                important decisions before launch.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition duration-300 hover:border-cyan-300 hover:bg-white"
                >
                  <span className="font-mono text-sm font-semibold text-cyan-700">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          id="service-faq"
          className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                FAQs
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Questions about web development?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A few useful answers before you get started.
              </p>
            </div>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-slate-900 marker:hidden">
                    <span>
                      <span className="mr-3 font-mono text-xs text-cyan-700">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl font-normal text-cyan-700 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-2 pl-9 pr-8 pt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#071a2b] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Have an idea?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let’s build something useful.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Tell us what you want your website to do. We can discuss your
                requirements and work out a practical next step.
              </p>
              <a
                href="/#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-[#071a2b] transition hover:bg-cyan-300"
              >
                Start a Project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
