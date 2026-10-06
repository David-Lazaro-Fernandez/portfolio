const base = {
  width: 14,
  height: 14,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

export function Pencil(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10.5 3.5 12.5 5.5 6 12H4v-2l6.5-6.5Z" />
    </svg>
  );
}

export function ArrowLeft(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 8H4M7.5 4.5 4 8l3.5 3.5" />
    </svg>
  );
}

export function Sun(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="8" r="2.75" />
      <path d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7" />
    </svg>
  );
}

export function Moon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z" />
    </svg>
  );
}

export function Monitor(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2.5" width="12" height="8.5" rx="1.5" />
      <path d="M5.5 14h5M8 11v3" />
    </svg>
  );
}
