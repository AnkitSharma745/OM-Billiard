"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type OptimizedImageProps = Omit<ImageProps, "src" | "alt" | "width" | "height" | "fill" | "placeholder" | "onLoad" | "onError"> & {
  src: ImageProps["src"];
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

export default function OptimizedImage({
  src,
  alt,
  width = 1600,
  height = 1000,
  fill = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  preload = false,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const isStaticImage = typeof src !== "string";
  const blurDataURL = typeof src === "object" && "blurDataURL" in src ? src.blurDataURL : undefined;
  const hasStaticBlur = Boolean(blurDataURL);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={fill || isStaticImage ? undefined : width}
      height={fill || isStaticImage ? undefined : height}
      fill={fill}
      sizes={sizes}
      preload={preload}
      placeholder={hasStaticBlur ? "blur" : "empty"}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
      className={`${className} ${loaded || hasStaticBlur ? "" : "media-skeleton animate-shimmer"}`}
    />
  );
}
