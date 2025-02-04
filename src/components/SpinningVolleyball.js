"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const SpinningVolleyball = () => {
  // Load the original GLB model
  const { scene } = useGLTF("/volleyball.glb"); // Replace with your model's correct path

  return (
    <Canvas
      camera={{ position: [20, 0, 6], fov: 50 }} // Adjusted camera position
      className="w-full h-full"
    >
      {/* Lighting to highlight the model */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, -10, 10]} intensity={0.8} />

      <Suspense fallback={null}>
        {/* Render the volleyball 3D model */}
        <primitive
          object={scene}
          scale={[1.5, 1.5, 1.5]} // Adjusted scale to match the expected size
          position={[0, 0, 0]} // Centered in the canvas
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2} // Smooth rotation
        />
      </Suspense>
    </Canvas>
  );
};

export default SpinningVolleyball;
