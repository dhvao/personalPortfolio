"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Custom hook to load the GLTF asset and track progress
function useGlobeLoading(url: string) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        setLoaded(true);
      },
      (xhr) => {
        // Calculate and update progress percentage
        if (xhr.total) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setProgress(percentComplete);
        } else {
          // Fallback if total bytes is not available
          setProgress(90);
        }
      },
      (error) => {
        console.error("Error loading GLTF:", error);
        // In case of error, consider it loaded to avoid blocking the user
        setLoaded(true);
      }
    );
  }, [url]);

  return { loaded, progress };
}

export default function Home() {
  // Use the custom hook to load the globe asset from /assets/scene.gltf
  const { loaded: globeLoaded, progress: globeProgress } = useGlobeLoading("/assets/scene.gltf");
  const [loading, setLoading] = useState(true);

  // Once the globe asset is loaded, wait a brief moment and then remove the loader
  useEffect(() => {
    if (globeLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [globeLoaded]);

  // While loading, show a full-screen overlay with a progress bar
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        <div className="w-80 bg-gray-700 rounded-full h-4">
          <div
            className="bg-emerald-500 h-4 rounded-full"
            style={{ width: `${globeProgress}%` }}
          ></div>
        </div>
        <div className="mt-4 text-white">Loading... {Math.floor(globeProgress)}%</div>
      </div>
    );
  }

  // Once loading is done, render your full page content
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
