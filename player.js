class Player extends Paddle {
    constructor() {
        super()
    }

    update() {
        if (keys.state[keys.up]) this.y -= this.speed
        if (keys.state[keys.down]) this.y += this.speed
        this.y = Math.max(Math.min(this.y, canvas.height - this.height), 0)  
    }
}