import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const earthRef = useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    // Smooth rotation animation
    earthRef.current.rotation.y = elapsedTime * 0.1;
    
    // Gentle floating animation
    earthRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.1;
  });

  return (
    <primitive 
      ref={earthRef}
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ width: '100%', height: '100%' }}
      performance={{ min: 0.1 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.4} />
        
        {/* Main directional light */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize={1024} 
        />
        
        {/* Subtle accent light */}
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#915EFF" />
        
        {/* Additional rim light for better definition */}
        <pointLight position={[0, 10, 0]} intensity={0.2} color="#ffffff" />
        
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          enableRotate={false}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
