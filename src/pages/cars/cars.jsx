import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState } from 'react';

const Cars = () => {
  const car = useGLTF('./car.gltf');
  const [controlsEnabled, setControlsEnabled] = useState(false);

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-8, 6, 12], fov: 45, near: 0.1, far: 200 }}
      onPointerDown={() => setControlsEnabled(true)}
      onPointerUp={() => setControlsEnabled(false)}
    >
      <OrbitControls 
        enabled={controlsEnabled}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <primitive object={car.scene} scale={2.5} />
    </Canvas>
  );
};

export default Cars;
