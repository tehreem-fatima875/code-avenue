
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const landingExamples = [
  {
    number: "01",
    name: "Lead Generation",
    category: "Services & Businesses",
    headline: "Let's Find the Right Solution for You.",
    description:
      "A focused page that explains a service, builds confidence, and makes it easy for interested visitors to submit an enquiry.",
    accent: "#dce9ff",
    button: "GET IN TOUCH",
    elements: ["Clear offer", "Short enquiry form", "Trust signals"],
  },
  {
    number: "02",
    name: "Product Campaign",
    category: "E-commerce & Retail",
    headline: "Meet Your New Everyday Essential.",
    description:
      "A product-focused experience that highlights benefits, answers common questions, and guides visitors towards a purchase.",
    accent: "#d9f4e8",
    button: "EXPLORE PRODUCT",
    elements: ["Product benefits", "Visual storytelling", "Purchase CTA"],
  },
  {
    number: "03",
    name: "Offer & Registration",
    category: "Events & Promotions",
    headline: "Your Next Opportunity Starts Here.",
    description:
      "A campaign-specific page that communicates an offer or event and encourages a clearly defined registration or sign-up action.",
    accent: "#f3e3f5",
    button: "REGISTER NOW",
    elements: ["Focused message", "Offer details", "Simple sign-up"],
  },
];

const pageElements = [
  {
    number: "01",
    title: "A clear headline",
    description:
      "Tell visitors what the offer is and why it is relevant. The main message should be understandable without making people search for the point.",
  },
  {
    number: "02",
    title: "A compelling value proposition",
    description:
      "Explain the benefits, differentiate the offer, and address the main reason someone should take the next step.",
  },
  {
    number: "03",
    title: "A focused call to action",
    description:
      "Use a clear action such as requesting a quote, booking a consultation, registering, or purchasing. Make the next step obvious.",
  },
  {
    number: "04",
    title: "Relevant trust signals",
    description:
      "Where available, include genuine testimonials, reviews, credentials, guarantees, or other evidence that helps visitors evaluate the offer.",
  },
  {
    number: "05",
    title: "A suitable form or conversion path",
    description:
      "Ask only for information you need at that stage. Reduce unnecessary friction while collecting enough information to support the next step.",
  },
  {
    number: "06",
    title: "A mobile-friendly experience",
    description:
      "Make text readable, buttons easy to use, layouts responsive, and important information accessible on smaller screens.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define the conversion goal",
    description:
      "Decide whether the page should generate enquiries, sales, bookings, registrations, or another measurable action.",
  },
  {
    number: "02",
    title: "Understand the audience",
    description:
      "Identify the visitor's needs, motivations, objections, and the message that brought them to the page.",
  },
  {
    number: "03",
    title: "Plan the content and layout",
    description:
      "Arrange the headline, benefits, supporting information, proof, and call to action into a logical sequence.",
  },
  {
    number: "04",
    title: "Design and develop",
    description:
      "Build the responsive page, create the agreed visual elements, and implement forms, buttons, and relevant integrations.",
  },
  {
    number: "05",
    title: "Configure measurement",
    description:
      "Set up appropriate conversion events and analytics where required, then test that the intended action is recorded correctly.",
  },
  {
    number: "06",
    title: "Test and improve",
    description:
      "Check the complete user journey, review available performance data, and prioritise improvements based on evidence.",
  },
];

const faqs = [
  {
    question: "What is a landing page?",
    answer:
      "A landing page is a page designed around a particular visitor goal or marketing offer. Unlike a general website homepage, it often focuses on one primary action, such as submitting an enquiry, registering, or purchasing.",
  },
  {
    question: "Do I need a landing page for Google Ads or Meta Ads?",
    answer:
      "Not every campaign requires a separate landing page, but a dedicated page can make the experience more relevant to the ad. The page should match the campaign message and make the intended next step easy to complete.",
  },
  {
    question: "Can you add forms and conversion tracking?",
    answer:
      "Yes, depending on the agreed scope. Forms and suitable analytics or advertising conversion events can be implemented and tested. Tracking should accurately represent the intended action and avoid duplicate conversions.",
  },
  {
    question: "How do you improve a landing page's conversion rate?",
    answer:
      "Improvements can involve clearer messaging, stronger offer relevance, better mobile usability, fewer form fields, faster loading, more useful trust signals, and testing meaningful variations. Results depend on the audience, offer, traffic, and implementation.",
  },
  {
    question: "Can a landing page be connected to my existing website?",
    answer:
      "Yes. It can be built within an existing website or as a separate campaign page, depending on your technology and requirements. The best approach depends on your current setup, integrations, and how the page will be managed.",
  },
];

