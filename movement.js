const SPEED = 1.8;

class Movement {
      constructor(player) {
            this.player = player;
            this.init();
      }

      init() {
            window.addEventListener('keydown', ({ key }) => {
                  this.player.velocity.y = 0;
                  this.player.velocity.x = 0;

                  if (key === "w"
                        || key === "ц"
                        || key === "ArrowUp") this.player.velocity.y = -SPEED;
                  if (key === "s"
                        || key === "ы"
                        || key === "ArrowDown") this.player.velocity.y = SPEED;
                  if (key === "a"
                        || key === "ф"
                        || key === "ArrowLeft") this.player.velocity.x = -SPEED;
                  if (key === "d"
                        || key === "в"
                        || key === "ArrowRight") this.player.velocity.x = SPEED;
            });
      }
}