"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const SPIDER_QUOTES = [
  "With great bandwidth comes great uptime! 🕸️",
  "Friendly Neighborhood Cloud Hosting!",
  "Peter Parker approved 20.0 TPS stability!",
  "My Spider-Sense is tingling... 0% packet loss detected!",
  "Web-Slinger DDoS scrubbing active across all nodes!",
];

export default function SpiderManEasterEgg() {
  const { theme, mounted } = useTheme();
  const [speechIndex, setSpeechIndex] = useState(0);
  const [showSpeech, setShowSpeech] = useState(false);

  if (!mounted || theme !== "spiderman") {
    return null;
  }

  const handleSpiderClick = () => {
    setSpeechIndex((prev) => (prev + 1) % SPIDER_QUOTES.length);
    setShowSpeech(true);
    setTimeout(() => {
      setShowSpeech(false);
    }, 4000);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. CORNER SPIDERWEB OVERLAYS */}
      {/* ========================================================================= */}
      {/* Top-Left Spiderweb */}
      <div className="pointer-events-none fixed top-0 left-0 z-40 opacity-40 select-none">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radial Spokes */}
          <line x1="0" y1="0" x2="180" y2="0" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
          <line x1="0" y1="0" x2="165" y2="45" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="0" y1="0" x2="135" y2="90" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="0" y1="0" x2="90" y2="135" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="0" y1="0" x2="45" y2="165" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="180" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />

          {/* Web Arcs (Concentric Curves) */}
          <path d="M 35 0 Q 30 10 32 15 Q 25 25 22 35 Q 15 40 0 45" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
          <path d="M 70 0 Q 60 20 64 30 Q 50 50 44 70 Q 30 80 0 90" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
          <path d="M 115 0 Q 100 35 105 50 Q 80 85 72 115 Q 50 130 0 140" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
          <path d="M 160 0 Q 140 50 148 70 Q 115 120 100 160 Q 70 175 0 180" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      {/* Top-Right Spiderweb */}
      <div className="pointer-events-none fixed top-0 right-0 z-40 opacity-40 select-none">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radial Spokes */}
          <line x1="180" y1="0" x2="0" y2="0" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
          <line x1="180" y1="0" x2="15" y2="45" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="180" y1="0" x2="45" y2="90" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="180" y1="0" x2="90" y2="135" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="180" y1="0" x2="135" y2="165" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <line x1="180" y1="0" x2="180" y2="180" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />

          {/* Web Arcs */}
          <path d="M 145 0 Q 150 10 148 15 Q 155 25 158 35 Q 165 40 180 45" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
          <path d="M 110 0 Q 120 20 116 30 Q 130 50 136 70 Q 150 80 180 90" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
          <path d="M 65 0 Q 80 35 75 50 Q 100 85 108 115 Q 130 130 180 140" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
          <path d="M 20 0 Q 40 50 32 70 Q 65 120 80 160 Q 110 175 180 180" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. HANGING UPSIDE-DOWN SPIDER-MAN EASTER EGG */}
      {/* ========================================================================= */}
      <div className="fixed top-0 right-20 sm:right-32 z-50 pointer-events-auto">
        <div className="relative animate-swing cursor-pointer group" onClick={handleSpiderClick}>
          {/* Interactive Speech Bubble */}
          <div
            className={`absolute top-[160px] -left-36 w-48 p-2.5 rounded-xl bg-[#12070a] border border-[#e21b24] shadow-[0_0_20px_rgba(226,27,36,0.4)] text-[11px] font-mono text-white text-center transition-all duration-300 pointer-events-none z-50 ${
              showSpeech
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
            }`}
          >
            <p className="font-bold text-[#ff2a36] text-[10px] uppercase mb-0.5">Spider-Man says:</p>
            <p className="leading-snug">{showSpeech ? SPIDER_QUOTES[speechIndex] : "Click me! 🕷️"}</p>
            {/* Speech bubble pointer */}
            <div className="absolute -top-1.5 right-6 w-3 h-3 bg-[#12070a] border-t border-l border-[#e21b24] rotate-45" />
          </div>

          {/* SVG Canvas for Hanging Web & Inverted Spider-Man */}
          <svg
            width="80"
            height="180"
            viewBox="0 0 80 180"
            className="filter drop-shadow-[0_0_12px_rgba(226,27,36,0.6)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White Silk Web Strand */}
            <line
              x1="40"
              y1="0"
              x2="40"
              y2="60"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="3 1"
              className="opacity-90"
            />
            {/* Glow on strand */}
            <line
              x1="40"
              y1="0"
              x2="40"
              y2="60"
              stroke="rgba(226,27,36,0.5)"
              strokeWidth="3"
              className="blur-[1px]"
            />

            {/* Inverted Hanging Spider-Man Figure */}
            <g transform="translate(40, 60)">
              {/* Hands Holding Web */}
              <circle cx="-3" cy="2" r="3.5" fill="#e21b24" stroke="#7a0a0f" strokeWidth="0.8" />
              <circle cx="3" cy="2" r="3.5" fill="#e21b24" stroke="#7a0a0f" strokeWidth="0.8" />

              {/* Inverted Legs / Thighs tucked up */}
              {/* Left Leg (Blue/Red) */}
              <path
                d="M -3 4 Q -14 12 -12 24 Q -8 26 -4 20 Q -2 12 -3 4 Z"
                fill="#0055ff"
                stroke="#0a2a8a"
                strokeWidth="0.8"
              />
              <path
                d="M -12 24 Q -10 32 -6 36 Q -3 34 -4 28 Z"
                fill="#e21b24"
                stroke="#7a0a0f"
                strokeWidth="0.8"
              />

              {/* Right Leg (Blue/Red) */}
              <path
                d="M 3 4 Q 14 12 12 24 Q 8 26 4 20 Q 2 12 3 4 Z"
                fill="#0055ff"
                stroke="#0a2a8a"
                strokeWidth="0.8"
              />
              <path
                d="M 12 24 Q 10 32 6 36 Q 3 34 4 28 Z"
                fill="#e21b24"
                stroke="#7a0a0f"
                strokeWidth="0.8"
              />

              {/* Inverted Torso */}
              <path
                d="M -8 18 L 8 18 L 6 42 L -6 42 Z"
                fill="#e21b24"
                stroke="#7a0a0f"
                strokeWidth="0.8"
              />
              {/* Torso Blue Flanks */}
              <path d="M -8 18 L -4 18 L -3 38 L -6 42 Z" fill="#0055ff" opacity="0.9" />
              <path d="M 8 18 L 4 18 L 3 38 L 6 42 Z" fill="#0055ff" opacity="0.9" />

              {/* Chest Spider Emblem (Inverted) */}
              <g transform="translate(0, 30)">
                <ellipse cx="0" cy="0" rx="1.5" ry="3" fill="#07090e" />
                <path d="M -1 -1 L -4 -4 M -1 0 L -5 0 M -1 1 L -4 4" stroke="#07090e" strokeWidth="0.6" />
                <path d="M 1 -1 L 4 -4 M 1 0 L 5 0 M 1 1 L 4 4" stroke="#07090e" strokeWidth="0.6" />
              </g>

              {/* Spider-Man Head (Hanging upside down at bottom) */}
              <g transform="translate(0, 58)">
                {/* Red Mask Base */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx="11"
                  ry="13"
                  fill="#e21b24"
                  stroke="#7a0a0f"
                  strokeWidth="1"
                />

                {/* Web Pattern on Mask */}
                <path
                  d="M 0 -13 L 0 13 M -11 0 L 11 0 M -8 -8 L 8 8 M -8 8 L 8 -8"
                  stroke="rgba(0,0,0,0.35)"
                  strokeWidth="0.6"
                />
                <ellipse cx="0" cy="0" rx="6" ry="7" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />

                {/* Left Eye (Slanted Comic Eye) */}
                <path
                  d="M -8 -3 Q -4 -7 -1 -2 Q -4 4 -8 -3 Z"
                  fill="#ffffff"
                  stroke="#07090e"
                  strokeWidth="1.2"
                />

                {/* Right Eye (Slanted Comic Eye) */}
                <path
                  d="M 8 -3 Q 4 -7 1 -2 Q 4 4 8 -3 Z"
                  fill="#ffffff"
                  stroke="#07090e"
                  strokeWidth="1.2"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
