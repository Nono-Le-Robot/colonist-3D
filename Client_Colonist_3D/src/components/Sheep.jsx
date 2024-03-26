import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'

export function Sheep(props) {
    const group = useRef()
    const { scene, materials, animations } = useGLTF(`models/${props.modelType}.glb`)
    materials.AtlasMaterial.color.r = 10
    materials.AtlasMaterial.color.g = 10
    materials.AtlasMaterial.color.b = 10

    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

    const { nodes } = useGraph(clone)

    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        const runAnimationName = "AnimalArmature|AnimalArmature|AnimalArmature|Idle_Eating"
        const runAnimationAction = actions[runAnimationName]
        if (runAnimationAction) {
            const delay = Math.random() * 5000;
            const timeoutId = setTimeout(() => {
                runAnimationAction.play()
            }, delay)
            return () => clearTimeout(timeoutId);
        }
    }, [actions])


    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.1} name="Scene">
                <group name="RootNode">
                    <group name="AnimalArmature" rotation={[-Math.PI / 2, 0, -Math.PI / 1.1]} scale={100}>
                        <skinnedMesh
                            name="Sheep"
                            geometry={nodes.Sheep.geometry}
                            material={materials.AtlasMaterial}
                            skeleton={nodes.Sheep.skeleton}
                        />
                        <primitive object={nodes.All} />
                        <primitive object={nodes.Root} />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('models/food.glb')