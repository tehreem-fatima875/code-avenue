"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLogo, setShowLogo] = useState(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071a2b]/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <button
            type="button"
            onClick={() => setShowLogo(true)}
            aria-label="View Code Avenue logo"
            className="group flex items-center"
          >
            <img
              src="/logo.png"
              alt="Code Avenue"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">

            {/* Home */}
            <a
              href="#home"
              className="font-medium !text-white transition hover:!text-cyan-300"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1.5 font-medium text-white transition hover:text-cyan-300"
              >
                Services

                <span
                  className={`text-xs transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {activeDropdown === "services" && (
                <div className="absolute left-1/2 top-full mt-5 w-[620px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-black/20">

                  <div className="grid grid-cols-2 gap-8">

                    {/* Build */}
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                        Build
                      </p>

                      <div className="space-y-4">

                        <a
                          href="#services"
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <p className="font-semibold text-slate-900 transition group-hover:text-cyan-600">
                            Web Development
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            Full-stack websites and custom web solutions.
                          </p>
                        </a>

                        <a
                          href="#services"
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <p className="font-semibold text-slate-900 transition group-hover:text-cyan-600">
                            E-commerce
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            Online stores built for smooth customer journeys.
                          </p>
                        </a>

                        <a
                          href="#services"
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <p className="font-semibold text-slate-900 transition group-hover:text-cyan-600">
                            Business Websites
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            Professional websites designed around your business.
                          </p>
                        </a>

                      </div>
                    </div>

                    {/* Grow */}
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                        Grow
                      </p>

                      <div className="space-y-4">

                        <a
                          href="#services"
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <p className="font-semibold text-slate-900 transition group-hover:text-cyan-600">
                            Meta Ads
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            Facebook and Instagram advertising campaigns.
                          </p>
                        </a>

                        <a
                          href="#services"
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <p className="font-semibold text-slate-900 transition group-hover:text-cyan-600">
                            Google Ads
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            Search campaigns built around customer intent.
                          </p>
                        </a>

                        <a
                          href="#services"
                          className="group block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <p className="font-semibold text-slate-900 transition group-hover:text-cyan-600">
                            Landing Pages
                          </p>

                          <p className="mt-1 text-sm leading-5 text-slate-500">
                            Focused pages designed for campaigns and conversions.
                          </p>
                        </a>

                      </div>
                    </div>

                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <a
                      href="#services"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 transition hover:bg-cyan-50"
                    >
                      <span className="text-sm font-semibold text-cyan-600">
                        Explore all services
                      </span>

                      <span className="text-cyan-600">
                        ↗
                      </span>
                    </a>
                  </div>

                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("about")}
                className="flex items-center gap-1.5 font-medium text-white transition hover:text-cyan-300"
              >
                About

                <span
                  className={`text-xs transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {activeDropdown === "about" && (
                <div className="absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-black/20">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                    Code Avenue
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    Technology built around your business.
                  </h3>

                  <ul className="mt-5 space-y-3">

                    <li className="flex gap-3 text-sm text-slate-600">
                      <span className="text-cyan-500">✓</span>
                      Business-focused digital solutions
                    </li>

                    <li className="flex gap-3 text-sm text-slate-600">
                      <span className="text-cyan-500">✓</span>
                      Modern and responsive development
                    </li>

                    <li className="flex gap-3 text-sm text-slate-600">
                      <span className="text-cyan-500">✓</span>
                      Conversion-focused experiences
                    </li>

                    <li className="flex gap-3 text-sm text-slate-600">
                      <span className="text-cyan-500">✓</span>
                      Clear communication and support
                    </li>

                  </ul>

                  <a
                    href="#about"
                    onClick={() => setActiveDropdown(null)}
                    className="mt-6 flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    Learn more about us
                    <span>↗</span>
                  </a>

                </div>
              )}
            </div>

            {/* How We Work Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("process")}
                className="flex items-center gap-1.5 font-medium text-white transition hover:text-cyan-300"
              >
                How We Work

                <span
                  className={`text-xs transition-transform duration-200 ${
                    activeDropdown === "process" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {activeDropdown === "process" && (
                <div className="absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-black/20">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                    Our Process
                  </p>

                  <div className="mt-5 space-y-4">

                    {[
                      ["01", "Understand", "Learn about your business and goals."],
                      ["02", "Plan", "Define the structure and strategy."],
                      ["03", "Build", "Design and develop the solution."],
                      ["04", "Launch", "Test, deploy and configure tracking."],
                      ["05", "Grow", "Improve and optimize where needed."],
                    ].map(([number, title, description]) => (
                      <div key={number} className="flex gap-3">

                        <span className="text-xs font-bold text-cyan-600">
                          {number}
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {title}
                          </p>

                          <p className="mt-0.5 text-xs leading-5 text-slate-500">
                            {description}
                          </p>
                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              )}
            </div>

            {/* FAQ */}
            <a
              href="#faq"
              className="font-medium !text-white transition hover:!text-cyan-300"
            >
              FAQ
            </a>

            {/* Start a Project */}
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#071a2b] shadow-sm transition hover:bg-cyan-300"
            >
              Start a Project
            </a>

          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/20 p-2 text-white transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-white/10 bg-[#071a2b] px-6 py-5 md:hidden">

            <div className="flex flex-col gap-2">

              {/* Home */}
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
              >
                Home
              </a>

              {/* Mobile Services */}
              <button
                type="button"
                onClick={() => toggleDropdown("mobile-services")}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
              >
                Services
                <span>▾</span>
              </button>

              {activeDropdown === "mobile-services" && (
                <div className="mb-2 space-y-2 rounded-xl bg-white/5 p-3">

                  <a
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    Web Development
                  </a>

                  <a
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    E-commerce
                  </a>

                  <a
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    Business Websites
                  </a>

                  <a
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    Meta Ads
                  </a>

                  <a
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    Google Ads
                  </a>

                  <a
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    Landing Pages
                  </a>

                </div>
              )}

              {/* Mobile About */}
              <button
                type="button"
                onClick={() => toggleDropdown("mobile-about")}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
              >
                About
                <span>▾</span>
              </button>

              {activeDropdown === "mobile-about" && (
                <div className="mb-2 rounded-xl bg-white/5 p-4">

                  <ul className="space-y-3">

                    <li className="text-sm text-slate-300">
                      • Business-focused solutions
                    </li>

                    <li className="text-sm text-slate-300">
                      • Modern responsive development
                    </li>

                    <li className="text-sm text-slate-300">
                      • Conversion-focused experiences
                    </li>

                    <li className="text-sm text-slate-300">
                      • Clear communication and support
                    </li>

                  </ul>

                </div>
              )}

              {/* Mobile Process */}
              <button
                type="button"
                onClick={() => toggleDropdown("mobile-process")}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white transition hover:bg-white/5 hover:text-cyan-300"
              >
                How We Work
                <span>▾</span>
              </button>

              {activeDropdown === "mobile-process" && (
                <div className="mb-2 space-y-3 rounded-xl bg-white/5 p-4">

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">01</span>{" "}
                    Understand your business and goals.
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">02</span>{" "}
                    Plan the structure and strategy.
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">03</span>{" "}
                    Build the digital solution.
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">04</span>{" "}
                    Test and launch.
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-cyan-400">05</span>{" "}
                    Improve and optimize.
                  </p>

                </div>
              )}

              {/* FAQ */}
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                FAQ
              </a>

              {/* Start a Project */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex w-fit rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#071a2b] transition hover:bg-cyan-300"
              >
                Start a Project
              </a>

            </div>
          </nav>
        )}

      </header>

      {/* =========================================================
          FULL-SCREEN LOGO VIEWER
      ========================================================== */}

      {showLogo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b14]/95 p-6 backdrop-blur-md"
          onClick={() => setShowLogo(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Code Avenue logo preview"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setShowLogo(false)}
            aria-label="Close logo preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            ×
          </button>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

          {/* Logo */}
          <div
            className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/logo.png"
              alt="Code Avenue logo"
              className="max-h-[88vh] max-w-[92vw] object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.18)]"
            />
          </div>
        </div>
      )}
    </>
  );
}