import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedHologram = () => {
    const outerRef = useRef<THREE.Mesh>(null);
    const innerRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (outerRef.current) {
            outerRef.current.rotation.y = t * 0.1;
            outerRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.2;
            innerRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;
        }
    });

    return (
        <group scale={1.8}>
            {/* Outer Abstract Network */}
            <Sphere ref={outerRef} args={[1, 12, 12]} scale={1.4}>
                <meshBasicMaterial
                    color="#1a1a1a"
                    wireframe
                    transparent
                    opacity={0.3}
                />
                {/* Vertex Data Points attached to the sphere */}
                <VertexDataPoints radius={1} widthSegments={12} heightSegments={12} />
            </Sphere>

            {/* Inner Core */}
            <Sphere ref={innerRef} args={[1, 8, 8]} scale={0.9}>
                <meshBasicMaterial
                    color="#000000"
                    wireframe
                    transparent
                    opacity={0.5}
                />
            </Sphere>
        </group>
    );
};

const VertexDataPoints = ({ radius, widthSegments, heightSegments }: any) => {
    // Calculate vertex positions for the sphere geometry manually to place points exactly on vertices
    const vertices = useMemo(() => {
        const shape = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
        const positions = shape.attributes.position.array;
        const temp = [];
        for (let i = 0; i < positions.length; i += 3) {
            temp.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]));
        }
        return temp;
    }, [radius, widthSegments, heightSegments]);

    return (
        <>
            {vertices.map((v, i) => (
                <DataPoint key={i} position={v} />
            ))}
        </>
    );
}

const DataPoint = ({ position }: { position: THREE.Vector3 }) => {
    // Random flashing effect
    const [num, setNum] = useState(0);
    const [opacity, setOpacity] = useState(0.5);

    useFrame((state) => {
        if (Math.random() > 0.98) { // Random update frequency
            setNum(Math.floor(Math.random() * 99));
            setOpacity(1); // Flash bright
        } else {
            setOpacity(prev => Math.max(0.3, prev - 0.02)); // Fade out
        }
    });

    return (
        <group position={position}>
            {/* The Dot */}
            <mesh>
                <sphereGeometry args={[0.015, 8, 8]} />
                <meshBasicMaterial color="black" transparent opacity={opacity} />
            </mesh>

            {/* The Number - using Html for clean text rendering that scales with distance naturally */}
            <Html
                position={[0.05, 0.05, 0]}
                distanceFactor={1.5}
                transform
                sprite
                style={{
                    opacity: opacity,
                    transition: 'opacity 0.2s',
                    fontFamily: 'monospace',
                    fontSize: '10px',
                    color: '#404040',
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            >
                {num.toString().padStart(2, '0')}
            </Html>
        </group>
    )
}

const SystemHologram: React.FC = () => {
    return (
        <div className="w-full h-full relative z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <AnimatedHologram />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default SystemHologram;
