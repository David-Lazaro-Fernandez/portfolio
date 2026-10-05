import Section, { Entry, Row } from "@/components/Section";
import TextLink from "@/components/TextLink";
import PrefetchImages from "@/components/PrefetchImages";
import { work } from "@/lib/content";
import {
  profile,
  experience,
  consultancy,
  projects,
  awards,
  communities,
  education,
} from "@/content/site";

export default async function Home() {
  const covers = (await Promise.all((await work.getSlugs()).map(work.getCover))).filter(Boolean);

  return (
    <>
      <PrefetchImages images={covers} />
      <p className="mt-16 text-body">{profile.intro}</p>

      <Section title="Experience">
        {experience.map((job) => (
          <Entry
            key={job.company}
            title={job.company}
            meta={job.period}
            subtitle={job.role}
            summary={job.summary}
            bullets={job.bullets}
          />
        ))}
      </Section>

      <Section title="Consultancy">
        <Entry
          title={consultancy.name}
          meta={consultancy.period}
          subtitle={consultancy.role}
          summary={consultancy.summary}
          bullets={consultancy.bullets}
        />
      </Section>

      <Section title="Projects">
        {projects.map((project) => (
          <Entry
            key={project.name}
            title={<TextLink href={project.href}>{project.name}</TextLink>}
            summary={project.summary}
          />
        ))}
      </Section>

      <Section title="Awards">
        {awards.map((award) => (
          <Row key={award.title} title={award.title} meta={award.year} />
        ))}
      </Section>

      <Section title="Communities">
        {communities.map((c) => (
          <Row key={c.name} title={c.name} detail={c.summary} />
        ))}
      </Section>

      <Section title="Education">
        <Row title={education.school} detail={education.degree} meta={education.period} />
      </Section>
    </>
  );
}
