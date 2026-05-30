"use client";

export default function RouteMap() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg viewBox="0 0 500 350" className="w-full h-auto" aria-label="Mediterranean route map: Venice - Piraeus - Limassol">
        {/* Sea background */}
        <rect width="500" height="350" rx="16" fill="#0F1D35" />

        {/* Simplified coastlines */}
        {/* Italy */}
        <path
          d="M100,40 L120,50 L115,80 L130,100 L125,130 L140,150 L135,180 L120,200 L130,220 L110,230"
          fill="none"
          stroke="#1E3A5F"
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Italy boot shape fill */}
        <path
          d="M80,30 L150,30 L145,60 L155,80 L150,110 L160,130 L155,155 L170,170 L160,200 L145,220 L125,235 L100,230 L90,200 L85,170 L90,140 L85,110 L90,80 L85,50 Z"
          fill="#1A3050"
          opacity="0.4"
        />

        {/* Greece mainland */}
        <path
          d="M270,80 L290,70 L310,80 L305,100 L320,110 L315,130 L325,150 L310,170 L295,165 L280,175 L270,160 L275,140 L265,120 L270,100 Z"
          fill="#1A3050"
          opacity="0.4"
        />

        {/* Peloponnese */}
        <path
          d="M270,170 L290,165 L305,175 L300,200 L285,210 L270,205 L265,190 Z"
          fill="#1A3050"
          opacity="0.4"
        />

        {/* Turkey */}
        <path
          d="M330,70 L400,60 L450,70 L470,90 L480,120 L470,140 L440,150 L400,145 L370,150 L350,140 L340,120 L330,100 Z"
          fill="#1A3050"
          opacity="0.4"
        />

        {/* Cyprus */}
        <ellipse cx="405" cy="205" rx="25" ry="10" fill="#1A3050" opacity="0.5" />

        {/* Crete */}
        <ellipse cx="310" cy="235" rx="30" ry="8" fill="#1A3050" opacity="0.4" />

        {/* Route lines with animation */}
        {/* Venice to Piraeus */}
        <path
          d="M145,55 Q220,100 295,165"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeDasharray="8,4"
          opacity="0.8"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Piraeus to Limassol */}
        <path
          d="M295,165 Q350,200 400,205"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeDasharray="8,4"
          opacity="0.8"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="60"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Limassol back to Venice (return route) */}
        <path
          d="M400,205 Q270,280 145,55"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeDasharray="4,6"
          opacity="0.4"
        />

        {/* Port markers */}
        {/* Venice */}
        <circle cx="145" cy="55" r="6" fill="#2563EB" />
        <circle cx="145" cy="55" r="6" fill="#3B82F6" opacity="0.5">
          <animate
            attributeName="r"
            values="6;12;6"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <text x="145" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          Venice
        </text>

        {/* Piraeus */}
        <circle cx="295" cy="165" r="6" fill="#2563EB" />
        <circle cx="295" cy="165" r="6" fill="#3B82F6" opacity="0.5">
          <animate
            attributeName="r"
            values="6;12;6"
            dur="2s"
            begin="0.7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0;0.5"
            dur="2s"
            begin="0.7s"
            repeatCount="indefinite"
          />
        </circle>
        <text x="295" y="150" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          Piraeus
        </text>

        {/* Limassol */}
        <circle cx="400" cy="205" r="6" fill="#2563EB" />
        <circle cx="400" cy="205" r="6" fill="#3B82F6" opacity="0.5">
          <animate
            attributeName="r"
            values="6;12;6"
            dur="2s"
            begin="1.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0;0.5"
            dur="2s"
            begin="1.4s"
            repeatCount="indefinite"
          />
        </circle>
        <text x="400" y="190" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          Limassol
        </text>

        {/* Transit labels */}
        <text x="210" y="92" textAnchor="middle" fill="#60A5FA" fontSize="10" opacity="0.7">
          2 days
        </text>
        <text x="355" y="192" textAnchor="middle" fill="#60A5FA" fontSize="10" opacity="0.7">
          2 days
        </text>

        {/* Vessel icon on route */}
        <g>
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M145,55 Q220,100 295,165 Q350,200 400,205 Q270,280 145,55"
          />
          <polygon points="-6,-4 6,0 -6,4" fill="#D4A853" />
        </g>
      </svg>
    </div>
  );
}
