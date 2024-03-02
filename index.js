const CANVAS = document.querySelector('canvas');
const CONTEXT = CANVAS.getContext('2d');
let borders = [];

CANVAS.width = 440;
CANVAS.height = 520;

for (let x = 0; x < MAP.length; x++) {
      for (let y = 0; y < MAP[0].length; y++) {
            createCell(y, x, MAP[x][y]);
      }
}

const player = new Player({
      position: {
            x: MAP[0].length - 2,
            y: MAP.length - 2
      },
      velocity: {
            x: 0,
            y: 0
      }
});

const img = new Image();
img.src = CELL_TYPES.player;
img.onload = () => {
      animate(player, img);
};

const movement = new Movement(player);

function createCell(x, y, imagePath) {
      const BOUNDARY = new Boundary({
            position: { x, y },
      });

      if (imagePath) {
            const polygon = createPolygon(BOUNDARY.position.x, BOUNDARY.position.y, BOUNDARY.width, BOUNDARY.height);
            borders.push(polygon);

            createImg(BOUNDARY, imagePath);
      }
}

function createImg(targetObj, imagePath) {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => {
            targetObj.draw(CONTEXT, img);
      };
}

function animate() {
      requestAnimationFrame(animate);
      player.update(CONTEXT, img);
}

function isCollide(vector) {
      const nextStepPlayerPolygon = player.getNextStepPolygon(vector);

      for (let i = 0; i < borders.length; i++) {
            if (polysIntersect(nextStepPlayerPolygon, borders[i])) return true;
      }

      return false;
}