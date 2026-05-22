'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Stylized "tooth crown" — a premium iridescent crystal-like centerpiece
function ToothCrown() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#67e8f9"
          attach="material"
          distort={0.25}
          speed={1.5}
          roughness={0.05}
          metalness={0.95}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

// Orbiting smaller crystals — like satellites around the centerpiece
function OrbitingCrystal({
  radius,
  speed,
  offset,
  color,
  size,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime() * speed + offset;
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.5;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={meshRef} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.15}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Particle field for cinematic depth
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#22d3ee"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Cinematic lighting — dental clinic lamp from above + soft fill */}
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[5, -3, 5]} intensity={0.6} color="#fbbf24" />
        <spotLight
          position={[0, 6, 0]}
          angle={0.4}
          penumbra={1}
          intensity={1.5}
          color="#67e8f9"
        />

        <Environment preset="night" />

        <ToothCrown />

        {/* Orbiting smaller pieces */}
        <OrbitingCrystal radius={2.8} speed={0.5} offset={0} color="#22d3ee" size={0.25} />
        <OrbitingCrystal radius={3.2} speed={0.35} offset={Math.PI * 0.7} color="#fbbf24" size={0.18} />
        <OrbitingCrystal radius={2.5} speed={0.6} offset={Math.PI} color="#a5f3fc" size={0.2} />
        <OrbitingCrystal radius={3.5} speed={0.4} offset={Math.PI * 1.5} color="#06b6d4" size={0.22} />

        <ParticleField />

        {/* Drei sparkles for premium feel */}
        <Sparkles
          count={80}
          scale={8}
          size={3}
          speed={0.3}
          color="#67e8f9"
          opacity={0.8}
        />

        {/* Subtle starfield in background */}
        <Stars
          radius={50}
          depth={50}
          count={1200}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  );
}
