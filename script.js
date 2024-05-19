
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
    const closePopupButton = document.getElementById("closePopupButton");

    settingsButton.addEventListener("click", () => {
        settingsPopup.style.display = "block";
    });

    closePopupButton.addEventListener("click", () => {
        settingsPopup.style.display = "none";
    });

    document.getElementById("mainPageButton").addEventListener("click", () => {
        window.location.href = "index.html"; // Altere para o URL da sua página principal
    });

    document.getElementById("resumeGameButton").addEventListener("click", () => {
        settingsPopup.style.display = "none";
        // Adicione qualquer lógica adicional para retomar o jogo aqui
    });

    document.getElementById("basicSettingButton").addEventListener("click", () => {
        alert("Configuração Básica Executada");
        // Adicione a lógica para a configuração básica aqui
    });
});

