import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ArcballControls, useGLTF, Environment } from '@react-three/drei';
import modelPath from '../assets/model/neoarm.glb?url';

function Model(props) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} {...props} />;
}

function Loader() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
    );
}

const ModelViewer = () => {
    return (
        <div className="w-full h-screen relative cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 5] }}>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <color attach="background" args={['#333333']} />
                    <Model scale={0.05} rotation={[Math.PI, 0, 0]} position={[0, 0, 0]} />

                    <Environment preset="city" />
                </Suspense>

                <ArcballControls
                    enableZoom={true}
                    enablePan={true}
                    makeDefault
                />
            </Canvas>

            {/* Controls Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg text-white text-sm pointer-events-none select-none">
                <h3 className="font-bold mb-2 text-blue-400">Controls</h3>
                <ul className="space-y-1 text-gray-300">
                    <li><span className="font-semibold text-white">Left Click + Drag:</span> Rotate</li>
                    <li><span className="font-semibold text-white">Right Click + Drag:</span> Pan</li>
                    <li><span className="font-semibold text-white">Scroll:</span> Zoom</li>
                </ul>
            </div>
        </div>
    );
};

export default ModelViewer;
