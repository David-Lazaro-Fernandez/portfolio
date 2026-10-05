import Link from "next/link";
import { ArrowUpRight, Pencil } from "./Icons";

const icons = { arrow: ArrowUpRight, pencil: Pencil };

export default function TextLink({ href, children, icon }) {
  const external = /^https?:\/\//.test(href);
  const Icon = icons[icon ?? (external ? "arrow" : null)];

  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="group inline-flex items-baseline gap-1 text-ink underline decoration-faint underline-offset-[3px] transition-colors duration-150 hover:decoration-ink"
    >
      {children}
      {Icon && (
        <Icon className="relative top-[2px] shrink-0 text-faint transition-[color,transform] duration-150 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-ink" />
      )}
    </Link>
  );
}
