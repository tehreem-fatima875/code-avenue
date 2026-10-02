const principles = [
  {
    number: "01",
    title: "Start With the Business",
    description:
      "We don't begin with templates or technology for the sake of technology. We first understand what you're trying to achieve, who you're trying to reach, and what the digital experience needs to accomplish.",
    label: "DISCOVERY",
  },
  {
    number: "02",
    title: "Design With Purpose",
    description:
      "Every interface decision has a reason. We focus on clarity, usability, responsiveness, and creating a journey that makes it easier for visitors to understand, trust, and take action.",
    label: "EXPERIENCE",
  },
  {
    number: "03",
    title: "Build for What Comes Next",
    description:
      "A website shouldn't become a limitation as your business grows. We structure projects with clean foundations so new features, integrations, content, and functionality can be added over time.",
    label: "ENGINEERING",
  },
  {
    number: "04",
    title: "Think Beyond Launch",
    description:
      "Launching the website is not the finish line. We consider performance, discoverability, campaigns, conversion paths, and the next opportunities to improve the digital experience.",
    label: "GROWTH",
  },
];

export default function WhyCodeAvenue() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background details */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#071a2b 1px, transparent 1px), linear-gradient(90deg, #071a2b 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">
                The Code Avenue Approach
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-[#071a2b] sm:text-5xl lg:text-6xl">
              We don't just build
              <span className="block text-cyan-500">
                what's requested.
              </span>
              <span className="block text-slate-400">
                We build what makes sense.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Good digital work sits between business strategy, user
              experience, and technology. Our approach brings those pieces
              together instead of treating them as separate problems.
            </p>
          </div>
        </div>

        {/* Main visual area */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left visual panel */}
          <div className="relative overflow-hidden rounded-3xl bg-[#071a2b] p-8 sm:p-10 lg:min-h-[620px]">
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-[90px]" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-cyan-400">
                    CODE_AVENUE / APPROACH
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-slate-500">
                    ↗
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    From idea
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs text-cyan-400">→</span>
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    to digital growth
                  </p>
                </div>
              </div>

              {/* Process visualization */}
              <div className="mt-16">
                <div className="space-y-3">
                  {[
                    ["01", "Understand", "Business"],
                    ["02", "Design", "Experience"],
                    ["03", "Build", "Technology"],
                    ["04", "Improve", "Growth"],
                  ].map(([number, title, subtitle]) => (
                    <div
                      key={number}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                    >
                      <span className="font-mono text-[10px] text-cyan-400">
                        {number}
                      </span>

                      <div className="h-5 w-px bg-white/10" />

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          {title}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                          {subtitle}
                        </p>
                      </div>

                      <span className="text-xs text-slate-700 transition group-hover:text-cyan-400">
                        ↗
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    SYSTEM / 01
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                    Connected
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right principles */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Our Principles
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  How we approach every project
                </p>
              </div>

              <span className="font-mono text-xs text-slate-300">
                04 / 04
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="group relative py-8 first:pt-2 last:pb-2"
                >
                  <div className="flex gap-5 sm:gap-7">
                    {/* Number */}
                    <div className="shrink-0">
                      <span className="font-mono text-xs font-semibold text-cyan-500">
                        {principle.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl font-semibold tracking-tight text-[#071a2b] transition-colors duration-300 group-hover:text-cyan-600">
                          {principle.title}
                        </h3>

                        <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[9px] font-semibold tracking-[0.18em] text-slate-400">
                          {principle.label}
                        </span>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                        {principle.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden shrink-0 sm:block">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-300 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-50 group-hover:text-cyan-500">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white px-7 py-6 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm text-cyan-600">
                ✓
              </span>

              <p className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-[#071a2b]">
                  One connected approach:
                </span>{" "}
                strategy, design, development, and digital growth working
                together instead of in isolation.
              </p>
            </div>
          </div>

          <a
  href="#how-we-work"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-sm font-semibold text-[#071a2b] shadow-lg shadow-cyan-500/20 transition duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30"
>
  See How We Work
  <span>↗</span>
</a>
        </div>
      </div>
    </section>
  );
}