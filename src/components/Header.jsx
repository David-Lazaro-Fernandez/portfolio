import Image from "next/image";
import Link from "next/link";
import TextLink from "./TextLink";
import ThemeToggle from "./ThemeToggle";
import { profile, links } from "@/content/site";

export default function Header() {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-row items-center gap-3">
          <Image src="/avatar.png" alt={profile.name} width={50} height={50} priority className="size-[50px] shrink-0 rounded-sm" />
          <div className="flex flex-col">
            <Link href="/" className="text-lg font-semibold tracking-[-0.4px] text-ink">
              {profile.name}
            </Link>
            <p className="text-mute">{profile.role}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:pt-1">
          {links.map((link) => (
            <TextLink key={link.label} href={link.href} icon={link.icon}>
              {link.label}
            </TextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
