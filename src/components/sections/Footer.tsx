export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06131f] px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.75) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large atmospheric light */}
      <div className="pointer-events-none absolute -left-72 -top-72 h-[760px] w-[760px] rounded-full bg-cyan-400/[0.045] blur-[180px]" />

      <div className="pointer-events-none absolute -right-72 top-[15%] h-[700px] w-[700px] rounded-full bg-blue-500/[0.035] blur-[190px]" />

      <div className="pointer-events-none absolute bottom-[-350px] left-[40%] h-[700px] w-[700px] rounded-full bg-cyan-300/[0.025] blur-[190px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            MAIN GRID
        ========================================================== */}

        <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">

          {/* =====================================================
              BRAND — DARK FEATURE CARD
          ====================================================== */}

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0a2031] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-9">

            {/* Atmospheric glow */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/[0.09] blur-[110px] transition duration-700 group-hover:bg-cyan-400/[0.13]" />

            <div className="pointer-events-none absolute bottom-[-80px] left-[-60px] h-52 w-52 rounded-full bg-blue-500/[0.05] blur-[90px]" />

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full border border-cyan-300/[0.08]" />

            <div className="relative">

              {/* Logo */}
              <a
                href="#home"
                className="group/logo inline-flex items-center gap-4"
              >
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071a2b] p-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover/logo:-translate-y-0.5 group-hover/logo:border-cyan-300/20 group-hover/logo:shadow-[0_15px_40px_rgba(34,211,238,0.14)]">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-cyan-400/[0.05]" />

                  <img
                    src="/logo.png"
                    alt="Code Avenue"
                    className="relative h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-base font-bold tracking-[0.12em] text-white">
                    CODE AVENUE
                  </p>

                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Digital Development & Growth
                  </p>
                </div>
              </a>

              {/* Description */}
              <p className="mt-7 max-w-sm text-sm leading-7 text-slate-300/70">
                Modern websites, e-commerce experiences, web applications,
                and digital advertising built around real business goals.
              </p>

              {/* Status */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-25" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.55)]" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Open for new projects
                </span>
              </div>

              {/* Signature */}
              <div className="mt-10 flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  CODE AVENUE
                </span>

                <span className="h-px w-10 bg-white/10" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300/50">
                  BUILD × GROW
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              EXPLORE — LIGHT CARD
          ====================================================== */}

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#f7fafb] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-8">

            {/* Subtle light */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/[0.12] blur-[70px]" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Explore
                </p>

                <span className="font-mono text-[9px] text-slate-400">
                  05
                </span>
              </div>

              <nav className="mt-7 flex flex-col gap-3.5">

                <a
                  href="#home"
                  className="group flex items-center justify-between text-sm text-slate-600 transition duration-300 hover:text-[#071a2b]"
                >
                  Home

                  <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-cyan-600">
                    ↗
                  </span>
                </a>

                <a
                  href="#services"
                  className="group flex items-center justify-between text-sm text-slate-600 transition duration-300 hover:text-[#071a2b]"
                >
                  Services

                  <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-cyan-600">
                    ↗
                  </span>
                </a>

                <a
                  href="#about"
                  className="group flex items-center justify-between text-sm text-slate-600 transition duration-300 hover:text-[#071a2b]"
                >
                  About

                  <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-cyan-600">
                    ↗
                  </span>
                </a>

                <a
                  href="#how-we-work"
                  className="group flex items-center justify-between text-sm text-slate-600 transition duration-300 hover:text-[#071a2b]"
                >
                  How We Work

                  <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-cyan-600">
                    ↗
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group flex items-center justify-between text-sm text-slate-600 transition duration-300 hover:text-[#071a2b]"
                >
                  Contact

                  <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-cyan-600">
                    ↗
                  </span>
                </a>

              </nav>
            </div>
          </div>

          {/* =====================================================
              SERVICES — DEEP CYAN NAVY CARD
          ====================================================== */}

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/[0.12] bg-[#123449] p-7 shadow-[0_25px_75px_rgba(0,0,0,0.20)] sm:p-8">

            {/* Atmospheric light */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/[0.09] blur-[80px]" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Services
                </p>

                <span className="font-mono text-[9px] text-white/25">
                  06
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3.5">

                {[
                  "Web Development",
                  "E-commerce",
                  "Web Applications",
                  "Landing Pages",
                  "Meta Ads",
                  "Google Ads",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 text-sm text-slate-200/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_8px_rgba(103,232,249,0.35)]" />

                    {service}
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* =====================================================
              CONNECT — WHITE FEATURE CARD
          ====================================================== */}

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.20)] sm:p-8">

            {/* Magical cyan glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-300/[0.14] blur-[90px] transition duration-700 group-hover:bg-cyan-300/[0.20]" />

            {/* Blue glow */}
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-blue-300/[0.08] blur-[80px]" />

            <div className="relative">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Connect
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Have a project in mind? Let's start the conversation.
              </p>

              {/* Social buttons */}
              <div className="mt-7 flex gap-2.5">

                {/* Facebook */}
<a
  href="https://www.facebook.com/codeavenuedev"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  className="group/social flex h-11 w-11 items-center justify-center rounded-xl border border-[#1877F2]/20 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2]/35 hover:bg-slate-50 hover:shadow-[0_12px_25px_rgba(24,119,242,0.18)]"
>
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px]"
    fill="#1877F2"
    aria-hidden="true"
  >
    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
  </svg>
</a>

            {/* Instagram */}
<a
  href="https://instagram.com/codeavenue.web"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="group/social flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C]/30 hover:bg-slate-50 hover:shadow-[0_12px_25px_rgba(225,48,108,0.18)]"
>
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="none"
    stroke="#E1306C"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="#E1306C"
      stroke="none"
    />
  </svg>
</a>

                {/* WhatsApp */}
<a
  href="https://wa.me/923055316334"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="group/social flex h-11 w-11 items-center justify-center rounded-xl border border-[#25D366]/20 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/35 hover:bg-slate-50 hover:shadow-[0_12px_25px_rgba(37,211,102,0.18)]"
>
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="#25D366"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 0 0-8.7 14.93L2 22l5.25-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.12.77.8-3.03-.19-.31A8 8 0 1 1 12 20Zm4.39-5.94c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
</a>

              </div>

             {/* Email */}
<a
  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hello.codeavenue@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 block text-xs font-medium text-slate-500 transition hover:text-cyan-700"
>
  hello.codeavenue@gmail.com
</a>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#071a2b] transition hover:text-cyan-700"
              >
                Start a conversation

                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* =========================================================
    PAYMENT STRIP
========================================================== */}

