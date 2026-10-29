
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites built for performance, usability, and growth.",
    href: "/services/web-development",
    tags: ["Responsive Design", "Custom Development"],
  },
  {
    number: "02",
    title: "E-Commerce Development",
    description:
      "Online stores designed to showcase products and create smoother shopping experiences.",
    href: "/services/e-commerce",
    tags: ["Online Stores", "Shopping Experience"],
  },
  {
    number: "03",
    title: "Business Websites",
    description:
      "Professional websites that communicate your brand and build customer trust.",
    href: "/services/business-websites",
    tags: ["Brand Presence", "Business Growth"],
  },
  {
    number: "04",
    title: "WordPress Development",
    description:
      "Flexible WordPress websites that are easy to manage, maintain, and expand.",
    href: "/services/wordpress",
    tags: ["WordPress", "Easy Management"],
  },
  {
    number: "05",
    title: "Meta Ads",
    description:
      "Strategic Facebook and Instagram advertising focused on reaching the right audience.",
    href: "/services/meta-ads",
    tags: ["Facebook Ads", "Instagram Ads"],
  },
  {
    number: "06",
    title: "Google Ads",
    description:
      "Targeted advertising campaigns designed to connect your business with potential customers.",
    href: "/services/google-ads",
    tags: ["Search Campaigns", "Paid Advertising"],
  },
  {
    number: "07",
    title: "Landing Page Design",
    description:
      "Focused landing pages that support your campaigns and guide visitors towards action.",
    href: "/services/landing-pages",
    tags: ["Conversion-Focused", "Campaign Pages"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#071a2b] px-6 py-20 text-center sm:py-24">
          <div className="absolute inset-0 bg-[url('/hero-background.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071a2b]/65 via-[#071a2b]/80 to-[#071a2b]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What We Do
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Explore Our{" "}
              <span className="text-cyan-400">Services</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              From building your online presence to reaching more customers,
              explore the services that can help your business move forward.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Our Expertise
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Find the right service for you
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Choose a service to explore its features, approach, and
                details.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.number}
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div aria-hidden="true" className="relative mb-5 flex h-28 items-end gap-2 overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-br from-[#071a2b] via-[#10334a] to-[#15506a] p-4">
                    <div className="absolute -right-5 -top-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl transition group-hover:scale-125" />
                    <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-cyan-300" />
                    <div className="absolute left-8 top-4 h-2 w-12 rounded-full bg-white/20" />
                    <div className="z-10 h-8 flex-1 rounded-t-md border border-white/10 bg-white/[.08]" />
                    <div className="z-10 h-14 flex-1 rounded-t-md border border-white/10 bg-cyan-300/20" />
                    <div className="z-10 h-11 flex-1 rounded-t-md border border-white/10 bg-white/[.12]" />
                    <div className="z-10 h-20 flex-1 rounded-t-md border border-white/10 bg-white/[.08]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-widest text-cyan-700">
                      {service.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-500 transition group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071a2b] transition group-hover:text-cyan-700">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 text-sm font-semibold text-cyan-700">
                    Explore Service
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Compact CTA */}
        <section className="px-6 pb-16 sm:pb-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#071a2b] p-7 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Have a project in mind?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Tell us what you need, and let&apos;s explore how we can help.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
            >
              Let&apos;s Talk
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
