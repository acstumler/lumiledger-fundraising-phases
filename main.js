(function () {
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // Helper: open a details by id and close the rest
  function openOnly(targetId) {
    const all = document.querySelectorAll(".card-accordion");
    all.forEach(d => {
      if (d.id === targetId) d.open = true;
      else d.open = false;
    });
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Ensure only Phase 1 is open at load
    openOnly("phase-1");

    // Single-open accordion behavior on toggle
    document.querySelectorAll(".card-accordion").forEach(d => {
      d.addEventListener("toggle", () => {
        if (d.open) {
          document.querySelectorAll(".card-accordion").forEach(other => {
            if (other !== d) other.open = false;
          });
        }
      });
    });

    // Clicking a hero "pill" opens the matching accordion and closes others
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
