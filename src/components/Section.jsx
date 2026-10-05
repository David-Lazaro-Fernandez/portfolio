import TextLink from "./TextLink";

export default function Section({ title, children }) {
  return (
    <section className="mt-20">
      <h2 className="text-lg font-semibold tracking-[-0.4px] text-ink">{title}</h2>
      <div className="mt-4 divide-y divide-hairline">{children}</div>
    </section>
  );
}

export function Entry({ title, meta, subtitle, summary, bullets = [] }) {
  return (
    <article className="py-8 first:pt-4">
      <h3 className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-semibold text-ink">{title}</span>
        {meta && <span className="text-sm text-mute">{meta}</span>}
      </h3>
      {subtitle && <p className="text-sm text-mute">{subtitle}</p>}
      {summary && <p className="mt-3 text-ink">{summary}</p>}
      {bullets.length > 0 && (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-body marker:text-faint">
          {bullets.map((parts, i) => (
            <li key={i} className="pl-1">
              {parts.map((part, j) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <TextLink key={j} href={part.href}>
                    {part.text}
                  </TextLink>
                ),
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function Row({ title, detail, meta }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3 first:pt-2">
      <p>
        <span className="text-ink">{title}</span>
        {detail && <span className="text-mute"> — {detail}</span>}
      </p>
      {meta && <span className="shrink-0 font-mono text-xs text-mute">{meta}</span>}
    </div>
  );
}
