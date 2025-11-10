(function () {
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  function openOnly(targetId) {
    const all = document.querySelectorAll(".card-accordion");
    all.forEach(d => (d.open = (d.id === targetId)));
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Ensure only Phase 1 is open at load
    openOnly("phase-1");

    // Single-open behavior: when one opens, others close
    document.querySelectorAll(".card-accordion").forEach(d => {
      d.addEventListener("toggle", () => {
        if (d.open) {
          document.querySelectorAll(".card-accordion").forEach(other => {
            if (other !== d) other.open = false;
          });
        }
      });
    });

    // Clicking a top “pill” opens matching accordion
    document.querySelectorAll(".pill[aria-controls]").forEach(p => {
      p.addEventListener("click", () => {
        const id = p.getAttribute("aria-controls");
        if (id) openOnly(id);
      });
      p.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = p.getAttribute("aria-controls");
          if (id) openOnly(id);
        }
      });
    });
  });
})();
