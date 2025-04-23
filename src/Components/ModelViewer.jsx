import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; // Make sure this is your animated model

const ModelViewer = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Model />
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                />
            </Suspense>
        </Canvas>
    );
};

export default ModelViewer;
