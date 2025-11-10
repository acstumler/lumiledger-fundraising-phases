(function () {
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  function openAndScrollTo(targetId) {
    const detailsList = document.querySelectorAll(".card-accordion");
    detailsList.forEach(d => {
      if (d.id === targetId) d.open = true;
    });
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus({ preventScroll: true });
    }
  }

  function onPillActivate(e) {
    const pill = e.currentTarget;
    const targetId = pill.getAttribute("aria-controls");
    if (!targetId) return;
    openAndScrollTo(targetId);
  }

  function onKey(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPillActivate(e);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const pills = document.querySelectorAll(".pill[aria-controls]");
    pills.forEach(p => {
      p.addEventListener("click", onPillActivate);
      p.addEventListener("keydown", onKey);
    });

    // Make timeline cards scroll to their phases if they contain matching text
    const timelineMap = {
      "End of Q4 2025": "phase-1",
      "End of Q1 2026": "phase-2",
      "End of Q2 2026": "phase-3"
    };
    document.querySelectorAll(".wins .win h4").forEach(h => {
      const id = timelineMap[h.textContent.trim()];
      if (!id) return;
      const parent = h.closest(".win");
      parent.style.cursor = "pointer";
      parent.setAttribute("role", "button");
      parent.setAttribute("tabindex", "0");
      parent.addEventListener("click", () => openAndScrollTo(id));
      parent.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openAndScrollTo(id);
        }
      });
    });
  });
})();
