
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const ecommerceExamples = [
  {
    name: "Allbirds",
    category: "Fashion & Lifestyle",
    url: "https://www.allbirds.com/",
    description:
      "A clean storefront that puts product photography, product details, and shopping actions front and centre.",
    accent: "#d9e6d5",
    brand: "allbirds",
    headline: "Everyday essentials.",
    subheading: "Made for everyday movement.",
    products: [
      { name: "Everyday Runner", price: "$98", color: "#e8dfd0" },
      { name: "Classic Sneaker", price: "$110", color: "#d6d6d0" },
      { name: "Daily Slip-on", price: "$85", color: "#c9d4df" },
    ],
  },
  {
    name: "Gymshark",
    category: "Fitness & Apparel",
    url: "https://www.gymshark.com/",
    description:
      "A bold retail experience with strong campaign messaging, clear product categories, and a confident visual identity.",
    accent: "#d9d9d9",
    brand: "GYMSHARK",
    headline: "Built for your next.",
    subheading: "Find your training essentials.",
    products: [
      { name: "Training Tee", price: "$35", color: "#b7b7b7" },
      { name: "Performance Set", price: "$62", color: "#777777" },
      { name: "Training Shorts", price: "$30", color: "#d0d0d0" },
    ],
  },
  {
    name: "IKEA",
    category: "Home & Furniture",
    url: "https://www.ikea.com/",
    description:
      "A product-led shopping experience that helps visitors explore collections, compare options, and discover solutions for their homes.",
    accent: "#dce8f4",
    brand: "IKEA",
    headline: "Make room for life.",
    subheading: "Discover ideas for your space.",
    products: [
      { name: "Living Room", price: "Explore", color: "#d8c9b5" },
      { name: "Home Storage", price: "Explore", color: "#c8d3c3" },
      { name: "Lighting", price: "Explore", color: "#e9dfb7" },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Plan your store",
    description:
      "We discuss your products, target customers, business goals, and the shopping experience your store needs.",
  },
  {
    number: "02",
    title: "Design the storefront",
    description:
      "We organise your homepage, product categories, product pages, and navigation into a clear, consistent design.",
  },
  {
    number: "03",
    title: "Build shopping features",
    description:
      "We implement the product catalogue, cart, checkout flow, and the other features agreed for your store.",
  },
  {
    number: "04",
    title: "Configure and connect",
    description:
      "Where required, we configure payment options, shipping rules, inventory, and relevant third-party integrations.",
  },
  {
    number: "05",
    title: "Test and launch",
    description:
      "We check mobile layouts, shopping flows, links, and key functionality before preparing the store for launch.",
  },
];

const faqs = [
  {
    question: "Which platform is best for my online store?",
    answer:
      "It depends on your products, budget, and how you want to manage your store. Shopify, WooCommerce, and custom development each suit different needs. We can help you choose an appropriate option after discussing your requirements.",
  },
  {
    question: "Can you integrate online payments?",
    answer:
      "Payment integration depends on your chosen platform, country, and payment provider. We can help configure supported payment methods that are suitable for your business.",
  },
  {
    question: "Can I add or manage products myself?",
    answer:
      "Yes. We can set up an appropriate store management system so you can manage product information, prices, images, and stock, depending on the platform and agreed scope.",
  },
  {
    question: "Will my store work on mobile phones?",
    answer:
      "Yes. The storefront will be designed to adapt to mobile phones, tablets, and desktop screens, with attention to product browsing and the shopping journey.",
  },
  {
    question: "How long does an e-commerce website take to build?",
    answer:
      "The timeline depends on the number of products, design requirements, integrations, and content readiness. Once we understand the scope, we can provide a more realistic estimate.",
  },
];

function StorePreview({
  example,
}: {
  example: (typeof ecommerceExamples)[number];
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
          <span className="text-sm font-black tracking-wide text-slate-900">
            {example.brand}
          </span>
          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span>SHOP</span>
            <span>ABOUT</span>
            <span>CART</span>
          </div>
        </div>

        <div
          className="mt-4 rounded-lg px-4 py-7 sm:px-5 sm:py-9"
          style={{ backgroundColor: example.accent }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            New collection
          </p>
          <h3 className="mt-2 max-w-xs text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            {example.headline}
          </h3>
          <p className="mt-2 text-xs text-slate-700">{example.subheading}</p>
          <div className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-[10px] font-semibold text-white">
            EXPLORE COLLECTION
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {example.products.map((product) => (
            <div key={product.name} className="min-w-0">
              <div
                className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-md"
                style={{ backgroundColor: product.color }}
              >
                <div className="flex h-3/5 w-2/3 items-center justify-center rounded-lg border border-black/10 bg-white/35">
                  <span className="text-[9px] font-semibold text-slate-700">
                    PRODUCT
                  </span>
                </div>
              </div>
              <p className="mt-2 truncate text-[10px] font-semibold text-slate-800 sm:text-xs">
                {product.name}
              </p>
              <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EcommercePage() {
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
              E-commerce Website Development
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Turn Your Products
              <span className="mt-2 block text-cyan-400">
                Into an Online Store
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Sell online with a store built around your products and customers.
              From product pages to checkout, we create responsive shopping
              experiences designed to make buying simple.
            </p>

            <div className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400"
              >
                Let&apos;s Build Your Store
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Thoughtful design. Practical features. A smoother shopping journey.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Your business, online
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071a2b] sm:text-4xl">
                More than a website.
                <span className="block text-cyan-600">
                  Your digital storefront.
                </span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Your online store should help customers understand your
                products, find what they need, and move through checkout
                confidently. We focus on a clear structure, consistent design,
                and useful shopping functionality.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Whether you are launching a new business or improving an
                existing store, the website should fit your products, your
                customers, and the way you operate.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Store essentials
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Built around your requirements
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <span aria-hidden="true">↗</span>
                </div>
              </div>

              {[
                ["Product catalogue", "Organised products and categories"],
                ["Responsive storefront", "Layouts for mobile and desktop"],
                ["Shopping cart", "A clear path from product to checkout"],
                ["Store management", "Manage products and orders"],
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
                Different stores. Different experiences.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Explore how established brands approach online shopping.
                These are independent examples for inspiration, not websites
                built by Code Avenue.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {ecommerceExamples.map((example) => (
                <article
                  key={example.name}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4"
                >
                  <StorePreview example={example} />

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
              The previews above are original illustrative mock-ups, not actual
              screenshots or reproductions of the linked websites. Each brand
              and its website belong to their respective owners.
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
                From product idea to online store.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A practical process keeps the project organised and makes
                expectations clear at each stage.
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
                Let&apos;s clear things up.
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
                Ready to get started?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your online store starts with the right plan.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
                Tell us about your products and goals. Let&apos;s discuss an
                e-commerce website that fits your business.
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

