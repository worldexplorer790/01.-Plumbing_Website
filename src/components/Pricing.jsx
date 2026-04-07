const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '297',
    period: '/mo',
    tagline: 'Perfect for sole traders & small shops',
    features: [
      { text: 'AI Review Responder (Google)', included: true },
      { text: 'Up to 50 reviews/month', included: true },
      { text: 'Brand voice setup', included: true },
      { text: 'Monthly performance report', included: true },
      { text: 'WhatsApp Automation', included: false },
      { text: 'Lead Generation', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Start with Starter',
    featured: false,
    accent: '#94A3B8',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '597',
    period: '/mo',
    tagline: 'For growing SMEs ready to scale',
    features: [
      { text: 'AI Review Responder (Google + Trustpilot)', included: true },
      { text: 'Unlimited reviews/month', included: true },
      { text: 'Brand voice setup & tuning', included: true },
      { text: 'Weekly performance report', included: true },
      { text: 'WhatsApp Automation + booking', included: true },
      { text: 'Lead Generation (up to 100 leads/mo)', included: true },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Get Growth Plan',
    featured: true,
    accent: '#F97316',
    badge: 'Most Popular',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '997',
    period: '/mo',
    tagline: 'Full-stack automation for serious growth',
    features: [
      { text: 'Everything in Growth', included: true },
      { text: 'Multi-location review management', included: true },
      { text: 'Custom AI workflows', included: true },
      { text: 'CRM & calendar integrations', included: true },
      { text: 'WhatsApp + SMS automation', included: true },
      { text: 'Unlimited lead generation', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Go Pro',
    featured: false,
    accent: '#6366F1',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-brand-slate" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #F97316, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pricing
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 text-white mb-4">
            Transparent Pricing.{' '}
            <span className="gradient-text">No Hidden Leaks.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Fixed monthly rates. Cancel anytime. Every plan includes a free onboarding call with our Manchester team.
          </p>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative group transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'featured-card' : ''}`}
            >
              <div
                className={`rounded-2xl p-8 h-full border transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-brand-steel to-brand-slate border-transparent'
                    : 'card-glass border-white/10 hover:border-white/20'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/20 text-brand-orange border border-brand-orange/30 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <h3 className="font-display text-xl font-700 text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-white/40 mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-white/40 text-lg font-medium self-start mt-2">£</span>
                  <span className="font-display text-5xl font-800 text-white leading-none">{plan.price}</span>
                  <span className="text-white/40 text-sm mb-1">{plan.period}</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat.text} className={`flex items-center gap-3 text-sm ${feat.included ? 'text-white/75' : 'text-white/25 line-through'}`}>
                      {feat.included ? (
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ color: plan.accent }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 shrink-0 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      {feat.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 block ${
                    plan.featured
                      ? 'btn-primary justify-center'
                      : 'border border-white/20 text-white hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-sm mt-8">
          All plans include a <span className="text-brand-orange">free 30-min onboarding call</span> · No setup fees · Cancel anytime
        </p>
      </div>
    </section>
  )
}
