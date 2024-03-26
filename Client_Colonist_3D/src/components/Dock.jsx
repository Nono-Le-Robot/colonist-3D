import { useGLTF } from '@react-three/drei';
import { useMemo, useRef } from 'react';

export const Dock = ({ position, rotation }) => {
    const { nodes, materials } = useGLTF('models/Port.glb');

    const clonedObject = useMemo(() => {
        return nodes.Port_SecondAge_Level1.clone();
    }, [nodes.Port_SecondAge_Level1]);

    const boatRef = useRef();

    return (
        <primitive ref={boatRef} object={clonedObject} position={position} rotation={rotation} />
    );
}
