import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const projects = [
  { name: "Nexus CRM", kind: "CRM dashboard", url: "https://nexus-crm-tehreem.netlify.app/dashboard", mark: "N", tone: "from-cyan-400/30 via-blue-500/15 to-slate-950", metric: "Pipeline overview", accent: "bg-cyan-400" },
  { name: "Shopifyst", kind: "E-commerce", url: "https://shopifyst.netlify.app", mark: "S", tone: "from-emerald-300/25 via-teal-500/15 to-slate-950", metric: "Modern storefront", accent: "bg-emerald-300" },
  { name: "Aster Learning", kind: "Education platform", url: "https://asterlearning.netlify.app/", mark: "A", tone: "from-violet-400/30 via-indigo-500/15 to-slate-950", metric: "Learn at your pace", accent: "bg-violet-300" },
  { name: "AI Commerce Intelligence", kind: "AI-powered product", url: "https://ai-powered-ecommerce-intelligence-pla.netlify.app/", mark: "AI", tone: "from-fuchsia-400/25 via-purple-500/15 to-slate-950", metric: "Commerce insights", accent: "bg-fuchsia-300" },
  { name: "Lustrous Elf", kind: "Web experience", url: "https://lustrous-elf-402978.netlify.app", mark: "LE", tone: "from-amber-300/25 via-rose-500/15 to-slate-950", metric: "A polished digital home", accent: "bg-amber-300" },
];

const brands = [
  { name: "Sheenora", logo: "SHEENORA", detail: "Modern Pakistani fashion", theme: "bg-gradient-to-br from-[#351015] via-[#721b2a] to-[#a12e3c] text-white border-[#8d3440]", logoStyle: "font-serif text-3xl font-light tracking-[.18em] text-[#fff4ea]", accent: "text-[#e8bd91]" },
  { name: "Ayeshe", logo: "AYESHE", detail: "Beauty · Care · Confidence", theme: "bg-white text-slate-900 border-slate-200", logoStyle: "font-serif text-3xl font-medium tracking-[.24em] text-slate-800", accent: "text-rose-500" },
  { name: "Zafrani by Qazi Foods", logo: "QAZI", detail: "FOODS · SINCE 1990", theme: "bg-gradient-to-br from-[#a92d1d] via-[#d77953] to-[#f3c494] text-white border-[#e3a074]", logoStyle: "font-serif text-4xl font-bold tracking-tight text-[#133f83]", accent: "text-[#fff0d8]" },
  { name: "Code Avenue", logo: "CODE AVENUE", detail: "PLAN · DEVELOP · DEPLOY · GROW", theme: "bg-gradient-to-br from-[#071a2b] via-[#123b70] to-[#0863cf] text-white border-blue-300", logoStyle: "text-2xl font-black tracking-tight text-white", accent: "text-cyan-200" },
  { name: "Fabaii Hair Oil", logo: "FABAII", detail: "HERBAL HAIR OIL", theme: "bg-gradient-to-br from-[#090909] via-[#21180d] to-[#4b3517] text-white border-[#72572e]", logoStyle: "font-serif text-4xl font-semibold tracking-[.12em] text-[#e3bc62]", accent: "text-[#f0d795]" },
  { name: "Vertexdigital", logo: "VERTEX", detail: "DIGITAL · MARKETING · GROWTH", theme: "bg-gradient-to-br from-white via-[#eef6ff] to-[#dbeafe] text-[#12396c] border-blue-200", logoStyle: "text-4xl font-black tracking-tight text-[#1553a0]", accent: "text-[#2677ca]" },
  { name: "AK Digital Studio", logo: "AK", detail: "WEB · MARKETING · GROWTH", theme: "bg-gradient-to-br from-[#090a0d] via-[#17130f] to-[#342419] text-white border-[#6b5035]", logoStyle: "font-serif text-5xl font-bold tracking-tight text-[#cd8a48]", accent: "text-[#edc89b]" },
  { name: "Loopandbloom", logo: "loop & bloom", detail: "HANDMADE · MADE WITH LOVE", theme: "bg-gradient-to-br from-[#fffdf8] via-[#fbf3e9] to-[#f5e6df] text-[#604c43] border-[#ead9cc]", logoStyle: "font-serif text-3xl italic tracking-wide text-[#8a6c5d]", accent: "text-[#d58f9c]" },
];

function PortfolioCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} project in a new tab`} className="group block [perspective:1200px]">
      <div className="portfolio-flip relative aspect-[1.28/1] rounded-[1.35rem]">
        <div className={`portfolio-front absolute inset-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${project.tone} p-5 shadow-xl shadow-black/20`}>
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)", backgroundSize: "25px 25px" }} />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-xs font-bold text-white">{project.mark}</span>
              <span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/30"/><i className="h-2 w-2 rounded-full bg-white/20"/><i className="h-2 w-2 rounded-full bg-white/10"/></span>
            </div>
            <div className="my-auto rounded-xl border border-white/15 bg-[#071a2b]/75 p-4 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${project.accent}`} /><span className="text-[9px] uppercase tracking-[.2em] text-white/55">{project.kind}</span></div>
              <p className="mt-3 text-lg font-bold tracking-tight text-white">{project.metric}</p>
              <div className="mt-4 grid grid-cols-3 gap-2"><span className="h-10 rounded-md bg-white/10"/><span className="h-10 rounded-md bg-white/[.07]"/><span className="h-10 rounded-md bg-white/[.05]"/></div>
              <div className="mt-2 h-1.5 w-3/5 rounded-full bg-white/15"><span className={`block h-full w-2/3 rounded-full ${project.accent}`} /></div>
            </div>
            <div className="flex items-end justify-between"><span className="font-mono text-[10px] text-white/45">PROJECT / 0{index + 1}</span><span className="text-xs text-white/65 transition group-hover:text-white">View project ↗</span></div>
          </div>
        </div>
        <div className="portfolio-back absolute inset-0 flex flex-col justify-between rounded-[1.35rem] border border-cyan-200 bg-gradient-to-br from-white via-cyan-50 to-violet-50 p-6 shadow-xl shadow-cyan-900/10">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-700">Selected work · 0{index + 1}</span>
          <div><h3 className="text-2xl font-bold text-slate-900">{project.name}</h3><p className="mt-2 text-sm text-slate-600">{project.kind}</p></div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">Open live project <span aria-hidden="true">↗</span></span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between px-1"><div><h3 className="font-semibold text-slate-900">{project.name}</h3><p className="mt-1 text-sm text-slate-500">{project.kind}</p></div><span className="text-cyan-700 transition group-hover:translate-x-1">↗</span></div>
    </a>
  );
}

export default function PortfolioPages({ type }: { type: "web" | "advertising" }) {
  const isWeb = type === "web";
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-white pt-20 text-slate-900">
        <section className="relative px-6 pb-16 pt-20 sm:px-8 sm:pt-28 lg:px-12">
          <div className="pointer-events-none absolute -right-20 top-8 h-80 w-80 rounded-full bg-cyan-300/25 blur-[110px]" />
          <div className="pointer-events-none absolute left-1/3 top-16 h-64 w-64 rounded-full bg-violet-300/15 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-cyan-700"><span className="h-px w-9 bg-cyan-500"/>Code Avenue · Portfolio</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.07] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">{isWeb ? <>Web experiences built to <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">make an impact.</span></> : <>Creative campaigns for <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">ambitious brands.</span></>}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{isWeb ? "A selection of websites and digital products, each shaped around a clear purpose and an engaging user experience." : "Supporting a growing mix of brands with thoughtful advertising and digital marketing. A selection of the brands I work with is below."}</p>
            <div className="mt-8 flex flex-wrap gap-3">{(isWeb ? ["Web Development", "E-commerce", "Digital Products"] : ["Brand Advertising", "Campaign Strategy", "Digital Growth"]).map((tag, index) => <span key={tag} className={`rounded-full border px-4 py-2 text-xs font-semibold shadow-sm ${index % 3 === 0 ? "border-cyan-200 bg-cyan-50 text-cyan-800" : index % 3 === 1 ? "border-violet-200 bg-violet-50 text-violet-800" : "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800"}`}>{tag}</span>)}</div>
          </div>
        </section>
        {isWeb ? <section className="px-6 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex items-end justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-700">Selected projects</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A closer look at the work</h2></div><span className="hidden font-mono text-xs text-slate-400 sm:block">05 PROJECTS</span></div>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <PortfolioCard key={project.url} project={project} index={index}/>)}</div>
            <p className="mt-9 text-xs leading-6 text-slate-500">Select a card to open the live project. The cards flip on hover or keyboard focus.</p>
          </div>
        </section> : <section className="px-6 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9"><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-700">Brands I work with</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Good work, built together.</h2></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{brands.map((brand, index) => <article key={brand.name} className={`group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${brand.theme}`}>
              <div className="flex items-center justify-between"><span className={`font-mono text-[9px] uppercase tracking-[.2em] ${brand.accent}`}>BRAND / 0{index + 1}</span><span className={`text-lg transition duration-300 group-hover:rotate-12 group-hover:scale-110 ${brand.accent}`} aria-hidden="true">✳</span></div>
              <div className="relative z-10 py-4">
                {brand.name === "Code Avenue" ? <div className="mb-3 flex h-16 items-center"><img src="/logo.png" alt="" className="h-full w-auto rounded-full object-contain" /></div> : null}
                <div className={brand.logoStyle}>{brand.logo}</div>
                {brand.name === "Zafrani by Qazi Foods" ? <p className="mt-0.5 text-xs font-semibold uppercase tracking-[.2em] text-[#123f83]">by Qazi Foods</p> : null}
                {brand.name === "AK Digital Studio" ? <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/80">Digital Studio</p> : null}
                <p className={`mt-2 text-[9px] font-semibold uppercase tracking-[.16em] ${brand.accent}`}>{brand.detail}</p>
              </div>
              <h3 className="relative z-10 text-xs font-medium opacity-75">{brand.name}</h3>
              <span className={`pointer-events-none absolute -bottom-10 -right-2 text-8xl font-black opacity-[.055] transition duration-300 group-hover:scale-110 ${brand.accent}`}>{brand.name.charAt(0)}</span>
            </article>)}</div>
          </div>
        </section>}
        <section className="bg-gradient-to-r from-cyan-700 via-blue-700 to-violet-700 px-6 py-16 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-100">Have something in mind?</p><h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Let’s make your next idea real.</h2></div><a href="/#contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-cyan-50">Start a project <span>↗</span></a></div></section>
      </main>
      <Footer />
    </>
  );
}
