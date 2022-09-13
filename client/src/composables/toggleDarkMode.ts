export function useToggleDarkMode() {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function checkDarkMode() {
  return document.documentElement.classList.contains("dark");
}
