"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "default" | "spiderman";

interface ThemeContextType {
  theme: Theme;
  mounted: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
  mounted: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("rimcloud_theme") as Theme | null;
    if (savedTheme === "spiderman" || savedTheme === "default") {
      setThemeState(savedTheme);
      if (savedTheme === "spiderman") {
        document.documentElement.classList.add("theme-spiderman");
      } else {
        document.documentElement.classList.remove("theme-spiderman");
      }
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("rimcloud_theme", newTheme);
    if (newTheme === "spiderman") {
      document.documentElement.classList.add("theme-spiderman");
    } else {
      document.documentElement.classList.remove("theme-spiderman");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "default" ? "spiderman" : "default";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, mounted, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
