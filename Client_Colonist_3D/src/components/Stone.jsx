import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'

export function Stone(props) {
    const group = useRef()
    const { scene, materials } = useGLTF(`models/${props.modelType}.glb`)
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes } = useGraph(clone)

    return (
        <group scale={0.4} {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Node.geometry} material={materials.mat22} />
        </group>
    )
}

useGLTF.preload(`models/stone.glb`)