"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (themeMode === "light" ? (
          <button onClick={() => setTheme("dark")}>
            <CiDark size={25} className={"cursor-pointer"} />
          </button>
        ) : (
          <button onClick={() => setTheme("light")}>
            <CiLight size={25} className={"cursor-pointer"} />
          </button>
        ))}
    </div>
  );

  {
    /*
  return (
    <div>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <CiDark size={25} className={"cursor-pointer"} />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <CiLight size={25} className={"cursor-pointer"} />
        </button>
      )}
    </div>
  );
*/
  }
};

export default ThemeComp;
