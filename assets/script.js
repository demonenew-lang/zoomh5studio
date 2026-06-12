document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeBtn');
  const root = document.documentElement;
  
  // Controlla il localStorage per il tema salvato
  const savedTheme = localStorage.getItem('zoom_theme');
  if (savedTheme === 'light') {
    root.setAttribute('data-theme', 'light');
  }

  btn.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'light') {
      root.removeAttribute('data-theme');
      localStorage.setItem('zoom_theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('zoom_theme', 'light');
    }
  });
});
