export function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB88C" />
          <stop offset="50%" stopColor="#FF9F5A" />
          <stop offset="100%" stopColor="#FF8C42" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Diamond (rotated square) */}
      <path
        d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
        stroke="url(#orangeGradient)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      
      {/* Subtle home roof shape integrated at top */}
      <path
        d="M 35 35 L 50 23 L 65 35"
        stroke="url(#orangeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      
      {/* Main flowing arrow - smooth curve from bottom-left to top */}
      <path
        d="M 25 75 Q 35 60, 40 50 Q 45 40, 55 30"
        stroke="url(#orangeGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      {/* Arrow head for main flow */}
      <path
        d="M 55 30 L 52 35 M 55 30 L 60 32"
        stroke="url(#orangeGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Zigzag arrow - representing workflow/services */}
      <path
        d="M 30 60 L 42 48 L 35 40 L 48 28"
        stroke="url(#orangeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Arrow head for zigzag */}
      <path
        d="M 48 28 L 45 32 M 48 28 L 52 30"
        stroke="url(#orangeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Bottom service flow indicator */}
      <path
        d="M 55 70 L 70 55"
        stroke="url(#orangeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path
        d="M 70 55 L 67 59 M 70 55 L 74 57"
        stroke="url(#orangeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}
