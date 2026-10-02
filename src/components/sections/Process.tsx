const steps = [
  {
    number: "01",
    title: "Discover",
    short: "Understand",
    description:
      "We start by understanding your business, audience, goals, and the problem the digital experience needs to solve.",
    detail: "Goals / Audience / Requirements",
  },
  {
    number: "02",
    title: "Plan",
    short: "Structure",
    description:
      "We turn the requirements into a clear project structure, defining the features, technology, user journey, and development direction.",
    detail: "Architecture / Features / Roadmap",
  },
  {
    number: "03",
    title: "Design",
    short: "Experience",
    description:
      "We shape the interface, visual hierarchy, and user journey into an experience that feels clear, purposeful, and aligned with your brand.",
    detail: "UI / UX / Interaction",
  },
  {
    number: "04",
    title: "Develop",
    short: "Build",
    description:
      "The experience becomes a working product through modern frontend, backend, database, and integration technologies.",
    detail: "Frontend / Backend / APIs",
  },
  {
    number: "05",
    title: "Test",
    short: "Refine",
    description:
      "Before launch, we review functionality, responsiveness, performance, usability, and the details that make the experience feel complete.",
    detail: "QA / Performance / Responsiveness",
  },
  {
    number: "06",
    title: "Deploy",
    short: "Launch",
    description:
      "Once everything is ready, the project moves from development into production and becomes available to your audience.",
    detail: "Production / Launch / Handover",
  },
];

export default function Process() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-[#071a2b] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          MAGICAL DARK BACKGROUND
      ========================================================== */}

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large cyan atmosphere */}
      <div className="pointer-events-none absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-cyan-400/[0.09] blur-[170px]" />

      {/* Blue atmosphere */}
      <div className="pointer-events-none absolute -right-48 top-[20%] h-[650px] w-[650px] rounded-full bg-blue-500/[0.08] blur-[170px]" />

      {/* Lower cyan atmosphere */}
      <div className="pointer-events-none absolute -bottom-56 left-[25%] h-[600px] w-[600px] rounded-full bg-cyan-300/[0.055] blur-[160px]" />

      {/* Small central glow */}
      <div className="pointer-events-none absolute left-[45%] top-[45%] h-64 w-64 rounded-full bg-cyan-400/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                How We Work
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              A clear process.
              <span className="block text-cyan-300">
                A better way to build.
              </span>
            </h2>
          </div>

          <div className="lg:max-w-sm lg:pb-1">
            <p className="text-sm leading-7 text-white/55 sm:text-base">
              Every project moves through a defined sequence — from the first
              conversation to a finished digital product ready for the real
              world.
            </p>
          </div>
        </div>

        {/* =========================================================
            WORKFLOW STATUS
        ========================================================== */}

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-sm">
          <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Project workflow / Active
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-white/25">
                CA / 06
              </span>

              <div className="h-px w-16 bg-white/10 sm:w-24" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                Ready to build
              </span>
            </div>
          </div>

          {/* Progress strip */}
          <div className="grid h-1 grid-cols-6 gap-0.5 bg-white/[0.05]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={
                  index < 3
                    ? "bg-cyan-400"
                    : index === 3
                      ? "bg-cyan-400/70"
                      : index === 4
                        ? "bg-cyan-400/45"
                        : "bg-cyan-400/25"
                }
              />
            ))}
          </div>
        </div>

        {/* =========================================================
            PROCESS TIMELINE
        ========================================================== */}

        <div className="relative mt-16">
          {/* Timeline */}
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/20 to-transparent lg:block" />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const isLight = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className="group relative grid gap-6 lg:grid-cols-[90px_1fr]"
                >
                  {/* ===================================================
                      TIMELINE NODE
                  ==================================================== */}

                  <div className="relative hidden lg:flex lg:justify-center">
                    <div
                      className={`relative z-10 mt-7 flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_0_0_6px_#071a2b] transition-all duration-500 ${
                        isLight
                          ? "border-cyan-400/40 bg-white group-hover:border-cyan-300 group-hover:shadow-[0_0_0_6px_#071a2b,0_0_35px_rgba(34,211,238,0.22)]"
                          : "border-cyan-400/30 bg-[#0a2237] group-hover:border-cyan-300 group-hover:shadow-[0_0_0_6px_#071a2b,0_0_35px_rgba(34,211,238,0.22)]"
                      }`}
                    >
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isLight ? "text-[#071a2b]" : "text-cyan-300"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* ===================================================
                      STEP PANEL
                  ==================================================== */}

                  <div
                    className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                      isLight
                        ? "border-white/10 bg-white hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-950/20"
                        : "border-white/[0.07] bg-[#0a2237] hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#0d2941] hover:shadow-2xl hover:shadow-cyan-950/30"
                    }`}
                  >
                    {/* Magical glow */}
                    <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-cyan-400/10 blur-[85px] opacity-0 transition duration-700 group-hover:opacity-100" />

                    {/* Secondary glow */}
                    <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-blue-500/[0.06] blur-[80px] opacity-0 transition duration-700 group-hover:opacity-100" />

                    {/* Mobile number */}
                    <div
                      className={`absolute right-6 top-6 font-mono text-[10px] lg:hidden ${
                        isLight ? "text-slate-300" : "text-white/20"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:p-10">
                      {/* Left */}
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                              isLight ? "text-cyan-600" : "text-cyan-300"
                            }`}
                          >
                            Step {step.number}
                          </span>

                          <span
                            className={`h-px w-8 ${
                              isLight ? "bg-cyan-500/30" : "bg-cyan-400/30"
                            }`}
                          />
                        </div>

                        <h3
                          className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl ${
                            isLight ? "text-[#071a2b]" : "text-white"
                          }`}
                        >
                          {step.title}
                        </h3>

                        <p
                          className={`mt-2 text-xs font-medium uppercase tracking-[0.2em] ${
                            isLight ? "text-slate-400" : "text-cyan-300/50"
                          }`}
                        >
                          {step.short}
                        </p>
                      </div>

                      {/* Right */}
                      <div>
                        <p
                          className={`max-w-2xl text-sm leading-7 sm:text-base ${
                            isLight ? "text-slate-600" : "text-white/55"
                          }`}
                        >
                          {step.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          {step.detail.split(" / ").map((item) => (
                            <span
                              key={item}
                              className={`rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition ${
                                isLight
                                  ? "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700"
                                  : "border-white/10 bg-white/[0.03] text-white/40 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.04] group-hover:text-cyan-200"
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom magical accent */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            COMPLETION PANEL
        ========================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.045] px-7 py-10 shadow-2xl shadow-black/20 backdrop-blur-sm sm:px-10 lg:px-12">
          {/* Cyan glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.10] blur-[100px]" />

          {/* Blue glow */}
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-56 w-56 rounded-full bg-blue-500/[0.07] blur-[90px]" />

          {/* Rings */}
          <div className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full border border-cyan-400/[0.08]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.10)]">
                  ✓
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Ready for launch
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                From first conversation to{" "}
                <span className="text-cyan-300">something real.</span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                You always know what stage your project is in, what happens
                next, and where we're heading.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold !text-[#071a2b] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              <span>Start Your Project</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071a2b]/10 text-[#071a2b] transition-all duration-300 group-hover:bg-[#071a2b] group-hover:text-cyan-300">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}