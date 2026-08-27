const heroVideo = document.querySelector("#hero-video");
const heroSources = ["assets/hero-1.mp4", "assets/hero-2.mp4"];
let currentVideo = 0;
heroVideo.addEventListener("ended", () => {
  currentVideo = (currentVideo + 1) % heroSources.length;
  heroVideo.src = heroSources[currentVideo];
  heroVideo.play().catch(() => {});
});
heroVideo.play().catch(() => {});
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-header nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
