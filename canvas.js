class Canvas {
    constructor(width, height) {
        this.el = document.createElement("canvas")
        this.el.width = width
        this.el.height = height
        this.width = this.el.width
        this.height = this.el.height
        this.ctx = this.el.getContext('2d')
        document.body.appendChild(this.el)
    }
}