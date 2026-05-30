"use client";

import { useRef, useEffect } from "react";

interface HlsPlayerProps {
  src: string;
  poster?: string;
  aspectRatio?: string;
  noRounding?: boolean;
  className?: string;
}

export default function HlsPlayer({
  src,
  poster,
  aspectRatio = "56.25%",
  noRounding = false,
  className = "",
}: HlsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari / iOS can play HLS natively.
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    // Other browsers need hls.js.
    let hls: import("hls.js").default | null = null;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        video.src = src;
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [src]);

  const rounding = noRounding ? "" : "rounded-[30px]";

  return (
    <div
      className={`relative w-full ${rounding} overflow-hidden ${className}`}
      style={{ paddingBottom: aspectRatio, height: 0 }}
    >
      <video
        ref={videoRef}
        poster={poster}
        controls
        playsInline
        className="absolute inset-0 w-full h-full"
        style={noRounding ? { borderRadius: 0 } : undefined}
      />
    </div>
  );
}
