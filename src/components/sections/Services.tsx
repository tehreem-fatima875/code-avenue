const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web solutions covering frontend, backend, APIs, databases, authentication, and deployment.",
    tags: ["Frontend", "Backend", "APIs"],
  },
  {
    number: "02",
    title: "E-commerce Development",
    description:
      "Modern online stores designed around product discovery, seamless shopping experiences, checkout, and integrations.",
    tags: ["Stores", "Checkout", "Integrations"],
  },
  {
    number: "03",
    title: "Business Websites",
    description:
      "Professional digital experiences built to establish credibility, communicate your value, and turn visitors into customers.",
    tags: ["Responsive", "SEO-ready", "Conversion"],
  },
  {
    number: "04",
    title: "Custom Web Applications",
    description:
      "Purpose-built applications designed around your business workflows, users, data, and operational requirements.",
    tags: ["Custom", "Scalable", "Secure"],
  },
  {
    number: "05",
    title: "Landing Pages",
    description:
      "Focused, fast-loading pages built for products, services, campaigns, lead generation, and conversions.",
    tags: ["Campaigns", "Leads", "Performance"],
  },
  {
    number: "06",
    title: "Website Redesign & Optimization",
    description:
      "Transform outdated websites into modern, responsive experiences with stronger usability and performance.",
    tags: ["Redesign", "UX", "Optimization"],
  },
];

const advertisingServices = [
  {
    number: "01",
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising campaigns structured around audience targeting, creative testing, and measurable business objectives.",
    tags: ["Facebook", "Instagram", "Campaigns"],
  },
  {
    number: "02",
    title: "Google Ads",
    description:
      "Search and performance campaigns designed to capture high-intent customers and connect advertising with business goals.",
    tags: ["Search", "Keywords", "Conversions"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND — DARK + WHITE MIX
      ====================================================== */}

      {/* Dark upper field */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[47%] bg-[#071a2b]" />

      {/* Dark-to-white transition */}
      <div className="pointer-events-none absolute inset-x-0 top-[35%] h-[20%] bg-gradient-to-b from-[#071a2b] via-[#0a2237] to-transparent" />

      {/* Technical grid — dark region */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50%] opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Technical grid — white region */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7,26,43,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,26,43,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          MAGICAL ATMOSPHERE
      ====================================================== */}

      {/* Cyan glow — dark area */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[520px] w-[520px] rounded-full bg-cyan-400/[0.11] blur-[150px]" />

      {/* Blue glow — dark area */}
      <div className="pointer-events-none absolute -right-44 top-16 h-[520px] w-[520px] rounded-full bg-blue-500/[0.09] blur-[150px]" />

      {/* Transition glow */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[260px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-[120px]" />

      {/* White-area cyan glow */}
      <div className="pointer-events-none absolute -right-44 bottom-40 h-[420px] w-[420px] rounded-full bg-cyan-200/[0.12] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            SECTION HEADER — DARK
        ==================================================== */}

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.8fr]">

          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                What We Do
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Digital solutions built
              <span className="block text-cyan-400">
                for real businesses.
              </span>
            </h2>

          </div>

          <div className="lg:pb-1">

            <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              We combine development, design, and digital advertising to help
              businesses build a stronger online presence and create better
              paths from attention to action.
            </p>

          </div>

        </div>

        {/* ===================================================
            PRIMARY SERVICES — WHITE AREA
        ==================================================== */}

        <div className="relative mt-20">

          {/* Category Label */}
          <div className="mb-7 flex items-center justify-between border-b border-slate-200 pb-5">

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-50 text-xs font-bold text-cyan-600">
                01
              </span>

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#071a2b]">
                  Build
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Digital products & experiences
                </p>

              </div>

            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-400 sm:block">
              Development
            </span>

          </div>

          {/* Services Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(7,26,43,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_25px_70px_rgba(7,26,43,0.10)]"
              >

                {/* Magical hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/[0.12] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-center justify-between">

                  <span className="font-mono text-xs font-semibold tracking-widest text-cyan-600">
                    / {service.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-400 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-600">
                    ↗
                  </span>

                </div>

                {/* Content */}
                <div className="relative mt-10">

                  <h3 className="text-xl font-semibold leading-snug text-[#071a2b]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                </div>

                {/* Tags */}
                <div className="relative mt-7 flex flex-wrap gap-2">

                  {service.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-500 transition group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-slate-600"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

              </article>

            ))}

          </div>

        </div>

        {/* ===================================================
            GROWTH SERVICES — DARK FEATURE AREA
        ==================================================== */}

        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-[#071a2b] px-6 py-10 shadow-[0_30px_90px_rgba(7,26,43,0.18)] sm:px-8 lg:px-10 lg:py-12">

          {/* Magical background */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.10] blur-[110px]" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[110px]" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative">

            {/* Category Label */}
            <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">

              <div className="flex items-center gap-3">

                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold text-cyan-400">
                  02
                </span>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    Grow
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Paid acquisition & digital growth
                  </p>

                </div>

              </div>

              <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-600 sm:block">
                Advertising
              </span>

            </div>

            {/* Advertising Cards */}
            <div className="grid gap-5 lg:grid-cols-2">

              {advertisingServices.map((service) => (

                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.065]"
                >

                  {/* Decorative circles */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-cyan-400/10 transition duration-500 group-hover:scale-110" />

                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-cyan-400/10" />

                  <div className="relative flex items-center justify-between">

                    <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400">
                      / {service.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-500 transition group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                      ↗
                    </span>

                  </div>

                  <div className="relative mt-12 max-w-xl">

                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                      {service.description}
                    </p>

                  </div>

                  <div className="relative mt-8 flex flex-wrap gap-2">

                    {service.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  <div className="relative mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">

                    <span className="h-px w-8 bg-cyan-400 transition-all duration-300 group-hover:w-12" />

                    Performance focused

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

        {/* ===================================================
            BOTTOM STATEMENT — WHITE
        ==================================================== */}

        <div className="relative mt-24 overflow-hidden rounded-3xl border border-slate-200 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(7,26,43,0.06)] sm:px-10 lg:px-12">

          {/* Soft magic */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-300/[0.10] blur-[70px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">
                One digital partner
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-[#071a2b] sm:text-3xl">
                Build the platform. Reach the audience.{" "}
                <span className="text-slate-400">
                  Keep improving.
                </span>
              </h3>

            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center rounded-full bg-[#071a2b] px-6 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:bg-cyan-500 hover:text-[#071a2b] hover:shadow-cyan-400/20"
            >
              Start a Project

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}