import BlogIllustration from "@/components/sections/BlogIllustration";

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Landing Page Mistakes That Can Cost You Conversions | Code Avenue",
  description:
    "Discover common landing page mistakes, from unclear headlines and weak CTAs to slow loading, poor mobile usability, and missing conversion tracking.",
  keywords: [
    "landing page mistakes",
    "landing page optimisation",
    "landing page conversion rate",
    "conversion-focused landing page design",
    "landing page best practices",
  ],
};

const mistakes = [
  {
    number: "01",
    title: "An unclear or generic headline",
    problem:
      "Visitors may leave if they cannot quickly understand what you offer, who it is for, and why it matters.",
    fix:
      "Write a specific headline that communicates the main benefit. Support it with a short explanation that clarifies the offer and sets realistic expectations.",
    example:
      "Instead of 'Welcome to Our Website', explain what the visitor can get, such as 'Build a Professional Website for Your Growing Business'.",
  },
  {
    number: "02",
    title: "Too many competing calls to action",
    problem:
      "Multiple equally prominent buttons can make it difficult for visitors to identify the intended next step.",
    fix:
      "Choose one primary action that matches the campaign goal. Secondary actions can remain available, but should not compete unnecessarily for attention.",
    example:
      "A lead-generation page might prioritise 'Request a Consultation' instead of giving equal prominence to several unrelated actions.",
  },
  {
    number: "03",
    title: "A confusing or cluttered layout",
    problem:
      "Crowded sections, inconsistent spacing, excessive animations, and distracting elements can make important information harder to find.",
    fix:
      "Use a clear visual hierarchy, readable typography, sufficient spacing, and a logical order for benefits, supporting information, and the CTA.",
    example:
      "Place the main offer and CTA near the beginning, then use later sections to explain benefits, answer objections, and build confidence.",
  },
  {
    number: "04",
    title: "Ignoring mobile visitors",
    problem:
      "A page that works on a desktop may have tiny text, awkwardly stacked sections, difficult forms, or buttons that are hard to tap on mobile.",
    fix:
      "Design responsively and test the complete journey on smaller screens, including navigation, forms, buttons, and confirmation messages.",
    example:
      "Check that visitors can complete a contact form on a phone without zooming or scrolling sideways.",
  },
  {
    number: "05",
    title: "Slow loading and unnecessary scripts",
    problem:
      "Oversized images, excessive third-party scripts, and inefficient page elements can delay the experience, especially on slower connections.",
    fix:
      "Optimise images, remove unused scripts, minimise unnecessary animations, and measure performance with tools such as PageSpeed Insights.",
    example:
      "Resize and compress a large hero image rather than serving a huge original file to every visitor.",
  },
  {
    number: "06",
    title: "Missing trust signals",
    problem:
      "Visitors may hesitate when an offer lacks clear business information, relevant evidence, transparent terms, or accessible contact details.",
    fix:
      "Use genuine testimonials when available, explain your process, provide accurate contact details, and clearly state relevant pricing, policies, or conditions.",
    example:
      "A service landing page can explain what happens after someone submits a form and how their enquiry will be handled.",
  },
  {
    number: "07",
    title: "A mismatch between the ad and landing page",
    problem:
      "When an advertisement promises one thing but the destination page presents something different, visitors may lose confidence or abandon the journey.",
    fix:
      "Keep the offer, wording, product or service, and expectations consistent between the ad and its destination page.",
    example:
      "If an ad promotes a specific product discount, make the same offer and its conditions easy to find on the landing page.",
  },
  {
    number: "08",
    title: "Forms that ask for too much information",
    problem:
      "Long forms can create unnecessary effort, particularly when visitors are only trying to make an initial enquiry.",
    fix:
      "Request the information genuinely needed at that stage. Use clear field labels, helpful validation, and understandable error messages.",
    example:
      "An initial consultation form may need a name, contact method, and a short description rather than a lengthy questionnaire.",
  },
  {
    number: "09",
    title: "No reliable conversion tracking",
    problem:
      "Without reliable measurement, it is difficult to tell whether the page generates meaningful leads, purchases, or other desired actions.",
    fix:
      "Define the conversion clearly and test the relevant analytics or advertising events. Check for duplicate events and confirm that successful actions are recorded correctly.",
    example:
      "For lead generation, measure successful form submissions rather than treating every button click as a completed lead.",
  },
  {
    number: "10",
    title: "Changing everything without testing",
    problem:
      "A redesign may look better but still perform worse. Making many changes simultaneously also makes it harder to identify what affected results.",
    fix:
      "Use available data to identify a specific problem, make a focused change, and compare outcomes under reasonably consistent conditions.",
    example:
      "Test a clearer headline against the original while keeping other major page elements stable, where traffic and testing tools allow a meaningful comparison.",
  },
];