function LandingPagePreview({
  example,
}: {
  example: (typeof landingExamples)[number];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ml-2 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-500">
          Campaign landing page
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <span className="text-xs font-bold tracking-wide text-slate-800">
            YOUR BRAND
          </span>
          <span className="text-[10px] text-slate-500">ABOUT · CONTACT</span>
        </div>

        <div
          className="relative mt-4 overflow-hidden rounded-lg px-4 py-7 sm:px-5 sm:py-9"
          style={{ backgroundColor: example.accent }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[22px] border-white/40"
          />

          <div className="relative">
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
              {example.category}
            </p>
            <h3 className="mt-3 max-w-xs text-2xl font-bold leading-tight tracking-tight text-slate-900">
              {example.headline}
            </h3>
            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-700">
              {example.description}
            </p>
            <div className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2.5 text-[9px] font-bold tracking-wide text-white">
              {example.button} <span className="ml-2">→</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {example.elements.map((element, index) => (
            <div
              key={element}
              className="rounded-md border border-slate-100 bg-slate-50 p-2.5"
            >
              <span className="text-xs font-bold text-cyan-700">
                0{index + 1}
              </span>
              <p className="mt-2 text-[9px] font-medium leading-4 text-slate-600 sm:text-[10px]">
                {element}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] leading-5 text-slate-500">
          Original illustrative concept · Not a live client page
        </p>
      </div>
    </div>
  );
}

export default function LandingPagesPage() {
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
              Landing Page Design & Development
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Turn More Visits
              <span className="mt-2 block text-cyan-400">
                Into Meaningful Actions.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Focus your message, showcase your offer, and give visitors a
              clear next step with a landing page designed around your
              campaign and business objectives.
            </p>

            <div className="mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400"
              >
                Build Your Landing Page
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Clear messaging. Focused design. Measurable actions.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Designed with a purpose
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#071a2b] sm:text-4xl">
                One clear goal.
                <span className="block text-cyan-600">
                  A more focused experience.
                </span>
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                A landing page gives a specific offer the space it needs.
                Instead of asking visitors to navigate an entire website,
                it presents relevant information and guides them towards
                a particular action.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                That action might be requesting a quote, booking a
                consultation, purchasing a product, registering for an event,
                or signing up for a service. The page structure should support
                that goal from the headline to the final CTA.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Landing page essentials
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Each element supports the goal
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <span aria-hidden="true">↗</span>
                </div>
              </div>

              {[
                ["Relevant headline", "Match the visitor's expectations"],
                ["Clear value proposition", "Explain why the offer matters"],
                ["Focused call to action", "Make the next step obvious"],
                ["Conversion measurement", "Track the intended action"],
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

        {/* LANDING PAGE EXAMPLES */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Landing page concepts
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Different offers need different page experiences.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                These original illustrative designs show how the layout and
                message can change depending on the action a business wants
                visitors to take.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {landingExamples.map((example) => (
                <article
                  key={example.number}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 sm:p-4"
                >
                  <LandingPagePreview example={example} />

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
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
              These are original illustrative concepts, not live client
              websites, screenshots, or evidence of conversion results.
            </p>
          </div>
        </section>

        {/* CORE ELEMENTS */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                What makes a strong landing page?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Every section should have a reason to be there.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Good design is not just about appearance. The page should
                answer visitors' questions, remove unnecessary friction,
                communicate credibility, and make the desired action easy
                to understand.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pageElements.map((element) => (
                <article
                  key={element.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <span className="text-sm font-bold tracking-widest text-cyan-700">
                    {element.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#071a2b]">
                    {element.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {element.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AD CAMPAIGN CONNECTION */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Built for your campaign
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                A smoother journey from ad click to action.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                When someone clicks an advertisement, the landing page should
                continue the same conversation. The offer, headline, visual
                message, and next step should feel relevant to what the
                visitor expected.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                A dedicated landing page can help businesses create a more
                focused destination for paid traffic, but the outcome also
                depends on the audience, offer, pricing, competition, and
                overall customer experience.
              </p>
            </div>

            <div className="space-y-4">
              <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    G
                  </span>
                  <div>
                    <h3 className="font-bold text-[#071a2b]">
                      Google Ads landing pages
                    </h3>
                    <p className="text-xs text-slate-500">
                      Search intent and relevance
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Align the page with the search query and ad message.
                  Provide relevant information, a useful destination, and
                  a clear next step for visitors.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">
                    M
                  </span>
                  <div>
                    <h3 className="font-bold text-[#071a2b]">
                      Meta Ads landing pages
                    </h3>
                    <p className="text-xs text-slate-500">
                      Creative continuity and offer clarity
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Continue the story established by the Facebook or Instagram
                  ad, explain the offer, address common objections, and make
                  the conversion path straightforward.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                <h3 className="font-bold text-[#071a2b]">
                  Measurement across the journey
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Where required, configure suitable analytics and conversion
                  events so the intended actions can be measured and tested.
                  Implement tracking with appropriate privacy and consent
                  considerations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONVERSION OPTIMISATION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Conversion rate optimisation
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Improve the experience using evidence.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Conversion rate optimisation involves identifying friction,
                testing meaningful improvements, and measuring whether the
                changes help achieve the intended goal.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Message clarity",
                  text: "Make the offer and its benefits easy to understand. Check whether the headline matches the source of the visitor.",
                },
                {
                  title: "Form usability",
                  text: "Review field count, validation, error messages, and completion on mobile devices.",
                },
                {
                  title: "Page performance",
                  text: "Check loading behaviour, image sizes, layout stability, and the usability of the page on real devices.",
                },
                {
                  title: "A/B testing",
                  text: "Compare carefully chosen page variations when traffic and measurement support a meaningful experiment.",
                },
                {
                  title: "Analytics review",
                  text: "Examine the agreed conversion event and useful supporting behaviour, while respecting privacy and consent requirements.",
                },
                {
                  title: "Trust and objections",
                  text: "Answer relevant questions and use genuine proof or clear terms to address concerns that may prevent action.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
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

            <p className="mt-6 text-xs leading-6 text-slate-500">
              A/B testing needs a clear hypothesis, a suitable measurement
              method, and enough relevant data to interpret the result.
              Conversion improvements are not guaranteed.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Our process
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                From the first idea to a tested page.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We approach each landing page as a specific business task,
                with the design, content, development, and measurement
                supporting the agreed objective.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-200/60"
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
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Frequently asked questions
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
                Landing pages, explained.
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
                Ready to get started?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's build a landing page around your goal.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
                Tell us what you are promoting, who you want to reach, and
                what action you want visitors to take. Let's plan a page that
                fits your campaign.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Discuss Your Landing Page
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
