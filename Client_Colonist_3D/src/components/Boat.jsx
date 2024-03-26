import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export const Boat = ({ position, rotation }) => {
    const { nodes, materials } = useGLTF('models/PirateShip.glb');

    const clonedObject = useMemo(() => {
        return nodes.group970421097.clone();
    }, [nodes.group970421097]);

    const boatRef = useRef();

    useFrame(({ clock }) => {

        const time = clock.getElapsedTime();
        const orbitRadius = 9;
        const orbitSpeed = -0.05;
        const orbitAngle = time * orbitSpeed;
        const x = orbitRadius * Math.cos(orbitAngle);
        const z = orbitRadius * Math.sin(orbitAngle);
        boatRef.current.position.lerp(new THREE.Vector3(x, position[1], z), 0.1);
        boatRef.current.rotation.set(0, Math.PI / 1.3, 0);
        boatRef.current.rotateY(-orbitAngle);
    });

    return (
        <primitive ref={boatRef} object={clonedObject} />
    );
}
