/* ============================================================================
   Animated neural-network background.
   Particles drift, connect to nearby particles, and react to the mouse —
   evoking an AI / neural-net feel. Pure canvas, no libraries.
   ========================================================================== */
(function () {
  const canvas = document.getElementById("neural-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, particles, dpr;
  const mouse = { x: -9999, y: -9999 };

  // Tune density to screen size for performance
  function particleCount() {
    const base = (window.innerWidth * window.innerHeight) / 16000;
    return Math.min(120, Math.max(40, Math.floor(base)));
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.scale(dpr, dpr);
    initParticles();
  }

  function initParticles() {
    particles = [];
    const n = particleCount();
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6,
      });
    }
  }

  const LINK_DIST = 130;
  const MOUSE_DIST = 180;

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // wrap around edges
      if (p.x < 0) p.x = window.innerWidth;
      if (p.x > window.innerWidth) p.x = 0;
      if (p.y < 0) p.y = window.innerHeight;
      if (p.y > window.innerHeight) p.y = 0;

      // mouse repulsion / attraction (gentle)
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mDist = Math.hypot(mdx, mdy);
      if (mDist < MOUSE_DIST) {
        const force = (MOUSE_DIST - mDist) / MOUSE_DIST;
        p.x += (mdx / mDist) * force * 1.2;
        p.y += (mdy / mDist) * force * 1.2;
      }

      // node
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 229, 255, 0.7)";
      ctx.fill();

      // links to neighbours
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(124, 92, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // highlight links near mouse
      if (mDist < MOUSE_DIST) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(255, 78, 205, ${(1 - mDist / MOUSE_DIST) * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseout", () => { mouse.x = -9999; mouse.y = -9999; });
  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }
  }, { passive: true });

  resize();
  if (prefersReduced) {
    // Draw a single static frame instead of animating
    draw.toString(); // no-op keep
    (function staticFrame() { ctx.clearRect(0,0,window.innerWidth,window.innerHeight); })();
    // still render one frame for visual texture
    let once = true;
    const original = draw;
    // Render one pass without the rAF loop
    (function single() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = "rgba(0,229,255,0.5)"; ctx.fill();
      }
    })();
  } else {
    draw();
  }
})();
