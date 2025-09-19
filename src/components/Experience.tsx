"use client";

import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { FC } from "react";
import { Canvas } from "@react-three/fiber";

export const Experience: FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      shadows
      gl={{ alpha: true }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    >
      <>
        <Float
          rotation-x={-Math.PI / 4}
          floatIntensity={1}
          speed={2}
          rotationIntensity={2}
        >
          <Book />
        </Float>

        <OrbitControls />
        <Environment preset="studio" />

        <directionalLight
          position={[2, 5, 2]}
          intensity={2.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />

        <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </>
    </Canvas>
  );
};

export default Experience;