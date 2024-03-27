import React, { useEffect, useRef, useState } from 'react';
import { Decal, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Sheep } from './Sheep';
import { Stone } from './Stone';
import { Brick } from './Brick';
import { Cactus } from './Cactus';
import { Wood } from './Wood';
import { Wheat } from './Wheat';

export function Parcel({ position, type, number, diceResult }) {

    useEffect(() => {
        if (number === diceResult) {
            alert(type + " + 1")
        }
        if (diceResult === 7) alert('Robert')
    }, [diceResult]);



    let color = ''

    switch (type) {
        case 'wood':
            color = '#7bff61'
            break;
        case 'food':
            color = '#a1cdff'
            break;
        case 'stone':
            color = '#b4b4b4'
            break;
        case 'brick':
            color = '#f77a7a'
            break;
        case 'desert':
            color = '#f6fdb7'
            break;
        case 'wheat':
            color = '#fff34c'
            break;
    }
    const meshRef = useRef();
    const sheep1Ref = useRef();


    const texture = useTexture(`/textures/${type}.png`);

    const ringGeometry = new THREE.RingGeometry(0, 1, 6);
    const shape = new THREE.Shape();
    ringGeometry.attributes.position.array.forEach((vertex, index) => {
        if (index % 3 === 0) {
            const x = vertex;
            const y = ringGeometry.attributes.position.array[index + 1];
            if (index === 0) {
                shape.moveTo(x + 1, y);
            } else {
                shape.lineTo(x, y);
            }
        }
    });



    const extrudeSettings = {
        depth: 0.4,
        bevelEnabled: false,
    };

    return (
        <group>
            <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={[position[0], position[1], position[2]]} ref={meshRef}>
                <meshStandardMaterial color={color} polygonOffset polygonOffsetFactor={-1} />
                <extrudeGeometry attach="geometry" args={[shape, extrudeSettings]} />
            </mesh>
            <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={position} ref={meshRef}>
                <Decal position={[0, 0, 0.5]} rotation={[0, 0, 0]} scale={1}>
                    <meshStandardMaterial polygonOffset polygonOffsetFactor={-3} transparent map={texture} />
                </Decal>
                <extrudeGeometry attach="geometry" args={[shape, extrudeSettings]} />
            </mesh>
            {type !== "desert" && (
                <Text position={[position[0], 0.26, position[2] - 0.67]} fontWeight={'bold'} color={diceResult === number ? "white" : "black"} scale={0.3} rotation={[Math.PI / 2, Math.PI / 1, 0]}>{number}</Text>
            )}

            {type === 'food' && (

                <>
                    <Sheep modelType={type} ref={sheep1Ref} position={[position[0] + 0.37, 0.2, position[2] + 0.5]} rotation={[0, -5, 0]} />
                    <Sheep modelType={type} ref={sheep1Ref} position={[position[0] - 0.25, 0.2, position[2] + 0.6]} rotation={[0, 1, 0]} />
                    <Sheep modelType={type} ref={sheep1Ref} position={[position[0] - 0.7, 0.2, position[2] + 0.1]} rotation={[0, -2, 0]} />
                    <Sheep modelType={type} ref={sheep1Ref} position={[position[0] + 0.1, 0.2, position[2] + 0.4]} rotation={[0, -1, 0]} />
                </>
            )}

            {type === 'stone' && (
                <>
                    <Stone modelType={type} ref={sheep1Ref} position={[position[0] + 0.37, 0.2, position[2] + 0.47]} rotation={[0, 13.5, 0]} />
                    <Stone modelType={type} ref={sheep1Ref} position={[position[0] - 0.39, 0.25, position[2] + 0.5]} rotation={[0, -10, 0]} />
                    <Stone modelType={type} ref={sheep1Ref} position={[position[0] + 0.03, 0.1, position[2] + 0.62]} rotation={[0, -10, 0]} />
                </>
            )}

            {type === 'wood' && (
                <>
                    <Wood modelType={type} ref={sheep1Ref} position={[position[0] + 0.45, 0.5, position[2] + 0.43]} rotation={[0, 13.5, 0]} />
                    <Wood modelType={type} ref={sheep1Ref} position={[position[0] - 0.38, 0.6, position[2] + 0.45]} rotation={[0, -10, 0]} />
                    <Wood modelType={type} ref={sheep1Ref} position={[position[0] + 0.05, 0.55, position[2] + 0.65]} rotation={[0, -10, 0]} />
                </>
            )}

            {type === 'brick' && (
                <>
                    <Brick modelType={type} ref={sheep1Ref} position={[position[0] + 0.48, 0.22, position[2] + 0.43]} rotation={[0, 10.7, 0]} />
                    <Brick modelType={type} ref={sheep1Ref} position={[position[0] - 0.42, 0.22, position[2] + 0.49]} rotation={[0, -17, 0]} />
                    <Brick modelType={type} ref={sheep1Ref} position={[position[0] + 0, 0.22, position[2] + 0.65]} rotation={[0, -10, 0]} />
                    <Brick modelType={type} ref={sheep1Ref} position={[position[0] + 0.3, 0.255, position[2] + 0.55]} rotation={[0, -8.7, 0]} />
                    <Brick modelType={type} ref={sheep1Ref} position={[position[0] - 0.3, 0.255, position[2] + 0.60]} rotation={[0, -7, 0]} />
                    <Brick modelType={type} ref={sheep1Ref} position={[position[0] + 0, 0.29, position[2] + 0.60]} rotation={[0, -3, 0]} />

                </>
            )}

            {type === 'desert' && (
                <>
                    <Cactus modelType={type} ref={sheep1Ref} position={[position[0] + 0.45, 0.5, position[2] + 0.43]} rotation={[0, 13.5, 0]} />
                    <Cactus modelType={type} ref={sheep1Ref} position={[position[0] - 0.38, 0.6, position[2] + 0.45]} rotation={[0, -10, 0]} />
                    <Cactus modelType={type} ref={sheep1Ref} position={[position[0] + 0.05, 0.55, position[2] + 0.65]} rotation={[0, -10, 0]} />
                </>
            )}

            {type === 'wheat' && (
                <>
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.4, 0.2, position[2] + 0.43]} rotation={[0, 13.5, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] - 0.38, 0.2, position[2] + 0.65]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.05, 0.18, position[2] + 0.65]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.3, 0.2, position[2] + 0.54]} rotation={[0, 13.5, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] - 0.42, 0.2, position[2] + 0.48]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.05, 0.2, position[2] + 0.65]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.5, 0.2, position[2] + 0.53]} rotation={[0, 13.5, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] - 0.25, 0.24, position[2] + 0.68]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.5, 0.2, position[2] + 0.65]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0, 0.15, position[2] + 0.54]} rotation={[0, 13.5, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] - 0.1, 0.17, position[2] + 0.48]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] - 0.1, 0.22, position[2] + 0.50]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] + 0.16, 0.20, position[2] + 0.50]} rotation={[0, -10, 0]} />
                    <Wheat modelType={type} ref={sheep1Ref} position={[position[0] - 0.24, 0.20, position[2] + 0.50]} rotation={[0, -10, 0]} />

                </>
            )}

        </group>
    );
}
