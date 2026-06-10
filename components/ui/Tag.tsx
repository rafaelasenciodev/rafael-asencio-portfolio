import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
