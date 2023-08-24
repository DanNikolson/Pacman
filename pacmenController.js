window.addEventListener("load", () => {
    (function () {
        const mapSize = { x: 40, y: 40 };
        let currentVector = { x: 1, y: 0 };
        let pacmenPosition = { x: 1, y: 1 };
        let oldCell = {
            tag: null,
            class: null,
        };

        drawPacmen();

        document.addEventListener(
            "keydown",
            (event) => {
                const keyName = event.key;
                const vector2 = getVector(keyName);
                updatePacmenPosition(vector2);
                drawPacmen();
            },
            false,
        );

        function getVector(key) {
            let vector2 = { x: 0, y: 0 };

            switch (key) {
                case "w":
                    vector2.y -= 1;
                    break;
                case "s":
                    vector2.y += 1;
                    break;
                case "d":
                    vector2.x += 1;
                    break;
                case "a":
                    vector2.x -= 1;
                    break;
            }

            return vector2;
        }

        function foldVectors(vectorA, vectorB) {
            const result = {
                x: vectorA.x + vectorB.x,
                y: vectorA.y + vectorB.y
            };

            return result;
        }

        function updatePacmenPosition(vector2) {
            const newVector = foldVectors(pacmenPosition, vector2);

            if (newVector.x > mapSize.x && newVector.y > mapSize.y) return pacmenPosition;
            else if (newVector.x < 0 && newVector.y < 0) return pacmenPosition;

            let cellTeg = document.getElementById(`${newVector.x}-${newVector.y}`);

            if (cellTeg.className != "Wall") {
                pacmenPosition = newVector;
                currentVector = vector2;
            }
        }

        function drawPacmen() {
            if (oldCell.class) oldCell.tag.className = oldCell.class;

            oldCell.tag = document.getElementById(`${pacmenPosition.x}-${pacmenPosition.y}`);
            oldCell.class = oldCell.tag.className;

            oldCell.tag.className = `Pacman${currentVector.x}-${currentVector.y}`;
        }
    })();
});
