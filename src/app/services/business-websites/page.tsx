
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const businessExamples = [
  {
    name: "Stripe",
    category: "Technology & SaaS",
    url: "https://stripe.com/",
    description:
      "A polished business website with clear messaging, strong calls to action, and a complex product explained through simple sections.",
    brand: "stripe",
    headline: "Financial infrastructure for the internet.",
    subheading: "Tools for businesses of every size.",
    accent: "#e5e3ff",
    tag: "BUSINESS PLATFORM",
  },
  {
    name: "Slack",
    category: "Business Software",
    url: "https://slack.com/",
    description:
      "A friendly, product-focused website that explains business benefits, guides visitors through features, and encourages them to get started.",
    brand: "slack",
    headline: "Make work simpler.",
    subheading: "Bring people and projects together.",
    accent: "#f5e5ed",
    tag: "WORKPLACE SOLUTIONS",
  },
  {
    name: "Atlassian",
    category: "Enterprise & Services",
    url: "https://www.atlassian.com/",
    description:
      "A structured website that organises a broad range of business tools and helps different audiences find relevant solutions.",
    brand: "ATLASSIAN",
    headline: "Teamwork that works.",
    subheading: "Plan, build, and deliver together.",
    accent: "#dceaff",
    tag: "TEAM SOLUTIONS",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We discuss your services, audience, goals, and what visitors should understand or do when they reach your website.",
  },
  {
    number: "02",
    title: "Plan the website",
    description:
      "We organise the pages, navigation, content, and calls to action into a clear structure that suits your business.",
  },
  {
    number: "03",
    title: "Design your brand experience",
    description:
      "We create a consistent visual direction with suitable typography, colours, spacing, and layouts for your brand.",
  },
  {
    number: "04",
    title: "Develop the website",
    description:
      "We build the agreed pages and functionality, including responsive layouts, contact forms, and relevant integrations.",
  },
  {
    number: "05",
    title: "Test and launch",
    description:
      "We check responsiveness, navigation, forms, and key website functionality before preparing the site for launch.",
  },
];

const faqs = [
  {
    question: "What is included in a business website?",
    answer:
      "Depending on your requirements, a business website can include a homepage, about page, services pages, portfolio or projects section, testimonials, FAQs, and contact page. The final scope is agreed before development begins.",
  },
  {
    question: "Can you create a website for my specific industry?",
    answer:
      "Yes. We can plan the website around your business model, audience, services, and brand identity. The content and functionality will depend on your particular requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. The website will use responsive layouts designed to adapt to mobile phones, tablets, and desktop screens.",
  },
  {
    question: "Can I update the website after it launches?",
    answer:
      "That depends on the technology used. We can discuss a suitable content management system or other editing approach if you want to update pages, images, and business information yourself.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "The timeline depends on the number of pages, design complexity, functionality, and how quickly the required content is provided. We can estimate the timeline after defining the project scope.",
  },
];

function BusinessPreview({
  example,
}: {
  example: (typeof businessExamples)[number];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-2 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-500">
          {example.name.toLowerCase()}.com
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <span className="text-sm font-black tracking-tight text-slate-900">
            {example.brand}
          </span>
          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span>PRODUCTS</span>
            <span>RESOURCES</span>
            <span>ABOUT</span>
          </div>
        </div>

        <div
          className="relative mt-4 overflow-hidden rounded-lg px-4 py-7 sm:px-5 sm:py-9"
          style={{ backgroundColor: example.accent }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[22px] border-white/40"
          />
          <div className="relative max-w-xs">
            <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-600">
              {example.tag}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {example.headline}
            </h3>
            <p className="mt-3 text-xs leading-5 text-slate-700">
              {example.subheading}
            </p>
            <div className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-[10px] font-semibold text-white">
              DISCOVER MORE <span className="ml-2">→</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Clear messaging", "Useful features", "Easy navigation"].map(
            (feature, index) => (
              <div
                key={feature}
                className="rounded-md border border-slate-100 bg-slate-50 p-2.5"
              >
                <span className="text-xs font-bold text-cyan-700">
                  0{index + 1}
                </span>
                <p className="mt-2 text-[9px] font-medium leading-4 text-slate-600 sm:text-[10px]">
                  {feature}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function BusinessWebsitesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f8fafc] text-[#0f172a]">
        {/* HERO */}
        <section className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden bg-[#071a2b] px-5 py-24 sm:min-h-[620px] sm:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
            style={{ backgroundImage: "url('/hero-background.png')" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071a2b]/75 via-[#071a2b]/90 to-[#071a2b]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[100px] sm:h-[460px] sm:w-[460px]"
          />

          <div className="mx-auto w-full max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Business Website Development
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Give Your Business
              <span className="mt-2 block text-cyan-400">
                A Stronger Online Presence
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Build credibility, showcase your services, and help customers
              understand what makes your business different with a professional
              website designed around your goals.
            </p>

            <div className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400"
              >
                Build Your Business Website
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Clear messaging. Professional design. Practical functionality.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Your business deserves to be seen
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071a2b] sm:text-4xl">
                Make the right first impression.
                <span className="block text-cyan-600">
                  Turn visitors into opportunities.
                </span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Your website is often one of the first places potential
                customers learn about your business. It should explain what you
                offer, communicate your value, and make the next step easy.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                We focus on creating a professional online presence with a
                logical page structure, consistent branding, responsive
                design, and clear ways for visitors to contact you.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Your website essentials
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Tailored to your business
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <span aria-hidden="true">↗</span>
                </div>
              </div>

              {[
                ["Professional homepage", "Communicate your value clearly"],
                ["Services pages", "Explain what you offer"],
                ["About your business", "Share your story and expertise"],
                ["Contact and enquiries", "Help customers reach you"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className={`flex gap-4 py-4 ${
                    index !== 3 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-sm font-bold text-cyan-700">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXAMPLES */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Inspiration from the web
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Great websites make businesses clearer.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Explore how established technology businesses present their
                products and communicate with their audiences. These are
                independent examples, not Code Avenue client projects.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {businessExamples.map((example) => (
                <article
                  key={example.name}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4"
                >
                  <BusinessPreview example={example} />

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      {example.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#071a2b]">
                      {example.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      {example.description}
                    </p>
                    <a
                      href={example.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
                    >
                      Visit official website
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
              These previews are original illustrative mock-ups, not actual
              screenshots or reproductions of the linked websites. Each brand
              and website belongs to its respective owner.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                A clear process. A website built around you.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Every stage has a purpose, from understanding your business
                to testing the finished website.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <span className="text-sm font-bold tracking-widest text-cyan-700">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#071a2b]">
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

        {/* FAQ */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Frequently asked questions
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Everything you need to know.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-[#f8fafc] px-5 py-4 open:border-cyan-200 open:bg-cyan-50/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[#071a2b] marker:content-none">
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-xl font-normal text-cyan-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#071a2b] px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Let&apos;s work together
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to give your business a professional online presence?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
                Tell us about your business, your goals, and the website
                you have in mind. Let&apos;s plan your next step.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Discuss Your Project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
