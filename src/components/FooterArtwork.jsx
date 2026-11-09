export default function FooterArtwork({ className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background celestial glow and twilight backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-secondary)]/40 to-[var(--color-accent-dark)]" />

      {/* SVG Artistic Noor & Islamic Geometry Landscape */}
      <svg
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="relative block h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="noorGlow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#34d399" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1e563d" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="archFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2e6e50" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1a4632" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="footerWave" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#245a40" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
          </linearGradient>

          {/* 8-Point Islamic Star (Khatam) pattern symbol */}
          <g id="star8">
            <rect x="-8" y="-8" width="16" height="16" fill="currentColor" rx="1.5" />
            <rect
              x="-8"
              y="-8"
              width="16"
              height="16"
              fill="currentColor"
              rx="1.5"
              transform="rotate(45)"
            />
            <circle cx="0" cy="0" r="3.5" fill="#fef08a" opacity="0.9" />
          </g>

          {/* Traditional Hanging Noor Lantern (Fanous) */}
          <g id="fanous">
            {/* Chain */}
            <line x1="0" y1="0" x2="0" y2="32" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="2 2" />
            {/* Top cap */}
            <path d="M-7 32 L7 32 L5 37 L-5 37 Z" fill="#d4af37" />
            <path d="M0 29 L2 32 L-2 32 Z" fill="#d4af37" />
            {/* Glass body */}
            <path
              d="M-8 37 L8 37 L6 55 L-6 55 Z"
              fill="url(#lanternGlow)"
              stroke="#d4af37"
              strokeWidth="1.2"
            />
            {/* Inner flame / Noor light */}
            <circle cx="0" cy="46" r="3" fill="#ffffff" />
            <circle cx="0" cy="46" r="6" fill="#fef08a" opacity="0.6" />
            {/* Bottom base and tassel */}
            <path d="M-6 55 L6 55 L3 60 L-3 60 Z" fill="#d4af37" />
            <circle cx="0" cy="62" r="1.5" fill="#d4af37" />
          </g>

          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#fde047" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#fef08a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient radial halo behind center */}
        <circle cx="720" cy="40" r="180" fill="url(#noorGlow)" />

        {/* Crescent Moon & Morning Star of Noor (Right Sky) */}
        <g transform="translate(1080, 28)">
          <circle cx="0" cy="0" r="30" fill="url(#moonGlow)" />
          {/* Crescent */}
          <path
            d="M 6 -14 A 16 16 0 1 0 6 14 A 13 13 0 1 1 6 -14 Z"
            fill="#fef08a"
            opacity="0.95"
          />
          {/* Companion Star */}
          <path
            d="M 16 -4 L 17 -1 L 20 0 L 17 1 L 16 4 L 15 1 L 12 0 L 15 -1 Z"
            fill="#ffffff"
            opacity="0.95"
          />
        </g>

        {/* Subtle Constellation Stars */}
        <g fill="#fef08a" opacity="0.75">
          <circle cx="120" cy="35" r="1.5" />
          <circle cx="180" cy="55" r="1" />
          <circle cx="260" cy="25" r="2" opacity="0.9" />
          <circle cx="340" cy="45" r="1.2" />
          <circle cx="480" cy="30" r="1.5" />
          <circle cx="590" cy="50" r="1" />
          <circle cx="840" cy="25" r="2" opacity="0.85" />
          <circle cx="940" cy="48" r="1.2" />
          <circle cx="1240" cy="35" r="1.5" />
          <circle cx="1320" cy="60" r="1.2" />
          <circle cx="1380" cy="25" r="1.8" />
        </g>

        {/* Background Layer: Islamic Multi-foil & Scalloped Arches Silhouette */}
        <path
          d="
            M 0 220
            L 0 130
            Q 60 100 120 130
            Q 180 90 240 130
            Q 300 100 360 130
            Q 420 85 480 130
            Q 540 95 600 130
            Q 660 80 720 130
            Q 780 80 840 130
            Q 900 95 960 130
            Q 1020 85 1080 130
            Q 1140 100 1200 130
            Q 1260 90 1320 130
            Q 1380 100 1440 130
            L 1440 220
            Z
          "
          fill="url(#archFill)"
        />

        {/* Middle Layer: Elegant Islamic Geometric Arabesque Arabesques & Interlocking Pointed Arches */}
        <path
          d="
            M 0 220
            L 0 150
            C 40 130, 80 110, 120 135
            C 160 110, 200 130, 240 150
            C 280 125, 320 100, 360 130
            C 400 100, 440 125, 480 145
            C 540 110, 600 90, 660 120
            C 690 100, 720 70, 750 100
            C 780 120, 840 90, 900 135
            C 960 105, 1020 125, 1080 145
            C 1140 115, 1200 135, 1260 150
            C 1320 120, 1380 135, 1440 150
            L 1440 220
            Z
          "
          fill="#1b4d36"
          opacity="0.85"
        />

        {/* Foreground Layer: Sacred Arabesque Rosettes & Gold Embellishment Ridge */}
        <path
          d="
            M 0 170
            Q 180 145 360 165
            Q 540 135 720 155
            Q 900 135 1080 165
            Q 1260 145 1440 170
            L 1440 220
            L 0 220
            Z
          "
          fill="url(#footerWave)"
        />

        {/* Decorative Golden Ribbons along the crest */}
        <path
          d="
            M 0 170
            Q 180 145 360 165
            Q 540 135 720 155
            Q 900 135 1080 165
            Q 1260 145 1440 170
          "
          stroke="url(#crestGold)"
          strokeWidth="2.5"
          fill="none"
        />

        {/* 8-Point Islamic Star Rosettes across the ornamental crest */}
        <g className="text-emerald-300">
          <use href="#star8" x="180" y="153" opacity="0.8" />
          <use href="#star8" x="360" y="165" opacity="0.9" />
          <use href="#star8" x="540" y="145" opacity="0.8" />
          <use href="#star8" x="720" y="155" opacity="1" transform="scale(1.2) translate(-120, -25)" />
          <use href="#star8" x="900" y="145" opacity="0.8" />
          <use href="#star8" x="1080" y="165" opacity="0.9" />
          <use href="#star8" x="1260" y="153" opacity="0.8" />
        </g>

        {/* Hanging Noor Lanterns (Fanous) casting warm glow */}
        <g>
          <use href="#fanous" x="240" y="60" />
          <use href="#fanous" x="480" y="55" />
          <use href="#fanous" x="720" y="45" transform="scale(1.15) translate(-95, -5)" />
          <use href="#fanous" x="960" y="55" />
          <use href="#fanous" x="1200" y="60" />
        </g>
      </svg>
    </div>
  )
}

