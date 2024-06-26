import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";

function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [0, 15, -20], fov: 30 }}>

        <color attach="background" args={["#67aeff"]} />
        {/* <Suspense> */}
        <Experience />

        {/* </Suspense> */}
      </Canvas>
    </>
  );
}

const Loader = styled.div`
position: absolute;
z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    background-color: #81b7ff;
`

const UI = styled.div`
    p{
      margin: 0;
      padding: 0;
    }
    .logo-ressource{
      width: 50px;
    }
    .ressource{
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      margin-left: 1.5rem;
      margin-top: 1rem;
      gap: 0.5rem;
    }
    
    position: absolute;
    z-index: 999;
    width: 500px;
    border-radius:0 0 1rem 0;
    height: 140px;
    background-color: #020a53;
    font-size: 2rem;
    color: white;
    top :0;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
`


export default App;
