import Link from "next/link";

const features = [
  {
    title: "Smart planning made effortless",
    description:
      "Organize every sprint, deadline, and idea in one polished workspace built for modern teams.",
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "Focus workflows, not noise",
    description:
      "Keep your day centered with intelligent priorities, time blocks, and instant progress cues.",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    title: "Collaboration without friction",
    description:
      "Turn updates, handoffs, and approvals into shared momentum across every project.",
    accent: "bg-sky-100 text-sky-700",
  },
  {
    title: "Live insights for better decisions",
    description:
      "Track impact with visual metrics, completion trends, and smart recommendations.",
    accent: "bg-emerald-100 text-emerald-700",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_28%),#020617]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex rounded-full border border-slate-600 bg-white/5 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200 shadow-sm backdrop-blur">
                Launch your workflow</p>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                Build a productive day, align teams, and finish more with SyncUp.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A polished homepage for your next task management product, with a bold hero, feature-rich sections, and a premium visual identity.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/register" className="btn btn-primary btn-lg rounded-full px-8 py-4 font-semibold shadow-lg transition hover:-translate-y-0.5">
                  Start free trial
                </Link>
                <Link href="/tasks" className="btn btn-ghost btn-lg rounded-full px-8 py-4 text-white/90 ring-1 ring-white/15 hover:bg-white/5">
                  Explore dashboard
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "99.9% uptime", value: "Trusted" },
                  { label: "8x faster", value: "Launch cycles" },
                  { label: "4.9/5", value: "User score" },
                  { label: "Global", value: "24/7 sync" },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className="text-sm text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
              <div className="absolute inset-x-0 top-10 h-24 bg-gradient-to-r from-sky-500/25 via-fuchsia-500/15 to-emerald-400/20 blur-3xl" />
              <div className="relative space-y-6">
                <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6 shadow-inner shadow-slate-950/30">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm uppercase tracking-[0.26em] text-slate-400">Daily Sprint</span>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300">Live</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="grid gap-3 rounded-3xl bg-slate-900/95 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Design system review</span>
                        <span>2h</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                      </div>
                    </div>
                    <div className="grid gap-3 rounded-3xl bg-slate-900/95 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Release planning</span>
                        <span>Today</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800/90 bg-slate-900/95 p-5 text-slate-300">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Team sync</p>
                    <p className="mt-3 text-xl font-semibold text-white">Shared backlog</p>
                    <p className="mt-2 text-sm leading-6">Keep everyone aligned with real-time updates and task ownership.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800/90 bg-slate-900/95 p-5 text-slate-300">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Insights</p>
                    <p className="mt-3 text-xl font-semibold text-white">Velocity charts</p>
                    <p className="mt-2 text-sm leading-6">Visualize momentum at a glance and adjust strategy instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-24 px-6 py-16 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why choose SyncUp</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A modern home for every task, from solo planning to team delivery.</h2>
            <p className="max-w-xl text-slate-400 leading-8">
              Clean structure, a strong visual system, and meaningful interactions create trust for visitors and teams alike.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30">
                <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${feature.accent}`}>{feature.title}</span>
                <p className="mt-5 text-slate-300 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Task intelligence</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Create clarity with connected workflows.</h2>
            </div>
            <div className="rounded-full border border-slate-800 bg-slate-900/80 px-5 py-3 text-sm text-slate-300">
              Save time with auto-status updates, board templates, and meeting-ready summaries.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Goal-based boards",
                detail: "Design task lanes around outcomes, not just dates.",
              },
              {
                title: "Smart reminders",
                detail: "Receive prompts for overdue work and next steps.",
              },
              {
                title: "Custom workflows",
                detail: "Shape each project with approvals, reviews, and handoff stages.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-6">
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Built for teams</p>
                <h3 className="mt-4 text-2xl font-bold text-white">Structured collaboration that scales.</h3>
                <p className="mt-3 leading-7 text-slate-300">Every task is linked to ownership, dependencies, and real-time status so teams move faster without losing context.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Members", value: "12+" },
                  { label: "Workspaces", value: "34" },
                  { label: "Automations", value: "48" },
                  { label: "Milestones", value: "219" },
                ].map((tile) => (
                  <div key={tile.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                    <p className="text-2xl font-bold text-white">{tile.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{tile.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/90 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
              <h3 className="text-2xl font-semibold text-white">Automate your handoffs</h3>
              <p className="mt-4 leading-7">Use reusable triggers and smart rules to move tasks forward automatically when team members complete their work.</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Auto status updates</li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Calendar sync and reminders</li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />Cross-project rules</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Customer story</p>
              <h3 className="mt-4 text-2xl font-bold text-white">“SyncUp made our launches calm and predictable.”</h3>
              <p className="mt-4 text-slate-400 leading-7">“The whole team now checks one workspace, shares fewer updates, and spends more time shipping work.”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-fuchsia-500" />
                <div>
                  <p className="font-semibold text-white">Maya Patel</p>
                  <p className="text-sm text-slate-500">Head of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Secure sync</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Keep your data private, synced, and easy to manage.</h2>
            <p className="max-w-xl text-slate-400 leading-8">Encrypted storage, role-based permissions, and instant rollback let teams collaborate confidently without worrying about lost context.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "End-to-end encryption", desc: "Encrypted connections across every device." },
              { title: "Permission controls", desc: "Custom access for teams, clients, and partners." },
              { title: "Auto backups", desc: "Restore work with a single click if something changes." },
              { title: "Audit logs", desc: "Track changes and stay compliant with ease." },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-7 text-slate-300 shadow-lg shadow-slate-950/10">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/80 p-10 shadow-2xl shadow-slate-950/30">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">All-in-one home</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything your audience needs to feel ready and confident.</h2>
              <p className="max-w-xl text-slate-400 leading-8">From planning to review and performance reporting, SyncUp creates a polished experience for users who expect modern productivity tools.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { metric: "1,200+", label: "Active teams" },
                { metric: "96%", label: "Adoption rate" },
                { metric: "35+", label: "Integrations" },
                { metric: "4.9/5", label: "App store rating" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-950/90 p-6 text-center">
                  <p className="text-4xl font-bold text-white">{item.metric}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-900/90 p-12 shadow-2xl shadow-slate-950/30 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Ready for launch</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Bring your homepage and product story together.</h2>
            <p className="mt-5 max-w-xl text-slate-400 leading-8">A premium first impression with a clean content hierarchy, strong calls to action, and a unique design language for growth-minded teams.</p>
          </div>
          <div className="space-y-4">
            <Link href="/register" className="btn btn-primary btn-lg w-full rounded-full px-8 py-4 font-semibold">
              Create account
            </Link>
            <Link href="/login" className="btn btn-ghost btn-lg w-full rounded-full px-8 py-4 text-white/90 ring-1 ring-white/10 hover:bg-white/5">
              See pricing
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
