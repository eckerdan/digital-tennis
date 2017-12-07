class Ball {
    constructor() {
        this.x = null
        this.y = null
        this.vel = null
        this.side = 20
        this.speed = 20
    }

    serve(side) {
        let r = Math.random()
        this.x = side===1 ? player.x+player.width : ai.x - this.side
        this.y = (canvas.height - this.side)*r

        let phi = 0.1*pi*(1 - 2*r)
        this.vel = {
            x: side * this.speed * Math.cos(phi),
            y: this.speed * Math.sin(phi)
        }
    }

    update() {
        this.x += this.vel.x
        this.y += this.vel.y

        if(0 > this.y || this.y+this.side > canvas.height) {
            let offset = this.vel.y < 0 ? 0 - this.y : canvas.height - (this.y+this.side)
            this.y += 2*offset
            this.vel.y *= -1
        }

        let intersect = (ax, ay, aw, ah, bx, by, bw, bh) => ax< bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah

        let pdle = this.vel.x < 0 ? player : ai
        if (intersect(pdle.x, pdle.y, pdle.width, pdle.height, this.x, this.y, this.side, this.side)) {
            this.x = pdle===player ? player.x+ player.width : ai.x - this.side
            let n = (this.y+this.side - pdle.y)/(pdle.height+this.side)
            let phi = 0.25*pi*(2*n - 1)

            let smash = Math.abs(phi) > 0.2*pi ? 1.5 : 1
            this.vel.x = smash*(pdle===player ? 1 : -1)*this.speed*Math.cos(phi)
            this.vel.y = smash*this.speed*Math.sin(phi)
        }
                
        if (0 > this.x+this.side || this.x > canvas.width) {
            this.serve(pdle===player ? 1 : -1)
        }
    }

    draw() {
        canvas.ctx.fillRect(this.x, this.y, this.side, this.side)
    }
}