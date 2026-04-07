export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-brand-slate py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-orange to-brand-gold-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="block font-display font-800 text-white leading-tight">Plumbing Solutions</span>
                <span className="block text-xs text-white/35">Digital Plumbing Co.</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Manchester-based automation agency helping local SMEs plug digital revenue leaks with smart, no-fuss AI tools.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-4">Services</p>
            <ul className="space-y-2.5">
              {['AI Review Responder', 'WhatsApp Automation', 'Lead Generation', 'Custom Integrations'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/40 hover:text-brand-orange transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>hello@mcrautomations.co.uk</li>
              <li>Manchester, United Kingdom</li>
              <li className="pt-2">
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-orange hover:underline font-medium text-sm">
                  Book a free call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© 2026 Plumbing Solutions. All rights reserved.</p>
          <p>Built in Manchester 🐝 · Powered by AI</p>
        </div>
      </div>
    </footer>
  )
}
