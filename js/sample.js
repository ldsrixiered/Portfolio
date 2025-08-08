// Dark Mode Toggle
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// Expertise Network Animation
function setupExpertiseNetwork() {
  const skills = [
    { label: "Social Media", icon: "https://img.icons8.com/fluency/48/000000/facebook-new.png" },
    { label: "Website", icon: "https://img.icons8.com/fluency/48/000000/web.png" },
    { label: "Email", icon: "https://img.icons8.com/fluency/48/000000/new-post.png" },
    { label: "Real Estate", icon: "https://img.icons8.com/fluency/48/000000/real-estate.png" },
    { label: "Appfolio", icon: "https://img.icons8.com/fluency/48/000000/home.png" },
    { label: "QuickBooks", icon: "https://img.icons8.com/fluency/48/000000/accounting.png" },
    { label: "WordPress", icon: "https://img.icons8.com/fluency/48/000000/wordpress.png" },
    { label: "CRM Tools", icon: "https://img.icons8.com/fluency/48/000000/customer-insight.png" },
    { label: "Admin Support", icon: "https://img.icons8.com/fluency/48/000000/administrator-male.png" },
    { label: "Customer Service", icon: "https://img.icons8.com/fluency/48/000000/customer-support.png" }
  ];

  const svg = document.getElementById("network");
  if (!svg) return; // safety check if the element is missing

  const width = window.innerWidth;
  const height = window.innerHeight;
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  const nodes = [];
  const links = [];

  for (let i = 0; i < skills.length; i++) {
    nodes.push({
      id: i,
      ...skills[i],
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    });
  }

  // Create links between all nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      links.push({ source: i, target: j });
    }
  }

  // Render lines
  const lineEls = links.map(link => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("stroke", "#d62828");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
    return line;
  });

  // Render nodes with icons
  const nodeEls = nodes.map((node, i) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.classList.add("node");

    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttributeNS("http://www.w3.org/1999/xlink", "href", node.icon);
    image.setAttribute("width", 48);
    image.setAttribute("height", 48);
    image.setAttribute("x", -24);
    image.setAttribute("y", -24);
    g.appendChild(image);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = node.label;
    text.setAttribute("y", 30);
    g.appendChild(text);

    svg.appendChild(g);
    return g;
  });

  function animate() {
    for (let node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 40 || node.x > width - 40) node.vx *= -1;
      if (node.y < 40 || node.y > height - 40) node.vy *= -1;
    }

    links.forEach((link, i) => {
      const a = nodes[link.source];
      const b = nodes[link.target];
      lineEls[i].setAttribute("x1", a.x);
      lineEls[i].setAttribute("y1", a.y);
      lineEls[i].setAttribute("x2", b.x);
      lineEls[i].setAttribute("y2", b.y);
    });

    nodeEls.forEach((el, i) => {
      el.setAttribute("transform", `translate(${nodes[i].x}, ${nodes[i].y})`);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Call functions when DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupExpertiseNetwork();
});
