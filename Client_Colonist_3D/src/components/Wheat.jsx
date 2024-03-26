import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'

export function Wheat(props) {
    const group = useRef()
    const { scene, materials } = useGLTF(`models/${props.modelType}.glb`)
    materials.Yellow.color.r = 5
    materials.Yellow.color.g = 2
    materials.Yellow.color.b = 0

    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes } = useGraph(clone)

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wheat.geometry}
                material={materials.Yellow}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={40}
            />
        </group>
    )
}

useGLTF.preload(`models/wood.glb`)