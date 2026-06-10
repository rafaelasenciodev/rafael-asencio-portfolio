import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  if (endDate === null) {
    return `${startDate} — Present`;
  }
  return `${startDate} — ${endDate}`;
}

/** Prefixes internal paths with NEXT_PUBLIC_BASE_PATH (GitHub Pages subdirectory). */
export function withBasePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
