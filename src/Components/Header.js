import React from "react";
import { Game_State_Draw, Game_State_Playing, Game_State_Win } from "../constants";

const Header = ({ gameState, currentPlayer, winner }) => {
    const renderLabel = () => {
        switch (gameState) {
            case Game_State_Playing:
                return <div>Player {currentPlayer} Turn</div>
            case Game_State_Win:
                return <div>Player {winner} Wins</div>
            case Game_State_Draw:
                return <div>Game is a Draw!</div>
            default:
                return <div>Start Game</div>
        }
    }
    return (
        <div className="panel header">
            <div className="header-text">{renderLabel()}</div>
        </div>)
};

export default Header;