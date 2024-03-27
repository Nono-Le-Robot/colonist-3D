import { Text } from "@react-three/drei";
import { createContext, useState } from "react";

export const DiceContext = createContext("CLICK TO ROLL DICE !")

export const DiceContextProvider = () => {
    const [diceOneNumber, setDiceOneNumber] = useState(0)
    const [diceTwoNumber, setDiceTwoNumber] = useState(0)
    const [rollDiceResult, setRollDiceResult] = useState(0)


    const rollDice = () => {
        const newDiceOneNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        const newDiceTwoNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        setDiceOneNumber(newDiceOneNumber);
        setDiceTwoNumber(newDiceTwoNumber);
        setRollDiceResult(newDiceOneNumber + newDiceTwoNumber);
    }


    return (
        <DiceContext.Provider value={rollDiceResult}>
            <Text onClick={rollDice} position={[0, 6.2, 0]} fontWeight={'bold'} color={"black"} scale={1} rotation={[Math.PI / 6, Math.PI / 1, 0]}>{diceOneNumber} + {diceTwoNumber} = {rollDiceResult}</Text>
        </DiceContext.Provider>
    )

}   