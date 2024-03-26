import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Brick(props) {
    const { nodes, materials } = useGLTF('models/brick.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1403820099.geometry}
                material={materials.mat14}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1027256166.geometry}
                material={materials.mat14}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group272329239.geometry}
                material={materials.mat14}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group682626714.geometry}
                material={materials.mat14}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1597040770.geometry}
                material={materials.mat14}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1065139569.geometry}
                material={materials.mat14}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1837804157.geometry}
                material={materials.mat14}
            />
        </group>
    )
}

useGLTF.preload('models/brick.glb')