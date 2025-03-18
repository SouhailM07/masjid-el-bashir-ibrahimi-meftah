"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MovingLines() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.7,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // White background
    mountRef.current?.appendChild(renderer.domElement);

    // Create moving lines
    const lines: { mesh: THREE.Mesh; speed: number }[] = [];
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x2fcf7f });

    for (let i = 0; i < 25; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.05, 0.05); // Short horizontal line
      const line = new THREE.Mesh(geometry, lineMaterial);

      line.position.set(
        Math.random() * 14 - 6, // Spread them out more
        Math.random() * 7 - 4, // Increase vertical range
        0
      );

      scene.add(line);
      lines.push({ mesh: line, speed: 0.02 + Math.random() * 0.03 }); // Vary speed
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach(({ mesh, speed }) => {
        mesh.position.x -= speed; // Move left
        if (mesh.position.x < -10) {
          mesh.position.x = 10;
          mesh.position.y = Math.random() * 8 - 4; // Respawn at new random height
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed top-0 left-0 z-[-1] h-screen w-full" />
  );
}
