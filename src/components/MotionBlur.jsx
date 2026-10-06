"use client";

import { useEffect, useRef } from "react";

const MAX_BLUR = 6; // px of vertical blur at full speed
const FULL_SPEED = 5; // px per ms of scroll that gives MAX_BLUR
const SMOOTHING = 0.2; // 0–1, how fast the blur follows the speed
const REST = 0.05; // under this blur, remove the filter so the text is sharp again

// Blurs the content along the scroll direction while it scrolls fast.
// CSS blur() is the same in all directions, so an SVG filter with a vertical-only stdDeviation is used.
export default function MotionBlur({ children }) {
  const content = useRef(null);
  const blur = useRef(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = scrollY;
    let lastTime = 0;
    let amount = 0;
    let frame = 0;

    function tick(time) {
      const speed = Math.abs(scrollY - lastY) / Math.max(time - lastTime, 1);
      lastY = scrollY;
      lastTime = time;

      const target = Math.min(speed / FULL_SPEED, 1) * MAX_BLUR;
      amount += (target - amount) * SMOOTHING;

      if (amount < REST) {
        amount = 0;
        content.current.style.filter = "";
        frame = 0;
        return;
      }
      blur.current.setAttribute("stdDeviation", `0 ${amount.toFixed(2)}`);
      content.current.style.filter = "url(#motion-blur)";
      frame = requestAnimationFrame(tick);
    }

    // The loop runs only while the page moves. At rest it stops and costs nothing.
    function onScroll() {
      if (frame) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    }

    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <svg aria-hidden="true" className="absolute size-0">
        <filter id="motion-blur" colorInterpolationFilters="sRGB">
          <feGaussianBlur ref={blur} stdDeviation="0 0" />
        </filter>
      </svg>
      <div ref={content}>{children}</div>
    </>
  );
}
