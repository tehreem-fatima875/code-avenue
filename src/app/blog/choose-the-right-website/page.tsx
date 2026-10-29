import BlogIllustration from "@/components/sections/BlogIllustration";

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "How to Choose the Right Website for Your Business | Code Avenue",
  description:
    "Learn how to choose between a business website, e-commerce store, and landing page based on your business goals, audience, and budget.",
  keywords: [
    "choose the right website for your business",
    "business website vs ecommerce website",
    "website development for small business",
    "landing page vs website",
  ],
};

const websiteTypes = [
  {
    type: "Business Website",
    bestFor: "Service providers, agencies, consultants, and local businesses",
    purpose:
      "Explain your business, establish credibility, and help potential customers contact you.",
    features: "Service pages, about page, testimonials, contact form",
    href: "/services/business-websites",
    label: "Explore Business Websites",
  },
  {
    type: "E-Commerce Website",
    bestFor: "Brands and businesses that sell products online",
    purpose:
      "Display products, manage orders, and guide customers through the buying process.",
    features: "Product pages, cart, checkout, payment and delivery options",
    href: "/services/e-commerce",
    label: "Explore E-Commerce",
  },
  {
    type: "Landing Page",
    bestFor: "Advertising campaigns, specific offers, and lead generation",
    purpose:
      "Focus visitors on one main action, such as submitting a form or making a purchase.",
    features: "Focused message, benefits, proof, and a clear call to action",
    href: "/services/landing-pages",
    label: "Explore Landing Pages",
  },
];

const faqs = [
  {
    question: "Which website is best for a small business?",
    answer:
      "A business website is a practical starting point for many small businesses that need to explain their services, build trust, and receive enquiries. If you sell products online, an e-commerce website may be more suitable. The right choice depends on what customers need to do on your website.",
  },
  {
    question: "Do I need a website if I already have social media pages?",
    answer:
      "Social media can help you reach an audience, but a website gives you more control over your content, structure, customer journey, and search visibility. The two can work together rather than replace one another.",
  },
  {
    question: "Should I build a landing page or a full website?",
    answer:
      "Choose a landing page when you want to focus on one offer or campaign. Choose a full website when visitors need to explore several services, learn about your business, or find different types of information. A business can use both for different purposes.",
  },
  {
    question: "Can I add e-commerce features to my website later?",
    answer:
      "Yes, depending on the platform and how the website is built. Planning for possible future features at the beginning can make expansion easier, although some changes may require additional development.",
  },
  {
    question: "What should I prepare before hiring a website developer?",
    answer:
      "Start with your business goals, target audience, main services or products, preferred design style, essential features, and approximate budget. Existing branding, website content, product information, and example websites can also help clarify your requirements.",
  },
];

