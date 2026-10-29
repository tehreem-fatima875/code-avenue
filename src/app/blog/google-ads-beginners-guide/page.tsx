import BlogIllustration from "@/components/sections/BlogIllustration";

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "A Beginner's Guide to Google Ads Campaigns | Code Avenue",
  description:
    "Learn how Google Ads works, choose campaign types, research keywords, plan budgets, write ads, track conversions, and optimise performance.",
  keywords: [
    "Google Ads beginner guide",
    "how Google Ads works",
    "Google Ads campaign setup",
    "Google Ads keyword research",
    "Google Ads conversion tracking",
  ],
};

const campaignTypes = [
  {
    title: "Search campaigns",
    bestFor: "Reaching people searching for relevant products or services.",
    details:
      "Text ads can appear alongside Google Search results when searches match your targeting and eligibility. Keyword selection, search intent, ad relevance, and landing page quality all matter.",
    example:
      "A web development business targeting relevant searches from people looking for website development services.",
  },
  {
    title: "Performance Max",
    bestFor:
      "Using Google's automated optimisation across eligible Google advertising inventory.",
    details:
      "Performance Max uses campaign goals, conversion data, creative assets, and automation to find opportunities across Google's channels. It requires thoughtful setup and meaningful conversion signals.",
    example:
      "An online store with suitable product information and reliable purchase tracking that wants to pursue online sales.",
  },
  {
    title: "Shopping campaigns",
    bestFor: "Promoting eligible products to shoppers.",
    details:
      "Shopping ads use product information from a Merchant Center feed. Product data quality, availability, pricing, images, and destination pages are important.",
    example:
      "A retailer promoting eligible products with accurate titles, prices, and product images.",
  },
  {
    title: "Display campaigns",
    bestFor: "Visual advertising across eligible websites and apps.",
    details:
      "Display campaigns can help businesses build awareness or reach relevant audiences with visual creative, depending on their targeting and campaign setup.",
    example:
      "A brand using visual ads to introduce its products to a broader audience.",
  },
  {
    title: "Video campaigns",
    bestFor: "Using video advertising across eligible placements such as YouTube.",
    details:
      "Video campaigns can support awareness, consideration, or other supported objectives. The creative, audience, placement, and chosen goal influence results.",
    example:
      "A business explaining a product or service through a short demonstration video.",
  },
  {
    title: "Demand Gen campaigns",
    bestFor: "Creating demand and reaching audiences through visual discovery experiences.",
    details:
      "Demand Gen campaigns use visual formats across eligible Google surfaces. They can be useful when creative storytelling and audience discovery are central to the strategy.",
    example:
      "A consumer brand showcasing a new collection to relevant prospective customers.",
  },
];

const faqs = [
  {
    question: "How much money do I need to start Google Ads?",
    answer:
      "There is no universal minimum budget that guarantees results. The appropriate amount depends on competition, average click costs, conversion rates, business margins, and how much data the campaign needs. Start with a budget you can afford to test and evaluate against clear business goals.",
  },
  {
    question: "How long does Google Ads take to produce results?",
    answer:
      "Ads may begin receiving impressions and clicks after approval and delivery, but meaningful business results depend on demand, competition, the offer, and conversion behaviour. Automated bidding may also need time and conversion data to optimise. Do not assume that early activity guarantees profitable performance.",
  },
  {
    question: "Are Google Ads and SEO the same thing?",
    answer:
      "No. Google Ads is a paid advertising platform, while search engine optimisation focuses on improving a website's visibility in unpaid search results. They can complement one another, but their costs, mechanisms, and timelines differ.",
  },
  {
    question: "Should I use broad match keywords?",
    answer:
      "Broad match can help discover relevant searches and works with Google's contextual and automated systems, but its suitability depends on your goal, conversion data, budget, and ability to monitor search terms. Use negative keywords and regular performance reviews where applicable.",
  },
  {
    question: "Why are my Google Ads getting clicks but no conversions?",
    answer:
      "Possible causes include irrelevant traffic, a mismatch between the ad and landing page, an unclear offer, pricing or trust concerns, a difficult form or checkout, or incorrect conversion tracking. Check the full visitor journey and verify measurement before making major changes.",
  },
];

