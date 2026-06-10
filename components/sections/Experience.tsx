import type { ExperienceEntry } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((entry) => (
          <li key={entry.id} className="border-l-2 border-border pl-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {entry.company}
              </h3>
              <p className="text-sm text-muted">
                {formatDateRange(entry.startDate, entry.endDate)}
              </p>
            </div>
            <p className="mt-1 text-base text-accent">{entry.role}</p>
            <p className="mt-3 text-muted">{entry.description}</p>
            {entry.highlights && entry.highlights.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            {entry.technologies && entry.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
