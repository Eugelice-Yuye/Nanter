
var rotating = false;

        function rollDice() {
            if (!rotating) {
                rotating = true;
                var dice = document.getElementById('dice');
                var xRand = Math.floor(Math.random() * 360) + 1800;
                var yRand = Math.floor(Math.random() * 360) + 1800;
                dice.style.transition = 'transform 0.5s ease-out';
                dice.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';

                setTimeout(function() {
                    var xRot = Math.round(xRand / 90) % 4;
                    var yRot = Math.round(yRand / 90) % 4;
                    var faceNumber = 1 + xRot + (yRot * 4);
                    var activeFace = document.getElementById('face' + faceNumber);
                    var allFaces = document.querySelectorAll('.face');
                    allFaces.forEach(function(face) {
                        face.classList.remove('active');
                    });
                    activeFace.classList.add('active');
                    rotating = false;
                }, 500);
            }
        }


        document.addEventListener("DOMContentLoaded", () => {
            const settingsButton = document.getElementById("settingsButton");
            const settingsPopup = document.getElementById("settingsPopup");

            settingsButton.addEventListener("click", () => {
                settingsPopup.style.display = "flex";
            });

            document.getElementById("mainPageButton").addEventListener("click", () => {
                window.location.href = "home.html"; // Altere para o URL da sua página principal
            });

            document.getElementById("restartPageButton").addEventListener("click", () => {
                window.location.reload(); // Recarrega a página atual
            });

            document.getElementById("resumePageButton").addEventListener("click", () => {
                settingsPopup.style.display = "none";
            });
        });
        
const dado = document.querySelector('.dice');
const dado1 = document.querySelector('.dice1');
const roll = document.querySelector('.table');
var con1 ="";
var con2 ="";
let beat = new Audio('./Audio/dice_roll-96878.mp3');

const dadoRandomico = () =>{
    
    const aleatorio = Math.floor(Math.random(6) * 9);
    
    if(aleatorio >= 1 && aleatorio<=6)
        randDado(aleatorio);
    else
        dadoRandomico();

    console.log("Lançou! "+aleatorio)
}

const dadoRandomico1 = () =>{
    
    const aleatorio1 = Math.floor(Math.random(6) * 9);
    
    if(aleatorio1 >= 1 && aleatorio1<=6)
        randDado1(aleatorio1);
    else
        dadoRandomico1();

    console.log("Lançou! "+aleatorio1)
}

const randDado = aleatorio => {
    dado.style.animation = "girar 1.5s";
    beat.load();
    beat.play();
    setTimeout(()=>{
        
        switch (aleatorio) {
            case 1:
                dado.style.transform = " rotateX(0deg) rotateY(0deg)";
                con1="Pi, ";
                break;
            case 2:
                dado.style.transform = "rotateX(-90deg) rotateY(0deg)";
                con1="Duke, ";
                break;
            case 3:
                dado.style.transform = " rotateX(0deg) rotateY(90deg)"  ;
                con1="Terno, ";
                break;
            case 4:
                dado.style.transform = " rotateX(0deg)  rotateY(-90deg) ";
                con1="Quadra, ";
                break;
            case 5:
                dado.style.transform = " rotateX(90deg) rotateY(0deg)";
                con1="Quina, ";

                break;
            case 6:
                dado.style.transform = " rotateX(180deg) rotateY(0deg)";
                con1="Cena, ";
                break;
                case 6:
                dado.style.transform = " rotateX(180deg) rotateY(0deg)";
                con1="Cena, ";
                break;
            default:
                break;
        }
        dado.style.animation = "none";
        beat.pause();
    }, 1050)
}

const randDado1 = aleatorio1 => {
    dado1.style.animation = "girar 1.5s";
    beat.load();
    beat.play();
    setTimeout(()=>{
        
        switch (aleatorio1) {
            case 1:
                dado1.style.transform = " rotateX(0deg) rotateY(0deg)";
                con2="Pi";
                break;
            case 2:
                dado1.style.transform = "rotateX(-90deg) rotateY(0deg)";
                con2="Duke";
                break;
            case 3:
                dado1.style.transform = " rotateX(0deg) rotateY(90deg)"  ;
                con2="Terno";
                break;
            case 4:
                dado1.style.transform = " rotateX(0deg)  rotateY(-90deg) ";
                con2="Quadra";
                break;
            case 5:
                dado1.style.transform = " rotateX(90deg) rotateY(0deg)";
                con2="Quina";
                break;
            case 6:
                dado1.style.transform = " rotateX(180deg) rotateY(0deg)";
                con2="Cena";
                break;
                case 6:
                dado1.style.transform = " rotateX(180deg) rotateY(0deg)";
                con2="Cena";
                break;
            default:
                break;
        }
        dado1.style.animation = "none";
        beat.pause();
        console.log(con1 + con2);
    }, 1050)
}

roll.addEventListener('click',dadoRandomico);
roll.addEventListener('click',dadoRandomico1);


/*
var direccao = {
    centro: 0,
    cima: 1,
    baixo: 2,
    esquerda: 3,
    direita: 4
};

var dadoLançado = {
    new: function name(velocidadeIncremento) {
        return{
            x: (this.roll.width / 2) - 9,
            y: (this.roll.height / 2) -9,
            mouseX: direccao.centro,
            mouseY: direccao.centro,
            velocidade: velocidadeIncremento || 7
        };
    }
};

var colisor = {
    new: function (lado) {
        return{
            x: lado == 'left'? this.roll.width : this.roll.width + 150,
            y: (this.roll.height) - 35,
            ponto: 0,
            move: direccao.idle,
            velocidade: 0
        };
    }
};

var jogo = {
    initialize: function (params) {
        this.context = this.roll.getContext('3d');
        this.jogador = colisor.new.call(this, 'left');
        this.colide = colisor.new.call(this,'right');
        dado=dadoLançado.new.call(this); 
        this.running = this.over = false;
        this.turn = this.colide;
        this.timer = this.round = 0;
        console.log(this);
    }
}

update: function name(params) {
    if (this.dado.x <= 0) 
        console.log('água');

    if (this.dado.y <= 0) 
        this.dado.mouseY = direccao.baixo;
=======
            settingsButton.addEventListener("click", () => {
                settingsPopup.style.display = "flex";
            });
        
            document.getElementById("mainPageButton").addEventListener("click", () => {
                window.location.href = "home.html"; // Altere para o URL da sua página principal
            });
>>>>>>> 56c87a70e26e2ec695d0dc55d940a260b27f2bd1
        
            document.getElementById("restartPageButton").addEventListener("click", () => {
                window.location.reload(); // Recarrega a página atual
            });
        
            document.getElementById("resumePageButton").addEventListener("click", () => {
                settingsPopup.style.display = "none";
            });
        });*/

     