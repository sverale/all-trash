class Platforma extends Rectangle {
    constructor (param) {
        super(param)

        this.speed = param.speed

        this.leftKey = false
        this.rightKey = false
    }

    draw() {
        context.drawImage(
          image,
          atlas.platforma.x, atlas.platforma.y, atlas.platforma.width, atlas.platforma.height,
          this.x, this.y, this.width, this.height,
        )
      }
}