export class Dice{
    sides;
    state;

    constructor(sides){
        this.sides = sides;
    }

    get sides(){
        return this.sides
    }

    set sides(sides){
        this.sides = sides
    }
    rollDice(){
        return Math.ceil(Math.random() * this.lados)
    }
}