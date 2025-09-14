// Typing Animation
const base = "Hey, I'm ";
const names = ["Rixie ✨", "a Web Designer 💻", "a Virtual Assistant 🧠", "your Email Developer"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 1000;

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("text");

function type() {
  const currentText = names[nameIndex];
  if (!isDeleting) {
    textElement.innerHTML = base + currentText.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetween);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    textElement.innerHTML = base + currentText.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      nameIndex = (nameIndex + 1) % names.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingSpeed);
    }
  }
}

// Dark Mode Toggle
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
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
      bar.style.color = '#ffbe0b';
    }, 1000);
  });
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  type();
  setupThemeToggle();
  animateProgressBars();
});