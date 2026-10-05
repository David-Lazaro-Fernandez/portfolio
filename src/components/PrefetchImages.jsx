"use client";

import { useEffect } from "react";
import { getImageProps } from "next/image";
import { FIGURE_SIZES } from "@/lib/images";

// Loads each case study's first image into the browser cache, so the page opens with it ready.
export default function PrefetchImages({ images }) {
  useEffect(() => {
    if (navigator.connection?.saveData) return;

    // Wait until the browser is idle so the prefetch does not slow down this page.
    const schedule = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 2000));
    const cancel = window.cancelIdleCallback ?? clearTimeout;

    const id = schedule(() => {
      for (const { src, width, height } of images) {
        const { props } = getImageProps({ src, width, height, alt: "", sizes: FIGURE_SIZES });
        const img = new Image();
        img.sizes = props.sizes;
        img.srcset = props.srcSet;
        img.src = props.src;
      }
    });
    return () => cancel(id);
  }, [images]);

  return null;
}
