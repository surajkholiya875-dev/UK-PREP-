import { Link } from 'react-router-dom';

interface BrandMarkProps {
  to?: string;
  size?: 'sm' | 'md';
}

export function BrandMark({ to = '/', size = 'md' }: BrandMarkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
    >
      <svg
        width={size === 'sm' ? 24 : 28}
        height={size === 'sm' ? 24 : 28}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="32"
          height="32"
          rx="6"
          className="fill-navy-900 dark:fill-navy-800"
        />
        <path
          d="M6 22L12.5 11.5L16.5 17L20.5 10.5L26 22H6Z"
          className="fill-white/95 dark:fill-slate-100"
        />
        <path
          d="M12.5 11.5L15 15L16.5 17L18 14.5L20.5 10.5"
          stroke="#F28C00"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="23.5" width="20" height="2" rx="1" fill="#F28C00" />
      </svg>
      <span
        className={`font-display font-bold tracking-tight text-ink whitespace-nowrap shrink-0 ${
          size === 'sm' ? 'text-base' : 'text-lg'
        }`}
      >
        UK Prep
      </span>
    </Link>
  );
}
