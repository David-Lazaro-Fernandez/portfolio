import TextLink from "./TextLink";
import { profile, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 flex flex-col gap-4 border-t border-hairline pt-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="flex gap-5">
        {socials.map((s) => (
          <TextLink key={s.label} href={s.href}>
            {s.label}
          </TextLink>
        ))}
      </div>
    </footer>
  );
}
