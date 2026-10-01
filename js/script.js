// ===== EDIT YOUR CONTENT HERE =====
const websites = [
  { name: "Skin & Tonic", url: "https://www.skinandtonic.pro/", tag: "Shopify store", desc: "Technical SEO, meta/heading/schema fixes, blog content, backend forms, site audits" },
  { name: "Performance P-Wave", url: "https://www.performancepwave.com/", tag: "Website", desc: "SEO optimization and website updates" },
  { name: "Dr. Croley", url: "https://www.drcroley.com/", tag: "Website", desc: "SEO optimization and website updates" },
  { name: "Janice Lee Homes", url: "https://janiceleehomes.com/", tag: "Website", desc: "SEO optimization and website updates" },
  { name: "P23 Labs", url: "https://p23labs.com/", tag: "Website", desc: "SEO optimization and website updates" },
  { name: "P23 Health", url: "https://p23health.com/", tag: "Website", desc: "SEO optimization and website updates" }
];
const social = [
  { name: "Realtor Julissa", platform: "Facebook", url: "https://www.facebook.com/RealtorJulissa" },
  { name: "Realtor Julissa", platform: "Instagram", url: "https://www.instagram.com/realtorjulissa/?hl=en" },
  { name: "P23 Labs", platform: "Facebook", url: "https://www.facebook.com/P23Labs" },
  { name: "P23 Health", platform: "Facebook", url: "https://www.facebook.com/p23health" },
  { name: "Floyd Clifton Crouch", platform: "Facebook", url: "https://www.facebook.com/floydcliftoncrouch" },
  { name: "Janice Lee SF Real Estate", platform: "Facebook", url: "https://www.facebook.com/sanfranciscorealestatejanicelee" },
  { name: "Maintain My Credit", platform: "Instagram", url: "https://www.instagram.com/maintainmycredit/?hl=en" }
];
const skills = ["HTML","CSS","JavaScript","Python","Shopify","Technical SEO","Schema Markup","Google Search Console","Google Analytics","Landing Pages","CRM","Email Marketing","FB & IG Ads","Canva","CapCut","Filmora"];
const EMAIL = "ldsrixiered@gmail.com";
// ==================================

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

$("siteGrid").innerHTML = websites.map(w =>
  `<a class="card" href="${esc(w.url)}" target="_blank" rel="noopener"><span class="tag">${esc(w.tag)}</span><h3>${esc(w.name)}</h3><p>${esc(w.desc)}</p><span class="go">Visit site &rarr;</span></a>`).join("");

function renderSocial(filter) {
  $("socialGrid").innerHTML = social.filter(s => filter === "All" || s.platform === filter).map(s =>
    `<a class="card" href="${esc(s.url)}" target="_blank" rel="noopener"><span class="tag">${esc(s.platform)}</span><h3>${esc(s.name)}</h3><span class="go">View page &rarr;</span></a>`).join("");
}
const platforms = ["All", ...new Set(social.map(s => s.platform))];
$("filters").innerHTML = platforms.map((p, i) => `<button class="${i ? "" : "on"}" data-p="${p}">${p}</button>`).join("");
$("filters").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  document.querySelectorAll("#filters button").forEach(b => b.classList.remove("on"));
  e.target.classList.add("on");
  renderSocial(e.target.dataset.p);
});
renderSocial("All");

$("chips").innerHTML = skills.map(s => `<span>${esc(s)}</span>`).join("");

// Dark mode (remembers choice when storage is available)
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; else if (matchMedia("(prefers-color-scheme: dark)").matches) root.dataset.theme = "dark"; } catch (e) {}
$("theme").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
};

// Count-up numbers
document.querySelectorAll("[data-count]").forEach(el => {
  const end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
  let n = 0; const step = Math.max(1, Math.ceil(end / 30));
  const t = setInterval(() => { n = Math.min(end, n + step); el.textContent = pre + n + suf; if (n >= end) clearInterval(t); }, 30);
});

// Copy email
$("copy").onclick = async () => {
  try { await navigator.clipboard.writeText(EMAIL); $("copied").textContent = "Copied!"; }
  catch (e) { $("copied").textContent = EMAIL; }
};
$("yr").textContent = new Date().getFullYear();
