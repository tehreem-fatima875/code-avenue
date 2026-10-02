export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects built with
            <span className="text-cyan-400"> purpose.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A selection of web projects and digital products will be featured
            here as they are completed.
          </p>
        </div>

        {/* Project placeholder */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0a1220]">
          <div className="grid min-h-[360px] lg:grid-cols-2">
            {/* Visual area */}
            <div className="relative flex items-center justify-center overflow-hidden bg-[#050b14] p-10">
              <div className="absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative w-full max-w-md rounded-2xl border border-cyan-400/20 bg-[#0a1220] p-6 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                </div>

                <div className="mt-6 space-y-4">
                  <div className="h-3 w-32 rounded-full bg-cyan-400/30" />
                  <div className="h-8 w-3/4 rounded-lg bg-white/10" />

                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
                    <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
                    <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
                  </div>

                  <div className="h-24 rounded-xl border border-white/10 bg-white/5" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                Portfolio in progress
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Real projects. Real solutions.
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                This space will showcase completed websites, e-commerce
                platforms, and custom web applications developed by Code
                Avenue.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                As new projects are completed, they will be added here with
                their technology, purpose, and relevant live or code links.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}