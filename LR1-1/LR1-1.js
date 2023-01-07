let number = prompt("Введите число")
let counter=0
let division
let j
let sub

for (var i=1; i<=number; i++)
{  
    let sub = number
    while (sub>0) {
        sub -= i
        if (sub==0){
            console.log(i + " является делителем числа " + number) 
            if (isPrimeDevisor(i)==true){
                division=i 
            }
            console.log(division + " прост делителя ")
        } 
        if (sub < 0) {
            console.log(i + " не является делителем числа " + number) 
        }  
    }
}

  function isPrimeDevisor(i) 
  {
    for (j=1; j<=1; j++) 
    {
        sub=j
        while (sub>0){
        sub -= j
            if (sub==0){
            counter++
            console.log(counter + " кол-во делителей ")
            }
        }
        if (counter==2) 
        return true
        else  return false
    }
 }