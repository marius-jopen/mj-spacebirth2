"use client";

import { useRef, useEffect, useState } from "react";
import CdnImage from "@/components/CdnImage";

const FRAME_W = 1040;
const FRAME_H = 826;
const IFRAME_TOP = 203;
const IFRAME_LEFT = 50;
const IFRAME_W = 939;
const IFRAME_H = 513;

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      // The slot width in pixels = containerWidth * (IFRAME_W / FRAME_W)
      const slotWidth = containerWidth * (IFRAME_W / FRAME_W);
      setScale(slotWidth / IFRAME_W);
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="flex justify-center relative" ref={containerRef}>
      <div className="relative inline-block w-full">
        <CdnImage
          src="/images/media/frame_v2m.png"
          alt="Spacebirth 2 game frame"
          width={FRAME_W}
          height={FRAME_H}
          className="block w-full h-auto"
          style={{ borderRadius: 0 }}
        />
        <div
          className="absolute overflow-hidden"
          style={{
            top: `${(IFRAME_TOP / FRAME_H) * 100}%`,
            left: `${(IFRAME_LEFT / FRAME_W) * 100}%`,
            width: `${(IFRAME_W / FRAME_W) * 100}%`,
            height: `${(IFRAME_H / FRAME_H) * 100}%`,
          }}
        >
          <iframe
            src="https://game.spacebirth2.com/"
            scrolling="no"
            title="Spacebirth 2 Game"
            width={IFRAME_W}
            height={IFRAME_H}
            className="border-0 origin-top-left"
            style={{
              borderRadius: 0,
              position: "absolute",
              top: 0,
              left: 0,
              width: `${IFRAME_W}px`,
              height: `${IFRAME_H}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
