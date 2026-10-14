"use client";

import { useState } from "react";

const services = [
  {
    title: "Web Development",
    description: "Full-stack websites and custom web solutions.",
    href: "/services/web-development",
    category: "Build",
  },
  {
    title: "E-commerce",
    description: "Online stores built for smooth customer journeys.",
    href: "/services/e-commerce",
    category: "Build",
  },
  {
    title: "Business Websites",
    description: "Professional websites designed around your business.",
    href: "/services/business-websites",
    category: "Build",
  },
  {
    title: "WordPress",
    description: "Flexible WordPress websites and custom solutions.",
    href: "/services/wordpress",
    category: "Build",
  },
  {
    title: "Meta Ads",
    description: "Facebook and Instagram advertising campaigns.",
    href: "/services/meta-ads",
    category: "Grow",
  },
  {
    title: "Google Ads",
    description: "Search campaigns built around customer intent.",
    href: "/services/google-ads",
    category: "Grow",
  },
  {
    title: "Landing Pages",
    description: "Focused pages designed for campaigns and conversions.",
    href: "/services/landing-pages",
    category: "Grow",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Learn about your business and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the structure and strategy.",
  },
  {
    number: "03",
    title: "Build",
    description: "Design and develop the solution.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, deploy and configure tracking.",
  },
  {
    number: "05",
    title: "Grow",
    description: "Improve and optimize where needed.",
  },
];

const navLinkClass =
  "font-medium !text-white transition-colors duration-200 hover:!text-cyan-300";

