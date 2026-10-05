import Link from "next/link";
import { notes as collection, formatDate } from "@/lib/content";

export const metadata = { title: "Notes" };

export default async function NotesPage() {
  const notes = (await collection.getAll()).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mt-20">
      <h1 className="text-lg font-semibold tracking-[-0.4px] text-ink">Notes</h1>
      <ul className="mt-4 divide-y divide-hairline">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="group flex items-baseline justify-between gap-6 py-4"
            >
              <span className="text-ink underline decoration-transparent underline-offset-[3px] transition-colors duration-150 group-hover:decoration-ink">
                {note.title}
              </span>
              <time dateTime={note.date} className="shrink-0 font-mono text-xs text-mute">
                {formatDate(note.date)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
