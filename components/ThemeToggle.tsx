"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("site-theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        setTheme("dark");
      }
    } catch (e) {}
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("site-theme", next);
    } catch (e) {}
    document.documentElement.setAttribute("data-theme", next);
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
