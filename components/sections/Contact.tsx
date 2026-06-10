import type { Profile } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "@/components/ui/ExternalLink";

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted">
        I&apos;m open to senior iOS engineering opportunities, consulting, and
        technical collaboration. Reach out through any of the channels below.
      </p>
      <ul className="mt-8 space-y-4">
        <li>
          <span className="block text-sm font-medium text-foreground">Email</span>
          <a
            href={`mailto:${profile.email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </li>
        <li>
          <span className="block text-sm font-medium text-foreground">
            LinkedIn
          </span>
          <ExternalLink href={profile.linkedinUrl}>
            {profile.linkedinUrl.replace("https://www.", "")}
          </ExternalLink>
        </li>
        <li>
          <span className="block text-sm font-medium text-foreground">
            GitHub
          </span>
          <ExternalLink href={profile.githubUrl}>
            {profile.githubUrl.replace("https://", "")}
          </ExternalLink>
        </li>
      </ul>
    </Section>
  );
}
