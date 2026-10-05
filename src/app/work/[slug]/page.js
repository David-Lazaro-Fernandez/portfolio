import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";
import { work } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await work.getSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { title, summary } = await work.get(slug);
  return { title, description: summary };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const { Content, title, summary, studio, year, stack = [] } = await work.get(slug);

  const facts = [
    ["Studio", studio],
    ["Year", year],
    ["Stack", stack.join(", ")],
  ].filter(([, value]) => value);

  return (
    <article className="mt-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-mute transition-colors duration-150 hover:text-ink"
      >
        <ArrowLeft /> Home
      </Link>
      <h1 className="mt-6 text-2xl font-semibold tracking-[-0.8px] text-ink">{title}</h1>
      {summary && <p className="mt-3 text-body">{summary}</p>}

      <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
        {facts.map(([label, value]) => (
          <div key={label} className="flex gap-6 py-3">
            <dt className="w-16 shrink-0 font-mono text-xs leading-6 text-mute uppercase">{label}</dt>
            <dd className="text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="prose mt-10">
        <Content />
      </div>
    </article>
  );
}
