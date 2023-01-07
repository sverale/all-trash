const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

let image = new Image
image.src = "sheet.png"

let fon = new Image
fon.src = "fon.png"

const atlas = {
  ball: {x: 3,y: 587,width: 38,height: 38},
  yellow: {x: 174, y: 36, width: 42, height: 20},
  red:{x: 0, y: 36, width: 42, height: 20},
  green: {x: 174, y: 0, width: 42, height: 20},
  pink: {x: 116, y: 36, width: 42, height: 20},
  platforma: {x: 108, y: 176, width: 210, height: 18,},
}


const game = new Game ()

const  limits = [
  new Rectangle ({ x: 0, y: -20, width: canvas.width, height: 20}),
  new Rectangle ({ x: canvas.width, y: 0, width: 20,  height: canvas.height}),
  new Rectangle ({ x: 0, y: canvas.height, width: canvas.width, height: 20}),
  new Rectangle ({ x: -20, y: 0, width: 20,  height: canvas.height})
]

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      game.platforma.leftKey = true
    }
    else if (event.key === "ArrowRight") {
      game.platforma.rightKey = true
    }

    else if (game.play === false && event.key === "Enter") {
      game.init()
    }
})


document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft") {
    game.platforma.leftKey = false
  }
  else if (event.key === "ArrowRight") {
    game.platforma.rightKey = false
  }
})





function clearCanvas() {
    context.drawImage(fon, 0, 0, canvas.width, canvas.height)      /*canvas.width = canvas.width*/
}









function toggleItem(array, item) {
  if (array.includes(item)) {
    const index = array.indexOf(item)
    array.splice(index, 1)
  }

  else {
    array.push(item)
  }
}







function getRandomFrom (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}




function drawResult() {
  context.beginPath()
  context.rect(0, 0, canvas.width, canvas.height)
  context.fillStyle = "rgba(255, 255, 255, 0.5)"
  context.fill()

  context.fillStyle = "black"
  context.textSize = "50px"
  context.textAlign = "center"
  context.fillText ("Конец игры!", canvas.width / 2, canvas.height / 2 - 50)

  context.fillStyle = "black"
  context.textSize = "50px"
  context.textAlign = "center"
  context.fillText ("enter!", canvas.width / 2, canvas.height / 2)
}
