export default function FAQ() {
  const faqs = [
    {
      number: "01",
      question:
        "I have an idea, but I don't know where to start. Can you help me figure it out?",
      answer:
        "Absolutely. You don't need to arrive with a complete technical plan. We can understand your business, what you're trying to achieve, and help shape the idea into a practical digital solution.",
    },
    {
      number: "02",
      question:
        "Do I need to buy a domain and hosting myself, or can you handle that for me?",
      answer:
        "You can purchase your domain and hosting yourself, or we can help arrange and purchase them on your behalf. If you already own a domain or have existing hosting, that's absolutely fine — we can work with your current setup and deploy your website there. Our goal is to make the process flexible and hassle-free, whether you want to manage these services yourself or have us handle the technical setup for you.",
    },
    {
      number: "03",
      question:
        "Will you build my website, or will I have to figure everything out myself?",
      answer:
        "You can provide us with your own requirements, ideas, content, or project plan, and we’ll build the website around them. If you’re not sure about the structure, features, design, or technical decisions, that’s completely fine too. We can guide you through the development process and help make the right decisions based on your business, goals, and audience. Either way, you stay involved while we handle the technical side of bringing the project to life.",
    },
    {
      number: "04",
      question:
        "What do you actually need from me before you can start?",
      answer:
        "Usually, we need information about your business, your goals, target audience, preferred content or branding, and any specific features you need. If something is missing, we can identify it during the planning stage.",
    },
    {
      number: "05",
      question:
        "Can you work with my existing brand, content, and business setup?",
      answer:
        "Yes. We can work with an existing brand identity, content, website, store, or other parts of your current digital setup. The approach depends on whether you're looking for an improvement, redesign, rebuild, or something new.",
    },
    {
      number: "06",
      question:
        "Once the website is finished, who takes care of putting it live?",
      answer:
        "Deployment can be handled as part of the project. Once the website is ready, we can help with the production setup, deployment, domain connection, and the steps required to make the website accessible to your audience.",
    },
    {
      number: "07",
      question:
        "How much will my project cost?",
      answer:
        "Project pricing depends on the scope, functionality, number of pages, integrations, design requirements, and overall complexity. Once we understand what you need, we can discuss the project and provide a clearer estimate.",
    },
    {
      number: "08",
      question:
        "Can I see the project and request changes while you're building it?",
      answer:
        "Yes. Project feedback and revisions can be discussed throughout development so the final result stays aligned with the agreed direction and requirements.",
    },
    {
      number: "09",
      question:
        "Can you also manage Meta Ads and Google Ads for my business?",
      answer:
        "Yes. Alongside web development, Code Avenue also provides Meta Ads and Google Ads services to help businesses reach relevant audiences and support their digital growth.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#061522] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Large magical cyan glow */}
      <div className="pointer-events-none absolute -left-56 top-0 h-[520px] w-[520px] rounded-full bg-cyan-400/[0.09] blur-[150px]" />

      {/* Blue atmospheric glow */}
      <div className="pointer-events-none absolute -right-64 bottom-0 h-[620px] w-[620px] rounded-full bg-sky-500/[0.08] blur-[170px]" />

      {/* Central luminous haze */}
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-[110px]" />

      {/* Floating light */}
      <div className="pointer-events-none absolute right-[18%] top-[18%] h-24 w-24 rounded-full bg-cyan-300/[0.045] blur-[40px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="max-w-4xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Frequently Asked
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Before we build,
            <br />
            <span className="text-slate-500">
              let’s clear a few things up.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From the first idea to getting your website live, here are some
            of the questions businesses often have before starting a project.
          </p>

        </div>

        {/* ===================================================
            MAIN FAQ AREA
        ==================================================== */}

        <div className="relative mt-16">

          {/* Decorative vertical glow */}
          <div className="pointer-events-none absolute -left-6 top-20 hidden h-[70%] w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">

            {/* =================================================
                LEFT — DARK INFORMATION PANEL
            ================================================== */}

            <div className="relative lg:sticky lg:top-28 lg:self-start">

              <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#0b2438] via-[#081d30] to-[#061522] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.28)] sm:p-8">

                {/* Internal glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.11] blur-[85px] transition duration-700 group-hover:bg-cyan-400/[0.16]" />

                <div className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-sky-400/[0.07] blur-[85px]" />

                {/* Luminous top edge */}
                <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

                <div className="relative">

                  {/* Technical header */}
                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300/65">
                      CODE_AVENUE / FAQ
                    </span>

                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/30" />

                      <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />
                    </span>

                  </div>

                  {/* Main statement */}
                  <div className="mt-20">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Start with the idea
                    </p>

                    <h3 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                      You bring
                      <br />
                      the <span className="text-cyan-300">idea.</span>
                    </h3>

                    <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
                      We help turn that idea into a clear digital project —
                      from planning and development to launch and growth.
                    </p>

                  </div>

                  {/* Process indicator */}
                  <div className="mt-14 border-t border-white/[0.08] pt-7">

                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      The conversation
                    </p>

                    <div className="space-y-5">

                      <div className="flex items-center gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] font-mono text-[9px] text-cyan-300">
                          01
                        </span>

                        <span className="text-xs text-slate-300">
                          Understand the requirement
                        </span>
                      </div>

                      <div className="ml-3.5 h-5 w-px bg-gradient-to-b from-cyan-300/30 to-transparent" />

                      <div className="flex items-center gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] font-mono text-[9px] text-cyan-300">
                          02
                        </span>

                        <span className="text-xs text-slate-300">
                          Plan the right solution
                        </span>
                      </div>

                      <div className="ml-3.5 h-5 w-px bg-gradient-to-b from-cyan-300/30 to-transparent" />

                      <div className="flex items-center gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] font-mono text-[9px] text-cyan-300">
                          03
                        </span>

                        <span className="text-xs text-slate-300">
                          Build, launch & refine
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* Bottom signature */}
                  <div className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-5">

                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                      Digital / Development / Growth
                    </span>

                    <span className="text-cyan-300/60">
                      ↗
                    </span>

                  </div>

                </div>
              </div>

              {/* Contact prompt */}
              <div className="relative mt-4 flex items-center justify-between overflow-hidden rounded-2xl border border-cyan-300/[0.12] bg-white/[0.045] px-5 py-4 backdrop-blur-xl">

                <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-cyan-300/[0.06] blur-[30px]" />

                <div className="relative">
                  <p className="text-xs font-semibold text-white">
                    Still have a question?
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Let’s talk about your project.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-[#061522] shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]"
                  aria-label="Contact Code Avenue"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>

              </div>

            </div>

            {/* =================================================
                RIGHT — WHITE FAQ PANEL
            ================================================== */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#f8fafc] shadow-[0_35px_100px_rgba(0,0,0,0.25)]">

              {/* White panel magical glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-300/[0.13] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-sky-300/[0.10] blur-[100px]" />

              {/* Tiny luminous point */}
              <div className="pointer-events-none absolute right-16 top-12 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />

              <div className="relative px-6 sm:px-8 lg:px-10">

                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-slate-200 py-6">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                      Questions & answers
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Everything you need to know before getting started.
                    </p>
                  </div>

                  <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-slate-400 sm:block">
                    09 QUESTIONS
                  </span>

                </div>

                {/* FAQ list */}
                <div className="divide-y divide-slate-200">

                  {faqs.map((faq) => (
                    <details
                      key={faq.number}
                      className="group"
                    >
                      <summary className="flex cursor-pointer list-none items-start gap-4 py-6 sm:gap-5 sm:py-7 [&::-webkit-details-marker]:hidden">

                        {/* Number */}
                        <span className="mt-1.5 font-mono text-[10px] font-medium tracking-[0.12em] text-cyan-600">
                          {faq.number}
                        </span>

                        {/* Question */}
                        <div className="flex flex-1 items-start justify-between gap-5">

                          <h3 className="max-w-xl text-[15px] font-semibold leading-6 text-[#071a2b] transition-colors duration-300 group-hover:text-cyan-700 group-open:text-cyan-700 sm:text-base">
                            {faq.question}
                          </h3>

                          {/* Plus */}
                          <span className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-light text-slate-400 shadow-sm transition-all duration-300 group-hover:border-cyan-300 group-hover:text-cyan-600 group-open:rotate-45 group-open:border-cyan-300 group-open:bg-cyan-50 group-open:text-cyan-600">
                            +
                          </span>

                        </div>

                      </summary>

                      {/* Answer */}
                      <div className="pb-7 pl-9 pr-10 sm:pl-10 sm:pr-14">

                        <div className="relative overflow-hidden rounded-xl border border-cyan-100 bg-cyan-50/50 px-5 py-4">

                          {/* Answer glow */}
                          <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-cyan-300/[0.12] blur-[30px]" />

                          <p className="relative max-w-2xl text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>

                        </div>

                      </div>
                    </details>
                  ))}

                </div>

                {/* Bottom panel detail */}
                <div className="border-t border-slate-200 py-6">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="text-xs font-semibold text-[#071a2b]">
                        Have a question we didn't answer?
                      </p>

                      <p className="mt-1 text-[11px] text-slate-500">
                        Tell us what you're working on and we'll take it from there.
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#071a2b] px-5 py-3 text-xs font-semibold !text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-cyan-500 hover:shadow-cyan-500/20 hover:!text-[#071a2b]"
                    >
                      <span>Ask Us</span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#071a2b] group-hover:text-cyan-300">
                        ↗
                      </span>
                    </a>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ===================================================
            BOTTOM ATMOSPHERIC SIGNATURE
        ==================================================== */}

        <div className="mt-16 flex items-center gap-4">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600">
            Clear questions. Clear direction.
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        </div>

      </div>
    </section>
  );
}