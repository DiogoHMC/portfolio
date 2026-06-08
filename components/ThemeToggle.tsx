"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "dark" | "light" {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = localStorage.getItem("site-theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("site-theme", theme);
    } catch (e) {}
  }, [theme]);

  function toggle() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <button
      role="switch"
      aria-checked={theme === "light"}
      aria-label="Alternar tema"
      onClick={toggle}
      className="theme-switch"
    >
      <span className="switch-track" aria-hidden>
        <span className="switch-thumb">{theme === "dark" ? "☾" : "☀"}</span>
      </span>
    </button>
  );
}
