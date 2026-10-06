import React from 'react';

// ============================================
// 1. WASTE PREVENTION ILLUSTRATION
// Shows money/coins being filtered, bad items blocked
// ============================================
export const WastePreventionIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="mkt-feature-illustration">
    {/* Background gradient */}
    <defs>
      <linearGradient id="waste-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="100%" stopColor="#0f0f1a" />
      </linearGradient>
      <linearGradient id="waste-red" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="waste-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>

    {/* Funnel shape */}
    <path d="M100 60 L300 60 L250 140 L250 200 L150 200 L150 140 Z" fill="url(#waste-bg)" stroke="#334155" strokeWidth="2"/>

    {/* Filter grid lines */}
    <line x1="140" y1="120" x2="260" y2="120" stroke="#475569" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="150" y1="140" x2="250" y2="140" stroke="#475569" strokeWidth="2"/>

    {/* Bad search terms (blocked - red) */}
    <g className="mkt-illustration-animate-float">
      <rect x="120" y="75" width="60" height="24" rx="4" fill="url(#waste-red)" fillOpacity="0.2" stroke="#EF4444" strokeWidth="1.5"/>
      <text x="150" y="91" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="system-ui">free DIY</text>
    </g>

    <g className="mkt-illustration-animate-float" style={{ animationDelay: '0.3s' }}>
      <rect x="200" y="80" width="70" height="24" rx="4" fill="url(#waste-red)" fillOpacity="0.2" stroke="#EF4444" strokeWidth="1.5"/>
      <text x="235" y="96" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="system-ui">competitor</text>
    </g>

    <g className="mkt-illustration-animate-float" style={{ animationDelay: '0.6s' }}>
      <rect x="140" y="95" width="50" height="24" rx="4" fill="url(#waste-red)" fillOpacity="0.2" stroke="#EF4444" strokeWidth="1.5"/>
      <text x="165" y="111" textAnchor="middle" fill="#EF4444" fontSize="10" fontFamily="system-ui">jobs</text>
    </g>

    {/* X marks on blocked items */}
    <g stroke="#EF4444" strokeWidth="2">
      <line x1="185" y1="82" x2="192" y2="92"/>
      <line x1="192" y1="82" x2="185" y2="92"/>

      <line x1="275" y1="87" x2="282" y2="97"/>
      <line x1="282" y1="87" x2="275" y2="97"/>

      <line x1="195" y1="102" x2="202" y2="112"/>
      <line x1="202" y1="102" x2="195" y2="112"/>
    </g>

    {/* Good traffic flowing through (green) */}
    <g className="mkt-illustration-animate-pulse">
      <circle cx="180" cy="170" r="8" fill="url(#waste-green)" fillOpacity="0.8"/>
      <circle cx="200" cy="175" r="6" fill="url(#waste-green)" fillOpacity="0.6"/>
      <circle cx="220" cy="168" r="7" fill="url(#waste-green)" fillOpacity="0.7"/>
    </g>

    {/* Dollar signs coming out */}
    <text x="175" y="220" fill="#10B981" fontSize="16" fontFamily="system-ui" fontWeight="bold" className="mkt-illustration-animate-float">$</text>
    <text x="195" y="230" fill="#10B981" fontSize="20" fontFamily="system-ui" fontWeight="bold" className="mkt-illustration-animate-float" style={{ animationDelay: '0.2s' }}>$</text>
    <text x="215" y="225" fill="#10B981" fontSize="14" fontFamily="system-ui" fontWeight="bold" className="mkt-illustration-animate-float" style={{ animationDelay: '0.4s' }}>$</text>

    {/* Savings badge */}
    <rect x="140" y="250" width="120" height="32" rx="16" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
    <text x="200" y="271" textAnchor="middle" fill="#10B981" fontSize="12" fontFamily="system-ui" fontWeight="600">$287/mo saved</text>
  </svg>
);

