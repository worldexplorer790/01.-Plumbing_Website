const services = [
  {
    id: 'reviews',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'AI Review Responder',
    tagline: 'Never miss a review again',
    description:
      'Our AI reads every Google & Trustpilot review and crafts a personalised, on-brand reply within minutes. Boost your rating, build trust, and save hours every week — hands-free.',
    features: ['Google & Trustpilot integration', 'Brand voice training', 'Tone detection (positive/negative)', '24/7 automated replies'],
    badge: 'Most Popular',
    color: 'from-amber-500/20 to-orange-500/10',
    accent: '#F97316',
    featured: true,
  },
  {
    id: 'whatsapp',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'WhatsApp Automation',
    tagline: 'Book jobs whilst you sleep',
    description:
      'Connect WhatsApp to your business and let AI handle enquiries, qualify leads, and book appointments — all via the app your customers already use. Zero extra admin.',
    features: ['Auto-qualify incoming enquiries', 'Booking & calendar sync', 'Follow-up sequences', 'Handoff to human when needed'],
    badge: 'High ROI',
    color: 'from-green-500/20 to-emerald-500/10',
    accent: '#22C55E',
    featured: false,
  },
  {
    id: 'leadgen',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'AI Lead Generation',
    tagline: 'Fill your pipeline automatically',
    description:
      'Stop relying on referrals. Our AI systems identify prospects, craft personalised outreach, and warm them up before your team ever picks up the phone. Predictable pipeline, every month.',
    features: ['Targeted prospect discovery', 'Personalised outreach sequences', 'LinkedIn & email automation', 'CRM integration'],
    badge: 'Growth Driver',
    color: 'from-blue-500/20 to-indigo-500/10',
    accent: '#6366F1',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-slate" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Our Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mb-4">
            The Digital Pipes That Power{' '}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Three automations. Maximum impact. We install the infrastructure so your business 
            runs — even when you're not in the office.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group transition-all duration-500 hover:-translate-y-2 ${
                service.featured ? 'featured-card' : ''
              }`}
            >
              <div
                className={`card-glass rounded-2xl p-8 h-full border transition-all duration-300 ${
                  service.featured
                    ? 'border-transparent bg-gradient-to-br from-brand-steel to-brand-slate'
                    : 'border-white/10 hover:border-white/20'
                }`}
                style={service.featured ? {} : { background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))' }}
              >
                {/* Badge */}
                {service.badge && (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                    style={{ background: `${service.accent}25`, color: service.accent, border: `1px solid ${service.accent}40` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: service.accent }} />
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.accent}20`, color: service.accent }}
                >
                  {service.icon}
                </div>

                <h3 className="font-display text-xl font-700 text-white mb-1">{service.title}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: service.accent }}>{service.tagline}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-white/70">
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ color: service.accent }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: service.accent }}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
