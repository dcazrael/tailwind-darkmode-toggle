import React, { createContext, useEffect, useState } from 'react';
const defaultState = {
  dark: false,
  toggleDark: () => {},
};
const ThemeContext = createContext(defaultState);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState();

  useEffect(() => {
    const lsDark = localStorage.getItem('dark');

    setDark(JSON.parse(lsDark));
  }, []);

  const toggleDark = () => {
    const d = document.documentElement;
    const themes = ['light', 'dark'];

    d.classList.remove(...themes);
    d.classList.add(dark ? 'light' : 'dark');

    localStorage.setItem('dark', JSON.stringify(!dark));
    setDark(!dark);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { ThemeProvider };
