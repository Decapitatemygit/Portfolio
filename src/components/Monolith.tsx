import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Monolith({ scrollOffset }: { scrollOffset: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    
    // Base rotation
    mesh.current.rotation.y = t * 0.2;
    mesh.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    
    // Position and scale based on scroll pages
    // Page 0: Hero (Center)
    // Page 1: Projects (Shift left)
    // Page 2: Skills (Shift right)
    // Page 3: Contact (Zoom in)
    
    if (scrollOffset < 0.25) {
      // Hero
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, 0, 0.1);
      mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, 0, 0.1);
    } else if (scrollOffset < 0.5) {
      // Projects
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, -2, 0.1);
      mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, 1, 0.1);
    } else if (scrollOffset < 0.75) {
      // Skills
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, 2, 0.1);
      mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, 1, 0.1);
    } else {
      // Contact
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, 0, 0.1);
      mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, 3, 0.1);
    }

    mesh.current.scale.setScalar(1 + scrollOffset * 0.8);
    
    // Hover effect
    if (hovered) {
      mesh.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1).multiplyScalar(1 + scrollOffset * 0.5), 0.1);
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh 
          ref={mesh}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[2, 3.5, 0.5]} />
          <meshBasicMaterial color="#2A2A2D" />
          {/* Edge glow / Wireframe for visibility */}
          <mesh>
            <boxGeometry args={[2.01, 3.51, 0.51]} />
            <meshBasicMaterial color="#00F0FF" wireframe />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
}