<div className="group relative mt-5 overflow-hidden rounded-[1.5rem] border border-cyan-200/[0.10] bg-gradient-to-r from-[#0b2030] via-[#0d293b] to-[#0a1c2a] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:px-7">

  {/* Magical ambient glow */}
  <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/[0.09] blur-[80px] transition duration-700 group-hover:bg-cyan-400/[0.14]" />

  <div className="pointer-events-none absolute -right-20 -bottom-24 h-44 w-44 rounded-full bg-sky-400/[0.06] blur-[75px]" />

  {/* Soft luminous line */}
  <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

  {/* Decorative glow point */}
  <div className="pointer-events-none absolute right-[28%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[35px]" />

  <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

    {/* Payment information */}
    <div className="flex items-start gap-4">

      {/* Small visual marker */}
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] shadow-[0_0_20px_rgba(34,211,238,0.06)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/30" />

          <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.65)]" />
        </span>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
          Payment Options
        </p>

        <p className="mt-1.5 text-xs leading-5 text-slate-300/45">
          Available payment methods for project services.
        </p>
      </div>

    </div>

    {/* Payment methods */}
    <div className="flex flex-wrap items-center gap-2">

      <span className="rounded-xl border border-white/[0.08] bg-white/[0.045] px-4 py-2.5 text-[9px] font-semibold tracking-[0.08em] text-slate-200/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.06] hover:text-cyan-200">
        BANK TRANSFER
      </span>

      <span className="rounded-xl border border-white/[0.08] bg-white/[0.045] px-4 py-2.5 text-[9px] font-semibold tracking-[0.08em] text-slate-200/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.06] hover:text-cyan-200">
        JAZZCASH
      </span>

      <span className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-[9px] font-semibold tracking-[0.08em] text-cyan-200/70 shadow-[0_0_18px_rgba(34,211,238,0.04)] transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.11] hover:text-cyan-100">
        EASYPAISA
      </span>

    </div>

  </div>
</div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================== */}

        <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-400/35">
            © {new Date().getFullYear()} Code Avenue. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#contact"
              className="text-xs text-slate-400/40 transition hover:text-cyan-300"
            >
              Start a Project
            </a>

            <span className="h-1 w-1 rounded-full bg-cyan-400/30" />

            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain opacity-50"
              />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400/30">
                DIGITAL
              </span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}