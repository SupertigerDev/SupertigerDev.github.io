const toggleThemeButton = document.getElementById("toggle-theme");

function animateTheme () {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
  * {
    transition: 0.2s;
  }
  `;
  document.head.appendChild(styleEl);
  setTimeout(() => {
    document.head.removeChild(styleEl);
  }, 200);
}

export function toggleTheme () {
  animateTheme();
  
  const darkThemeApplied = document.body.classList.toggle('dark');
  const lightThemeApplied = document.body.classList.toggle('light');

  if (darkThemeApplied) {
    localStorage.setItem('theme', 'dark');
    toggleThemeButton.innerHTML = "Light Mode";
  }
  if (lightThemeApplied) {
    localStorage.setItem('theme', 'light');
    toggleThemeButton.innerHTML = "Dark Mode";
  }
}


export function applyThemeFromStorage () {
  document.body.classList.remove('dark');
  document.body.classList.remove('light');
  const currentTheme = localStorage.getItem('theme') || "dark";
  document.body.classList.add(currentTheme);
  toggleThemeButton.innerHTML = currentTheme === "dark" ? "Light Mode" : "Dark Mode";
}