// ============================================
// 2. BUDGET OPTIMIZATION ILLUSTRATION
// Shows a chart with upward trend, impression share
// ============================================
export const BudgetOptimizationIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="mkt-feature-illustration">
    <defs>
      <linearGradient id="budget-green" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0"/>
        <stop offset="100%" stopColor="#10B981" stopOpacity="0.3"/>
      </linearGradient>
      <linearGradient id="budget-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#34D399"/>
      </linearGradient>
    </defs>

    {/* Chart background */}
    <rect x="50" y="40" width="300" height="180" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1"/>

    {/* Grid lines */}
    <g stroke="#1e293b" strokeWidth="1">
      <line x1="50" y1="80" x2="350" y2="80"/>
      <line x1="50" y1="120" x2="350" y2="120"/>
      <line x1="50" y1="160" x2="350" y2="160"/>
      <line x1="50" y1="200" x2="350" y2="200"/>
    </g>

    {/* Area fill under the line */}
    <path d="M70 180 L120 160 L170 150 L220 120 L270 90 L320 70 L320 200 L70 200 Z" fill="url(#budget-green)"/>

    {/* Main chart line */}
    <path d="M70 180 L120 160 L170 150 L220 120 L270 90 L320 70" stroke="url(#budget-line)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

    {/* Data points */}
    <circle cx="70" cy="180" r="5" fill="#0f172a" stroke="#10B981" strokeWidth="2"/>
    <circle cx="120" cy="160" r="5" fill="#0f172a" stroke="#10B981" strokeWidth="2"/>
    <circle cx="170" cy="150" r="5" fill="#0f172a" stroke="#10B981" strokeWidth="2"/>
    <circle cx="220" cy="120" r="5" fill="#0f172a" stroke="#10B981" strokeWidth="2"/>
    <circle cx="270" cy="90" r="5" fill="#0f172a" stroke="#10B981" strokeWidth="2"/>
    <circle cx="320" cy="70" r="6" fill="#10B981" stroke="#fff" strokeWidth="2" className="mkt-illustration-animate-pulse"/>

    {/* Projected growth (dashed) */}
    <path d="M320 70 L360 50" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5"/>

    {/* Impression share indicator */}
    <rect x="240" y="240" width="110" height="40" rx="8" fill="#0f172a" stroke="#10B981" strokeWidth="1.5"/>
    <text x="250" y="257" fill="#64748B" fontSize="10" fontFamily="system-ui">Impression Share</text>
    <text x="250" y="273" fill="#10B981" fontSize="16" fontFamily="system-ui" fontWeight="bold">62% → 100%</text>

    {/* Missing traffic callout */}
    <g className="mkt-illustration-animate-float">
      <rect x="50" y="240" width="140" height="40" rx="8" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="1.5"/>
      <text x="60" y="257" fill="#F59E0B" fontSize="10" fontFamily="system-ui">Missing Traffic</text>
      <text x="60" y="273" fill="#F59E0B" fontSize="16" fontFamily="system-ui" fontWeight="bold">38% potential</text>
    </g>

    {/* Up arrow */}
    <g transform="translate(330, 55)" className="mkt-illustration-animate-bounce">
      <polygon points="0,12 6,0 12,12" fill="#10B981"/>
    </g>
  </svg>
);

// ============================================
// 3. STRATEGY COACH ILLUSTRATION
// Shows chat interface with AI responses
// ============================================
export const StrategyCoachIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="mkt-feature-illustration">
    <defs>
      <linearGradient id="coach-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4C6FFF"/>
        <stop offset="100%" stopColor="#3B5BDB"/>
      </linearGradient>
    </defs>

    {/* Chat window */}
    <rect x="60" y="40" width="280" height="220" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2"/>

    {/* Window header */}
    <rect x="60" y="40" width="280" height="44" rx="12" fill="#1e293b"/>
    <rect x="60" y="72" width="280" height="12" fill="#1e293b"/>
    <circle cx="82" cy="62" r="7" fill="#EF4444"/>
    <circle cx="104" cy="62" r="7" fill="#F59E0B"/>
    <circle cx="126" cy="62" r="7" fill="#10B981"/>
    <text x="200" y="67" textAnchor="middle" fill="#94A3B8" fontSize="13" fontFamily="system-ui" fontWeight="500">Strategy Coach</text>

    {/* User message bubble */}
    <rect x="160" y="100" width="160" height="44" rx="10" fill="#1e293b"/>
    <text x="240" y="120" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontFamily="system-ui">Why is my CPC increasing</text>
    <text x="240" y="134" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontFamily="system-ui">on Brand campaigns?</text>

    {/* AI response bubble */}
    <rect x="80" y="155" width="200" height="80" rx="10" fill="url(#coach-blue)" fillOpacity="0.15" stroke="#4C6FFF" strokeWidth="1.5"/>

    {/* AI avatar */}
    <circle cx="98" cy="175" r="12" fill="url(#coach-blue)"/>
    <text x="98" y="180" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="system-ui" fontWeight="bold">AI</text>

    {/* AI response text */}
    <text x="120" y="177" fill="#E8ECF6" fontSize="11" fontFamily="system-ui" fontWeight="600">Based on your data:</text>
    <text x="92" y="196" fill="#CBD5E1" fontSize="10" fontFamily="system-ui">&#x2022; Competitor bidding increased 23%</text>
    <text x="92" y="212" fill="#CBD5E1" fontSize="10" fontFamily="system-ui">&#x2022; Quality Score dropped on 3 keywords</text>
    <text x="92" y="228" fill="#4C6FFF" fontSize="10" fontFamily="system-ui" fontWeight="600">&#x2192; Recommend: Refresh ad copy</text>

    {/* Confidence badge */}
    <rect x="80" y="245" width="100" height="28" rx="6" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
    <text x="130" y="264" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="system-ui" fontWeight="600">&#x2713; 94% confident</text>
  </svg>
);

