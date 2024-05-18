import { SQUARES, PP1_START, PP2_START, PP3_START, PP4_START    , PP1_HOUSE, PP2_HOUSE, PP3_HOUSE, PP4_HOUSE} from "../board/map.js";

let PP1_NAME = "player 1";
let PP2_NAME = "player 2";
let PP3_NAME = "player 3";
let PP4_NAME = "player 4";

let PP1_COLOR = "orange";
let PP2_COLOR = "green";
let PP3_COLOR = "yellow";
let PP4_COLOR = "red";

export function applySetting(){
    SQUARES[PP1_START].style.background = PP1_COLOR;  
    SQUARES[PP2_START].style.background = PP2_COLOR;
    SQUARES[PP3_START].style.background = PP3_COLOR;
    SQUARES[PP4_START].style.background = PP4_COLOR;

    // PP3_START.style.background = PP3_COLOR;
    // PP4_START.style.background = PP4_COLOR;

    for(let i = 0; i < PP1_HOUSE.length; i++){
        PP1_HOUSE[i].style.background = PP1_COLOR;
    }
    for(let i = 0; i < PP2_HOUSE.length; i++){
        PP2_HOUSE[i].style.background = PP2_COLOR;
    }
    for(let i = 0; i < PP3_HOUSE.length; i++){
        PP3_HOUSE[i].style.background = PP3_COLOR;
    }
    for(let i = 0; i < PP4_HOUSE.length; i++){
        PP4_HOUSE[i].style.background = PP4_COLOR;
    }
}

export {PP1_NAME, PP2_NAME,PP1_COLOR, PP2_COLOR, PP3_COLOR, PP4_COLOR};