export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f8fb] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =========================================================
          MAGICAL LIGHT ENVIRONMENT
      ========================================================== */}

      {/* Fine technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#071a2b 1px, transparent 1px), linear-gradient(90deg, #071a2b 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Large cyan light */}
      <div className="pointer-events-none absolute -left-48 -top-48 h-[650px] w-[650px] rounded-full bg-cyan-300/[0.14] blur-[170px]" />

      {/* Blue light */}
      <div className="pointer-events-none absolute -right-48 top-20 h-[650px] w-[650px] rounded-full bg-blue-400/[0.11] blur-[170px]" />

      {/* Lower cyan light */}
      <div className="pointer-events-none absolute -bottom-64 left-[35%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.08] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            MAIN CARD
        ========================================================== */}

        <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-white shadow-[0_35px_100px_rgba(7,26,43,0.12)]">

          {/* Top light wash */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-72 bg-gradient-to-br from-cyan-50 via-white to-blue-50/70" />

          {/* Large decorative glow */}
          <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-300/[0.14] blur-[130px]" />

          {/* Blue secondary glow */}
          <div className="pointer-events-none absolute -bottom-48 left-[30%] h-[450px] w-[450px] rounded-full bg-blue-400/[0.07] blur-[130px]" />

          {/* Decorative rings */}
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[360px] w-[360px] rounded-full border border-cyan-400/[0.10]" />

          <div className="pointer-events-none absolute right-[-45px] top-[-45px] h-[250px] w-[250px] rounded-full border border-cyan-400/[0.08]" />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* =====================================================
                LEFT — MAIN MESSAGE
            ====================================================== */}

            <div className="relative p-8 sm:p-12 lg:p-16">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
                  Start a Project
                </p>
              </div>

              {/* Heading */}
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#071a2b] sm:text-5xl lg:text-6xl">
                Have an idea?

                <span className="block bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Let's build it.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Tell us what you're looking to build, what your business
                needs, and where you'd like to take it. We'll discuss the
                project and figure out the right direction.
              </p>

              {/* ===================================================
                  ACTIONS
              ==================================================== */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923055316334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#071a2b] shadow-[0_10px_30px_rgba(6,182,212,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-cyan-300 hover:shadow-[0_15px_35px_rgba(6,182,212,0.28)]"
                >
                  <span>Message on WhatsApp</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071a2b]/10 transition-all duration-300 group-hover:bg-[#071a2b] group-hover:text-cyan-300">
                    ↗
                  </span>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hello.codeavenue@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#071a2b] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-lg hover:shadow-cyan-900/5"
                >
                  <span>Email Us</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    @
                  </span>
                </a>

              </div>

              {/* Availability */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]" />
                </span>

                <p className="text-xs font-medium text-slate-500">
                  Open for new project enquiries
                </p>

              </div>

              {/* Small technical label */}
              <div className="mt-14 hidden items-center gap-4 sm:flex">

                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  CODE_AVENUE
                </span>

                <span className="h-px w-12 bg-slate-200" />

                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  DIGITAL / BUILD / GROW
                </span>

              </div>

            </div>

            {/* =====================================================
                RIGHT — CONTACT PANEL
            ====================================================== */}

            <div className="relative overflow-hidden bg-[#071a2b] p-6 sm:p-8 lg:p-10">

              {/* Panel gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0a2237] via-[#071a2b] to-[#050f1a]" />

              {/* Cyan atmosphere */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.12] blur-[120px]" />

              {/* Blue atmosphere */}
              <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-blue-500/[0.10] blur-[110px]" />

              {/* Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="relative flex h-full flex-col">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Contact
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                      Let's talk
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] text-white/25">
                    CA / 01
                  </span>

                </div>

                {/* =================================================
                    WHATSAPP CARD
                ================================================== */}

                <a
                  href="https://wa.me/923055316334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-7 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.12] to-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_15px_40px_rgba(34,211,238,0.10)]"
                >

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">

                    <div>
                      <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                          WhatsApp
                        </p>

                      </div>

                      <p className="mt-3 text-sm font-semibold text-white">
                        Message us directly
                      </p>

                      <p className="mt-1 text-xs leading-6 text-white/40">
                        For project enquiries and quick discussions.
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-semibold text-[#071a2b] shadow-lg shadow-cyan-400/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-300">
                      ↗
                    </span>

                  </div>
                </a>

                {/* =================================================
                    EMAIL CARD
                ================================================== */}

                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hello.codeavenue@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.055]"
                >

                  <div className="relative flex items-start justify-between gap-4">

                    <div>
                      <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.7)]" />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                          Email
                        </p>

                      </div>

                      <p className="mt-3 text-sm font-semibold text-white">
                        Send project details
                      </p>

                      <p className="mt-1 text-xs leading-6 text-white/40">
                        Ideal for requirements, references, and project
                        information.
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/60 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400 group-hover:text-[#071a2b]">
                      @
                    </span>

                  </div>

                </a>

                {/* =================================================
                    SERVICES
                ================================================== */}

                <div className="mt-auto pt-8">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      What we can help with
                    </p>

                    <span className="font-mono text-[9px] text-white/20">
                      06 / SERVICES
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "Web Development",
                      "E-commerce",
                      "Web Applications",
                      "Landing Pages",
                      "Meta Ads",
                      "Google Ads",
                    ].map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white/45 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-200"
                      >
                        {service}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            BOTTOM NOTE
        ========================================================== */}

        <div className="mt-6 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-400">
            Have a project, idea, or business challenge? Start the
            conversation.
          </p>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-600/60">
            CODE_AVENUE / CONTACT
          </span>

        </div>

      </div>
    </section>
  );
}