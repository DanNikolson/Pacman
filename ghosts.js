class Ghost {
    constructor({ position, velocity }) {
        this.position = {
            x: position.x * SIZE + 5,
            y: position.y * SIZE + 5
        };
        this.velocity = velocity;
        this.width = SIZE - 10;
        this.height = SIZE - 10;
        this.polygon = createPolygon(this.position.x, this.position.y, this.width, this.height);
    }

    get getRandomEmptyCell() {
        return array[Math.trunc(Math.random() * 72 + 1)];
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

    update(context, img) {
        if (isCollide(player.velocity)) {
            player.velocity = { x: 0, y: 0 };
        }

        context.clearRect(this.position.x, this.position.y, this.width, this.height);
        this.getNextPosition();
        this.draw(context, img);

    }

    getNextPosition() {

    }
}