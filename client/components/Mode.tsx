import React from "react";
import { useTheme } from "next-themes";
export default function Mode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="absolute top-10 right-10"
      onClick={() => {
          console.log(theme)
          theme === 'light' ? setTheme('light') : setTheme('dark')
      }}
    >
      Mode
    </button>
  );
}