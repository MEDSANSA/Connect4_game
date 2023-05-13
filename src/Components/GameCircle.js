import React from "react";

const onClick = (ev, id, value) => {
    debugger;
    alert("azizhounii" + id);
}

const GameCircle = ({ id, value, children }) => {
    console.log(id);
    return (
        //passer le parametre id when hes clicked
        <div onClick={(ev) => onClick(ev, id, value)}>
            {children}
        </div>
    );
}


export default GameCircle;