import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedParticles({ count = 2000 }) {
  const ref = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  // Removed auto-rotation for simpler effect
  // useFrame((state, delta) => {
  //   if (ref.current) {
  //     ref.current.rotation.x -= delta / 10;
  //     ref.current.rotation.y -= delta / 15;
  //   }
  // });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4A056"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedParticles count={1500} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;

