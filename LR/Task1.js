const numbers = [10, 4, 100, -5, 54, 2];
let sum= 0;
let suma= 0;
let summa= 0;
let value = 0

///////////////////////////////////
for(let i = 0; i < numbers.length; i++) {
  let numb = Math.pow(numbers[i], 3)
   summa += numb;
}
console.log('Через цикл for ' + summa)
////////////////////////////////////////??????
for ( value of numbers) {
  //value += 1;
  let num = Math.pow(value, 3)
   sum += num;
}
console.log('Через цикл for of ' + sum);

////////////////////////////////////

numbers.forEach((item) => {
  let numbe = Math.pow(item, 3)
  suma = suma + numbe;
  
})
console.log('Через метод forEach ' + suma)
/////////////////////////////////////

const result = numbers.reduce((acc, item, index,array) => {
  return acc + item**3
}, 0)
console.log('Через метод reduce ' + result)