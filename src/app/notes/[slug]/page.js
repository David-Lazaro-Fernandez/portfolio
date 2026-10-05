import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";
import { notes, formatDate } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await notes.getSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { title, summary } = await notes.get(slug);
  return { title, description: summary };
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  const { Content, title, date } = await notes.get(slug);

  return (
    <article className="mt-20">
      <Link
        href="/notes"
        className="inline-flex items-center gap-1 text-sm text-mute transition-colors duration-150 hover:text-ink"
      >
        <ArrowLeft /> Notes
      </Link>
      <h1 className="mt-6 text-2xl font-semibold tracking-[-0.8px] text-ink">{title}</h1>
      <time dateTime={date} className="mt-2 block font-mono text-xs text-mute">
        {formatDate(date)}
      </time>
      <div className="prose mt-10">
        <Content />
      </div>
    </article>
  );
}
