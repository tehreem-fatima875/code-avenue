
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const campaignExamples = [
  {
    name: "E-commerce Sales",
    category: "Online Stores",
    objective: "PURCHASES",
    headline: "Turn product interest into action.",
    description:
      "A product-focused campaign concept designed to showcase an offer, highlight product benefits, and guide potential customers towards an online store.",
    accent: "#dce9ff",
    label: "PRODUCT CAMPAIGN",
  },
  {
    name: "Lead Generation",
    category: "Services & Businesses",
    objective: "LEADS",
    headline: "Start more meaningful conversations.",
    description:
      "A service-based campaign concept that communicates a clear value proposition and encourages interested people to submit an enquiry.",
    accent: "#d9f4eb",
    label: "LEAD CAMPAIGN",
  },
  {
    name: "Brand Awareness",
    category: "Growing Brands",
    objective: "AWARENESS",
    headline: "Make your brand easier to remember.",
    description:
      "A creative campaign concept focused on introducing a brand, communicating its message, and reaching a relevant audience.",
    accent: "#f3e3f5",
    label: "AWARENESS CAMPAIGN",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand your goals",
    description:
      "We discuss your business, offer, target customers, budget, and the outcome you want your advertising to support.",
  },
  {
    number: "02",
    title: "Plan the campaign",
    description:
      "We select an appropriate campaign objective, structure the campaign and ad sets, and plan audience and placement settings.",
  },
  {
    number: "03",
    title: "Prepare ad creatives",
    description:
      "We plan the ad messaging, primary text, headlines, and suitable creative formats around your offer and audience.",
  },
  {
    number: "04",
    title: "Set up and launch",
    description:
      "We configure the campaign, review destinations and tracking requirements, check settings, and publish once everything is ready.",
  },
  {
    number: "05",
    title: "Monitor and optimise",
    description:
      "We review available performance data, identify opportunities to improve, and make considered adjustments based on the campaign objective.",
  },
];

const faqs = [
  {
    question: "What are Meta Ads?",
    answer:
      "Meta Ads are paid advertisements delivered across eligible placements on platforms such as Facebook and Instagram. Campaigns can support different goals, including sales, leads, awareness, and engagement.",
  },
  {
    question: "How much budget do I need to start?",
    answer:
      "Your budget depends on your goals, market, offer, and audience. We can discuss a realistic starting budget for your business, but results and advertising costs are not guaranteed.",
  },
  {
    question: "Can Meta Ads generate website sales?",
    answer:
      "Yes. Sales campaigns can direct potential customers to your website. Results depend on factors such as your product, pricing, website experience, campaign setup, tracking, and creative quality.",
  },
  {
    question: "Do I need to provide images and videos?",
    answer:
      "Suitable creative assets help communicate your offer. We can discuss what you already have and what needs to be prepared. Any creative production or editing requirements should be agreed as part of the project scope.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "We use metrics relevant to the campaign objective. Depending on the setup, these may include reach, impressions, clicks, cost per result, leads, purchases, and purchase value. Reliable tracking is important when evaluating conversions.",
  },
];

function CampaignPreview({
  campaign,
}: {
  campaign: (typeof campaignExamples)[number];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-2 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-500">
          Campaign preview
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0866ff] text-sm font-bold text-white">
              C
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Your Business
              </p>
              <p className="mt-0.5 text-[10px] text-slate-500">
                Sponsored · Example concept
              </p>
            </div>
          </div>
          <span className="text-lg text-slate-400">···</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-700">
          {campaign.description}
        </p>

        <div
          className="relative mt-4 flex min-h-[205px] flex-col justify-between overflow-hidden rounded-lg p-5 sm:min-h-[225px]"
          style={{ backgroundColor: campaign.accent }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[24px] border-white/40"
          />
          <div className="relative">
            <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-600">
              {campaign.label}
            </p>
            <h3 className="mt-4 max-w-[240px] text-2xl font-bold leading-tight tracking-tight text-slate-900">
              {campaign.headline}
            </h3>
          </div>
          <div className="relative mt-6 flex items-center justify-between gap-3">
            <span className="text-[10px] font-medium text-slate-600">
              CREATIVE CONCEPT
            </span>
            <span className="rounded-full bg-slate-900 px-3 py-2 text-[10px] font-semibold text-white">
              LEARN MORE →
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3 text-[10px] text-slate-500">
          <span>Like · Comment · Share</span>
          <span>Engagement preview</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-900">
              Campaign objective
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              {campaign.category}
            </p>
          </div>
          <span className="rounded-md bg-cyan-50 px-3 py-2 text-[10px] font-bold tracking-wide text-cyan-800">
            {campaign.objective}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MetaAdsPage() {
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
              Facebook & Instagram Advertising
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Reach the Right People.
              <span className="mt-2 block text-cyan-400">
                Make Every Campaign Count.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Build a more thoughtful advertising strategy with Meta Ads.
              From campaign setup and creative planning to performance
              optimisation, every decision starts with your business goals.
            </p>

            <div className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400"
              >
                Discuss Your Ad Campaign
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Strategy. Creative testing. Data-informed optimisation.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Advertising with a purpose
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071a2b] sm:text-4xl">
                Better campaign decisions start with clear goals.
                <span className="block text-cyan-600">
                  Not guesswork.
                </span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Meta Ads can help businesses introduce their products,
                generate enquiries, and reach potential customers across
                Facebook and Instagram. The right strategy depends on what
                your business needs to achieve.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                We focus on campaign structure, relevant audiences, clear ad
                messaging, suitable creative formats, and meaningful
                performance data to guide optimisation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Campaign building blocks
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Based on your advertising goals
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <span aria-hidden="true">↗</span>
                </div>
              </div>

              {[
                ["Campaign strategy", "Choose an objective that fits your goal"],
                ["Audience planning", "Define relevant targeting settings"],
                ["Ad creatives & copy", "Communicate your offer clearly"],
                ["Tracking & optimisation", "Review results and improve decisions"],
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

        {/* CAMPAIGN EXAMPLES */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Campaign concepts
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Different goals. Different strategies.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A sales campaign should not be approached in the same way as
                a lead or awareness campaign. Here are three illustrative
                concepts showing how the message can change with the objective.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {campaignExamples.map((campaign) => (
                <article
                  key={campaign.name}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4"
                >
                  <CampaignPreview campaign={campaign} />

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      {campaign.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#071a2b]">
                      {campaign.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      {campaign.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
              These are original illustrative campaign concepts, not actual
              Meta Ads screenshots, client campaigns, performance reports, or
              evidence of advertising results.
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
                From campaign planning to optimisation.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A structured workflow helps keep your campaign aligned with
                your goals, budget, and available performance data.
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
                Meta Ads, explained.
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
                Ready to advertise?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s plan a campaign around your business goals.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
                Tell us about your business, your audience, and what you want
                your advertising to achieve. We&apos;ll discuss a suitable
                approach for your campaign.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Discuss Your Campaign
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
