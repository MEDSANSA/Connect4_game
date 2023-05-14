import React from "react";
import '../Game.css';

const GameCircle = ({ id, children, className, onCircleClicked }) => {
    return (
        //onclick: passer le parametre id when hes clicked
        //style if id mod 2=0 then color: red else color: blue
        <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
            {children}
        </div>
    );
}

export default GameCircle;