export default function ChooseTheRightWebsitePage() {
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
                Web Development
              </span>
              <span className="text-sm text-slate-400">
                8 min read
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              How to Choose the Right Website for Your{" "}
              <span className="text-cyan-400">Business</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Not every business needs the same kind of website. Learn how to
              compare business websites, online stores, and landing pages so
              you can choose an approach that supports your actual goals.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
              <span>By Code Avenue</span>
              <span>•</span>
              <span>Website Essentials</span>
            </div>
          </div>
        </section>

        {/* Article Layout */}
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-16">
          <article className="min-w-0">
            <BlogIllustration scene="website" />
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-800">
                In this guide
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                <li>
                  <a className="hover:text-cyan-700" href="#start">
                    1. Start with your business goals
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#types">
                    2. Compare website types
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#factors">
                    3. Factors to consider
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#mistakes">
                    4. Mistakes to avoid
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#checklist">
                    5. Your decision checklist
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#faqs">
                    6. Frequently asked questions
                  </a>
                </li>
              </ul>
            </div>

            <section id="start" className="mt-10 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                1. Start with your business goals
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Before choosing a platform, template, or visual style, decide
                what you want your website to achieve. A website should solve
                a business problem, not simply look attractive.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                For example, a consultant may need a professional place to
                explain services and receive enquiries. A clothing brand may
                need product listings, size information, a shopping cart, and
                checkout. A business promoting one special offer may benefit
                from a focused landing page.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Ask yourself one important question:{" "}
                <strong className="text-slate-900">
                  What is the main action I want visitors to take?
                </strong>{" "}
                Your answer will help determine the structure and features
                your website needs.
              </p>
            </section>

            <section id="types" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                2. Understand the main types of websites
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Three common options are business websites, e-commerce
                websites, and landing pages. They can share some features,
                but each is designed around a different primary purpose.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead className="bg-[#071a2b] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Website type</th>
                      <th className="p-4 font-semibold">Main purpose</th>
                      <th className="p-4 font-semibold">Best suited for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">
                        Business website
                      </td>
                      <td className="p-4 leading-6 text-slate-600">
                        Present your business and generate enquiries
                      </td>
                      <td className="p-4 leading-6 text-slate-600">
                        Service-based businesses
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">
                        E-commerce website
                      </td>
                      <td className="p-4 leading-6 text-slate-600">
                        Display products and accept online orders
                      </td>
                      <td className="p-4 leading-6 text-slate-600">
                        Retailers and product brands
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900">
                        Landing page
                      </td>
                      <td className="p-4 leading-6 text-slate-600">
                        Encourage one specific action
                      </td>
                      <td className="p-4 leading-6 text-slate-600">
                        Campaigns and focused offers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-7">
                {websiteTypes.map((item, index) => (
                  <div
                    key={item.type}
                    className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                      Option 0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#071a2b]">
                      {item.type}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.purpose}
                    </p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-slate-900">
                        Best for
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.bestFor}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-slate-900">
                        Common features
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.features}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
                    >
                      {item.label} <span className="ml-2">→</span>
                    </Link>
                  </div>
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                These options are not mutually exclusive. For example, a
                business website can include a landing page for an advertising
                campaign, and an e-commerce store can have dedicated landing
                pages for selected products or promotions.
              </p>
            </section>

            <section id="factors" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                3. Consider these factors before deciding
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Your audience and its needs
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Think about the information your customers need before
                    contacting you or making a purchase. A service provider
                    may need detailed service pages and a contact form, while
                    an online shopper may need clear product photographs,
                    pricing, delivery information, and a straightforward
                    checkout.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Your budget and ongoing costs
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Consider development, domain registration, hosting,
                    platform subscriptions, maintenance, paid integrations,
                    and any transaction fees that may apply. A simple website
                    and a store with inventory and payment functionality have
                    different requirements. Request a scope-based estimate
                    instead of comparing prices without comparing features.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Mobile usability and performance
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Your website should work comfortably on phones, tablets,
                    and desktop screens. Text should be readable, navigation
                    should be straightforward, and important buttons should
                    be easy to use. Optimised images and efficient code can
                    also help pages load more quickly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Search visibility and content
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    If you want people to discover your business through
                    search engines, plan for useful content, descriptive page
                    titles, logical navigation, and search-friendly URLs.
                    Technical setup alone does not guarantee rankings;
                    visibility also depends on competition, relevance, and
                    the quality of your content.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Future growth and maintenance
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Consider whether you may need more service pages,
                    additional products, booking functionality, integrations,
                    or new marketing campaigns later. Choose an approach that
                    can support realistic future needs without paying for
                    unnecessary features from the beginning.
                  </p>
                </div>
              </div>
            </section>

            <section id="mistakes" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                4. Common website planning mistakes to avoid
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Choosing design before defining the goal",
                    text: "A visually attractive website still needs a clear purpose, relevant content, and an obvious next step for visitors.",
                  },
                  {
                    title: "Adding too many unnecessary features",
                    text: "Extra animations, plugins, and complicated interactions can increase cost and maintenance without improving the customer experience.",
                  },
                  {
                    title: "Ignoring mobile visitors",
                    text: "A layout that works only on a desktop can make navigation, reading, and completing forms frustrating on smaller screens.",
                  },
                  {
                    title: "Forgetting how results will be measured",
                    text: "Decide whether success means enquiries, purchases, bookings, or another meaningful action. Set up appropriate analytics and conversion tracking where relevant.",
                  },
                  {
                    title: "Treating launch as the finish line",
                    text: "Websites need ongoing attention to content, security, functionality, performance, and changing business needs.",
                  },
                ].map((mistake, index) => (
                  <div key={mistake.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-sm font-bold text-cyan-800">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {mistake.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {mistake.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="checklist" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                5. Use this checklist to make your decision
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Before discussing your project with a developer, work through
                these questions. Clear answers will make it easier to choose
                the right solution and estimate the scope.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <ul className="space-y-4">
                  {[
                    "What is the primary goal of my website?",
                    "Who is my target audience?",
                    "Do visitors need to browse services, purchase products, or complete one specific action?",
                    "Which features are essential at launch?",
                    "What budget is available for development and ongoing costs?",
                    "Who will provide content, images, and branding?",
                    "How will I measure whether the website is successful?",
                    "What might the business need to add in the future?",
                  ].map((question) => (
                    <li key={question} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-cyan-500 text-xs text-cyan-700">
                        ✓
                      </span>
                      <span className="leading-7 text-slate-700">
                        {question}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                You do not need every detail finalised before starting. However,
                knowing your main objective and essential features will help
                you avoid an unsuitable or unnecessarily complicated solution.
              </p>
            </section>

            <section id="faqs" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                6. Frequently asked questions
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
                Need a Website?
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#071a2b]">
                Let&apos;s find the right solution.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore our web development services or discuss the needs of
                your project with Code Avenue.
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore Services
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
                  href="/blog/effective-ecommerce-website"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  What Makes an E-Commerce Website Effective? →
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
                Ready to plan your website?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Start with your goals, choose the right approach, and build
                with a clear direction.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
            >
              Let&apos;s Talk <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
