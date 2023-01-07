const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 900
canvas.height = 600

canvas.onload = init()

class Player {
    constructor () {
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x:0,
            y:0,
        }
        this.width = 30
        this.height = 30
    }

    draw () {
        context.fillStyle = 'red'
        context.fillRect (this.position.x, this.position.y, 
            this.width, this.height)
    }

    update () {
        this.draw ()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
    
}

function init () {
    let player = new Player()
}