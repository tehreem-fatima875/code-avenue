import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
export const metadata: Metadata = {
  title: "Why Your Business Needs a Professional Website | Code Avenue",
  description:
    "Discover why a professional website matters for business credibility, online visibility, lead generation, customer experience, and long-term growth.",
  keywords: [
    "why your business needs a website",
    "professional business website",
    "benefits of a business website",
    "business website development",
    "online presence for businesses",
  ],
  alternates: {
    canonical: "/blog/why-your-business-needs-a-website",
  },
  openGraph: {
    title: "Why Your Business Needs a Professional Website",
    description:
      "Learn how a professional website can strengthen your business presence, build trust, and help potential customers find you online.",
    url: "/blog/why-your-business-needs-a-website",
    type: "article",
  },
};

const sections = [
  { id: "first-impression", label: "1. Make a strong first impression" },
  { id: "credibility", label: "2. Build credibility and trust" },
  { id: "visibility", label: "3. Improve online visibility" },
  { id: "leads", label: "4. Generate leads and enquiries" },
  { id: "customer-experience", label: "5. Improve customer experience" },
  { id: "marketing", label: "6. Support your marketing campaigns" },
  { id: "competition", label: "7. Stay competitive" },
  { id: "website-types", label: "8. Choose the right website" },
  { id: "checklist", label: "Website essentials checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "Does every business need a website?",
    answer:
      "A website is valuable for most businesses because it provides an official place to explain services, share contact details, establish credibility, and receive enquiries. The best website depends on the business model, audience, and goals.",
  },
  {
    question: "Can social media replace a business website?",
    answer:
      "Social media is useful for engagement and discovery, but it does not offer the same level of control over your content, structure, customer journey, and website features. Using both channels together can create a stronger online presence.",
  },
  {
    question: "How much does a professional business website cost?",
    answer:
      "The cost depends on the number of pages, design requirements, functionality, platform, integrations, and ongoing maintenance. A simple business website usually requires less work than a custom e-commerce platform.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A straightforward business website may take a few weeks, while a larger or more customised project can take longer. The timeline depends on the scope, content readiness, feedback, revisions, and technical requirements.",
  },
  {
    question: "Will a website automatically bring customers?",
    answer:
      "No. A website creates a foundation for online visibility and enquiries, but results depend on factors such as search engine optimisation, content quality, user experience, advertising, competition, and the relevance of your offer.",
  },
];