// ============================================
// 4. CONFIDENCE LAYER ILLUSTRATION
// Shows confidence meters and explanations
// ============================================
export const ConfidenceLayerIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="mkt-feature-illustration">
    <defs>
      <linearGradient id="conf-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#FBBF24"/>
      </linearGradient>
      <linearGradient id="conf-green" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#34D399"/>
      </linearGradient>
      <linearGradient id="conf-red" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EF4444"/>
        <stop offset="100%" stopColor="#F87171"/>
      </linearGradient>
    </defs>

    {/* Card 1 - High confidence */}
    <g className="mkt-illustration-animate-slide-up">
      <rect x="50" y="30" width="300" height="70" rx="10" fill="#0f172a" stroke="#10B981" strokeWidth="1.5"/>
      <text x="70" y="55" fill="#E8ECF6" fontSize="12" fontFamily="system-ui" fontWeight="500">Increase budget on Campaign A</text>
      <text x="70" y="72" fill="#64748B" fontSize="10" fontFamily="system-ui">Missing 38% impression share</text>

      {/* Confidence bar */}
      <rect x="70" y="82" width="180" height="6" rx="3" fill="#1e293b"/>
      <rect x="70" y="82" width="162" height="6" rx="3" fill="url(#conf-green)"/>
      <text x="260" y="88" fill="#10B981" fontSize="11" fontFamily="system-ui" fontWeight="bold">92%</text>

      {/* Checkmark */}
      <circle cx="320" cy="65" r="16" fill="#10B981" fillOpacity="0.15"/>
      <path d="M312 65 L318 71 L328 59" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </g>

    {/* Card 2 - Medium confidence */}
    <g className="mkt-illustration-animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <rect x="50" y="115" width="300" height="70" rx="10" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.5"/>
      <text x="70" y="140" fill="#E8ECF6" fontSize="12" fontFamily="system-ui" fontWeight="500">Add negative keyword: &quot;free&quot;</text>
      <text x="70" y="157" fill="#64748B" fontSize="10" fontFamily="system-ui">12 clicks, 0 conversions this month</text>

      {/* Confidence bar */}
      <rect x="70" y="167" width="180" height="6" rx="3" fill="#1e293b"/>
      <rect x="70" y="167" width="126" height="6" rx="3" fill="url(#conf-yellow)"/>
      <text x="260" y="173" fill="#F59E0B" fontSize="11" fontFamily="system-ui" fontWeight="bold">68%</text>

      {/* Warning icon */}
      <circle cx="320" cy="150" r="16" fill="#F59E0B" fillOpacity="0.15"/>
      <text x="320" y="156" textAnchor="middle" fill="#F59E0B" fontSize="16" fontFamily="system-ui" fontWeight="bold">!</text>
    </g>

    {/* Card 3 - Low confidence (wait) */}
    <g className="mkt-illustration-animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <rect x="50" y="200" width="300" height="70" rx="10" fill="#0f172a" stroke="#64748B" strokeWidth="1.5"/>
      <text x="70" y="225" fill="#E8ECF6" fontSize="12" fontFamily="system-ui" fontWeight="500">Pause Campaign B</text>
      <text x="70" y="242" fill="#64748B" fontSize="10" fontFamily="system-ui">Insufficient data — recommend waiting</text>

      {/* Confidence bar */}
      <rect x="70" y="252" width="180" height="6" rx="3" fill="#1e293b"/>
      <rect x="70" y="252" width="54" height="6" rx="3" fill="#64748B"/>
      <text x="260" y="258" fill="#64748B" fontSize="11" fontFamily="system-ui" fontWeight="bold">32%</text>

      {/* Clock/wait icon */}
      <circle cx="320" cy="235" r="16" fill="#64748B" fillOpacity="0.15"/>
      <circle cx="320" cy="235" r="10" stroke="#64748B" strokeWidth="1.5" fill="none"/>
      <path d="M320 229 L320 235 L324 238" stroke="#64748B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
);