const faqs = [
  {
    question: "What is the most important element of a landing page?",
    answer:
      "There is no single element that guarantees success. A clear offer, relevant headline, suitable call to action, credible supporting information, and smooth user experience should work together to help visitors complete the intended action.",
  },
  {
    question: "How long should a landing page be?",
    answer:
      "It depends on the complexity of the offer and the information visitors need before deciding. A simple offer may need little explanation, while a more expensive or unfamiliar service may require additional details, evidence, and answers to common questions.",
  },
  {
    question: "Should a landing page have a navigation menu?",
    answer:
      "Not always. A focused campaign page may benefit from reducing unnecessary exits, but visitors still need access to essential information and policies. The right structure depends on the audience, offer, and purpose of the page.",
  },
  {
    question: "How can I tell whether my landing page is working?",
    answer:
      "Track the action that matters to the business, such as a qualified enquiry or completed purchase. Review conversion rate alongside traffic quality, lead quality, revenue, and acquisition cost where relevant. Use a clearly defined measurement method.",
  },
  {
    question: "Should I use the same landing page for Meta Ads and Google Ads?",
    answer:
      "You can use the same page when the audience, offer, and message align. However, separate pages or variations may be useful when search intent, creative messaging, or audience needs differ. Keep the experience relevant to each campaign.",
  },
];

