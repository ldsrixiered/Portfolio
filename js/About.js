// Dark Mode Toggle
function setupThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
  }
  
  // Progress Bar Animation
  function animateProgressBars() {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      setTimeout(() => {
        bar.style.width = percent;
        bar.textContent = percent;
        bar.style.color = '#ffbe0b'; // your cute yellow percent color 💛
      }, 1000);
    });
  }
  
  // Call both functions when page is loaded
  window.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();       // ✅ Now this is called
    animateProgressBars();
  });
  