"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex h-8 w-14 items-center rounded-full transition-colors duration-300
        ${isDark ? "bg-gray-900" : "bg-gray-300"}`}
    >
      {/* Knob */}
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300
        ${isDark ? "translate-x-7" : "translate-x-1"}`}
      >
        {isDark ? (
          <Moon size={16} className="text-gray-800" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}