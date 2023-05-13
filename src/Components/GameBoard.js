import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {
    return (
        <div>
            <GameCircle id={1} value={3}>
                red
            </GameCircle>
            <GameCircle id={2}>
                blue
            </GameCircle>
            <GameCircle id={3}>
                red
            </GameCircle>
            <GameCircle id={4}>
                blue
            </GameCircle>
            <GameCircle id={5}>
                red
            </GameCircle>
            <GameCircle id={6}>
                blue
            </GameCircle>
            <GameCircle id={7}>
                red
            </GameCircle>
            <GameCircle id={8}>
                blue
            </GameCircle>
            <GameCircle id={9}>
                red
            </GameCircle>
        </div>

    );
}


export default GameBoard;