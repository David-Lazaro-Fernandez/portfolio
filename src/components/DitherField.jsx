"use client";

import { useEffect, useRef } from "react";

// The dither layer of the page (DESIGN.md, "The Dither Field").
// The pointer pushes the dots out of its radius. A spring moves each dot back to its cell.
//
// The cache canvas holds the dots at rest. When the pointer moves a dot, the code removes
// the dot from the cache and moves it until it stops. Then the code draws it in the cache again.
// Thus the cost of a frame changes with the number of moving dots, not with the screen size.

// The density changes only with x. It is high at the left and right edges and low at the center.
// Thus the text column has fewer dots, and each y has the same pattern.
// A change to a key in REBUILD changes which cells have a dot, and builds the grain again.
export const DEFAULTS = {
  cell: 12, // CSS px between the centers of two dots
  dot: 1.5, // CSS px
  alpha: 0.22, // opacity of the layer
  densityEdge: 1, // fraction of cells with a dot, at the left and right edges
  densityCenter: 0, // fraction of cells with a dot, at the center
  fadeCurve: 2.3, // exponent of the fade; a high value keeps more of the center light
  airRadius: 190,
  airStrength: 2.9,
  airIdle: 0.35, // part of the push when the pointer does not move
  airVelocityGain: 0.6,
  spring: 0.16,
  damping: 0.86,
  maxDisplacement: 72,
};

export const REBUILD = new Set(["cell", "dot", "densityEdge", "densityCenter", "fadeCurve"]);

const DPR_CAP = 2;

const BAYER_8 = [
  0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60, 28,
  52, 20, 62, 30, 54, 22, 3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39,
  13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
].map((v) => (v + 0.5) / 64);

