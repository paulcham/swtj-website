(() => {
  // Fit each band to its measure, the way a compositor picks the wood type
  // size that fills the chase edge to edge.
  const bands = [...document.querySelectorAll('[data-fit]')];
  const fit = (el) => {
    const inner = el.querySelector('.fit');
    if (!inner) return;
    const max = parseFloat(el.dataset.max) || 400;
    const cs = getComputedStyle(el);
    const avail = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    el.style.fontSize = '100px';
    const w = inner.getBoundingClientRect().width;
    if (!w || !avail) { el.style.fontSize = ''; return; }
    el.style.fontSize = Math.min(max, Math.floor(100 * avail / w * 10) / 10) + 'px';
  };
  const fitAll = () => bands.forEach(fit);
  const ro = new ResizeObserver(() => fitAll());
  const ready = document.fonts ? document.fonts.ready : Promise.resolve();
  ready.then(() => {
    fitAll();
    bands.forEach((b) => ro.observe(b.parentElement));
  });

  // Press pull: strike each section once as it comes into view.
  const presses = document.querySelectorAll('.press');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('inked'); io.unobserve(e.target); }
    });
  }, { threshold: 0.18 });
  ready.then(() => presses.forEach((p) => io.observe(p)));
})();

// Snow over the holiday section: slow, sparse, paused offscreen and still for reduced motion.
(() => {
  const cv = document.querySelector('.single .snow');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, flakes = [], running = false, raf = 0;
  const size = () => {
    const r = cv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(w * h / 9000);
    flakes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: .8 + Math.random() * 2.2, v: .25 + Math.random() * .6, d: Math.random() * 6.28, a: .35 + Math.random() * .55 }));
    draw();
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const f of flakes) { ctx.globalAlpha = f.a; ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.283); ctx.fill(); }
  };
  const step = () => {
    for (const f of flakes) { f.y += f.v; f.d += .01; f.x += Math.sin(f.d) * .3; if (f.y > h + 4) { f.y = -4; f.x = Math.random() * w; } }
    draw(); if (running) raf = requestAnimationFrame(step);
  };
  new ResizeObserver(size).observe(cv);
  if (still) return;
  new IntersectionObserver(([e]) => { running = e.isIntersecting; cancelAnimationFrame(raf); if (running) raf = requestAnimationFrame(step); }).observe(cv);
})();
