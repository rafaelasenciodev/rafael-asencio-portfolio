import type { Profile } from "@/lib/types";
import { ExternalLink } from "@/components/ui/ExternalLink";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      className="scroll-mt-20 border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-accent md:text-xl">{profile.role}</p>
        {profile.location && (
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        )}
        <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
          {profile.introduction}
        </p>
        <nav
          className="mt-8 flex flex-wrap gap-4"
          aria-label="Primary actions"
        >
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            CV
          </a>
          <ExternalLink
            href={profile.githubUrl}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground no-underline hover:bg-card"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href={profile.linkedinUrl}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground no-underline hover:bg-card"
          >
            LinkedIn
          </ExternalLink>
        </nav>
      </div>
    </section>
  );
}
