import type { ProfessionalSummary } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

interface AboutProps {
  about: ProfessionalSummary;
}

export function About({ about }: AboutProps) {
  return (
    <Section id="about" title="About">
      <p className="text-base leading-relaxed text-muted md:text-lg">
        {about.summary}
      </p>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {about.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
          Industries
        </h3>
        <div className="flex flex-wrap gap-2">
          {about.industries.map((industry) => (
            <Tag key={industry}>{industry}</Tag>
          ))}
        </div>
      </div>
    </Section>
  );
}
