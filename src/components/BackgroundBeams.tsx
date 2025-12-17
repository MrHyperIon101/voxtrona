"use client";

import React from "react";
import Beams from "@/components/Beams";

// Desktop-identical Beams on all devices/pages
export default function BackgroundBeams() {
  return (
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={12}
      lightColor="#ffffff"
      speed={2}
      noiseIntensity={1.5}
      scale={0.18}
      rotation={0}
      dpr={[1, 2] as any}
      frameloop="always"
      paused={false}
      heightSegments={100}
    />
  );
}