const dropdownLinkClass =
  "group block rounded-xl p-3 transition-colors duration-200 hover:bg-white/10";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLogo, setShowLogo] = useState(false);

  const closeMenus = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const dropdownTrigger = (label: string, name: string) => (
    <button
      type="button"
      onClick={() => toggleDropdown(name)}
      onFocus={() => setActiveDropdown(name)}
      aria-expanded={activeDropdown === name}
      className={`flex items-center gap-1.5 ${navLinkClass}`}
    >
      {label}
      <span
        className={`text-xs transition-transform duration-200 ${
          activeDropdown === name ? "rotate-180" : ""
        }`}
        aria-hidden="true"
      >
        ▾
      </span>
    </button>
  );

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
            <a href="/#home" className={navLinkClass}>
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setActiveDropdown(null);
              }}
            >
              {dropdownTrigger("Services", "services")}

              {activeDropdown === "services" && (
                <div className="absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-4">
                  <div className="rounded-2xl border border-white/10 bg-[#071a2b] p-6 shadow-2xl shadow-black/40">
                    <div className="grid grid-cols-2 gap-6">
                      {(["Build", "Grow"] as const).map((category) => (
                        <div key={category}>
                          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                            {category}
                          </p>

                          <div className="space-y-1">
                            {services
                              .filter(
                                (service) => service.category === category
                              )
                              .map((service) => (
                                <a
                                  key={service.href}
                                  href={service.href}
                                  onClick={closeMenus}
                                  className={dropdownLinkClass}
                                >
                                  <p className="font-semibold text-white transition group-hover:text-cyan-300">
                                    {service.title}
                                  </p>
                                  <p className="mt-1 text-sm leading-5 text-white/70 transition group-hover:text-white">
                                    {service.description}
                                  </p>
                                </a>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4">
                      <a
                        href="/services"
                        onClick={closeMenus}
                        className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
                      >
                        <span className="text-sm font-semibold text-white transition hover:text-cyan-300">
                          Explore all services
                        </span>
                        <span className="text-cyan-400" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setActiveDropdown(null);
              }}
            >
              {dropdownTrigger("About", "about")}

              {activeDropdown === "about" && (
                <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4">
                  <div className="rounded-2xl border border-white/10 bg-[#071a2b] p-6 shadow-2xl shadow-black/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Code Avenue
                    </p>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      Technology built around your business.
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {[
                        "Business-focused digital solutions",
                        "Modern and responsive development",
                        "Conversion-focused experiences",
                        "Clear communication and support",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm text-white/80"
                        >
                          <span className="text-cyan-400">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/#about"
                      onClick={closeMenus}
                      className="mt-6 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold !text-white transition hover:bg-white/10 hover:!text-cyan-300"
                    >
                      Learn more about us
                      <span className="text-cyan-400" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* How We Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("process")}
              onMouseLeave={() => setActiveDropdown(null)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setActiveDropdown(null);
              }}
            >
              {dropdownTrigger("How We Work", "process")}

              {activeDropdown === "process" && (
                <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4">
                  <div className="rounded-2xl border border-white/10 bg-[#071a2b] p-6 shadow-2xl shadow-black/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Our Process
                    </p>

                    <div className="mt-5 space-y-4">
                      {processSteps.map((step) => (
                        <div key={step.number} className="flex gap-3">
                          <span className="text-xs font-bold text-cyan-400">
                            {step.number}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {step.title}
                            </p>
                            <p className="mt-0.5 text-xs leading-5 text-white/70">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <a href="/blog" className={navLinkClass}>
              Blog
            </a>

            {/* FAQ */}
            <a href="/#faq" className={navLinkClass}>
              FAQ
            </a>

            {/* Start a Project */}
            <a
              href="/#contact"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#071a2b] shadow-sm transition hover:bg-cyan-300"
            >
              Start a Project
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setIsOpen((current) => !current);
              setActiveDropdown(null);
            }}
            className="rounded-lg border border-white/20 p-2 text-white transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <span className="block text-2xl leading-5">×</span>
            ) : (
              <>
                <span className="block h-0.5 w-5 bg-current" />
                <span className="mt-1.5 block h-0.5 w-5 bg-current" />
                <span className="mt-1.5 block h-0.5 w-5 bg-current" />
              </>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#071a2b] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              <a
                href="/#home"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-sm font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                Home
              </a>

              {/* Mobile Services */}
              <button
                type="button"
                onClick={() => toggleDropdown("mobile-services")}
                aria-expanded={activeDropdown === "mobile-services"}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                Services
                <span
                  className={`transition-transform ${
                    activeDropdown === "mobile-services" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {activeDropdown === "mobile-services" && (
                <div className="mb-2 space-y-1 rounded-xl bg-white/5 p-3">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      onClick={closeMenus}
                      className="block rounded-lg px-3 py-2.5 text-sm !text-white transition hover:bg-white/10 hover:!text-cyan-300"
                    >
                      {service.title}
                    </a>
                  ))}

                  <a
                    href="/services"
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold !text-white transition hover:bg-white/10 hover:!text-cyan-300"
                  >
                    Explore all services ↗
                  </a>
                </div>
              )}

              {/* Mobile About */}
              <button
                type="button"
                onClick={() => toggleDropdown("mobile-about")}
                aria-expanded={activeDropdown === "mobile-about"}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                About
                <span
                  className={`transition-transform ${
                    activeDropdown === "mobile-about" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {activeDropdown === "mobile-about" && (
                <div className="mb-2 rounded-xl bg-white/5 p-4">
                  <p className="text-sm leading-6 text-white/80">
                    Code Avenue creates business-focused digital solutions
                    with modern development and conversion-focused experiences.
                  </p>
                  <a
                    href="/#about"
                    onClick={closeMenus}
                    className="mt-3 inline-block text-sm font-semibold !text-white transition hover:!text-cyan-300"
                  >
                    Learn more about us ↗
                  </a>
                </div>
              )}

              {/* Mobile Process */}
              <button
                type="button"
                onClick={() => toggleDropdown("mobile-process")}
                aria-expanded={activeDropdown === "mobile-process"}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                How We Work
                <span
                  className={`transition-transform ${
                    activeDropdown === "mobile-process" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {activeDropdown === "mobile-process" && (
                <div className="mb-2 space-y-4 rounded-xl bg-white/5 p-4">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex gap-3">
                      <span className="text-xs font-bold text-cyan-400">
                        {step.number}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile Blog */}
              <a
                href="/blog"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-sm font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                Blog
              </a>

              {/* FAQ */}
              <a
                href="/#faq"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 font-medium !text-white transition hover:bg-white/5 hover:!text-cyan-300"
              >
                FAQ
              </a>

              {/* Start a Project */}
              <a
                href="/#contact"
                onClick={closeMenus}
                className="mt-3 inline-flex w-fit rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#071a2b] transition hover:bg-cyan-300"
              >
                Start a Project
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Full-Screen Logo Viewer */}
      {showLogo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b14]/95 p-6 backdrop-blur-md"
          onClick={() => setShowLogo(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Code Avenue logo preview"
        >
          <button
            type="button"
            onClick={() => setShowLogo(false)}
            aria-label="Close logo preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            ×
          </button>

          <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

          <div
            className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
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