"use client";

import dynamic from "next/dynamic";
import { UIControls, UIBackground } from "./UI";

const Experience = dynamic(() => import("./Experience").then(mod => mod.default), {
  ssr: false, // prevent server-side rendering
});

export default function BookWrapper() {
  return (
    <div className="relative w-full h-[800px] bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-[#5D2CA8] overflow-hidden">
      {/* Background scrolling text */}
      <UIBackground />

      {/* Album in the middle */}
      <div className="absolute inset-0 z-10">
        <Experience />
      </div>

      {/* Controls above everything */}
      <UIControls />
    </div>
  );
}
