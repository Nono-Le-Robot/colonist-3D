import { Shape } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Water({ position, rotation, color }) {
    const meshRef = useRef();
    const ringGeometry = new THREE.RingGeometry(0, 1000, 12);
    const shape = new THREE.Shape();
    ringGeometry.attributes.position.array.forEach((vertex, index) => {
        if (index % 3 === 0) {
            const x = vertex;
            const y = ringGeometry.attributes.position.array[index + 1];
            if (index === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }
        }
    });

    const extrudeSettings = {
        depth: 0.1,
        bevelEnabled: false,
    };

    return (
        <>
            <mesh receiveShadow rotation={rotation} position={position} ref={meshRef}>
                <extrudeGeometry attach="geometry" args={[shape, extrudeSettings]} />
                <meshStandardMaterial color={"#7fdcf8"} />
            </mesh>
        </>
    );
}