const themes = ['light', 'dark'];
let currentThemeIndex = 0;

function toggleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeText = document.getElementById('theme-text');

  html.classList.remove('dark');

  if (theme === 'dark') {
    html.classList.add('dark');
  }

  if (themeText) {
    themeText.textContent = theme === 'dark' ? 'Dark' : 'Light';
  }

  currentThemeIndex = themes.indexOf(theme);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme && themes.includes(savedTheme)) {
  applyTheme(savedTheme);
} else {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(isDark ? 'dark' : 'light');
}
