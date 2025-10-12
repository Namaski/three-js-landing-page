import { OrbitControls, Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" emissive="green" />
      <Sparkles count={100} size={5} scale={1.5} speed={0.002} noise={0.2} />

    </mesh>
  );
}

const App = () => {
  return (
    <Canvas style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[0, 10, 5]} intensity={1} color={0x9CDBA6} />
      <color attach="background" args={['#F0F0F0']} />

      <RotatingCube />

    </Canvas>
  );
}

export default App;