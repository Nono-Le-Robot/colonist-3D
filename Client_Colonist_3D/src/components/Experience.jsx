import { OrbitControls, useCursor } from "@react-three/drei";
import { useState } from "react";
import * as THREE from 'three'
import { Island } from "./Island";
import { Water } from "./Water";

import { Parcel } from "./Parcel";
import { Boat } from "./Boat";
import { Dock } from "./Dock";
import { Map01 } from "./Map01";

export const Experience = ({ }) => {
  return (
    <>
      <OrbitControls />

      {/* {LIGHTS} */}
      <ambientLight intensity={0.1} />
      <spotLight castShadow intensity={0.5} position={[400, 1000, 0]} />
      <Map01 />
      {/* {ITEMS} */}
      {/* {PLAYERS} */}
    </>
  );
};
