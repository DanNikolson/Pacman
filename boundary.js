const SIZE = 40;

class Boundary {
      constructor({ position }) {
            this.position = {
                  x: position.x * SIZE,
                  y: position.y * SIZE
            };
            this.width = SIZE;
            this.height = SIZE;
      }

      draw(context, img) {
            context.drawImage(
                  img,
                  this.position.x,
                  this.position.y,
                  this.width,
                  this.height
            );
      }
}