class Ai extends Paddle {
    constructor() {
        super()
    }

    update() {
        let destroy = ball.y - (this.height - ball.side) * .5
        this.y += (destroy - this.y) * 0.1
        this.y = Math.max(Math.min(this.y, canvas.height - this.height), 0)
    }
}