export default function WhyYourBusinessNeedsAWebsitePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#071a2b]">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-background.png')" }}
          />
          <div className="absolute inset-0 -z-10 bg-[#071a2b]/90" />

          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
              >
                <span aria-hidden="true">←</span>
                Back to Blog
              </Link>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Business Growth · Web Development
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Why Your Business Needs a Professional Website
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Your website is more than an online address. It is a place to
                present your business, explain your value, build trust, and help
                potential customers take the next step.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span>Code Avenue Team</span>
                <span aria-hidden="true">•</span>
                <span>Business Growth Guide</span>
                <span aria-hidden="true">•</span>
                <span>8-minute read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="px-6 py-14 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_290px]">
            <article className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-lg leading-8 text-slate-600">
                  Customers often research a business online before deciding
                  whether to contact it, visit a location, or make a purchase.
                  If your business has no professional website, potential
                  customers may struggle to find reliable information about
                  your products or services.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Social media pages, online directories, and messaging apps
                  can all support your business. However, a website gives you
                  a dedicated platform where you can organise information,
                  communicate your value, and guide visitors towards a clear
                  action.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Whether you run a local business, provide professional
                  services, sell products, or operate an online brand, a
                  website can become an important part of your long-term
                  digital strategy.
                </p>
              </div>

              {/* Table of contents */}
              <nav
                aria-label="Table of contents"
                className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <h2 className="text-xl font-bold text-[#071a2b]">
                  In This Article
                </h2>

                <ol className="mt-5 space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                  href={`#${section.id}`}
                        className="text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Section 1 */}
              <section id="first-impression" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  1. Make a Strong First Impression
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Your website may be one of the first places a potential
                  customer encounters your business. A clear layout, useful
                  content, consistent branding, and easy navigation can help
                  visitors understand what you offer without unnecessary
                  confusion.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  A professional design should do more than look attractive.
                  It should make important information easy to find and help
                  visitors understand what to do next.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Clear messaging",
                      description:
                        "Explain what your business does and whom it serves.",
                    },
                    {
                      title: "Consistent branding",
                      description:
                        "Use a coherent visual identity across your pages.",
                    },
                    {
                      title: "Simple navigation",
                      description:
                        "Help visitors find services, products, and contact details.",
                    },
                    {
                      title: "Mobile-friendly design",
                      description:
                        "Make the experience comfortable on smaller screens.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                      <h3 className="font-semibold text-[#071a2b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section id="credibility" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  2. Build Credibility and Trust
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  People want to know who they are dealing with before sharing
                  their details or spending money. A well-maintained website
                  gives you space to introduce your business, explain your
                  services, answer common questions, and provide reliable
                  contact information.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Depending on your business, useful trust-building elements
                  may include:
                </p>

                <ul className="mt-4 space-y-3 pl-5 text-slate-600 marker:text-cyan-600 list-disc">
                  <li>An informative About page.</li>
                  <li>Accurate contact information and business details.</li>
                  <li>Genuine customer testimonials or reviews.</li>
                  <li>Examples of work, case studies, or a portfolio.</li>
                  <li>Clear pricing, policies, and service descriptions where appropriate.</li>
                  <li>Secure forms and a properly configured website connection.</li>
                </ul>

                <p className="mt-4 leading-8 text-slate-600">
                  Trust must be earned. A website should present accurate
                  information and authentic proof rather than invented
                  testimonials, misleading claims, or results that cannot be
                  verified.
                </p>
              </section>

              {/* Section 3 */}
              <section id="visibility" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  3. Improve Your Online Visibility
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A website gives search engines pages they can discover,
                  understand, and potentially show to people searching for
                  relevant information. This creates opportunities for your
                  business to reach people who may not already follow your
                  social media accounts.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Search engine optimisation (SEO) can help improve how your
                  website appears in relevant searches. It includes creating
                  useful content, organising pages clearly, improving
                  performance, and making the site accessible to search
                  engines.
                </p>

                <h3 className="mt-7 text-xl font-semibold text-[#071a2b]">
                  Practical ways to improve visibility
                </h3>

                <ul className="mt-4 space-y-3 pl-5 leading-7 text-slate-600 marker:text-cyan-600 list-disc">
                  <li>Build a dedicated page for each important service.</li>
                  <li>Write helpful content that answers real customer questions.</li>
                  <li>Use descriptive page titles and headings.</li>
                  <li>Improve loading speed and mobile usability.</li>
                  <li>Keep business information accurate and consistent.</li>
                  <li>Measure organic traffic using suitable analytics tools.</li>
                </ul>

                <p className="mt-4 leading-8 text-slate-600">
                  A website does not guarantee first-page rankings or instant
                  traffic. SEO takes time, and results depend on competition,
                  content quality, technical health, and other factors.
                </p>
              </section>

              {/* Section 4 */}
              <section id="leads" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  4. Generate Leads and Customer Enquiries
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Your website can help turn visitors into potential customers
                  by making the next step clear. Depending on your goals, that
                  action could be requesting a quote, booking a consultation,
                  completing a form, calling your business, or starting a
                  purchase.
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {[
                    {
                      title: "Service businesses",
                      description:
                        "Use enquiry forms, consultation bookings, and clear service pages.",
                    },
                    {
                      title: "E-commerce stores",
                      description:
                        "Guide shoppers from product discovery through checkout.",
                    },
                    {
                      title: "Local businesses",
                      description:
                        "Display opening hours, location details, directions, and contact options.",
                    },
                    {
                      title: "B2B companies",
                      description:
                        "Offer quote requests, demonstrations, and consultation forms.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`p-5 sm:p-6 ${
                        index !== 3 ? "border-b border-slate-200" : ""
                      }`}
                    >
                      <h3 className="font-semibold text-[#071a2b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  Every important page should have an appropriate call to
                  action. Avoid overwhelming visitors with too many competing
                  buttons or asking for unnecessary information in forms.
                </p>
              </section>

              {/* Section 5 */}
              <section id="customer-experience" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  5. Improve the Customer Experience
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Customers should not have to search through multiple posts
                  or send repeated messages just to understand what your
                  business offers. A well-organised website keeps essential
                  information in one accessible place.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  You can use your website to explain services, display
                  product details, answer frequently asked questions, share
                  policies, and provide straightforward ways to get in touch.
                  This can reduce confusion and help customers make informed
                  decisions.
                </p>

                <h3 className="mt-7 text-xl font-semibold text-[#071a2b]">
                  Prioritise usability
                </h3>

                <ul className="mt-4 space-y-3 pl-5 leading-7 text-slate-600 marker:text-cyan-600 list-disc">
                  <li>Make menus and page structure easy to understand.</li>
                  <li>Use readable typography and sufficient colour contrast.</li>
                  <li>Optimise images without sacrificing necessary quality.</li>
                  <li>Test buttons, forms, links, and checkout steps.</li>
                  <li>Make important actions easy to complete on mobile.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="marketing" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  6. Support Your Digital Marketing Campaigns
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Your website can serve as the destination for traffic from
                  Google Ads, Meta Ads, email campaigns, social media posts,
                  and other marketing activities. Instead of relying entirely
                  on a social profile, you can direct people to a page
                  designed for their specific needs.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  For example, a Google Search campaign can direct a person
                  searching for a service to the relevant service page. A
                  Facebook or Instagram campaign can send interested shoppers
                  to a product or offer page that matches the advertisement.
                </p>

                <div className="mt-6 rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
                  <h3 className="text-lg font-semibold text-[#071a2b]">
                    Marketing works best when the journey is connected
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    Keep the message in your advertisement consistent with the
                    landing page, make the offer clear, and measure meaningful
                    actions such as purchases or qualified enquiries.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/services/google-ads"
                      className="inline-flex items-center justify-center rounded-full bg-[#071a2b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-800"
                    >
                      Explore Google Ads
                    </Link>
                    <Link
                      href="/services/meta-ads"
                      className="inline-flex items-center justify-center rounded-full border border-cyan-700 px-5 py-2.5 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
                    >
                      Explore Meta Ads
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="competition" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  7. Stay Competitive in Your Industry
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Customers can compare businesses quickly. If competitors
                  provide detailed service pages, helpful resources, online
                  booking, or a smooth purchasing experience, businesses
                  without those options may find it harder to meet customer
                  expectations.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Your website does not need to be the biggest or most
                  complicated in your industry. It needs to communicate your
                  strengths, meet your audience's needs, and make it easy for
                  people to take action.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Start with the features that matter most to your customers.
                  Improve the website as your business grows, using feedback
                  and actual performance data to guide future decisions.
                </p>
              </section>

              {/* Section 8 */}
              <section id="website-types" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  8. Choose the Right Website for Your Business
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Different businesses need different website structures. The
                  right choice depends on what you sell, how customers make
                  decisions, and what you want visitors to do.
                </p>

                <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full min-w-[540px] text-left text-sm">
                    <thead className="bg-[#071a2b] text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Website type</th>
                        <th className="px-5 py-4 font-semibold">Best suited for</th>
                        <th className="px-5 py-4 font-semibold">Main goal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-[#071a2b]">
                          Business website
                        </td>
                        <td className="px-5 py-4">
                          Service providers and established companies
                        </td>
                        <td className="px-5 py-4">
                          Build trust and generate enquiries
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-[#071a2b]">
                          E-commerce website
                        </td>
                        <td className="px-5 py-4">
                          Brands selling products online
                        </td>
                        <td className="px-5 py-4">
                          Sell products and process orders
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-[#071a2b]">
                          Landing page
                        </td>
                        <td className="px-5 py-4">
                          Focused offers and advertising campaigns
                        </td>
                        <td className="px-5 py-4">
                          Encourage one primary action
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-[#071a2b]">
                          Portfolio website
                        </td>
                        <td className="px-5 py-4">
                          Freelancers and creative professionals
                        </td>
                        <td className="px-5 py-4">
                          Showcase work and attract clients
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  If you are unsure which option fits your goals, read our
                  guide on{" "}
                  <Link
                    href="/blog/choose-the-right-website"
                    className="font-semibold text-cyan-700 underline decoration-cyan-300 underline-offset-4 hover:text-cyan-900"
                  >
                    choosing the right website for your business
                  </Link>
                  .
                </p>

                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 font-semibold text-cyan-700 transition hover:text-cyan-900"
                  >
                    Explore all Code Avenue services
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </section>

              {/* Checklist */}
              <section id="checklist" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  Website Essentials Checklist
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Before launching your business website, review these
                  essentials:
                </p>

                <div className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  {[
                    "The purpose of the website is clear.",
                    "Services or products are explained accurately.",
                    "The design works on desktop and mobile.",
                    "Contact details and enquiry forms are functional.",
                    "Pages have descriptive titles and useful headings.",
                    "Images are optimised and links have been tested.",
                    "The website uses HTTPS and appropriate security measures.",
                    "Analytics and relevant conversion tracking are configured.",
                    "Privacy information and other required policies are available.",
                    "There is a plan for updates, backups, and maintenance.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-800"
                      >
                        ✓
                      </span>
                      <p className="text-sm leading-7 text-slate-600">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="scroll-mt-24 pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#071a2b]">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-white p-5"
                    >
                      <summary className="cursor-pointer list-none pr-6 font-semibold text-[#071a2b] marker:hidden">
                        <span className="flex items-center justify-between gap-4">
                          {faq.question}
                          <span className="shrink-0 text-xl text-cyan-700 transition group-open:rotate-45">
                            +
                          </span>
                        </span>
                      </summary>
                      <p className="mt-4 leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mt-12 rounded-2xl bg-[#071a2b] p-7 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Final Thoughts
                </p>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Give Your Business a Stronger Online Foundation
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  A professional website can help your business communicate
                  clearly, establish credibility, attract relevant visitors,
                  and support your marketing efforts. The key is to build a
                  website around real customer needs and maintain it as your
                  business evolves.
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  Start with a clear purpose, useful content, and a simple
                  customer journey. You can add more features as your needs
                  grow.
                </p>

                <Link
                  href="/services/business-websites"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-[#071a2b] transition hover:bg-cyan-300"
                >
                  Build Your Business Website
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </section>

              {/* Back to blog */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
                >
                  <span aria-hidden="true">←</span>
                  Explore More Articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  Quick Navigation
                </p>

                <h2 className="mt-3 text-lg font-bold text-[#071a2b]">
                  On This Page
                </h2>

                <nav className="mt-5 space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm leading-6 text-slate-600 transition hover:text-cyan-700"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#071a2b]">
                  Need a Website?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explore website solutions designed around your business,
                  audience, and goals.
                </p>

                <Link
                  href="/services"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#071a2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
                >
                  Explore Services
                </Link>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
                <h2 className="font-bold text-[#071a2b]">
                  More Helpful Reading
                </h2>

                <div className="mt-4 space-y-4">
                  <Link
                    href="/blog/choose-the-right-website"
                    className="block text-sm font-medium leading-6 text-slate-700 transition hover:text-cyan-800"
                  >
                    How to Choose the Right Website
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/blog/effective-ecommerce-website"
                    className="block text-sm font-medium leading-6 text-slate-700 transition hover:text-cyan-800"
                  >
                    What Makes an E-commerce Website Effective?
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/blog/landing-page-mistakes"
                    className="block text-sm font-medium leading-6 text-slate-700 transition hover:text-cyan-800"
                  >
                    Common Landing Page Mistakes
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}