(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var pills = document.querySelectorAll('.pill[data-phase]');
  var accordions = document.querySelectorAll('.card-accordion');

  function openPhase(n) {
    accordions.forEach(function (d) {
      d.open = d.getAttribute('data-phase') === String(n);
    });
    var target = document.querySelector('.card-accordion[data-phase="' + n + '"]');
    if (target) {
      // use CSS scroll-margin-top for header height; just smooth scroll here
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  pills.forEach(function (p) {
    p.addEventListener('click', function () { openPhase(p.dataset.phase); });
    p.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPhase(p.dataset.phase); }
    });
  });

  // Only one accordion open at a time if toggled directly
  accordions.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) accordions.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // Phase 1 open on load
  document.addEventListener('DOMContentLoaded', function () {
    accordions.forEach(function (d) { d.open = d.getAttribute('data-phase') === '1'; });
  });
})();
