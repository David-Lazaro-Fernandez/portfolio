import Image, { getImageProps } from "next/image";
import { FIGURE_SIZES, PAIR_SIZES } from "@/lib/images";

// @next/mdx needs this file in the App Router. The `.prose` class in globals.css styles the text.

// Give the width and height of the source file.
// next/image uses them to keep the space for the image and to make smaller versions.
function Figure({ src, alt, caption, width = 1920, height = 1080, preload = false }) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        preload={preload}
        sizes={FIGURE_SIZES}
        className="w-full rounded-xl border border-hairline"
      />
      {caption && <figcaption className="mt-3 text-sm text-mute">{caption}</figcaption>}
    </figure>
  );
}

// Two images side by side, for photos that are too tall to show one per row.
function Pair({ images, caption }) {
  return (
    <figure className="my-10">
      <div className="grid grid-cols-2 gap-3">
        {images.map(({ src, alt, width, height }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={PAIR_SIZES}
            className="w-full rounded-xl border border-hairline"
          />
        ))}
      </div>
      {caption && <figcaption className="mt-3 text-sm text-mute">{caption}</figcaption>}
    </figure>
  );
}

// The poster goes through the image optimizer, thus it is as small as the other images.
// A tall video is limited to 70% of the screen height, so it does not fill the whole page.
function Video({ src, poster, width, height, caption, label }) {
  const { props } = getImageProps({ src: poster, width, height, alt: "" });

  return (
    <figure className="my-10">
      <video
        src={src}
        poster={props.src}
        width={width}
        height={height}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        style={{ aspectRatio: `${width} / ${height}` }}
        className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-xl border border-hairline"
      />
      {caption && <figcaption className="mt-3 text-sm text-mute">{caption}</figcaption>}
    </figure>
  );
}

// preload="none": the file downloads only when the visitor presses play.
function Audio({ src, caption }) {
  return (
    <figure className="my-6">
      <audio src={src} controls preload="none" className="w-full" />
      {caption && <figcaption className="mt-2 text-sm text-mute">{caption}</figcaption>}
    </figure>
  );
}

export function useMDXComponents(components) {
  return { Figure, Pair, Video, Audio, ...components };
}
