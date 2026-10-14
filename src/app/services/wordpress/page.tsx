
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const wordpressExamples = [
  {
    name: "TechCrunch",
    category: "Technology & Publishing",
    url: "https://techcrunch.com/",
    description:
      "A recognisable publishing experience that demonstrates how content-heavy websites can organise articles, categories, and editorial updates.",
    brand: "TechCrunch",
    headline: "The latest in technology.",
    subheading: "News, ideas, and industry updates.",
    accent: "#dff5e8",
    tag: "LATEST STORIES",
  },
  {
    name: "The Walt Disney Company",
    category: "Corporate & Media",
    url: "https://thewaltdisneycompany.com/",
    description:
      "A corporate web presence that brings company information, news, and brand storytelling together in a structured experience.",
    brand: "DISNEY",
    headline: "Stories that connect us.",
    subheading: "Discover news and company updates.",
    accent: "#e2e8ff",
    tag: "COMPANY & STORIES",
  },
  {
    name: "Sony Music",
    category: "Entertainment & Media",
    url: "https://www.sonymusic.com/",
    description:
      "An entertainment industry website that showcases a company's identity, announcements, and creative work.",
    brand: "SONY MUSIC",
    headline: "Where music moves.",
    subheading: "Explore artists, news, and culture.",
    accent: "#f4e3e8",
    tag: "MUSIC & CULTURE",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand your needs",
    description:
      "We discuss your business, website goals, content, required pages, and the features you need before selecting an appropriate approach.",
  },
  {
    number: "02",
    title: "Plan the structure",
    description:
      "We map out your pages, navigation, content sections, and user journey to make the website easy to explore.",
  },
  {
    number: "03",
    title: "Design and customise",
    description:
      "We shape the website around your brand using a suitable theme, styling, layouts, and customisation where needed.",
  },
  {
    number: "04",
    title: "Configure WordPress",
    description:
      "We set up the agreed pages, content tools, forms, and suitable plugins while avoiding unnecessary functionality.",
  },
  {
    number: "05",
    title: "Test and launch",
    description:
      "We check responsive layouts, navigation, forms, and important functionality before preparing the website for launch.",
  },
];

const faqs = [
  {
    question: "What is WordPress?",
    answer:
      "WordPress is a content management system that lets website owners create and manage pages, posts, images, and other content. The right setup can make routine content updates easier without editing code every time.",
  },
  {
    question: "Can you customise a WordPress theme?",
    answer:
      "Yes. The level of customisation depends on your requirements and the chosen theme. We can adapt layouts, colours, typography, and page sections, or discuss a more customised approach when needed.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Yes. WordPress provides an administration dashboard for managing website content. We can structure the site so common updates are manageable and explain the relevant editing workflow.",
  },
  {
    question: "Can WordPress support an online store?",
    answer:
      "Yes. WordPress can support e-commerce functionality through solutions such as WooCommerce. The right setup depends on your products, payment options, shipping requirements, and store management needs.",
  },
  {
    question: "Do I need hosting and a domain?",
    answer:
      "A public website generally needs a domain name and hosting. The exact setup depends on the service you choose. We can discuss these requirements and help plan the launch process.",
  },
];

function WordPressPreview({
  example,
}: {
  example: (typeof wordpressExamples)[number];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-2 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-500">
          {example.name.toLowerCase().replaceAll(" ", "")}.com
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <span className="text-sm font-black tracking-tight text-slate-900">
            {example.brand}
          </span>
          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>NEWS</span>
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
              EXPLORE MORE <span className="ml-2">→</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Pages & posts", "Custom styling", "Content updates"].map(
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

export default function WordPressPage() {
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
              WordPress Website Development
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your Website.
              <span className="mt-2 block text-cyan-400">
                Your Content. Your Control.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Get a professional WordPress website that reflects your brand
              and makes managing your content simpler. From business pages to
              content-rich websites, we build around your needs.
            </p>

            <div className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400"
              >
                Build Your WordPress Website
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Flexible content management. Thoughtful design. Useful features.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                A flexible platform
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071a2b] sm:text-4xl">
                A website that works for you.
                <span className="block text-cyan-600">
                  Content management made practical.
                </span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                WordPress offers a flexible way to publish pages, share
                updates, and maintain your online presence. With a suitable
                setup, you can manage everyday content without rebuilding
                your website whenever something changes.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                We focus on choosing an appropriate setup, customising the
                design, and adding the functionality your project actually
                needs—without making the website more complicated than
                necessary.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    What your website can include
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Based on your project requirements
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <span aria-hidden="true">↗</span>
                </div>
              </div>

              {[
                ["Customised design", "A look that suits your brand"],
                ["Content management", "Manage pages, posts, and images"],
                ["Useful plugins", "Add relevant website functionality"],
                ["Responsive layouts", "Support mobile and desktop screens"],
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
                Content-led websites worth exploring.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Explore these established websites for ideas about publishing,
                storytelling, and organising content. They are examples for
                inspiration, not Code Avenue client projects.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {wordpressExamples.map((example) => (
                <article
                  key={example.name}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4"
                >
                  <WordPressPreview example={example} />

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
              and website belongs to its respective owner. Their inclusion
              does not imply that they use WordPress.
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
                From WordPress setup to launch.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We organise the work into practical stages so the website
                matches your requirements and is ready for use.
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
                WordPress, explained.
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
                Let&apos;s build something useful
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready for a WordPress website that fits your business?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
                Tell us what you want to build, what your website needs to do,
                and how you want to manage it. Let&apos;s plan the right setup.
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
