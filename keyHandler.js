class KeyHandler {
    constructor() {
        this.state = {}
        this.up = 38
        this.down = 40

        document.addEventListener("keydown", e => this.state[e.keyCode] = true )
        document.addEventListener("keyup", e => delete this.state[e.keyCode] )
    }
}