/*const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2]
let coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase();
const coffeeNameIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === coffeeName);
const favoriteCoffee = coffees[coffeeNameIndex];
if (favoriteCoffee) {
  alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${coffeeNameIndex + 1}-й по популярности в нашей кофейне.`)
} else {
  alert('К сожалению, такого вида кофе нет в наличии')
}

const updatePrices = prices.map((price) => price + 0.5);
coffees.forEach((item, index) => {
  alert(`Кофе ${item} сейчас стоит ${updatePrices[index]} евро`)
})*/
//////////////////////////////////
const clientsEstimations =[]
let good = 0
let notGood = 0
askClientToGiveEstimation()

function askClientToGiveEstimation() {
 for(let i = 0; i<5; i++){
   const clientsEstimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
   if (clientsEstimation>=1 && clientsEstimation<=10) 
   clientsEstimations.push(clientsEstimation);
 }
}
let goodEstimations = clientsEstimations.filter((item) => { 
                                                return item > 5
                                                })
let notGoodEstimations = clientsEstimations.filter((item) => { 
                                                return item <= 5
                                                }) 
alert(`Всего положительных оценок: ${goodEstimations.length} ; Всего отрицательных оценок: ${notGoodEstimations.length}`)
