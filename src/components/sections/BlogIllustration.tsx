const scenes = {
  website: { label: "Digital presence", accent: "#22d3ee", bars: [74, 52, 88] },
  ecommerce: { label: "Online store", accent: "#34d399", bars: [55, 82, 66] },
  advertising: { label: "Campaign insights", accent: "#c084fc", bars: [48, 72, 91] },
  landing: { label: "Page experience", accent: "#fb7185", bars: [80, 60, 72] },
  google: { label: "Search campaign", accent: "#60a5fa", bars: [62, 88, 54] },
} as const;

export default function BlogIllustration({
  scene,
}: {
  scene: keyof typeof scenes;
}) {
  const visual = scenes[scene];
  return (
    <figure aria-label={visual.label} className="relative my-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#071a2b] via-[#102d46] to-[#16435b] p-6 shadow-xl shadow-slate-900/10 sm:p-10">
      <div aria-hidden="true" className="absolute -right-12 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-28 left-1/4 h-56 w-56 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-3xl gap-5 sm:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-2xl border border-white/10 bg-[#071a2b]/70 p-5 backdrop-blur-sm sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-semibold uppercase tracking-[.18em] text-white/75">{visual.label}</span>
            <span className="flex gap-1.5" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-rose-300/70"/><i className="h-2 w-2 rounded-full bg-amber-200/70"/><i className="h-2 w-2 rounded-full bg-emerald-300/70"/></span>
          </div>
          <div className="mt-6 grid grid-cols-[1fr_1.2fr] gap-4">
            <div className="space-y-3 rounded-xl bg-white/[.04] p-3"><div className="h-2 w-2/3 rounded bg-white/20"/><div className="h-2 w-full rounded bg-white/10"/><div className="h-2 w-4/5 rounded bg-white/10"/><div className="mt-5 h-16 rounded-lg border border-white/10 bg-white/[.03]"/></div>
            <div className="flex flex-col justify-between rounded-xl bg-white/[.04] p-4"><div><div className="h-2 w-1/3 rounded" style={{ backgroundColor: `${visual.accent}99` }}/><div className="mt-3 h-3 w-4/5 rounded bg-white/20"/><div className="mt-2 h-2 w-3/5 rounded bg-white/10"/></div><div className="mt-6 flex h-20 items-end gap-2">{visual.bars.map((height, index) => <span key={index} className="flex-1 rounded-t-md" style={{ height: `${height}%`, background: `linear-gradient(180deg, ${visual.accent}, ${visual.accent}55)` }}/>)}</div></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          <div className="flex min-h-24 flex-col justify-center rounded-2xl border border-white/10 bg-white/[.06] p-4"><span className="text-[10px] uppercase tracking-[.18em] text-white/45">Plan</span><span className="mt-2 text-sm font-semibold text-white/85">Clear goals</span></div>
          <div className="flex min-h-24 flex-col justify-center rounded-2xl border border-white/10 bg-white/[.06] p-4"><span className="text-[10px] uppercase tracking-[.18em] text-white/45">Create</span><span className="mt-2 text-sm font-semibold text-white/85">Thoughtful design</span></div>
          <div className="col-span-2 flex min-h-24 flex-col justify-center rounded-2xl border border-white/10 bg-white/[.06] p-4 sm:col-span-1"><span className="text-[10px] uppercase tracking-[.18em] text-white/45">Improve</span><span className="mt-2 text-sm font-semibold text-white/85">Measure what matters</span></div>
        </div>
      </div>
      <figcaption className="relative mt-5 text-center text-xs text-white/45">A visual guide to the ideas in this article</figcaption>
    </figure>
  );
}
