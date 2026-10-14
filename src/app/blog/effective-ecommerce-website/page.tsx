
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "What Makes an E-Commerce Website Effective? | Code Avenue",
  description:
    "Learn how product pages, navigation, checkout, mobile performance, trust signals, and SEO can improve an e-commerce website.",
  keywords: [
    "effective ecommerce website",
    "ecommerce website design",
    "online store optimisation",
    "ecommerce conversion optimisation",
    "product page design",
  ],
};

const faqs = [
  {
    question: "What makes a good e-commerce website?",
    answer:
      "A good e-commerce website helps customers discover products, understand their options, trust the business, and complete purchases without unnecessary difficulty. Clear product information, reliable checkout, mobile usability, and transparent policies all contribute to a better shopping experience.",
  },
  {
    question: "How can I increase sales on my online store?",
    answer:
      "Start by examining your product pages, traffic sources, checkout process, delivery costs, and customer feedback. Improve the biggest barriers first and measure the results. Better design can help, but sales also depend on product demand, pricing, traffic quality, and fulfilment.",
  },
  {
    question: "Is mobile-friendly design important for e-commerce?",
    answer:
      "Yes. Customers may browse products, compare options, and purchase using phones or tablets. Responsive layouts, readable text, usable buttons, optimised images, and a straightforward checkout help make the experience easier on smaller screens.",
  },
  {
    question: "Which payment methods should an online store offer?",
    answer:
      "Choose payment methods that are appropriate for your target market, customers, platform, and business model. Consider local payment options, card payments, digital wallets, and cash on delivery where suitable and available. Confirm fees, eligibility, security requirements, and settlement terms with each provider.",
  },
  {
    question: "Does SEO matter for an e-commerce website?",
    answer:
      "SEO can help customers discover your products through relevant search queries. Useful product descriptions, descriptive page titles, logical categories, clean URLs, appropriate internal links, and sound technical performance can support search visibility. Results are not guaranteed and generally take time.",
  },
];

const features = [
  {
    number: "01",
    title: "Clear navigation and product categories",
    description:
      "Organise products into understandable categories and make search and filters easy to find. Customers should be able to narrow their choices without opening dozens of unrelated pages.",
    example:
      "A clothing store might organise products by category, size, colour, and collection.",
  },
  {
    number: "02",
    title: "Informative product pages",
    description:
      "Use clear product names, accurate descriptions, useful photographs, prices, available options, and relevant specifications. Explain important details that customers would otherwise need to ask about.",
    example:
      "A skincare product page could explain its ingredients, size, directions, and suitability information where applicable.",
  },
  {
    number: "03",
    title: "A simple shopping cart and checkout",
    description:
      "Make it easy to review the order, change quantities, understand the total cost, and complete payment. Avoid unexpected fees and unnecessary form fields.",
    example:
      "Show delivery charges and applicable taxes before the customer reaches the final order confirmation.",
  },
  {
    number: "04",
    title: "Mobile-friendly design",
    description:
      "Make layouts adapt to smaller screens. Keep text readable, buttons easy to tap, product images appropriately sized, and essential information visible without excessive scrolling.",
    example:
      "Test product selection, cart updates, and checkout on a real mobile device as well as a desktop browser.",
  },
  {
    number: "05",
    title: "Trust and transparent policies",
    description:
      "Help customers understand who they are buying from and what happens after an order. Provide genuine contact information, delivery estimates, return terms, privacy information, and secure payment options.",
    example:
      "Explain how customers can contact support and what they should do if an order arrives damaged.",
  },
  {
    number: "06",
    title: "Speed and technical reliability",
    description:
      "Optimise images, reduce unnecessary scripts, maintain compatible integrations, and monitor errors. A store should remain usable while customers browse products and place orders.",
    example:
      "Compress oversized product images and remove unused third-party scripts after testing their impact.",
  },
];

export default function EffectiveEcommerceWebsitePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
        {/* Article Hero */}
        <section className="relative overflow-hidden bg-[#071a2b] px-6 py-16 sm:py-20">
          <div className="absolute inset-0 bg-[url('/hero-background.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071a2b]/60 via-[#071a2b]/85 to-[#071a2b]" />

          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              <span>←</span> Back to Blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                E-Commerce
              </span>
              <span className="text-sm text-slate-400">8 min read</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              What Makes an{" "}
              <span className="text-cyan-400">
                E-Commerce Website Effective?
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              An online store needs more than attractive product photos.
              Discover how usability, product information, checkout, and
              customer trust work together to create a better shopping
              experience.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
              <span>By Code Avenue</span>
              <span>•</span>
              <span>Online Store Essentials</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-16">
          <article className="min-w-0">
            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 sm:p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-800">
                In this guide
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                <li>
                  <a className="hover:text-cyan-700" href="#fundamentals">
                    1. What makes a store effective?
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#features">
                    2. Essential features
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#product-pages">
                    3. Improve product pages
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#checkout">
                    4. Simplify checkout
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#measurement">
                    5. Measure performance
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#checklist">
                    6. Launch checklist
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#faqs">
                    7. FAQs
                  </a>
                </li>
              </ul>
            </nav>

            <section id="fundamentals" className="mt-10 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                1. What makes an online store effective?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                An effective e-commerce website makes it straightforward for
                people to find suitable products, evaluate their options, and
                complete an order. It also helps customers understand delivery,
                payment, returns, and what to expect after purchasing.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                A beautiful design is useful, but it cannot compensate for
                missing product details, confusing navigation, unexpected
                delivery charges, or a checkout that does not work properly.
                Design, functionality, and reliable operations need to support
                one another.
              </p>

              <div className="mt-6 rounded-xl border-l-4 border-cyan-500 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#071a2b]">
                  The principle to remember
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Make the next step obvious, give customers the information
                  they need, and remove unnecessary friction from the shopping
                  journey.
                </p>
              </div>
            </section>

            <section id="features" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                2. Six essential features of an effective store
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                The right feature set depends on what you sell, how customers
                buy, and which operational tasks your team needs to manage.
                These six areas are a useful starting point.
              </p>

              <div className="mt-7 space-y-5">
                {features.map((feature) => (
                  <div
                    key={feature.number}
                    className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-800">
                        {feature.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#071a2b]">
                          {feature.title}
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600">
                          {feature.description}
                        </p>
                        <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                          <strong className="text-slate-900">
                            Example:{" "}
                          </strong>
                          {feature.example}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="product-pages" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                3. Build product pages that answer customer questions
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Product pages are where shoppers evaluate whether an item meets
                their needs. If important information is missing, they may
                leave to look for answers elsewhere or contact support before
                deciding.
              </p>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Include the information that matters
              </h3>

              <ul className="mt-4 space-y-3">
                {[
                  "A clear product name and accurate description.",
                  "High-quality images showing relevant details and different angles.",
                  "Visible pricing, available sizes, colours, or other options.",
                  "Product specifications, dimensions, materials, or ingredients where relevant.",
                  "Delivery estimates, shipping charges, and applicable return conditions.",
                  "Genuine customer reviews, when available and appropriately displayed.",
                  "A prominent add-to-cart button and clear availability information.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-cyan-700">✓</span>
                    <span className="leading-7 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 leading-8 text-slate-600">
                Avoid vague descriptions and unsupported claims. For example,
                instead of simply writing “premium quality”, explain the
                material, dimensions, construction, or other verifiable
                qualities that distinguish the product.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Product pages should also be consistent. Use a repeatable
                structure so customers can compare items without having to
                search for basic information in different places.
              </p>
            </section>

            <section id="checkout" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                4. Make the checkout process straightforward
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Checkout is a critical stage because customers have already
                selected products and are deciding whether to complete their
                orders. Confusing forms, unexpected costs, technical errors,
                or unclear payment instructions can interrupt that process.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#071a2b]">
                    Reduce unnecessary steps
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Request only the information required to fulfil an order.
                    Where practical, support guest checkout and sensible
                    autofill behaviour.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#071a2b]">
                    Show the full cost
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Explain delivery charges, taxes, discounts, and the order
                    total before customers confirm payment.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#071a2b]">
                    Explain payment options
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Clearly communicate the available payment methods and any
                    instructions customers must follow.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#071a2b]">
                    Confirm the order
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Display a confirmation and provide appropriate order
                    details after a successful purchase.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Payment options should suit the intended market and your
                platform. For example, a store serving customers in Pakistan
                may evaluate cash on delivery alongside supported online
                payment methods. Availability, fees, operational risks, and
                customer preferences should inform the decision.
              </p>
            </section>

            <section id="measurement" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                5. Measure performance instead of guessing
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Once your store is running, use analytics and order data to
                understand how customers interact with it. A design change
                should be evaluated against a meaningful goal rather than
                assumed to be successful because it looks better.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead className="bg-[#071a2b] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Metric</th>
                      <th className="p-4 font-semibold">What it helps explain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-semibold">Conversion rate</td>
                      <td className="p-4 leading-6 text-slate-600">
                        The proportion of visits or users that complete the
                        defined purchase action, depending on how it is
                        measured.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Cart abandonment</td>
                      <td className="p-4 leading-6 text-slate-600">
                        How often shopping carts do not result in completed
                        purchases under your chosen definition.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Average order value</td>
                      <td className="p-4 leading-6 text-slate-600">
                        The average value of orders over a defined period.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Traffic sources</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Where visitors come from and which sources contribute
                        to meaningful outcomes.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Checkout errors</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Technical or usability issues that may prevent
                        customers from completing orders.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Establish a baseline, identify the most significant problem,
                and test a focused improvement. Changes in traffic quality,
                promotions, prices, seasonality, and product availability can
                all affect results, so interpret metrics in context.
              </p>
            </section>

            <section id="checklist" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                6. E-commerce website launch checklist
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Before launching or redesigning an online store, review these
                essentials. Test the complete purchase journey rather than
                checking the homepage alone.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <ul className="space-y-4">
                  {[
                    "Product names, descriptions, prices, and stock information are accurate.",
                    "Product images display properly on desktop and mobile.",
                    "Categories, search, filters, and product options work correctly.",
                    "Cart quantities, discounts, shipping charges, and totals are calculated correctly.",
                    "Payment methods and order confirmation have been tested.",
                    "Delivery, returns, privacy, and contact information are accessible.",
                    "Forms, navigation, and checkout work on mobile devices.",
                    "Analytics and relevant purchase conversion tracking are configured and tested.",
                    "Backups, security updates, and maintenance responsibilities are planned.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-cyan-500 text-xs text-cyan-700">
                        ✓
                      </span>
                      <span className="leading-7 text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="faqs" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Frequently asked questions
              </h2>

              <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-5">
                {faqs.map((faq) => (
                  <div key={faq.question} className="py-5">
                    <h3 className="font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12 border-t border-slate-200 pt-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900"
              >
                <span className="mr-2">←</span> Explore More Articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
                Build Your Online Store
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#071a2b]">
                Turn your products into an online shopping experience.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore our e-commerce development service to learn more about
                online store planning and functionality.
              </p>

              <Link
                href="/services/e-commerce"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore E-Commerce
              </Link>

              <Link
                href="/#contact"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                Discuss Your Project
              </Link>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-slate-900">
                  Related reading
                </p>
                <Link
                  href="/blog/choose-the-right-website"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  How to Choose the Right Website for Your Business →
                </Link>
                <Link
                  href="/blog/landing-page-mistakes"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  Landing Page Mistakes to Avoid →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Final CTA */}
        <section className="px-6 pb-16 sm:pb-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl bg-[#071a2b] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Planning your online store?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Let's discuss a store that fits your products, customers, and
                business requirements.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
            >
              Let's Talk <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
