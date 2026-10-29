import BlogIllustration from "@/components/sections/BlogIllustration";

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Meta Ads vs Google Ads: Which Should You Choose? | Code Avenue",
  description:
    "Compare Meta Ads and Google Ads, including audience targeting, search intent, campaign objectives, budgets, measurement, and when to use each platform.",
  keywords: [
    "Meta Ads vs Google Ads",
    "Facebook Ads vs Google Ads",
    "Google Ads or Meta Ads",
    "digital advertising strategy",
    "paid advertising for small businesses",
  ],
};

const comparison = [
  {
    factor: "Main approach",
    meta: "Reaches people through social platforms based on audience signals and campaign objectives.",
    google:
      "Can reach people searching for relevant products or services, as well as audiences across Google's advertising inventory.",
  },
  {
    factor: "Common platforms",
    meta: "Facebook and Instagram, depending on placements and campaign settings.",
    google:
      "Google Search, YouTube, Display Network, Shopping surfaces, and other eligible inventory depending on campaign type.",
  },
  {
    factor: "Useful for",
    meta: "Product discovery, visual storytelling, retargeting where eligible, and generating demand.",
    google:
      "Capturing search demand, promoting products, reaching relevant audiences, and generating enquiries or sales.",
  },
  {
    factor: "Creative formats",
    meta: "Images, videos, carousels, Stories, Reels, and other supported ad formats.",
    google:
      "Search text ads, product listings, video ads, image-based placements, and other formats depending on campaign type.",
  },
  {
    factor: "Important considerations",
    meta: "Creative quality, audience signals, offer, placement, and conversion experience.",
    google:
      "Search intent, keyword strategy where applicable, ad relevance, bidding, landing pages, and conversion data.",
  },
];

const faqs = [
  {
    question: "Are Meta Ads cheaper than Google Ads?",
    answer:
      "Neither platform is always cheaper. Costs vary with competition, audience, industry, creative, bidding, and campaign objective. Compare the cost of meaningful outcomes, such as qualified leads or profitable purchases, rather than relying on click costs alone.",
  },
  {
    question: "Which platform is better for e-commerce?",
    answer:
      "Both can work. Meta Ads can help introduce products to potential customers, while Google Shopping and Search can reach shoppers looking for particular products. Your product category, demand, margins, creative assets, website experience, and tracking setup should influence the decision.",
  },
  {
    question: "Should a beginner start with Meta Ads or Google Ads?",
    answer:
      "Start with the platform that best matches your audience and business objective. If people actively search for the service you offer, Search campaigns may be a sensible starting point. If the offer is highly visual and benefits from discovery, Meta may be worth testing. Begin with a manageable budget and clear measurement.",
  },
  {
    question: "Can I run Meta Ads and Google Ads together?",
    answer:
      "Yes. The platforms can support different parts of the customer journey. For example, Google Search may capture existing demand while Meta introduces your brand to new audiences. Measure each channel carefully and account for attribution differences before comparing results.",
  },
  {
    question: "What should I track when comparing the platforms?",
    answer:
      "Track metrics aligned with your goal, such as qualified leads, purchases, cost per acquisition, conversion rate, average order value, and return on ad spend where revenue tracking is reliable. Also review lead quality, profit margins, and the time it takes to convert a customer.",
  },
];

