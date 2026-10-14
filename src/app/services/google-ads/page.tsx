
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const campaignTypes = [
  {
    number: "01",
    name: "Search Campaigns",
    tag: "HIGH-INTENT SEARCH",
    description:
      "Text ads that can appear when people search Google for relevant products, services, or solutions. Useful for capturing existing demand.",
    examples: "Service enquiries, local businesses, professional services",
    accent: "#dce9ff",
  },
  {
    number: "02",
    name: "Performance Max",
    tag: "CROSS-CHANNEL",
    description:
      "Goal-based campaigns that use Google's automated optimisation to access eligible Google inventory from a single campaign, subject to campaign configuration.",
    examples: "Online sales, lead generation, broader conversion goals",
    accent: "#e2e0ff",
  },
  {
    number: "03",
    name: "Shopping Campaigns",
    tag: "PRODUCT ADVERTISING",
    description:
      "Product-focused ads that use information from a Merchant Center product feed, helping shoppers discover products, prices, and retailers.",
    examples: "Retail catalogues, physical products, online stores",
    accent: "#d9f4e8",
  },
  {
    number: "04",
    name: "Display Campaigns",
    tag: "VISUAL REACH",
    description:
      "Visual ads across eligible websites, apps, and other Google Display Network placements. Useful for awareness and eligible remarketing strategies.",
    examples: "Brand visibility, visual promotion, remarketing",
    accent: "#f5e5ef",
  },
  {
    number: "05",
    name: "YouTube & Video",
    tag: "VIDEO STORYTELLING",
    description:
      "Video advertising that can support awareness, consideration, and eligible conversion objectives through YouTube and other supported placements.",
    examples: "Product demonstrations, brand stories, video promotion",
    accent: "#ffe5dd",
  },
  {
    number: "06",
    name: "Demand Gen",
    tag: "DISCOVERY & CONSIDERATION",
    description:
      "Visual campaigns designed to create demand and encourage consideration across eligible Google surfaces, using available image and video formats.",
    examples: "Product discovery, audience engagement, visual offers",
    accent: "#dceef8",
  },
  {
    number: "07",
    name: "App Campaigns",
    tag: "APP GROWTH",
    description:
      "Campaigns designed to promote mobile apps and support eligible app installs or in-app actions, using the available app measurement setup.",
    examples: "App installs, app engagement, in-app conversions",
    accent: "#e6f0d8",
  },
];

const biddingStrategies = [
  {
    name: "Manual CPC",
    type: "Click-focused control",
    description:
      "Allows manual maximum cost-per-click bids in supported campaign types. Consider it when direct bid control is appropriate and the campaign supports it.",
  },
  {
    name: "Maximise Clicks",
    type: "Traffic",
    description:
      "Automatically adjusts bids to seek as many clicks as possible within the campaign budget. Click volume alone does not establish business success.",
  },
  {
    name: "Maximise Conversions",
    type: "Conversion volume",
    description:
      "Uses automated bidding to seek more conversions within the budget. Accurate conversion actions are important for useful optimisation.",
  },
  {
    name: "Target CPA",
    type: "Cost per acquisition",
    description:
      "Seeks conversions around a chosen average cost-per-acquisition target. A target that is too restrictive can limit delivery and volume.",
  },
  {
    name: "Maximise Conversion Value",
    type: "Conversion value",
    description:
      "Seeks to maximise the total reported conversion value within the budget. Values must be meaningful and tracked correctly.",
  },
  {
    name: "Target ROAS",
    type: "Return on ad spend",
    description:
      "Optimises towards a specified average return on advertising spend when suitable conversion values and campaign eligibility are in place.",
  },
];

const optimisationAreas = [
  {
    number: "01",
    title: "Search terms and keywords",
    description:
      "Review actual search queries, identify irrelevant traffic, add suitable negative keywords, and refine keyword coverage and match types.",
  },
  {
    number: "02",
    title: "Budget and bidding",
    description:
      "Review spend, conversion volume, acquisition cost, and value. Make budget and bidding decisions in context rather than reacting to a single day.",
  },
  {
    number: "03",
    title: "Ads and assets",
    description:
      "Review message relevance, asset coverage, landing-page alignment, and available ad diagnostics. Test meaningful creative variations.",
  },
  {
    number: "04",
    title: "Audience and location",
    description:
      "Evaluate geographic performance, audience signals or segments where supported, device trends, and scheduling when the data justifies a change.",
  },
  {
    number: "05",
    title: "Landing pages",
    description:
      "Check page speed, mobile usability, offer clarity, form friction, product information, and the match between the ad and destination page.",
  },
  {
    number: "06",
    title: "Conversion quality",
    description:
      "Compare tracked actions with meaningful business outcomes. Where possible, assess qualified leads, actual sales, revenue, and customer value.",
  },
];

