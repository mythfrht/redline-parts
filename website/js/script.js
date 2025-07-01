document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mode-toggle');
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') {
    document.body.classList.add('light');
  }

  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const mode = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
  });
});
