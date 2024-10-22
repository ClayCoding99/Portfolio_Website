import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    console.log("test");
    console.log(dark);
    document.body.classList.remove(!dark ? "light" : "dark");
    document.body.classList.add(!dark ? "dark" : "light");
  }, [dark]);

  const value = { dark, setDark };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}