export default class player{
    dices = [];
    pieces = [];
    playTurn = false;
    name;
    colour;

    constructor(name, colour){
        this.name = name;
        this.colour = colour;
    }

    set dices(dices){
        if(typeof(dice) == typeof([]))
            this.dices = dices;
        else
            throw new TypeError("Array expected");
    }

    get dices(){
        return dices;
    }

    set pieces(pieces){
        if(typeof(pieces) == typeof([]))
            this.pieces = pieces;
        else
            throw new TypeError("Array expected");
    }

    set playTurn(playTurn){
        if(typeof(playTurn) == typeof(true))
            playTurn ? this.#enableMoves : this.#disableMoves;
    }

    #enableMoves(){

    }

    #disableMoves(){

    }
}