class Paddle {
    constructor() {
        this.x = null
        this.y = null
        this.width = 20
        this.height = 100
        this.speed = 10
    }

    draw() {
        canvas.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}