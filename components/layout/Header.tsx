"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/content/navigation";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { name } = siteContent.profile;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="#hero"
          className="text-sm font-semibold text-foreground md:text-base"
          onClick={() => setMenuOpen(false)}
        >
          {name}
        </Link>

        <div className="flex items-center gap-3">
          <nav
            className="hidden items-center gap-5 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-border md:hidden",
          menuOpen ? "block" : "hidden",
        )}
        aria-label="Mobile navigation"
      >
        <ul className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-3">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="block rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
