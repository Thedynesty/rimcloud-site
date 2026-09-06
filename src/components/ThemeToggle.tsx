"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  // In default theme or before mounting, active is false
  const isSpiderman = mounted && theme === "spiderman";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300 select-none group focus:outline-none ${
        isSpiderman
          ? "bg-[#18090e] border-[#e21b24]/60 shadow-[0_0_15px_rgba(226,27,36,0.45)] hover:border-[#ff2a36] hover:shadow-[0_0_20px_rgba(226,27,36,0.7)] text-white"
          : "bg-[#0b0e14] border-white/10 hover:border-[#00f0ff]/50 shadow-cyan-sm hover:shadow-cyan-md text-zinc-300 hover:text-[#00f0ff]"
      }`}
      aria-label={isSpiderman ? "Deactivate Spider-Man Protocol" : "Activate Spider-Man Protocol"}
      title={isSpiderman ? "Switch to Classic Mode" : "Activate Spider-Man Protocol"}
    >
      {/* Spider Mask Icon */}
      <span className="relative flex items-center justify-center w-5 h-5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 group-hover:scale-110 ${
            isSpiderman ? "text-[#ff2a36]" : "text-zinc-400 group-hover:text-[#00f0ff]"
          }`}
        >
          {/* Mask Contour */}
          <path
            d="M12 2C6.5 2 3.5 6.5 3.5 12C3.5 17 7.5 21.5 12 22C16.5 21.5 20.5 17 20.5 12C20.5 6.5 17.5 2 12 2Z"
            fill={isSpiderman ? "#e21b24" : "currentColor"}
            fillOpacity={isSpiderman ? "0.25" : "0.15"}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mask Web Radians */}
          <path
            d="M12 2V22M3.5 12H20.5M6 6L18 18M6 18L18 6"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          {/* Eyes Left & Right */}
          <path
            d="M8.2 9.5C6.8 11.5 7.2 14 9.5 14C10.5 14 11 13 11 11.5C10.5 10 9.5 9.5 8.2 9.5Z"
            fill={isSpiderman ? "#ffffff" : "#00f0ff"}
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M15.8 9.5C17.2 11.5 16.8 14 14.5 14C13.5 14 13 13 13 11.5C13.5 10 14.5 9.5 15.8 9.5Z"
            fill={isSpiderman ? "#ffffff" : "#00f0ff"}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </svg>
      </span>

      {/* Button Text & Status Indicator */}
      <span className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            isSpiderman
              ? "bg-[#ff2a36] shadow-[0_0_8px_#ff2a36] animate-pulse"
              : "bg-[#00f0ff] shadow-[0_0_6px_#00f0ff]"
          }`}
        />
        <span className="hidden sm:inline">
          {isSpiderman ? "SPIDER-SUIT" : "SUIT UP"}
        </span>
      </span>
    </button>
  );
}

