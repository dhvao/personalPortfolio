"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import swirlImage from "public/assets/swirl.png";  
import Alpha from "@/assets/icons/alpha.svg";
import Beta from "@/assets/icons/beta.svg";
import Gamma from "@/assets/icons/gamma.svg";
import grainImage from "@/assets/images/grid.png";  
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/linkedin.png";
import * as THREE from "three"; 
import { useGLTF } from "@react-three/drei";
import { Environment } from "@react-three/drei";

const GitHubIconPath = "/assets/github.svg";
<div id="top"></div>

// Component for rendering the 3D spinning globe
const Globe = () => {
  const { scene } = useGLTF("/assets/scene.gltf"); // Path to the GLTF file
  const globeRef = useRef<THREE.Group>(null);

  // Rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01; // Rotate on Y-axis
    }
  });

  return (
    <group ref={globeRef}>
      <primitive object={scene} scale={0.6} position={[0, -0.5, 0]} />
    </group>
  );
};

export const HeroSection = () => {
  // Smooth scroll function
  const scrollToProjects = () => {
    const target = document.getElementById("featured-projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Target element with id "featured-projects" not found');
    }
  };

  return (
    <div className="py-4 md:py-24 lg:py-28 relative z-0 overflow-x-clip min-h-screen">

      {/* Vertical Lines with Fade Effect */}
      <div className="hidden-mobile">
  <div
    className="absolute left-[5%] z-10 w-[2px]"
    style={{
      width: "5px",
      top: "100%",
      bottom: "-200%",
      background: "linear-gradient(to bottom, transparent, #FDE047, #38BDF8, transparent)",
    }}
  ></div>
  <div
    className="absolute right-[5%] z-10 w-[2px]"
    style={{
      width: "5px",
      top: "100%",
      bottom: "-200%",
      background: "linear-gradient(to bottom, transparent, #FDE047, #38BDF8, transparent)",
    }}
  ></div>
</div>


      {/* Background gradient */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
      </div>

      {/* Hero Orbit Elements */}
      <HeroOrbit size={430} rotation={-72} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={72} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
        <Alpha className="w-12 h-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={144} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
        <Beta className="w-12 h-12 text-blue-500" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={180} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
        <Gamma className="w-12 h-12 text-yellow-400" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={20} shouldOrbit orbitDuration="28s" shouldSpin spinDuration="6s">
        <StarIcon className="size-12 text-gold-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={-14} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={178} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
        <SparkleIcon className="size-10 text-yellow-300/20" />
      </HeroOrbit>

      {/* Content */}
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Globe */}
          <div
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "transparent",
            }}
          >
            <Canvas
              camera={{
                position: [0, 0, 3],
                fov: 50,
              }}
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Environment preset="studio" />
              <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                <Globe />
              </Suspense>
            </Canvas>
          </div>

          {/* Status */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Looking for jobs and internships</div>
          </div>
        </div>

        {/* Headline and description */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide">Toma Kuzmic</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I enjoy creating efficient interfaces, data visualization, exploring and applying new machine learning
            techniques for new projects.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-4 relative z-20">
  <a
    href="https://www.linkedin.com/in/toma-kuzmic-585403200/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition"
    style={{
      width: "200px", // Fixed width
      height: "50px", // Fixed height
    }}
  >
    <Image src={LinkedInIcon} alt="LinkedIn Logo" width={24} height={24} />
    <span className="font-semibold">Connect with me!</span>
  </a>

  <a
    href="https://github.com/dhvao"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition"
    style={{
      width: "200px", // Fixed width
      height: "50px", // Fixed height
    }}
  >
    <Image src={GitHubIconPath} alt="GitHub Logo" width={24} height={24} />
    <span className="font-semibold">Find me on GitHub!</span>
  </a>
</div>


      </div>
    </div>
  );
};