export default function GoogleAdsBeginnersGuidePage() {
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
              <span className="text-sm text-slate-400">10 min read</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              A Beginner&apos;s Guide to{" "}
              <span className="text-cyan-400">Google Ads Campaigns</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Learn the fundamentals of Google Ads, from choosing a campaign
              type and researching keywords to setting budgets, measuring
              conversions, and improving performance.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
              <span>By Code Avenue</span>
              <span>•</span>
              <span>Google Ads Essentials</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-16">
          <article className="min-w-0">
            <BlogIllustration scene="google" />
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
                  <a className="hover:text-cyan-700" href="#basics">
                    1. What is Google Ads?
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#campaign-types">
                    2. Campaign types
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#keywords">
                    3. Keyword research
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#ad-creation">
                    4. Create effective ads
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#budget">
                    5. Budget and bidding
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#tracking">
                    6. Conversion tracking
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#optimisation">
                    7. Optimisation checklist
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#faqs">
                    8. FAQs
                  </a>
                </li>
              </ul>
            </nav>

            <section id="basics" className="mt-10 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                1. What is Google Ads and how does it work?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Google Ads is an advertising platform that allows businesses
                to promote products, services, apps, and other offers across
                eligible Google advertising inventory. Advertisers choose
                campaign objectives, configure targeting and budgets, provide
                creative assets, and measure results against their goals.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                In a Search campaign, for example, ads can compete to appear
                when someone searches for a relevant term. Other campaign
                types use different formats and delivery systems to reach
                audiences. Placement and performance depend on factors such
                as eligibility, competition, relevance, bidding, and campaign
                settings.
              </p>

              <h3 className="mt-7 text-lg font-bold text-slate-900">
                Understand the advertising auction
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Google does not simply show the advertiser willing to pay the
                most in every situation. Auction systems consider bid-related
                signals and factors such as ad and landing page quality,
                context, and the expected impact of relevant ad assets.
                Different campaign types use different delivery and
                optimisation systems.
              </p>

              <div className="mt-6 rounded-xl border-l-4 border-cyan-500 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#071a2b]">
                  Start with the business objective
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Decide whether you want purchases, qualified leads, relevant
                  website visits, or another meaningful result before choosing
                  a campaign type or bidding strategy.
                </p>
              </div>
            </section>

            <section id="campaign-types" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                2. Choose the right Google Ads campaign type
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Each campaign type serves different advertising needs. Choose
                based on the audience you need to reach, the assets you have,
                and the outcome you want to measure.
              </p>

              <div className="mt-7 space-y-5">
                {campaignTypes.map((campaign, index) => (
                  <div
                    key={campaign.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                      Campaign type 0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#071a2b]">
                      {campaign.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {campaign.details}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      <strong className="text-slate-900">Best for: </strong>
                      {campaign.bestFor}
                    </p>

                    <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                      <strong className="text-slate-900">Example: </strong>
                      {campaign.example}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Campaign availability, features, and inventory can change.
                Review Google's current campaign documentation before building
                a campaign, especially when using specialised features or
                product advertising.
              </p>
            </section>

            <section id="keywords" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                3. Research keywords and understand search intent
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Keyword research helps you understand the searches that may
                be relevant to your business. The goal is not to collect as
                many keywords as possible; it is to identify searches that
                match what you offer and what potential customers need.
              </p>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Think about the intent behind a search
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Informational intent
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Someone wants to understand a topic, compare options, or
                    learn how something works.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Example: &quot;how to build a business website&quot;
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Commercial investigation
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Someone is comparing providers, solutions, or products
                    before deciding.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Example: &quot;website development services&quot;
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Transactional intent
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Someone appears ready to take an action, such as buying a
                    product or requesting a service.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Example: &quot;hire a website developer&quot;
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Navigational intent
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Someone is looking for a particular business, website, or
                    destination.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Example: a search for a specific company name.
                  </p>
                </div>
              </div>

              <h3 className="mt-7 text-lg font-bold text-slate-900">
                Understand keyword match types
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Search campaigns support broad match, phrase match, and exact
                match. These determine how keywords can match searches; they
                should not be treated as simple character-for-character rules.
                Google's matching systems consider meaning and other signals,
                and actual search terms can differ from the keyword you entered.
              </p>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead className="bg-[#071a2b] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Match type</th>
                      <th className="p-4 font-semibold">General behaviour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-semibold">Broad match</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Can match a wider range of related searches using
                        contextual signals.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Phrase match</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Can match searches that include the meaning of the
                        keyword, with additional words and variations.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Exact match</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Generally provides the most restrictive of these
                        keyword match types, while still allowing searches
                        with the same meaning or intent.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-7 text-lg font-bold text-slate-900">
                Use negative keywords thoughtfully
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Negative keywords can help exclude searches that are not
                relevant to your offer. For example, a business selling paid
                professional services might exclude certain free-resource
                searches if those searches are consistently irrelevant to its
                objective.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Review actual search terms and apply exclusions carefully.
                Negative keyword matching works differently from positive
                keyword matching, so check the relevant rules before excluding
                broad groups of searches.
              </p>
            </section>

            <section id="ad-creation" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                4. Create relevant ads and landing pages
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                An effective ad communicates a relevant offer and sets
                expectations that the destination page can fulfil. Clear
                messaging helps people understand why they should take the
                next step.
              </p>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Focus on these elements
              </h3>

              <ul className="mt-4 space-y-3">
                {[
                  "Relevant headlines that reflect the user's need.",
                  "A clear description of the product, service, or offer.",
                  "Specific and supportable benefits rather than exaggerated claims.",
                  "A useful call to action that matches the intended outcome.",
                  "Relevant ad assets, such as sitelinks, where appropriate.",
                  "A destination page that matches the ad and works correctly on mobile.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-cyan-700">✓</span>
                    <span className="leading-7 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
                  Illustrative search ad
                </p>
                <p className="mt-3 text-sm font-medium text-emerald-700">
                  Example Business · example.com
                </p>
                <h3 className="mt-2 text-xl font-semibold text-blue-700">
                  Professional Websites for Your Business
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore website development options tailored to your
                  business goals. Review features and discuss your project
                  requirements.
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  This is a fictional example for learning purposes, not a
                  live advertisement or a claim about campaign results.
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                For a more focused campaign, consider using a dedicated
                landing page instead of sending every visitor to your
                homepage. The right destination depends on the offer and
                how much information the visitor needs before converting.
              </p>

              <Link
                href="/services/landing-pages"
                className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900"
              >
                Explore Landing Page Design <span className="ml-2">→</span>
              </Link>
            </section>

            <section id="budget" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                5. Set a realistic budget and bidding strategy
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Your budget determines how much you are willing to spend,
                while your bidding strategy influences how Google participates
                in auctions towards your campaign goal. The appropriate setup
                depends on the campaign type, available conversion data, and
                business economics.
              </p>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Common bidding approaches
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Maximise Clicks
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A strategy designed to obtain clicks within the campaign's
                    budget constraints. Click volume alone does not establish
                    whether those visits are valuable.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Maximise Conversions
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A conversion-focused strategy that uses automated bidding
                    to seek as many conversions as possible within the
                    configured budget.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Target CPA
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Where available, this approach aims to obtain conversions
                    around a specified average acquisition cost. Setting an
                    unrealistic target can restrict delivery.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Maximise Conversion Value and Target ROAS
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    These approaches focus on conversion value rather than
                    treating every conversion as equally valuable. Reliable
                    value tracking is particularly important.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Before choosing a bidding strategy, define a valid conversion
                and make sure it is being recorded correctly. Review the
                current Google Ads recommendations for your campaign type,
                because eligibility and features can change.
              </p>

              <div className="mt-6 rounded-xl border-l-4 border-cyan-500 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#071a2b]">
                  Budgeting example
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  A hypothetical daily budget of PKR 1,000 corresponds to
                  PKR 30,000 over a 30-day planning period if maintained at
                  that level. Actual platform billing can vary under Google
                  Ads' daily spending rules, so check the applicable budget
                  and billing settings.
                </p>
              </div>
            </section>

            <section id="tracking" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                6. Set up conversion tracking before judging results
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Conversion tracking helps connect advertising activity with
                actions that matter to the business. Without reliable
                measurement, you may optimise for clicks while overlooking
                whether those clicks lead to sales or qualified enquiries.
              </p>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                Examples of conversions
              </h3>

              <ul className="mt-4 space-y-3">
                {[
                  "A completed online purchase.",
                  "A successfully submitted lead form.",
                  "A qualified phone call, where configured and appropriate.",
                  "A completed booking or registration.",
                  "Another clearly defined action that represents meaningful progress.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-cyan-700">✓</span>
                    <span className="leading-7 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 text-lg font-bold text-slate-900">
                Tools and checks to consider
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Google tag and Google Tag Manager
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Depending on your setup, these can help implement and
                    manage relevant measurement tags. Check event triggers,
                    consent requirements, and duplicate firing.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Google Analytics 4
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Analytics can help you understand website behaviour and
                    configured key events. Confirm which events are imported
                    or measured in each platform and avoid double-counting.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="font-bold text-[#071a2b]">
                    Merchant Center for product advertising
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Eligible product campaigns may require a suitable product
                    feed and Merchant Center setup. Product details should
                    accurately reflect the website and comply with applicable
                    policies.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Test conversions before launching or making major optimisation
                decisions. Follow relevant privacy, consent, and platform
                requirements, and only collect data you are authorised to use.
              </p>
            </section>

            <section id="optimisation" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                7. Beginner optimisation checklist
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Once your campaign is active, review it systematically.
                Avoid making frequent changes without a clear reason or
                enough evidence to evaluate the effect.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <ul className="space-y-4">
                  {[
                    "Confirm that the campaign objective matches the business goal.",
                    "Check campaign approval, delivery, location, language, and schedule settings.",
                    "Review search terms where applicable and add relevant negative keywords.",
                    "Ensure ads accurately communicate the offer and comply with applicable policies.",
                    "Test destination URLs, mobile usability, forms, and checkout.",
                    "Verify that primary conversions are firing correctly and not being duplicated.",
                    "Review spend, conversions, acquisition cost, and conversion value where available.",
                    "Check lead quality or order profitability rather than relying on clicks alone.",
                    "Document significant changes and evaluate their results over a suitable period.",
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

              <h3 className="mt-7 text-lg font-bold text-slate-900">
                Common metrics to understand
              </h3>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead className="bg-[#071a2b] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Metric</th>
                      <th className="p-4 font-semibold">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-semibold">Impressions</td>
                      <td className="p-4 leading-6 text-slate-600">
                        How often an ad was shown, according to the platform's
                        reporting definition.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CTR</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Clicks divided by impressions, expressed as a
                        percentage.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CPC</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Average cost per click.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CPA</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Cost per acquisition or defined conversion, depending
                        on the measurement used.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">ROAS</td>
                      <td className="p-4 leading-6 text-slate-600">
                        Attributed conversion value divided by advertising
                        spend; it is not the same as profit.
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                Google Ads Services
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#071a2b]">
                Make your advertising more purposeful.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore campaign planning, targeting, measurement, and
                optimisation for your business goals.
              </p>

              <Link
                href="/services/google-ads"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore Google Ads
              </Link>

              <Link
                href="/services/landing-pages"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore Landing Pages
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
                  href="/blog/meta-ads-vs-google-ads"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  Meta Ads vs Google Ads →
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
                Ready to plan your Google Ads campaign?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Let's discuss your objectives and build a strategy around
                meaningful business outcomes.
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
