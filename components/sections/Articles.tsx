import type { Article } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "@/components/ui/ExternalLink";

interface ArticlesProps {
  articles: Article[];
}

export function Articles({ articles }: ArticlesProps) {
  return (
    <Section id="articles" title="Articles">
      <ul className="space-y-6">
        {articles.map((article) => (
          <li
            key={article.id}
            className="border-b border-border pb-6 last:border-b-0 last:pb-0"
          >
            <ExternalLink
              href={article.url}
              className="text-lg font-medium text-foreground no-underline hover:text-accent"
            >
              {article.title}
            </ExternalLink>
            <p className="mt-1 text-sm text-muted">
              {article.source}
              {article.publishedAt ? ` · ${article.publishedAt}` : ""}
            </p>
            {article.summary && (
              <p className="mt-2 text-muted">{article.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
