
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
