import { renderProjects } from "./project.js";
import { applyThemeFromStorage, toggleTheme } from "./theme.js";
applyThemeFromStorage();

const toggleThemeButton = document.getElementById("toggle-theme");

renderProjects();

toggleThemeButton.addEventListener("click", () => {
  toggleTheme();
});


