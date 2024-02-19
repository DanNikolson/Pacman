class Player {
      constructor({ position, velocity }) {
            this.position = {
                  x: position.x * SIZE + 5,
                  y: position.y * SIZE + 5
            };
            this.velocity = velocity;
            this.lastDirection = {
                  x: 0,
                  y: 0
            };
            this.width = SIZE - 10;
            this.height = SIZE - 10;
            this.polygon = createPolygon(this.position.x, this.position.y, this.width, this.height);
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

      getNextStepPolygon(vector) {
            return createPolygon(this.position.x + vector.x, this.position.y + vector.y - 0.5, this.width, this.height);
      }

      update(context, img) {
            if (isCollide(player.velocity)) {
                  player.velocity = { x: 0, y: 0 };
            }

            context.clearRect(this.position.x, this.position.y, this.width, this.height);
            this.draw(context, img);

            this.move(this.velocity);
            this.lastDirection = this.velocity;
      }

      move(vector) {
            this.position.x += vector.x;
            this.position.y += vector.y;
      }
}