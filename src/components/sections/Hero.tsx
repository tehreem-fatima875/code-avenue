export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8fafc] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Left Content */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Web Development & Digital Growth
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-6xl lg:text-7xl">
            We build digital
            <span className="block text-cyan-500">experiences that</span>
            help businesses grow.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From high-performing websites and e-commerce platforms to
            Meta and Google advertising, Code Avenue helps businesses build
            their digital presence and reach the right customers.
          </p>

          {/* CTA Buttons */}
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
  <a
    href="#contact"
    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30"
  >
    Start a Project
    <span className="ml-2 text-base">↗</span>
  </a>

  <a
    href="#services"
    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:border-cyan-500 hover:bg-cyan-50 hover:text-slate-950"
  >
    Explore Services
  </a>
</div>

          {/* Small supporting points */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-cyan-500">✓</span>
              Responsive development
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-cyan-500">✓</span>
              Conversion-focused
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-cyan-500">✓</span>
              Business-focused solutions
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-[#07111f] p-6 shadow-2xl shadow-slate-900/15">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Window */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1626]">
              {/* Window top bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />

                <div className="ml-auto h-2 w-20 rounded-full bg-white/10" />
              </div>

              {/* Visual content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                    Digital Solutions
                  </p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
                    Build.
                    <br />
                    Launch.
                    <br />
                    <span className="text-cyan-400">Grow.</span>
                  </h2>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                    Websites, e-commerce and digital advertising built around
                    real business goals.
                  </p>
                </div>

                {/* Mini dashboard */}
                <div className="mt-10 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Digital Presence
                      </span>
                      <span className="text-xs text-cyan-400">Active</span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-500">Web</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Build
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-500">Ads</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Grow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div className="absolute -bottom-6 -left-8 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl shadow-slate-900/10">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              Built for business
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Strategy × Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}