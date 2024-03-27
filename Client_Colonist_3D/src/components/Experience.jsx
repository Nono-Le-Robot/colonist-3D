import { OrbitControls } from "@react-three/drei";
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
