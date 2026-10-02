const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description: "Responsive interfaces and polished user experiences.",
  },
  {
    number: "02",
    title: "Backend",
    description:
      "APIs, business logic, authentication, and application systems.",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Store experiences built around products, customers, and conversion.",
  },
  {
    number: "04",
    title: "Data",
    description:
      "Databases and integrations that keep digital products connected.",
  },
  {
    number: "05",
    title: "Growth",
    description:
      "Meta and Google advertising connected to business objectives.",
  },
];

const principles = [
  "Business-first thinking",
  "Clean and maintainable development",
  "Responsive by default",
  "Clear communication",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================== */}

      {/* Soft cyan glow */}
      <div className="pointer-events-none absolute -left-48 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-300/[0.10] blur-[160px]" />

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -right-48 top-[15%] h-[650px] w-[650px] rounded-full bg-blue-400/[0.08] blur-[170px]" />

      {/* Lower cyan atmosphere */}
      <div className="pointer-events-none absolute -bottom-56 left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[150px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#071a2b 1px, transparent 1px), linear-gradient(90deg, #071a2b 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
                About Code Avenue
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[#071a2b] sm:text-5xl lg:text-6xl">
              We build digital work
              <span className="block text-cyan-600">
                that has a reason behind it.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:pb-1">
            Code Avenue is an independent digital development and growth
            service focused on creating practical, modern solutions for
            businesses that want to build, improve, or grow online.
          </p>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =======================================================
              WHITE STORY PANEL
          ======================================================== */}

          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(7,26,43,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(7,26,43,0.12)] sm:p-10 lg:p-12">
            {/* Cyan atmosphere */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.12] blur-[100px]" />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-24 top-12 h-56 w-56 rounded-full border border-cyan-500/[0.10]" />

            <div className="pointer-events-none absolute -right-8 top-28 h-28 w-28 rounded-full border border-cyan-500/[0.08]" />

            <div className="relative">
              {/* Identifier */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600">
                  CODE_AVENUE / PROFILE
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Independent
                </span>
              </div>

              {/* Story */}
              <div className="mt-12 max-w-3xl">
                <p className="text-sm leading-7 text-[#071a2b] sm:text-base">
                  Code Avenue brings together web development and digital
                  advertising under one approach — building the digital
                  experience and thinking about how people actually reach it.
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                  From business websites and landing pages to e-commerce
                  stores and custom web applications, projects are shaped
                  around the business, its audience, and the outcome it needs
                  to achieve.
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                  The goal isn't to add technology for the sake of it. It's to
                  create digital products that are useful, understandable,
                  maintainable, and ready to evolve as the business grows.
                </p>
              </div>

              {/* Principles */}
              <div className="mt-12 border-t border-slate-200 pt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  What guides the work
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <div
                      key={principle}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-50"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[10px] font-semibold text-cyan-700">
                        ✓
                      </span>

                      <span className="text-xs font-medium text-slate-700">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT COLUMN
          ======================================================== */}

          <div className="flex flex-col gap-6">
            {/* =====================================================
                NAVY CAPABILITIES
            ====================================================== */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#071a2b] p-7 shadow-[0_25px_70px_rgba(7,26,43,0.18)] sm:p-8">
              {/* Navy atmospheric glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.10] blur-[90px]" />

              {/* Technical grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Capabilities
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                      What we work with
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] text-white/30">
                    05 / AREAS
                  </span>
                </div>

                <div className="mt-7 divide-y divide-white/10">
                  {capabilities.map((capability) => (
                    <div
                      key={capability.number}
                      className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="pt-0.5 font-mono text-[10px] font-semibold text-cyan-300">
                        {capability.number}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-sm font-semibold text-white">
                            {capability.title}
                          </h4>

                          <span className="text-xs text-white/20 transition duration-300 group-hover:text-cyan-300">
                            ↗
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-6 text-white/45">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================================
                CYAN FOCUS PANEL
            ====================================================== */}

            <div className="relative flex-1 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-300 p-7 shadow-[0_25px_70px_rgba(6,182,212,0.18)] sm:p-8">
              {/* White atmospheric glow */}
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-white/40 blur-[90px]" />

              {/* Blue atmospheric glow */}
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#071a2b]/10" />

              <div className="pointer-events-none absolute -right-8 top-10 h-28 w-28 rounded-full border border-white/35" />

              {/* Technical grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                  backgroundImage:
                    "linear-gradient(#071a2b 1px, transparent 1px), linear-gradient(90deg, #071a2b 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-950/70">
                    Our Focus
                  </p>

                  <h3 className="mt-4 max-w-md text-2xl font-bold leading-tight tracking-tight text-[#071a2b]">
                    Build it well.
                    <span className="block text-white">
                      Make it matter.
                    </span>
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-cyan-950/70">
                    Good digital work should look right, work properly, and
                    contribute to a real business objective.
                  </p>
                </div>

                <div className="mt-10 border-t border-[#071a2b]/15 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-950/70">
                      Development × Growth
                    </span>

                    <span className="font-mono text-[10px] text-cyan-950/60">
                      CA / 01
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <div className="relative mt-6 flex flex-col gap-6 overflow-hidden rounded-[2rem] bg-[#071a2b] px-7 py-7 shadow-[0_25px_70px_rgba(7,26,43,0.16)] sm:px-9 lg:flex-row lg:items-center lg:justify-between">
          {/* CTA atmosphere */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.12] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 left-[30%] h-64 w-64 rounded-full bg-blue-500/[0.08] blur-[100px]" />

          {/* Technical grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative flex items-start gap-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-semibold text-[#071a2b] shadow-lg shadow-cyan-400/20">
              →
            </span>

            <div>
              <p className="text-sm font-semibold text-white">
                Have a project in mind?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/50">
                Tell us what you're trying to build, improve, or grow.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold !text-[#071a2b] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
          >
            <span>Start a Conversation</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071a2b]/10 text-[#071a2b] transition-all duration-300 group-hover:bg-[#071a2b] group-hover:text-cyan-300">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}