/*SECÇÃO PARA A VERIFICAÇÃO DA OPÇÃO SELECIONADA DOS JOGADORES*/

var valor1 = document.querySelector(".player1");
var valor2 = document.querySelector(".player2");
var valor3 = document.querySelector(".player3");
var valor4 = document.querySelector(".player4");

document.querySelector('.player-2').checked = "checked";

let radioBtns = document.querySelectorAll
("input[name='player']");

let result = document.getElementById("result");

let findSelected = () =>{

    /*PARA DOIS JOAGDORES*/ 
    if (document.querySelector('.player-2').checked) {
        valor1.style.display = "block";
        valor2.style.display = "block";
        valor3.style.display = "none";
        valor4.style.display = "none";
    }

    /*PARA TRÊS JOAGDORES*/ 
    if (document.querySelector('.player-3').checked) {
        valor1.style.display = "block";
        valor2.style.display = "block";
        valor3.style.display = "block";
        valor4.style.display = "none";
    }

    /*PARA QUATRO JOAGDORES*/ 
    if (document.querySelector('.player-4').checked) {
        valor1.style.display = "block";
        valor2.style.display = "block";
        valor3.style.display = "block";
        valor4.style.display = "block";
    }
}

radioBtns.forEach(radioBtn =>{
    radioBtn.addEventListener("change",findSelected);
});

findSelected();