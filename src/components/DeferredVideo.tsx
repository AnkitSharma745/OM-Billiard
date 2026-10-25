"use client";

import { useEffect, useRef, useState } from "react";
import Skeleton from "./Skeleton";

type DeferredVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  title: string;
};

export default function DeferredVideo({ src, poster, className = "", title }: DeferredVideoProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "320px" });

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className={`relative aspect-video overflow-hidden rounded-2xl bg-ink ${className}`}>
      {!isReady && <Skeleton className="absolute inset-0 z-20 h-full w-full rounded-none" />}
      <video
        aria-label={title}
        className="relative z-10 h-full w-full object-cover"
        controls
        playsInline
        preload="none"
        poster={poster}
        src={shouldLoad ? src : undefined}
        onLoadedData={() => setIsReady(true)}
      />
    </div>
  );
}
