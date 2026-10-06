"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "./Icons";

const STORAGE_KEY = "theme";
const NEXT = { system: "light", light: "dark", dark: "system" };
const LABELS = { system: "System theme", light: "Light theme", dark: "Dark theme" };

const darkScheme = () => matchMedia("(prefers-color-scheme: dark)");

function apply(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark" || (theme === "system" && darkScheme().matches));
}

// The icon comes from data-theme on <html>, not from React state.
// Thus the icon is correct before hydration.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme ?? "system");
    const media = darkScheme();
    function onChange() {
      if (document.documentElement.dataset.theme === "system") apply("system");
    }
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function cycle() {
    const next = NEXT[document.documentElement.dataset.theme] ?? "system";
    apply(next);
    setTheme(next);
    try {
      if (next === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={theme ? `${LABELS[theme]}. Switch to ${LABELS[NEXT[theme]].toLowerCase()}` : "Switch theme"}
      title={theme ? LABELS[theme] : undefined}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-elevated text-ink transition-[background-color,transform] duration-150 hover:bg-hairline-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link active:scale-[0.98]"
    >
      <Monitor width={16} height={16} className="hidden theme-system:block" />
      <Sun width={16} height={16} className="hidden theme-light:block" />
      <Moon width={16} height={16} className="hidden theme-dark:block" />
    </button>
  );
}
