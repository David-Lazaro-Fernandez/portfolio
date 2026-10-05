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