// `params` holds the current values. Call `rebuildRef.current()` after a change to a REBUILD key.
export default function DitherField({ params, rebuildRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const P = params ?? { current: DEFAULTS };
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cache = document.createElement("canvas");
    const cacheCtx = cache.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // A theme change sets a new --color-ink, the color of the dots.
    const themeObserver = new MutationObserver(build);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let dpr = 1;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let color = "#171717";

    // The state of each dot. The index is the dot id.
    let cellToDot; // -1 if the cell has no dot
    let homeX, homeY, offX, offY, velX, velY;
    let isActive;
    let active = []; // ids of the dots that are not at their cell

    const pointer = { x: 0, y: 0, prevX: 0, prevY: 0, inside: false, puff: 0 };
    let frame = 0;

    function drawDot(target, x, y) {
      target.fillRect(Math.round((x - P.current.dot / 2) * dpr), Math.round((y - P.current.dot / 2) * dpr), Math.ceil(P.current.dot * dpr), Math.ceil(P.current.dot * dpr));
    }

    // 0 at the center of the screen, 1 at the left or right edge.
    function edgeDistance(x) {
      return Math.min(1, Math.abs(x - width / 2) / (width / 2));
    }

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      width = window.innerWidth;
      height = window.innerHeight;
      cols = Math.ceil(width / P.current.cell);
      rows = Math.ceil(height / P.current.cell);
      color = getComputedStyle(document.documentElement).getPropertyValue("--color-ink").trim() || color;

      for (const c of [canvas, cache]) {
        c.width = Math.round(width * dpr);
        c.height = Math.round(height * dpr);
      }

      cellToDot = new Int32Array(cols * rows).fill(-1);
      const hx = [];
      const hy = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * P.current.cell + P.current.cell / 2;
          const y = row * P.current.cell + P.current.cell / 2;
          const density = P.current.densityCenter + (P.current.densityEdge - P.current.densityCenter) * edgeDistance(x) ** P.current.fadeCurve;
          if (BAYER_8[(row % 8) * 8 + (col % 8)] < density) {
            cellToDot[row * cols + col] = hx.length;
            hx.push(x);
            hy.push(y);
          }
        }
      }

      homeX = Float32Array.from(hx);
      homeY = Float32Array.from(hy);
      offX = new Float32Array(hx.length);
      offY = new Float32Array(hx.length);
      velX = new Float32Array(hx.length);
      velY = new Float32Array(hx.length);
      isActive = new Uint8Array(hx.length);
      active = [];

      cacheCtx.clearRect(0, 0, cache.width, cache.height);
      cacheCtx.fillStyle = color;
      for (let i = 0; i < hx.length; i++) drawDot(cacheCtx, hx[i], hy[i]);

      render();
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(cache, 0, 0);
      ctx.fillStyle = color;
      for (const i of active) drawDot(ctx, homeX[i] + offX[i], homeY[i] + offY[i]);
    }

    function wake(i) {
      if (isActive[i]) return;
      isActive[i] = 1;
      active.push(i);
      const s = Math.ceil(P.current.dot * dpr);
      cacheCtx.clearRect(Math.round((homeX[i] - P.current.dot / 2) * dpr), Math.round((homeY[i] - P.current.dot / 2) * dpr), s, s);
    }

    function step() {
      frame = 0;
      const speed = Math.hypot(pointer.x - pointer.prevX, pointer.y - pointer.prevY);
      pointer.prevX = pointer.x;
      pointer.prevY = pointer.y;

      const blowing = pointer.inside || pointer.puff > 0;
      const gust =
        P.current.airStrength *
        (pointer.puff > 0 ? 4 : P.current.airIdle + P.current.airVelocityGain * Math.min(speed / 10, 4));
      if (pointer.puff > 0) pointer.puff--;

      // Start to move the dots in the radius of the pointer.
      if (blowing) {
        const c0 = Math.max(0, Math.floor((pointer.x - P.current.airRadius) / P.current.cell));
        const c1 = Math.min(cols - 1, Math.floor((pointer.x + P.current.airRadius) / P.current.cell));
        const r0 = Math.max(0, Math.floor((pointer.y - P.current.airRadius) / P.current.cell));
        const r1 = Math.min(rows - 1, Math.floor((pointer.y + P.current.airRadius) / P.current.cell));
        for (let row = r0; row <= r1; row++) {
          for (let col = c0; col <= c1; col++) {
            const i = cellToDot[row * cols + col];
            if (i !== -1) wake(i);
          }
        }
      }

      cacheCtx.fillStyle = color;
      for (let k = active.length - 1; k >= 0; k--) {
        const i = active[k];
        let x = homeX[i] + offX[i];
        let y = homeY[i] + offY[i];

        if (blowing) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < P.current.airRadius && dist > 0.001) {
            const falloff = (1 - dist / P.current.airRadius) ** 2;
            velX[i] += (dx / dist) * falloff * gust;
            velY[i] += (dy / dist) * falloff * gust;
          }
        }

        velX[i] = (velX[i] - offX[i] * P.current.spring) * P.current.damping;
        velY[i] = (velY[i] - offY[i] * P.current.spring) * P.current.damping;
        offX[i] += velX[i];
        offY[i] += velY[i];

        const disp = Math.hypot(offX[i], offY[i]);
        if (disp > P.current.maxDisplacement) {
          offX[i] *= P.current.maxDisplacement / disp;
          offY[i] *= P.current.maxDisplacement / disp;
        }

        // The dot stopped. Draw it in the cache again and stop its simulation.
        if (disp < 0.1 && Math.abs(velX[i]) < 0.05 && Math.abs(velY[i]) < 0.05) {
          const outside =
            !blowing || Math.hypot(homeX[i] - pointer.x, homeY[i] - pointer.y) >= P.current.airRadius;
          if (outside) {
            offX[i] = offY[i] = velX[i] = velY[i] = 0;
            isActive[i] = 0;
            active[k] = active[active.length - 1];
            active.pop();
            drawDot(cacheCtx, homeX[i], homeY[i]);
          }
        }
      }

      render();
      if (active.length > 0 || pointer.puff > 0 || speed > 0) schedule();
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(step);
    }

    function onPointerMove(e) {
      if (!pointer.inside) {
        pointer.prevX = e.clientX;
        pointer.prevY = e.clientY;
      }
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.inside = true;
      schedule();
    }

    function onPointerDown(e) {
      if (e.pointerType === "mouse") return;
      pointer.x = pointer.prevX = e.clientX;
      pointer.y = pointer.prevY = e.clientY;
      pointer.puff = 6;
      schedule();
    }

    function onPointerLeave() {
      pointer.inside = false;
      schedule();
    }

    function onPointerOut(e) {
      if (!e.relatedTarget) onPointerLeave();
    }

    // When a finger lifts, the push stops. When a mouse button lifts, the push continues.
    function onTouchEnd(e) {
      if (e.pointerType !== "mouse") onPointerLeave();
    }

    let resizeTimer = 0;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    }

    const listeners = [];
    function listen(target, type, fn, opts) {
      target.addEventListener(type, fn, opts);
      listeners.push(() => target.removeEventListener(type, fn, opts));
    }

    function attach() {
      while (listeners.length) listeners.pop()();
      listen(window, "resize", onResize);
      listen(reducedMotion, "change", attach);
      // With reduced motion, the grain stays but the pointer does not move the dots.
      if (!reducedMotion.matches) {
        listen(window, "pointermove", onPointerMove, { passive: true });
        listen(window, "pointerdown", onPointerDown, { passive: true });
        listen(window, "pointerup", onTouchEnd, { passive: true });
        listen(window, "pointercancel", onTouchEnd, { passive: true });
        listen(document, "pointerout", onPointerOut);
      } else {
        pointer.inside = false;
        schedule();
      }
    }

    build();
    attach();
    if (rebuildRef) rebuildRef.current = build;

    return () => {
      while (listeners.length) listeners.pop()();
      themeObserver.disconnect();
      clearTimeout(resizeTimer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      style={{ opacity: "var(--dither-alpha)" }}
    />
  );
}
