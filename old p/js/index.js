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


const logos = [
    {
      src: "asset/Ms San.jpg",
      name: "Ms San Francisco Real Estate",
      desc: "Real Estate in San Francisco Bay Area top 1# Coldwell Banker in san francisco Team "
    },
    {
      src: "asset/FCCCF.webp",
      name: "FCCCF",
      desc: "Floyd Clifton Crouch Charity Foundation is a foundation found by Floyd Crouch no market has need they look for schoolarship "
    },
    {
      src: "asset/Logo2.png",
      name: "Achromos.",
      desc: "Achromos is Modern Labatory technology and main target is Goverment work "
    }
  ];

  let currentIndex = 0;
  const logoImg = document.getElementById("logo");
  const companyName = document.getElementById("company-name");
  const companyDesc = document.getElementById("company-desc");

  document.querySelector(".arrow.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + logos.length) % logos.length;
    updateContent();
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % logos.length;
    updateContent();
  });

  function updateContent() {
    const current = logos[currentIndex];
    logoImg.style.opacity = 0;
    setTimeout(() => {
      logoImg.src = current.src;
      companyName.textContent = current.name;
      companyDesc.textContent = current.desc;
      logoImg.style.opacity = 1;
    }, 200);
  }


