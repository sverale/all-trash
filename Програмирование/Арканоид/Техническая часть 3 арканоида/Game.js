class Game {
    constructor () {
        this.ball = null
        this.platforma = null    
        this.block = [] 
        this.play = false
        this.pTimestamp = 0
        
      
        this.init()
        requestAnimationFrame(x => this.tick(x))

    }

    init () {
        this.play = true
        this.ball = new Ball ({x: canvas.width / 2, y: canvas.height -50, width: 10, height: 10, speed: 200, angle: Math.PI / 4 + Math.random() * Math.PI / 2})
        this.platforma = new Platforma ({ x: canvas.width / 2 - 100, y: canvas.height -30, width: 150, height: 20, speed: 400, leftKey: false, rightKey: false})
        this.blocks = []
        for (let x = 0; x < 7; x++) {
            for (let y = 0; y < 7; y++ ) {
                this.blocks.push(new Block({
                    x: 50 + 52 * x,
                    y: 50 + 20 * y,
                    width: 50,
                    height: 20,
                    color: getRandomFrom(["red", "yellow", "green", "pink"]),
                }))
            }
        }

    }

        
    tick (timestamp) {
        requestAnimationFrame (x => this.tick(x))

        clearCanvas()

        if (this.play) {

            const dTimestamp = Math.min(16.7, timestamp - this.pTimestamp)
            const secondPart = dTimestamp / 1000
            this.pTimestamp = timestamp



            this.ball.x += secondPart * this.ball.speed * Math.cos(this.ball.angle)
            this.ball.y -= secondPart * this.ball.speed * Math.sin(this.ball.angle)

            if (this.platforma.leftKey) {
            this.platforma.x = Math.max(0, this.platforma.x - secondPart * this.platforma.speed)
            }
            if (this.platforma.rightKey) {
            this.platforma.x = Math.min(canvas.width - this.platforma.width, this.platforma.x + secondPart * this.platforma.speed)
        }



        for (const block of this.blocks) {
        if(block.isIntersection (this.ball)) {
            toggleItem(this.blocks, block)


            const ctrl1 = new Rectangle ({
            x: block.x - 10,
            y: block.y - 10,
            width: 10 + block.width ,
            height: 10,
            })

            const ctrl2 = new Rectangle ({
            x: block.x + block.width,
            y: block.y - 10,
            width: 10 ,
            height: 10 + block.height,
            })

            const ctrl3 = new Rectangle ({
            x: block.x,
            y: block.y + block.height,
            width: block.width + 10,
            height: 10,
            })

            const ctrl4 = new Rectangle ({
            x: block.x - 10,
            y: block.y,
            width: 10,
            height: block.height + 10,
            })

            if (ctrl1.isIntersection(this.ball) || ctrl3.isIntersection(this.ball)) {
            this.ball.angle = Math.PI * 2 - this.ball.angle
            }

            else if (ctrl2.isIntersection(this.ball) || ctrl4.isIntersection(this.ball)) {
            this.ball.angle = Math.PI - this.ball.angle
            }

            break
        }
        }

        if (limits[0].isIntersection(this.ball)) {
        this.ball.angle = Math.PI * 2 - this.ball.angle
        }
        if (limits[1].isIntersection(this.ball) || limits[3].isIntersection(this.ball)) {
        this.ball.angle = Math.PI - this.ball.angle
        }

        if (this.platforma.isIntersection(this.ball)) {
        // ball.angle = Math.PI * 2 - ball.angle
        const x = this.ball.x + this.ball.width / 2
        const percent = (x - this.platforma.x) / this.platforma.width
        this.ball.angle = Math.PI - Math.PI * 8 / 10 * (percent + 0.05)
        }

        if (limits[2].isIntersection(this.ball)) {
        this.play = false
        }
        }

        this.ball.draw()

        for (const block of this.blocks) {
        block.draw()
        }

        this.platforma.draw()

        if (!this.play) {
        drawResult()
        }
    }
}
