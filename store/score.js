import React, { createContext,useEffect,useState,useContext } from 'react';

global.score = {
    allS:0,
    chS:0,
    maS:0,
    scS:0,
    soS:0,
    enS:0
};

global.proG ={
    name:"Cat"
}

global.login=false;

export const Plus = () => {
    global.score.allS=global.score.chS+global.score.maS+global.score.scS+global.score.soS+global.score.enS;
}