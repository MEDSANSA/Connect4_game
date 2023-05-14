import React, { useState } from "react";
import "../Game.css";
import GameCircle from "./GameCircle";
import Header from "./header";
import Footer from "./Footer";

const no_Circles = 16;
const no_Player = 0;
const Player_1 = 1;
const Player_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(no_Player));
    const [currentPlayer, setCurrentPlayer] = useState(Player_1);

    //render the 16 circles
    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < no_Circles; i++) {
            circles.push(renderCercle(i));
        }
        return circles;
    }

    //callbacks  bunction
    const circleClicked = (id) => {
        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) {
                    return currentPlayer;
                } else {
                    return circle;
                }
            })
        });
        setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1);
    };

    //render a circle
    function renderCercle(id) {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />;
    }

    return (
        <>
            <Header />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer />
        </>
    );
}

export default GameBoard;