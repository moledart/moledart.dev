"use client";

import { Toggle } from "./ui/toggle";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ToggleColorMode = () => {
  const { theme = "dark", setTheme } = useTheme();
  return (
    <Toggle
      aria-label="Toggle dark mode"
      size="sm"
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default ToggleColorMode;