const faqs = [
  {
    question: "How much does Google Ads cost?",
    answer:
      "There is no single price for Google Ads. Advertisers choose campaign budgets, while actual costs depend on factors such as competition, bidding, targeting, and available demand. Management fees and creative or tracking work may be separate from the advertising spend.",
  },
  {
    question: "Which Google Ads campaign type is best for my business?",
    answer:
      "It depends on your goal, offer, audience, website, and available measurement. Search can suit existing search demand; Shopping can suit eligible product catalogues; and Display, Video, Demand Gen, Performance Max, or App campaigns serve different needs. Campaign selection should follow your business objective rather than a one-size-fits-all rule.",
  },
  {
    question: "What is conversion tracking, and why does it matter?",
    answer:
      "Conversion tracking measures valuable actions such as purchases, qualified enquiries, calls, or other agreed outcomes. It helps evaluate campaign performance and informs automated bidding. The implementation should be tested carefully to avoid missing or duplicate conversions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Campaigns can begin serving after approval and eligibility checks, but meaningful performance assessment takes longer and varies by market, budget, conversion volume, and sales cycle. Automated bidding may need time and conversion data to adjust. No particular result or timeline is guaranteed.",
  },
  {
    question: "Can Google Ads work with my website and online store?",
    answer:
      "Yes. Google Ads can direct traffic to websites and online stores. Depending on your setup, Google Analytics 4, Google Tag Manager, conversion tracking, and Merchant Center can support measurement and product advertising. The appropriate integrations depend on your platform and goals.",
  },
];

