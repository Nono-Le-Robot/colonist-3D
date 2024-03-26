import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'

export function Wood(props) {
    // const group = useRef()
    const { scene, materials } = useGLTF(`models/${props.modelType}.glb`)
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes } = useGraph(clone)

    return (
        <group scale={0.23} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['Node-Mesh'].geometry}
                material={materials.mat11}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['Node-Mesh_1'].geometry}
                material={materials.mat20}
            />
        </group>
    )
}

useGLTF.preload(`models/wood.glb`)