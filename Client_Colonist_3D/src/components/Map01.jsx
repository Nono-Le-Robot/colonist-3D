import { OrbitControls, useCursor } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from 'three'
import { Island } from "./Island";
import { Water } from "./Water";

import { Parcel } from "./Parcel";
import { Boat } from "./Boat";
import { Dock } from "./Dock";

export const Map01 = ({ }) => {

    const types = [{ type: "wood", number: 4 }, { type: "food", number: 4 }, { type: "stone", number: 3 }, { type: "brick", number: 3 }, { type: "wheat", number: 4 }, { type: "desert", number: 1 }]; // add brick and desert
    const [parcels, setParcels] = useState([])
    const [parcelPositions, setParcelPositions] = useState([
        [0, 0.2, 0],
        [0, 0.2, 2],
        [0, 0.2, -2],
        [0, 0.2, 4],
        [0, 0.2, -4],
        [1.7, 0.2, 3],
        [1.7, 0.2, -3],
        [1.7, 0.2, 1],
        [1.7, 0.2, -1],
        [-1.7, 0.2, 1],
        [-1.7, 0.2, -1],
        [-1.7, 0.2, 3],
        [-1.7, 0.2, -3],
        [3.4, 0.2, 2],
        [3.4, 0.2, -2],
        [-3.4, 0.2, 2],
        [-3.4, 0.2, -2],
        [-3.4, 0.2, 0],
        [3.4, 0.2, 0],
    ]);


    const getRandomType = (temp) => {
        const randomIndex = Math.floor(Math.random() * types.length);
        const type = types[randomIndex];
        if (temp.filter(p => p.type === type.type).length == type.number) {
            return getRandomType(temp);
        }
        return type.type;
    };

    useEffect(() => {
        let temp = []
        parcelPositions.forEach((parcelPosition) => {
            temp.push({ position: parcelPosition, type: getRandomType(temp) })
        })
        setParcels(temp)
    }, []);

    const ringGeometry = new THREE.RingGeometry(1, 5, 32);
    const shape = new THREE.Shape();
    ringGeometry.attributes.position.array.forEach((vertex, index) => {
        if (index % 3 === 0) { // Only consider the x and y components for 2D
            const x = vertex;
            const y = ringGeometry.attributes.position.array[index + 1]; // Assuming z is the third component
            if (index === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }
        }
    });

    return (
        <>

            <Water rotation={[Math.PI / 2, 0, 0]} position={[0, -0.3, 0]} color={"#4ff9ff"} />
            <Island rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} color={"#72ff4f"} />
            {/* {Boats} */}
            <Boat position={[1, 0, -8.5]} rotation={[0, Math.PI / 1, 0]} />
            {/* {Dock} */}
            <Dock position={[0, 0, -6.8]} rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 1.1]} />
            <Dock position={[0, 0, 6.8]} rotation={[Math.PI / 2, Math.PI / 1, Math.PI / -12]} />
            <Dock position={[6.8, 0, 0]} rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 2.8]} />
            <Dock position={[-6.8, 0, 0]} rotation={[Math.PI / 2, Math.PI / 1, Math.PI / -1.6]} />
            {/* {Parcel} */}
            {parcels.map((parcel, index) => (
                <Parcel key={index} position={parcel.position} type={parcel.type} />
            ))}
        </>
    );
};
