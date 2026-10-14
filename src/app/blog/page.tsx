
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const articles = [
  {
    title: "How to Choose the Right Website for Your Business",
    description:
      "Learn how to choose between a business website, an online store, and a focused landing page based on your goals.",
    category: "Web Development",
    date: "Website Essentials",
    readTime: "6 min read",
    href: "/blog/choose-the-right-website",
    featured: true,
  },
  {
    title: "What Makes an E-Commerce Website Effective?",
    description:
      "Explore the essentials of product pages, navigation, mobile usability, and a smoother checkout experience.",
    category: "E-Commerce",
    date: "Online Stores",
    readTime: "5 min read",
    href: "/blog/effective-ecommerce-website",
  },
  {
    title: "Meta Ads vs Google Ads: Which Should You Choose?",
    description:
      "Understand the difference between audience-based discovery and search-intent advertising before choosing a platform.",
    category: "Digital Marketing",
    date: "Paid Advertising",
    readTime: "7 min read",
    href: "/blog/meta-ads-vs-google-ads",
  },
  {
    title: "Landing Page Mistakes That Can Cost You Conversions",
    description:
      "Discover common landing page problems involving unclear messaging, distracting elements, and weak calls to action.",
    category: "Web Design",
    date: "Conversion Tips",
    readTime: "5 min read",
    href: "/blog/landing-page-mistakes",
  },
  {
    title: "A Beginner's Guide to Google Ads Campaigns",
    description:
      "Get familiar with campaign objectives, keywords, ad copy, budgets, and conversion tracking.",
    category: "Digital Marketing",
    date: "Google Ads",
    readTime: "8 min read",
    href: "/blog/google-ads-beginners-guide",
  },
  {
    title: "Why Your Business Needs a Professional Website",
    description:
      "Understand how a well-planned website can communicate credibility, explain your services, and help customers contact you.",
    category: "Web Development",
    date: "Business Growth",
    readTime: "5 min read",
    href: "/blog/why-your-business-needs-a-website",
  },
];

const categories = [
  "All Articles",
  "Web Development",
  "E-Commerce",
  "Digital Marketing",
  "Web Design",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All Articles") {
      return articles;
    }

    return articles.filter(
      (article) => article.category === activeCategory
    );
  }, [activeCategory]);

  const featuredArticle = articles.find((article) => article.featured);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#071a2b] px-6 py-16 text-center sm:py-20">
          <div className="absolute inset-0 bg-[url('/hero-background.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071a2b]/65 via-[#071a2b]/80 to-[#071a2b]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Code Avenue Blog
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Insights for Your{" "}
              <span className="text-cyan-400">Digital Growth</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Practical insights on websites, online stores, and digital
              advertising to help you make more informed decisions.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="px-6 pt-12 sm:pt-16">
            <div className="mx-auto max-w-6xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-600" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Featured Article
                </p>
              </div>

              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="grid md:grid-cols-2">
                  <div className="flex min-h-64 flex-col justify-center bg-[#071a2b] p-7 sm:p-10">
                    <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                      {featuredArticle.category}
                    </span>

                    <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {featuredArticle.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <Link
                      href={featuredArticle.href}
                      className="mt-7 inline-flex w-fit items-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
                    >
                      Read Article <span className="ml-2">→</span>
                    </Link>
                  </div>

                  <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-200 p-8">
                    <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl" />
                    <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-blue-200/50 blur-3xl" />

                    <div className="relative w-full max-w-sm rounded-2xl border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                          Website Planning
                        </span>
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className="h-3 w-3/4 rounded-full bg-slate-300" />
                        <div className="h-3 w-full rounded-full bg-slate-200" />
                        <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-xl bg-cyan-100" />
                        <div className="h-16 rounded-xl bg-blue-100" />
                        <div className="h-16 rounded-xl bg-slate-100" />
                      </div>

                      <p className="mt-5 text-center text-sm font-semibold text-[#071a2b]">
                        Build with purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  The Latest Insights
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Explore Our Articles
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Helpful ideas and practical guidance for your next digital
                project.
              </p>
            </div>

            {/* Category Filters */}
            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "border-cyan-600 bg-cyan-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-sm text-slate-500" aria-live="polite">
              Showing {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "article" : "articles"}
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-[#071a2b] to-[#123b52] p-6">
                    <div className="absolute -right-6 -top-12 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl" />
                    <div className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-white/10 text-2xl text-cyan-300 transition duration-300 group-hover:scale-110">
                      {article.category === "Web Development"
                        ? "</>"
                        : article.category === "E-Commerce"
                          ? "◇"
                          : article.category === "Digital Marketing"
                            ? "↗"
                            : "✳"}
                    </div>

                    <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold leading-snug text-[#071a2b] transition group-hover:text-cyan-700">
                      {article.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      {article.description}
                    </p>

                    <Link
                      href={article.href}
                      className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                    >
                      Read More
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Compact CTA */}
        <section className="px-6 pb-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl bg-[#071a2b] p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Ready to build your online presence?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Let&apos;s discuss a website or marketing strategy that fits
                your goals.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
            >
              Contact Us <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
