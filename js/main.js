const cursorTrail = document.getElementById("cursor-trail");

document.addEventListener("mousemove", (event) => {
  const neonTrail = document.createElement("div");
  neonTrail.classList.add("neon-trail");
  neonTrail.style.left = `${event.clientX}px`;
  neonTrail.style.top = `${event.clientY}px`;
  cursorTrail.appendChild(neonTrail);
  setTimeout(() => {
    neonTrail.remove();
  }, 1000);
});
