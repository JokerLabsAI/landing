interface JokerMarkProps {
  size?: number;
  className?: string;
}

export function JokerMark({ size = 32, className = "" }: JokerMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="JokerLabs logo mark"
    >
      {/* Diamond background */}
      <path
        d="M20 2L38 20L20 38L2 20L20 2Z"
        fill="var(--jl-primary)"
        opacity="0.15"
      />
      <path
        d="M20 4L36 20L20 36L4 20L20 4Z"
        stroke="var(--jl-primary)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Joker J letterform */}
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fontFamily="var(--font-space), system-ui, sans-serif"
        fill="var(--jl-primary)"
        letterSpacing="-1"
      >
        J
      </text>
      {/* Accent dot */}
      <circle cx="27" cy="14" r="2.5" fill="var(--jl-accent)" />
    </svg>
  );
}
