"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
        disabled
      >
        Theme
      </button>
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-card"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