function CampaignPreview({
  title,
  category,
  headline,
  description,
  accent,
  label,
}: {
  title: string;
  category: string;
  headline: string;
  description: string;
  accent: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-[#4285f4] shadow-sm">
            G
          </span>
          <span className="text-xs font-semibold text-slate-700">
            Search preview
          </span>
        </div>
        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-cyan-800">
          {label}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-full border border-slate-200 px-4 py-2.5 text-xs text-slate-500">
          Search for {category.toLowerCase()}...
        </div>

        <div className="mt-5 rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
              B
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-700">
                Your Business
              </p>
              <p className="text-[9px] text-slate-500">
                example.com
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs font-medium text-slate-500">
            Sponsored · Example concept
          </p>
          <h3 className="mt-2 text-lg font-medium leading-snug text-[#1a0dab]">
            {headline}
          </h3>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            {description}
          </p>

          <div
            className="mt-4 rounded-lg p-3"
            style={{ backgroundColor: accent }}
          >
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
              {title}
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-900">
              Relevant message. Clear next step.
            </p>
          </div>
        </div>

        <p className="mt-4 text-[10px] leading-5 text-slate-500">
          Illustrative layout only. Not a live Google ad.
        </p>
      </div>
    </div>
  );
}

export default function GoogleAdsPage() {
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
              Google Ads Strategy & Management
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Reach Customers
              <span className="mt-2 block text-cyan-400">
                When It Matters Most.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Make your advertising budget work towards meaningful business
              goals with strategic Google Ads management—from campaign
              planning and keyword research to conversion tracking and
              ongoing optimisation.
            </p>

            <div className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400"
              >
                Discuss Your Google Ads Strategy
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Strategy. Measurement. Continuous improvement.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Advertising with intent
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071a2b] sm:text-4xl">
                Reach people looking for what you offer.
                <span className="block text-cyan-600">
                  Turn data into better decisions.
                </span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Google Ads helps businesses connect with potential customers
                across Google advertising channels. Depending on your campaign,
                you can respond to search intent, showcase products, build
                awareness, promote videos, or encourage valuable actions.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Effective management involves more than publishing an ad. It
                requires an appropriate objective, relevant targeting, strong
                messaging, a suitable landing page, accurate measurement, and
                regular evaluation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    What professional management covers
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    A connected advertising workflow
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <span aria-hidden="true">↗</span>
                </div>
              </div>

              {[
                ["Strategy", "Goals, market research, and campaign selection"],
                ["Campaign setup", "Keywords, targeting, budgets, and ads"],
                ["Measurement", "Conversions, value, and analytics"],
                ["Optimisation", "Search terms, bids, assets, and landing pages"],
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

        {/* CAMPAIGN TYPES */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Google Ads campaign types
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Choose the campaign for the goal.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Each campaign type has a different role. The right choice
                depends on your audience, offer, assets, measurement setup,
                and business objective.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {campaignTypes.map((campaign) => (
                <article
                  key={campaign.number}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold tracking-widest text-cyan-700">
                      {campaign.number}
                    </span>
                    <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold tracking-wide text-slate-600">
                      {campaign.tag}
                    </span>
                  </div>

                  <div
                    className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-slate-800"
                    style={{ backgroundColor: campaign.accent }}
                  >
                    G
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#071a2b]">
                    {campaign.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {campaign.description}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-800">
                      Potential use cases
                    </p>
                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      {campaign.examples}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 text-xs leading-6 text-slate-500">
              Available formats, inventory, bidding options, and eligibility
              can vary by campaign type, account, market, and Google Ads
              product changes. Campaign selection should be verified against
              current account capabilities.
            </p>
          </div>
        </section>

        {/* KEYWORD RESEARCH */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Search strategy
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Keyword research starts with intent.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                For Search campaigns, keywords help connect ads with relevant
                searches. Good research considers what a person is trying to
                achieve, the relevance of your offer, expected competition,
                and whether your landing page satisfies that intent.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Search terms are the actual queries people enter. Reviewing
                them can reveal useful demand, irrelevant traffic, and new
                opportunities for refinement.
              </p>
            </div>

            <div className="space-y-4">
              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-[#071a2b]">
                  Keyword match types
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-800">
                        Broad match
                      </p>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-800">
                        Wider reach
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Can match relevant searches beyond the exact wording.
                      Requires careful monitoring and suitable conversion
                      goals.
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm font-semibold text-slate-800">
                      Phrase match
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Can match searches that include the meaning of the
                      keyword, with additional wording and variations allowed.
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm font-semibold text-slate-800">
                      Exact match
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Generally offers tighter control over the searches
                      matched to a keyword, while still allowing close
                      variations and searches with the same meaning or intent.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-[#071a2b]">
                  Negative keywords
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Negative keywords help prevent ads from showing for selected
                  irrelevant searches. Their matching behaviour differs from
                  positive keyword match types, so they should be reviewed
                  deliberately rather than added indiscriminately.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-[#071a2b]">
                  Search intent and landing-page relevance
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Separate informational searches from commercial or
                  transactional intent where appropriate. Make sure the ad
                  and destination address the problem or product the person
                  actually searched for.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ACCOUNT STRUCTURE */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Account architecture
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Build campaigns with a clear structure.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A well-organised account makes it easier to understand
                performance, manage budgets, and maintain relevance.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-center sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                  Account
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#071a2b]">
                  Business advertising account
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Billing, access, measurement configuration, and account-wide
                  settings.
                </p>
              </div>

              <div className="mx-auto h-8 w-px bg-slate-300" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                    Campaign A
                  </p>
                  <h3 className="mt-2 font-bold text-[#071a2b]">
                    Search · Service leads
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A defined objective, budget, bidding strategy, and
                    applicable targeting settings.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                    Campaign B
                  </p>
                  <h3 className="mt-2 font-bold text-[#071a2b]">
                    Search · Product sales
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A separate budget and structure where the sales goal
                    requires a different approach.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-[#071a2b]">
                    Ad groups
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Organise related keywords and ads into relevant themes
                    within eligible campaign types.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-[#071a2b]">
                    Keywords, ads, and assets
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Match relevant search intent with suitable messages and
                    destinations. Other campaign types may use asset groups
                    and different structures.
                  </p>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-slate-500">
              This is a simplified conceptual diagram. The actual hierarchy
              and available components differ across Search, Shopping,
              Performance Max, and other campaign types.
            </p>
          </div>
        </section>

        {/* BIDDING */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Bidding and budget management
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Choose a bidding strategy that fits the goal.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Bidding determines how Google Ads participates in eligible
                ad auctions. The strategy should reflect what you value:
                traffic, conversions, acquisition cost, or conversion value.
                Availability and controls depend on campaign type and setup.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {biddingStrategies.map((strategy) => (
                <article
                  key={strategy.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-cyan-800">
                    {strategy.type}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#071a2b]">
                    {strategy.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {strategy.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#071a2b]">
                Budget planning principles
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Define a business target
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Estimate what a lead or sale is worth and what acquisition
                    cost your business can reasonably support.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Allow meaningful measurement
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A budget must be considered alongside market demand,
                    competition, conversion rate, and expected click costs.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Evaluate over time
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Account for conversion delays and enough relevant data
                    before making significant changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AD COPY AND ASSETS */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Ads and creative assets
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Give people a clear reason to click.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Strong ads connect a relevant search or audience with a
                specific benefit and a suitable next step. The format depends
                on the campaign: Search ads rely on text and eligible assets,
                while visual campaigns use supported image and video formats.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Ad assets can provide additional information and interaction
                opportunities. Their display is not guaranteed; Google
                determines which eligible assets appear and how they are
                presented.
              </p>
            </div>

            <div className="space-y-4">
              {[
                [
                  "Responsive Search Ads",
                  "Provide multiple headlines and descriptions so Google can assemble eligible combinations and evaluate their performance.",
                ],
                [
                  "Sitelinks",
                  "Offer additional links to useful pages, such as services, pricing, product categories, or contact information.",
                ],
                [
                  "Callouts and structured snippets",
                  "Highlight concise business benefits or describe relevant services, product types, and features.",
                ],
                [
                  "Call, image, and other assets",
                  "Add eligible contact or visual information where appropriate for the campaign, account, and advertising goal.",
                ],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                >
                  <h3 className="font-bold text-[#071a2b]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TARGETING */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Targeting and reach
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Reach relevant audiences without losing sight of intent.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Targeting settings help define where, when, and to whom ads
                may be shown. Their availability and effect depend on campaign
                type, network, audience eligibility, and account settings.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Location targeting",
                  text: "Choose relevant countries, regions, cities, or supported geographic areas. Review location options carefully for your business model.",
                },
                {
                  title: "Language settings",
                  text: "Configure languages appropriate to the campaign and audience. Language targeting is not a guarantee of a person's preferred language.",
                },
                {
                  title: "Audience segments",
                  text: "Use eligible audience segments, remarketing lists, or other supported audience features according to the campaign and privacy requirements.",
                },
                {
                  title: "Devices and schedules",
                  text: "Review device and time-based performance and use available controls where they apply to the campaign type.",
                },
                {
                  title: "Networks and placements",
                  text: "Understand the inventory your campaign can access and review available network, placement, and brand-suitability controls.",
                },
                {
                  title: "Demographics and eligibility",
                  text: "Use supported demographic controls responsibly, following applicable advertising policies and restrictions for sensitive or regulated categories.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-bold text-[#071a2b]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRACKING AND ANALYTICS */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Measurement and analytics
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                If you cannot measure it properly, you cannot evaluate it properly.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Conversion measurement connects advertising activity to
                meaningful actions. It supports reporting, informed decisions,
                and automated bidding when the implementation and data quality
                are suitable.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Google Ads conversion tracking",
                  text: "Configure and test relevant conversion actions, such as purchases, submitted enquiries, or other agreed business outcomes. Avoid counting duplicate or low-value actions as primary goals.",
                },
                {
                  title: "Google Tag Manager",
                  text: "Manage supported tags and triggers through a structured setup. Preview and test changes before publishing, and maintain appropriate access controls.",
                },
                {
                  title: "Google Analytics 4",
                  text: "Analyse website and app behaviour, important events, and user journeys. Linking GA4 and Google Ads can support reporting and selected audience or conversion workflows.",
                },
                {
                  title: "Enhanced conversions",
                  text: "Where eligible and correctly implemented, enhanced conversions can use appropriately handled first-party customer data to improve conversion measurement. Consent and applicable privacy requirements still matter.",
                },
                {
                  title: "E-commerce and Merchant Center",
                  text: "For eligible retailers, maintain product information and feed quality in Merchant Center, and measure purchase actions and value accurately where supported.",
                },
                {
                  title: "Lead quality and offline outcomes",
                  text: "Where the business process supports it, connect eligible offline outcomes or qualified-lead information so reporting can reflect more than form submissions alone.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6"
                >
                  <h3 className="text-lg font-bold text-[#071a2b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <h3 className="font-bold text-slate-900">
                Tracking quality matters
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Before relying on campaign results, verify that tags fire
                correctly, conversion actions represent genuine outcomes,
                values and currencies are appropriate, and duplicate
                measurement is avoided. Implement consent and privacy
                requirements applicable to the website and audience.
              </p>
            </div>
          </div>
        </section>

        {/* PERFORMANCE METRICS */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Reporting and performance
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Understand the numbers behind your campaigns.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                No single metric tells the whole story. Performance should
                be assessed against the campaign objective, the quality of
                measured outcomes, and the economics of the business.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-[#071a2b]">
                      Metric
                    </th>
                    <th className="px-5 py-4 font-semibold text-[#071a2b]">
                      What it tells you
                    </th>
                    <th className="px-5 py-4 font-semibold text-[#071a2b]">
                      What to consider
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Impressions",
                      "How often ads were shown.",
                      "Visibility and available demand.",
                    ],
                    [
                      "CTR",
                      "Clicks relative to impressions.",
                      "Relevance of ads to the audience and query.",
                    ],
                    [
                      "Average CPC",
                      "Average cost per click.",
                      "Traffic cost alongside traffic quality.",
                    ],
                    [
                      "Conversion rate",
                      "Conversions relative to the chosen interaction denominator.",
                      "Tracking definitions and landing-page experience.",
                    ],
                    [
                      "CPA / cost per conversion",
                      "Average advertising cost per reported conversion.",
                      "Lead quality, margins, and business value.",
                    ],
                    [
                      "Conversion value",
                      "The value assigned to measured conversions.",
                      "Correct values, currencies, and attribution.",
                    ],
                    [
                      "ROAS",
                      "Reported conversion value relative to ad spend.",
                      "Profit margins and costs outside ad spend.",
                    ],
                    [
                      "Search impression share",
                      "Your share of eligible Search impressions received.",
                      "Eligibility, rank, budget, and auction competition.",
                    ],
                  ].map(([metric, meaning, consideration]) => (
                    <tr
                      key={metric}
                      className="border-t border-slate-100 align-top"
                    >
                      <td className="px-5 py-4 font-semibold text-slate-800">
                        {metric}
                      </td>
                      <td className="px-5 py-4 leading-6 text-slate-600">
                        {meaning}
                      </td>
                      <td className="px-5 py-4 leading-6 text-slate-600">
                        {consideration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-[#071a2b]">
                  Example: ROAS calculation
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  If a campaign reports PKR 50,000 in conversion value from
                  PKR 10,000 in ad spend, the reported ROAS is 5×, or 500%.
                  This is not the same as profit: product costs, fulfilment,
                  fees, and other business expenses still matter.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-[#071a2b]">
                  Example: cost per lead
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  If PKR 12,000 in ad spend generates 30 reported leads, the
                  average cost per lead is PKR 400. Lead qualification and
                  eventual sales determine whether that cost is sustainable.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* OPTIMISATION */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Ongoing optimisation
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Campaign management does not stop at launch.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Effective optimisation is a continuous process of checking
                data, finding meaningful issues, making justified changes,
                and evaluating what happened next.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {optimisationAreas.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6"
                >
                  <span className="text-sm font-bold tracking-widest text-cyan-700">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#071a2b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POLICY AND ACCOUNT MANAGEMENT */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Account health and compliance
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Responsible advertising starts with the right setup.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Campaign performance is only one part of account management.
                Billing, permissions, policy compliance, tracking, and
                destination quality also need attention.
              </p>
            </div>

            <div className="space-y-4">
              {[
                [
                  "Ad policy compliance",
                  "Review ad copy, landing pages, claims, restricted categories, and destination requirements against applicable Google Ads policies.",
                ],
                [
                  "Billing and account access",
                  "Keep account ownership, billing arrangements, user permissions, and payment responsibilities clear.",
                ],
                [
                  "Disapprovals and diagnostics",
                  "Investigate policy notices and delivery issues, correct underlying problems, and use available review or appeal processes where appropriate.",
                ],
                [
                  "Privacy and data handling",
                  "Use appropriate consent and data practices when implementing tags, remarketing, enhanced conversions, or audience-related features.",
                ],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-bold text-[#071a2b]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPAIGN EXAMPLES */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Illustrative campaign concepts
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Different businesses. Different search strategies.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                These original mock-ups demonstrate possible messaging
                approaches. They are not live advertisements, client
                campaigns, or evidence of campaign results.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              <article className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4">
                <CampaignPreview
                  title="Local service campaign"
                  category="local professional services"
                  headline="Professional Services for Your Business"
                  description="Explain the service, communicate a relevant benefit, and direct interested people to a useful enquiry page."
                  accent="#dce9ff"
                  label="LEADS"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-lg font-bold text-[#071a2b]">
                    Local service leads
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Could use a relevant Search strategy, geographic settings,
                    enquiry tracking, and a focused landing page.
                  </p>
                </div>
              </article>

              <article className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4">
                <CampaignPreview
                  title="Retail product campaign"
                  category="online products and shopping"
                  headline="Discover Products for Everyday Life"
                  description="Present a relevant product selection with clear information and a direct route to the appropriate product page."
                  accent="#d9f4e8"
                  label="SALES"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-lg font-bold text-[#071a2b]">
                    E-commerce sales
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Could involve Shopping or Performance Max where suitable,
                    supported by product data and reliable purchase tracking.
                  </p>
                </div>
              </article>

              <article className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4">
                <CampaignPreview
                  title="B2B enquiry campaign"
                  category="business software solutions"
                  headline="Find a Solution for Your Team"
                  description="Communicate a specific business benefit and help potential customers understand the next step."
                  accent="#f3e3f5"
                  label="QUALIFIED LEADS"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-lg font-bold text-[#071a2b]">
                    B2B enquiries
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Could combine tightly themed search intent, relevant
                    service pages, and lead-quality measurement.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Our management workflow
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                From audit to ongoing improvement.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                The exact scope depends on your account and goals, but a
                disciplined workflow helps keep each stage accountable.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Discovery and audit",
                  description:
                    "Understand the business, target audience, offer, budget, existing account, website, and current tracking setup.",
                },
                {
                  number: "02",
                  title: "Strategy and planning",
                  description:
                    "Choose suitable campaign types, set objectives, research keywords where relevant, and plan targeting and budgets.",
                },
                {
                  number: "03",
                  title: "Build and configure",
                  description:
                    "Create the agreed campaign structure, ads and assets, bidding settings, destinations, and measurement configuration.",
                },
                {
                  number: "04",
                  title: "Quality assurance",
                  description:
                    "Check links, policy requirements, budgets, targeting, tags, conversion actions, and the customer journey before launch.",
                },
                {
                  number: "05",
                  title: "Monitor and optimise",
                  description:
                    "Review delivery and conversion data, search terms where applicable, costs, asset performance, and landing-page issues.",
                },
                {
                  number: "06",
                  title: "Report and plan next steps",
                  description:
                    "Explain what the data supports, document changes, identify limitations, and agree on the next priorities with the client.",
                },
              ].map((step) => (
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

        {/* OFFICIAL LEARNING RESOURCES */}
        <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Useful resources
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Learn from the official documentation.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Google Ads features and requirements can change. These official
                resources are useful for checking campaign settings, tracking
                instructions, and current policies.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Google Ads Help",
                  description:
                    "Campaign setup, bidding, targeting, reporting, and troubleshooting.",
                  url: "https://support.google.com/google-ads/",
                },
                {
                  title: "Google Ads Policies",
                  description:
                    "Advertising requirements, restricted content, and disapprovals.",
                  url: "https://support.google.com/adspolicy/",
                },
                {
                  title: "Google Analytics Help",
                  description:
                    "Analytics setup, events, reporting, and linking accounts.",
                  url: "https://support.google.com/analytics/",
                },
                {
                  title: "Google Tag Manager Help",
                  description:
                    "Tags, triggers, testing, and implementation guidance.",
                  url: "https://support.google.com/tagmanager/",
                },
                {
                  title: "Google Merchant Center Help",
                  description:
                    "Product data, feed requirements, and retail advertising setup.",
                  url: "https://support.google.com/merchants/",
                },
                {
                  title: "Google Skillshop",
                  description:
                    "Official learning resources and advertising certifications.",
                  url: "https://skillshop.withgoogle.com/",
                },
              ].map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 transition hover:border-cyan-300 hover:bg-cyan-50/40"
                >
                  <h3 className="font-bold text-[#071a2b]">
                    {resource.title}
                    <span className="ml-2 text-cyan-700 transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Frequently asked questions
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Google Ads, explained.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white px-5 py-4 open:border-cyan-200 open:bg-cyan-50/40"
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
                Let's plan your next campaign
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Make your advertising strategy work towards a real business goal.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
                Tell us about your business, target audience, website, and
                advertising objectives. We can discuss a campaign approach
                based on your needs, available data, and budget.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Discuss Your Google Ads Campaign
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
