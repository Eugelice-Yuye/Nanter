
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
