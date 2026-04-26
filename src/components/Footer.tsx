export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-lg font-black text-white shadow-lg shadow-indigo-500/20">
              S
            </div>
            <div>
              <p className="text-xl font-black text-white">SyncUp</p>
              <p className="text-sm text-slate-500">A modern task manager for teams and individuals.</p>
            </div>
          </div>
          <p className="max-w-sm leading-7 text-slate-400">
            Keep work moving with structured tasks, team visibility, and smart workflows that help every project finish on time.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.3em]">2026</span>
            <span>Built for modern teams</span>
          </div>
        </div>

        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">Product</h6>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#features" className="transition hover:text-white">Features</a></li>
            <li><a href="#pricing" className="transition hover:text-white">Pricing</a></li>
            <li><a href="#integrations" className="transition hover:text-white">Integrations</a></li>
            <li><a href="#security" className="transition hover:text-white">Security</a></li>
          </ul>
        </div>

        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">Company</h6>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="/about" className="transition hover:text-white">About</a></li>
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            <li><a href="/blog" className="transition hover:text-white">Blog</a></li>
            <li><a href="/careers" className="transition hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-400">Support</h6>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="/help" className="transition hover:text-white">Help Center</a></li>
            <li><a href="/privacy" className="transition hover:text-white">Privacy</a></li>
            <li><a href="/terms" className="transition hover:text-white">Terms</a></li>
            <li><a href="/status" className="transition hover:text-white">System status</a></li>
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <a href="https://twitter.com" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-300 transition hover:bg-slate-800 hover:text-white" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="https://linkedin.com" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-300 transition hover:bg-slate-800 hover:text-white" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 7h4V24h-4V7zm7 0h3.74v2.6h.05c.52-.99 1.82-2.03 3.75-2.03 4 0 4.74 2.63 4.74 6.05V24h-4V14.5c0-2.27-.04-5.2-3.17-5.2-3.18 0-3.67 2.48-3.67 5.05V24h-4V7z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950/80 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 SyncUp. All rights reserved.</p>
          <p>Designed for productivity, built for teams.</p>
        </div>
      </div>
    </footer>
  );
}