export default function MetaAdsVsGoogleAdsPage() {
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
                Digital Marketing
              </span>
              <span className="text-sm text-slate-400">9 min read</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Meta Ads vs Google Ads:{" "}
              <span className="text-cyan-400">Which Should You Choose?</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Both platforms can help businesses grow, but they approach
              advertising differently. Understand how each works and how to
              choose a strategy that matches your audience, offer, and budget.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
              <span>By Code Avenue</span>
              <span>•</span>
              <span>Paid Advertising Guide</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-16">
          <article className="min-w-0">
            <BlogIllustration scene="advertising" />
            {/* Contents */}
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 sm:p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-800">
                In this guide
              </p>

              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                <li>
                  <a className="hover:text-cyan-700" href="#difference">
                    1. Understand the difference
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#comparison">
                    2. Compare both platforms
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#goals">
                    3. Match the platform to your goal
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#budget">
                    4. Plan your budget
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#measurement">
                    5. Measure performance
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#mistakes">
                    6. Mistakes to avoid
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#faqs">
                    7. FAQs
                  </a>
                </li>
              </ul>
            </nav>

            <section id="difference" className="mt-10 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                1. Understand the difference between Meta Ads and Google Ads
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Meta Ads and Google Ads are advertising platforms, but they
                offer different ways to reach potential customers. The right
                choice depends on what people already know about your product,
                how they discover solutions, and what you want them to do.
              </p>

              <h3 className="mt-6 text-xl font-bold text-[#071a2b]">
                How Meta Ads work
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Meta Ads can place advertising across Facebook, Instagram, and
                other eligible placements. Depending on the campaign objective
                and setup, businesses can use images, videos, carousels, and
                other creative formats to introduce an offer, generate interest,
                encourage enquiries, or drive purchases.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Meta is particularly useful when visuals and storytelling help
                customers understand a product. For example, a clothing brand
                can showcase a collection through short videos or carousel
                ads. Results still depend on the offer, audience, creative
                quality, landing experience, and measurement.
              </p>

              <h3 className="mt-7 text-xl font-bold text-[#071a2b]">
                How Google Ads work
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Google Ads supports several campaign types. Search campaigns
                can show ads when people search for relevant terms, while
                Shopping campaigns can display product information to eligible
                shoppers. Other campaign types can reach audiences through
                video, display, and additional Google inventory.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                This makes Google Ads useful when customers are actively
                looking for a product, service, or solution. For instance,
                someone searching for a website developer may already have a
                specific need. However, competition, search volume, relevance,
                and budget all affect campaign performance.
              </p>

              <div className="mt-7 rounded-xl border-l-4 border-cyan-500 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#071a2b]">
                  The key distinction
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Meta can help create or develop demand through discovery.
                  Google Search can capture existing search demand. Both
                  platforms offer broader capabilities than this distinction
                  alone suggests.
                </p>
              </div>
            </section>

            <section id="comparison" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                2. Meta Ads vs Google Ads: a side-by-side comparison
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Use this comparison as a starting point, not a universal
                ranking. Features and campaign behaviour vary by objective,
                settings, eligibility, and market.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[660px] border-collapse text-left text-sm">
                  <thead className="bg-[#071a2b] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Factor</th>
                      <th className="p-4 font-semibold">Meta Ads</th>
                      <th className="p-4 font-semibold">Google Ads</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparison.map((item) => (
                      <tr key={item.factor}>
                        <td className="p-4 align-top font-semibold text-slate-900">
                          {item.factor}
                        </td>
                        <td className="p-4 align-top leading-6 text-slate-600">
                          {item.meta}
                        </td>
                        <td className="p-4 align-top leading-6 text-slate-600">
                          {item.google}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="goals" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                3. Which platform fits your business goal?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Start with the outcome you need, then choose a campaign
                approach that gives you a reasonable way to reach and measure
                that outcome.
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                    Scenario 01
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#071a2b]">
                    You sell visual products online
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Meta can help introduce products through engaging images
                    and videos. Google Shopping or Search may also be useful
                    when shoppers are looking for similar items. Compare the
                    quality and profitability of purchases from each channel.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Consider: product margins, stock, delivery, creative
                    assets, product feed quality, and purchase tracking.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                    Scenario 02
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#071a2b]">
                    You provide a service people actively search for
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Google Search may be a useful starting point if there is
                    meaningful search demand for your service. Meta can
                    complement it by introducing your business to relevant
                    audiences and supporting follow-up campaigns where
                    appropriate.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Consider: search demand, geographic coverage, qualified
                    enquiries, lead handling, and the value of a customer.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                    Scenario 03
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#071a2b]">
                    You are launching a new product or offer
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Meta may help communicate the product's value to people
                    who have not encountered it before. Google can still be
                    relevant if people search for the product category or
                    problem it solves.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Consider: how clearly the offer can be explained, whether
                    people already search for it, and how you will test demand.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                    Scenario 04
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#071a2b]">
                    You need qualified leads
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Both platforms can generate leads. The important question
                    is whether those enquiries fit your target customer and
                    become actual business opportunities. Use clear forms,
                    relevant landing pages, and a consistent lead-quality
                    measurement process.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Consider: lead qualification, response time, conversion
                    rate from lead to customer, and cost per qualified lead.
                  </p>
                </div>
              </div>
            </section>

            <section id="budget" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                4. How should you plan your advertising budget?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                There is no universal budget that guarantees results on either
                platform. Your budget should reflect your business economics,
                market competition, testing needs, and the number of meaningful
                conversions you can reasonably expect.
              </p>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Start with the value of the outcome
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                For a store, consider gross margin, fulfilment costs, average
                order value, repeat purchases, and refunds. For a service
                business, consider how many leads become customers and the
                contribution those customers generate.
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold text-slate-500">
                  Illustrative example
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#071a2b]">
                  Comparing acquisition cost
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  If a campaign spends PKR 10,000 and generates 20 purchases,
                  its cost per purchase is PKR 500. Whether that is acceptable
                  depends on each order's margin, fulfilment costs, and other
                  business expenses.
                </p>
                <div className="mt-4 rounded-lg bg-cyan-50 p-4">
                  <p className="text-sm font-semibold text-cyan-900">
                    Cost per purchase = Ad spend ÷ Purchases
                  </p>
                  <p className="mt-1 text-sm text-cyan-800">
                    PKR 10,000 ÷ 20 = PKR 500
                  </p>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  This is a hypothetical calculation, not a benchmark or a
                  prediction of campaign results.
                </p>
              </div>

              <h3 className="mt-7 text-lg font-bold text-slate-900">
                Test with a clear purpose
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Avoid splitting a small budget across too many campaigns,
                audiences, and ad variations without a clear testing plan.
                Start with a focused objective, allow enough time and data for
                a meaningful evaluation, and make changes based on evidence
                rather than reacting to every short-term fluctuation.
              </p>
            </section>

            <section id="measurement" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                5. Measure results that matter to the business
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Clicks and impressions help explain delivery, but they do not
                automatically show whether advertising is profitable. Choose
                metrics that match your objective and verify that conversion
                events are configured correctly.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[500px] border-collapse text-left text-sm">
                  <thead className="bg-[#071a2b] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Metric</th>
                      <th className="p-4 font-semibold">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-semibold">CTR</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Shows the proportion of impressions that resulted in
                        clicks, based on the platform's definition.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Conversion rate</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Helps evaluate how effectively clicks or visits lead
                        to the intended action.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Cost per acquisition</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Relates advertising spend to acquired customers or
                        another clearly defined conversion.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">ROAS</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Compares attributed advertising revenue with ad spend;
                        it does not account for all business costs.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Lead quality</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Helps establish whether enquiries are relevant and
                        likely to become customers.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Attribution methods, reporting windows, and conversion
                definitions can differ between platforms. Avoid adding their
                reported conversions together without checking for overlap.
                Where appropriate, use analytics, CRM data, and reliable
                transaction records to develop a broader view of performance.
              </p>
            </section>

            <section id="mistakes" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                6. Common advertising mistakes to avoid
              </h2>

              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Choosing a platform based on assumptions",
                    text: "Use audience behaviour, search demand, business goals, and test results to guide your decision.",
                  },
                  {
                    title: "Sending every visitor to the homepage",
                    text: "Match the destination page to the ad. A product ad should lead to the relevant product, while a service ad should lead to a page that explains that service.",
                  },
                  {
                    title: "Optimising for clicks instead of outcomes",
                    text: "Cheap traffic may have little value if it does not lead to qualified enquiries or profitable purchases.",
                  },
                  {
                    title: "Ignoring conversion tracking",
                    text: "Test purchase, lead, and other important events before relying on campaign reports to make budget decisions.",
                  },
                  {
                    title: "Making too many changes at once",
                    text: "Frequent, simultaneous changes can make it difficult to understand what improved or weakened performance.",
                  },
                  {
                    title: "Ignoring the offer and customer experience",
                    text: "Advertising cannot fully compensate for unclear pricing, poor product information, slow pages, or a difficult checkout.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-sm font-bold text-cyan-800">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
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
          <aside>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
                Advertising Services
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#071a2b]">
                Reach the right audience.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore advertising services for businesses looking to
                generate enquiries, promote products, and measure campaign
                performance.
              </p>

              <Link
                href="/services/meta-ads"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore Meta Ads
              </Link>

              <Link
                href="/services/google-ads"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore Google Ads
              </Link>

              <Link
                href="/#contact"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
              >
                Discuss Your Goals
              </Link>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-slate-900">
                  Related reading
                </p>
                <Link
                  href="/blog/landing-page-mistakes"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  Landing Page Mistakes to Avoid →
                </Link>
                <Link
                  href="/blog/effective-ecommerce-website"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  What Makes an E-Commerce Website Effective? →
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
                Ready to plan your advertising strategy?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Let's discuss your goals and identify an approach that fits
                your business.
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
