import Image from "next/image";

// @next/mdx needs this file in the App Router. The `.prose` class in globals.css styles the text.

// Give the width and height of the source file.
// next/image uses them to keep the space for the image and to make smaller versions.
function Figure({ src, alt, caption, width = 1920, height = 1080 }) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 640px) 592px, 100vw"
        className="w-full rounded-xl border border-hairline"
      />
      {caption && <figcaption className="mt-3 text-sm text-mute">{caption}</figcaption>}
    </figure>
  );
}

export function useMDXComponents(components) {
  return { Figure, ...components };
}
