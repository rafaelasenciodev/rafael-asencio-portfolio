import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Tag } from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isUpcoming = project.status === "upcoming";

  return (
    <article
      className={cn(
        "rounded-lg border border-border p-6",
        isUpcoming ? "bg-background opacity-80" : "bg-card",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        {isUpcoming && (
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
            Coming soon
          </span>
        )}
      </div>
      <p className="mt-3 text-muted">{project.description}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      {!isUpcoming && (project.repoUrl || project.demoUrl) && (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.repoUrl && (
            <ExternalLink href={project.repoUrl}>Repository</ExternalLink>
          )}
          {project.demoUrl && (
            <ExternalLink href={project.demoUrl}>Demo</ExternalLink>
          )}
        </div>
      )}
    </article>
  );
}
