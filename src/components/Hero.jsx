import { useEffect, useState } from 'react'

const stats = [
  { value: '4.9★', label: 'Avg. Review Score' },
  { value: '3×', label: 'More Reviews/Month' },
  { value: '£0', label: 'Setup Cost' },
  { value: '24/7', label: 'Automated Response' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-slate" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Orange glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #F97316 0%, transparent 70%)' }}
      />

      {/* Manchester skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <path
            fill="#F97316"
            d="M0,200 L0,160 L40,160 L40,120 L60,120 L60,80 L80,80 L80,60 L100,60 L100,80
               L120,80 L120,40 L130,40 L130,20 L140,20 L140,40 L150,40 L150,80
               L180,80 L180,100 L200,100 L200,60 L220,60 L220,100
               L240,100 L240,80 L260,80 L260,40 L270,40 L270,10 L280,10 L280,40 L290,40 L290,80
               L320,80 L320,120 L340,120 L340,60 L360,60 L360,30 L370,30 L370,10 L380,10 L380,30 L390,30 L390,60
               L420,60 L420,100 L440,100 L440,80 L460,80 L460,50 L470,50 L470,20 L480,20 L480,50 L490,50 L490,80
               L520,80 L520,110 L540,110 L540,70 L560,70 L560,90
               L580,90 L580,50 L600,50 L600,30 L610,30 L610,10 L620,10 L620,30 L630,30 L630,50 L650,50 L650,90
               L680,90 L680,120 L700,120 L700,80 L720,80 L720,50 L730,50 L730,80 L740,80 L740,120
               L760,120 L760,90 L780,90 L780,60 L790,60 L790,40 L800,40 L800,60 L810,60 L810,90
               L840,90 L840,110 L860,110 L860,70 L880,70 L880,110
               L900,110 L900,60 L910,60 L910,30 L920,30 L920,10 L930,10 L930,30 L940,30 L940,60 L950,60 L950,110
               L980,110 L980,130 L1000,130 L1000,90 L1020,90 L1020,110
               L1040,110 L1040,70 L1060,70 L1060,50 L1070,50 L1070,20 L1080,20 L1080,50 L1090,50 L1090,70 L1110,70 L1110,110
               L1140,110 L1140,130 L1160,130 L1160,100 L1180,100 L1180,70 L1190,70 L1190,40 L1200,40 L1200,70 L1210,70 L1210,100
               L1240,100 L1240,120 L1260,120 L1260,70 L1280,70 L1280,50 L1290,50 L1290,70 L1300,70 L1300,120
               L1320,120 L1320,140 L1340,140 L1340,110 L1360,110 L1360,130
               L1380,130 L1380,150 L1400,150 L1400,160 L1440,160 L1440,200 Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-tag mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Manchester's Digital Plumbing Agency
          </div>

          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-800 text-white leading-tight mb-6">
            We Fix Your{' '}
            <span className="gradient-text text-shadow-glow">Digital Leaks</span>{' '}
            — Automatically.
          </h1>

          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
            MCR Automations plugs the gaps in your business — from Google review responses to 
            WhatsApp bookings and lead generation. Smart plumbing for modern Manchester SMEs.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="btn-primary">
              Start For Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="btn-secondary">
              See What We Do
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No contracts
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Setup in 48 hours
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Manchester-based support
            </span>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* Floating glow */}
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20" style={{ background: 'radial-gradient(ellipse, #F97316, transparent 70%)' }} />
            <div className="relative card-glass p-8 rounded-3xl animate-float">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Live Automation Dashboard</p>
                  <p className="text-white/40 text-xs">Updated in real time</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Active</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <p className="text-2xl font-display font-700 gradient-text mb-1">{stat.value}</p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Sample review reply */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <p className="text-xs text-white/40 mb-2 uppercase tracking-widest font-medium">Latest Auto-Reply</p>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-xs font-bold text-white shrink-0">JB</div>
                  <div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      "Thank you so much, James! We're thrilled you enjoyed the service. We look forward to seeing you again at the shop 🙌"
                    </p>
                    <p className="text-xs text-brand-orange mt-1.5 font-medium">AI replied · 2 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