// ============================================
// 5. LEARNS YOUR STYLE ILLUSTRATION
// Shows pattern recognition, brain learning
// ============================================
export const LearnsStyleIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="mkt-feature-illustration">
    <defs>
      <linearGradient id="learn-purple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6"/>
        <stop offset="100%" stopColor="#7C3AED"/>
      </linearGradient>
    </defs>

    {/* Central brain/AI circle */}
    <circle cx="200" cy="150" r="50" fill="#0f172a" stroke="url(#learn-purple)" strokeWidth="2"/>
    <circle cx="200" cy="150" r="60" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" className="mkt-illustration-animate-spin"/>
    <circle cx="200" cy="150" r="70" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" className="mkt-illustration-animate-spin-reverse"/>

    {/* Brain icon in center */}
    <g transform="translate(180, 130)">
      <path d="M20 8 C12 8 8 16 8 20 C8 28 12 32 20 36 C28 32 32 28 32 20 C32 16 28 8 20 8" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
      <path d="M20 8 C20 4 24 4 24 8" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
      <path d="M14 16 C10 16 10 22 14 22" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
      <path d="M26 16 C30 16 30 22 26 22" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
      <line x1="20" y1="20" x2="20" y2="36" stroke="#8B5CF6" strokeWidth="2"/>
    </g>

    {/* Input decisions - LEFT SIDE */}
    <g className="mkt-illustration-animate-float">
      <rect x="20" y="70" width="85" height="28" rx="6" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1"/>
      <text x="62" y="88" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="system-ui">&#x2713; Approved</text>
      <line x1="105" y1="84" x2="140" y2="120" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3"/>
    </g>

    <g className="mkt-illustration-animate-float" style={{ animationDelay: '0.2s' }}>
      <rect x="20" y="136" width="85" height="28" rx="6" fill="#EF4444" fillOpacity="0.15" stroke="#EF4444" strokeWidth="1"/>
      <text x="62" y="154" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="system-ui">&#x2715; Rejected</text>
      <line x1="105" y1="150" x2="140" y2="150" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 3"/>
    </g>

    <g className="mkt-illustration-animate-float" style={{ animationDelay: '0.4s' }}>
      <rect x="20" y="202" width="85" height="28" rx="6" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1"/>
      <text x="62" y="220" textAnchor="middle" fill="#F59E0B" fontSize="11" fontFamily="system-ui">&#x275A;&#x275A; Deferred</text>
      <line x1="105" y1="216" x2="140" y2="180" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3"/>
    </g>

    {/* Output - RIGHT SIDE - WIDER BOXES */}
    <g className="mkt-illustration-animate-slide-right" style={{ animationDelay: '0.6s' }}>
      <line x1="260" y1="120" x2="280" y2="95" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="280" y="70" width="105" height="40" rx="6" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="1"/>
      <text x="332" y="86" textAnchor="middle" fill="#A78BFA" fontSize="9" fontFamily="system-ui">Risk tolerance:</text>
      <text x="332" y="101" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontFamily="system-ui" fontWeight="600">Conservative</text>
    </g>

    <g className="mkt-illustration-animate-slide-right" style={{ animationDelay: '0.8s' }}>
      <line x1="260" y1="150" x2="280" y2="150" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="280" y="130" width="105" height="40" rx="6" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="1"/>
      <text x="332" y="146" textAnchor="middle" fill="#A78BFA" fontSize="9" fontFamily="system-ui">Prefers:</text>
      <text x="332" y="161" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontFamily="system-ui" fontWeight="600">Data-backed</text>
    </g>

    <g className="mkt-illustration-animate-slide-right" style={{ animationDelay: '1s' }}>
      <line x1="260" y1="180" x2="280" y2="205" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="280" y="190" width="105" height="40" rx="6" fill="#8B5CF6" fillOpacity="0.15" stroke="#8B5CF6" strokeWidth="1"/>
      <text x="332" y="206" textAnchor="middle" fill="#A78BFA" fontSize="9" fontFamily="system-ui">Focus:</text>
      <text x="332" y="221" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontFamily="system-ui" fontWeight="600">ROAS &gt; Volume</text>
    </g>

    {/* Learning progress indicator */}
    <rect x="150" y="255" width="100" height="28" rx="14" fill="url(#learn-purple)" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1" className="mkt-illustration-animate-pulse"/>
    <text x="200" y="273" textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="system-ui" fontWeight="500">Learning... 73%</text>
  </svg>
);

export default {
  WastePreventionIllustration,
  BudgetOptimizationIllustration,
  StrategyCoachIllustration,
  ConfidenceLayerIllustration,
  LearnsStyleIllustration
};
