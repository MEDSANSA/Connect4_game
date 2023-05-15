import React, { useEffect, useState } from "react";
import "../Game.css";
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, getComputerMove} from "../helper";
//importation des constantes
import { Game_State_Playing, Game_State_Win, Game_State_Draw, no_Player, Player_1, Player_2, no_Circles } from "../constants";


const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(no_Player));
    const [currentPlayer, setCurrentPlayer] = useState(Player_1);
    const [gameState, setGameState] = useState(Game_State_Playing);
    const [winner, setWinner] = useState(no_Player);

    useEffect(() => {
        initGame();
    }, []);

    const initGame = () => {
        console.log('init game');
        setGameBoard(Array(16).fill(no_Player));
        setCurrentPlayer(Player_1);
        setGameState(Game_State_Playing);
    }

    //render the 16 circles
    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < no_Circles; i++) {
            circles.push(renderCercle(i));
        }
        return circles;
    }

    const suggestMove = () => {
        circleClicked(getComputerMove(gameBoard));
    }

    //callbacks  bunction
    const circleClicked = (id) => {

        //check the selected circle not selected another time
        if (gameBoard[id] !== no_Player) return;
        //if some one wins the game is over
        if (gameState !== Game_State_Playing) return;

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(Game_State_Win);
            setWinner(currentPlayer);
        }
        if (isDraw(gameBoard, id, currentPlayer)) {
            setGameState(Game_State_Draw);
            setWinner(no_Player);
        }

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
            <Header gameState={gameState} currentPlayer={currentPlayer} winner={winner} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} />
        </>
    );
}

export default GameBoard;