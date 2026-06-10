import { siteContent } from "@/content/site";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Footer() {
  const { name, email, githubUrl, linkedinUrl } = siteContent.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {year} {name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${email}`} className="hover:text-foreground">
            Email
          </a>
          <ExternalLink href={githubUrl}>GitHub</ExternalLink>
          <ExternalLink href={linkedinUrl}>LinkedIn</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
