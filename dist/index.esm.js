import React, { createContext, useState, useEffect, useContext } from 'react';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

var defaultState = {
  dark: false,
  toggleDark: function toggleDark() {}
};
var ThemeContext = /*#__PURE__*/createContext(defaultState);

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      dark = _useState2[0],
      setDark = _useState2[1];

  useEffect(function () {
    var lsDark = localStorage.getItem('dark');
    setDark(JSON.parse(lsDark));
  }, []);

  var toggleDark = function toggleDark() {
    var _d$classList;

    var d = document.documentElement;
    var themes = ['light', 'dark'];

    (_d$classList = d.classList).remove.apply(_d$classList, themes);

    d.classList.add(dark ? 'light' : 'dark');
    localStorage.setItem('dark', JSON.stringify(!dark));
    setDark(!dark);
  };

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      dark: dark,
      toggleDark: toggleDark
    }
  }, children);
};

var DarkModeToggle = function DarkModeToggle(_ref) {
  var className = _ref.className;

  var _useContext = useContext(ThemeContext),
      dark = _useContext.dark,
      toggleDark = _useContext.toggleDark;

  var moon = 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z';
  var sun = 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z';
  return /*#__PURE__*/React.createElement("svg", {
    className: className ? "".concat(className) : "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    onClick: function onClick() {
      return toggleDark();
    }
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: dark ? sun : moon,
    clipRule: "evenodd"
  }));
};

function setTheme() {
  var storageKey = 'dark';
  var dark = 'dark',
      light = 'light';
  var d = document.querySelector('html');
  var localStorageTheme = JSON.parse(localStorage.getItem(storageKey));

  if (localStorageTheme === null) {
    var prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem(storageKey, JSON.stringify(prefersDarkMode));
    localStorageTheme = prefersDarkMode;
  }

  setClassOnDocumentBody(localStorageTheme);

  function setClassOnDocumentBody(darkMode) {
    d.classList.remove(darkMode ? light : dark);
    d.classList.add(darkMode ? dark : light);
  }
}

var ThemeScriptTag = function ThemeScriptTag() {
  var theme = "(".concat(setTheme, ")()");
  return /*#__PURE__*/React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: theme
    }
  });
};

export { DarkModeToggle, ThemeContext, ThemeProvider, ThemeScriptTag };
