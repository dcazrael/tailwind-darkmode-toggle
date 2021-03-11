const setTheme = () => {
  const storageKey = 'dark';
  const [dark, light] = ['dark', 'light'];

  let d = document.querySelector('html');
  let localStorageTheme = JSON.parse(localStorage.getItem(storageKey));

  if (localStorageTheme === null) {
    const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem(storageKey, JSON.stringify(prefersDarkMode));
    localStorageTheme = prefersDarkMode;
  }

  setClassOnDocumentBody(localStorageTheme);

  function setClassOnDocumentBody(darkMode) {
    d.classList.remove(darkMode ? light : dark);
    d.classList.add(darkMode ? dark : light);
  }
};

setTheme();