export default function LandingPageMistakesPage() {
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
                Web Design
              </span>
              <span className="text-sm text-slate-400">9 min read</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Landing Page Mistakes That Can{" "}
              <span className="text-cyan-400">Cost You Conversions</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A landing page should make it easy for visitors to understand
              your offer and take the next step. Learn which common problems
              can create friction and how to address them.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
              <span>By Code Avenue</span>
              <span>•</span>
              <span>Conversion Optimisation</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-16">
          <article className="min-w-0">
            <BlogIllustration scene="landing" />
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
                  <a className="hover:text-cyan-700" href="#understanding">
                    1. Understand landing pages
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#mistakes">
                    2. Ten common mistakes
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#optimisation">
                    3. Improve your page
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#checklist">
                    4. Pre-launch checklist
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-700" href="#faqs">
                    5. Frequently asked questions
                  </a>
                </li>
              </ul>
            </nav>

            <section id="understanding" className="mt-10 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                1. What makes a landing page effective?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                A landing page is designed around a particular offer, campaign,
                or action. That action might be submitting an enquiry,
                registering for an event, downloading a resource, or purchasing
                a product.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Unlike a general website page that may serve several purposes,
                a focused landing page should make its main message and next
                step easy to understand. Visitors should not have to guess
                what is being offered or search through unrelated information.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                However, a landing page is not effective simply because it has
                fewer sections or a large button. Its content must be relevant
                to the visitor, the offer must be clear, and the page must
                work reliably across devices.
              </p>

              <div className="mt-6 rounded-xl border-l-4 border-cyan-500 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#071a2b]">
                  Keep the visitor's goal in focus
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Every major section should help visitors understand the
                  offer, evaluate whether it suits them, or take the next
                  appropriate step.
                </p>
              </div>
            </section>

            <section id="mistakes" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                2. Ten common landing page mistakes
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                These issues can create friction or reduce confidence. Review
                them against your own page, then prioritise changes according
                to evidence rather than trying to change everything at once.
              </p>

              <div className="mt-7 space-y-5">
                {mistakes.map((mistake) => (
                  <section
                    key={mistake.number}
                    className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-800">
                        {mistake.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#071a2b]">
                          {mistake.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          <strong className="text-slate-900">The problem: </strong>
                          {mistake.problem}
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                          <strong className="text-slate-900">How to fix it: </strong>
                          {mistake.fix}
                        </p>

                        <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                          <strong className="text-slate-900">
                            Example:{" "}
                          </strong>
                          {mistake.example}
                        </p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <section id="optimisation" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                3. How to improve your landing page systematically
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Good optimisation starts with understanding the visitor journey.
                Rather than redesigning the page based on personal preference,
                identify where users struggle and make changes that address
                those problems.
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Step 1: Check the message and offer
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Ask whether a new visitor can quickly identify the offer,
                    its main benefit, and the intended action. Make sure the
                    page delivers what the advertisement or link promised.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Step 2: Review the complete user journey
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Open the page on desktop and mobile. Follow every button,
                    complete the form, check error messages, and verify the
                    confirmation state. Test any purchase flow in an appropriate
                    test environment before launch.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Step 3: Examine performance data
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Review traffic sources, device types, conversion events,
                    and points where visitors leave the journey. Make sure
                    analytics events are accurate before drawing conclusions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Step 4: Prioritise the biggest problem
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Fix broken forms, misleading messaging, or checkout errors
                    before spending time on small decorative changes. Prioritise
                    issues by their likely impact, confidence in the diagnosis,
                    and effort required.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Step 5: Test and learn
                  </h3>
                  <p className="mt-2 leading-8 text-slate-600">
                    Where traffic permits, compare meaningful variations using
                    a consistent method. Change one major element at a time
                    when practical, allow enough data to accumulate, and avoid
                    treating small fluctuations as proof of improvement.
                  </p>
                </div>
              </div>
            </section>

            <section id="checklist" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                4. Landing page pre-launch checklist
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Use this checklist before publishing a campaign or sending
                paid traffic to a landing page.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <ul className="space-y-4">
                  {[
                    "The headline explains the offer clearly.",
                    "The primary CTA matches the intended conversion goal.",
                    "The page matches the message and conditions in the advertisement.",
                    "Important benefits and relevant supporting information are easy to find.",
                    "Any testimonials, reviews, or claims are genuine and supportable.",
                    "Forms and buttons work, with clear error and confirmation messages.",
                    "The layout is readable and usable on mobile devices.",
                    "Images are optimised and the page performs well on typical connections.",
                    "Contact details and relevant privacy or offer terms are accessible.",
                    "Analytics and conversion events have been tested.",
                    "The destination URL and campaign links work correctly.",
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

              <p className="mt-6 leading-8 text-slate-600">
                A checklist helps prevent avoidable problems, but it cannot
                guarantee a particular conversion rate. Continue reviewing
                real user behaviour and business outcomes after launch.
              </p>
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
                Landing Page Design
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#071a2b]">
                Give every campaign a clearer destination.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore focused landing pages designed around your offer,
                audience, and conversion goal.
              </p>

              <Link
                href="/services/landing-pages"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a2b] transition hover:border-cyan-400 hover:text-cyan-700"
              >
                Explore Landing Pages
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
                Discuss Your Project
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
                  href="/blog/choose-the-right-website"
                  className="mt-3 block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                >
                  How to Choose the Right Website →
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
                Ready to improve your landing page?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Let's discuss a focused page that supports your campaign and
                makes the next step clear.
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
