function getSumOfNumbers(number, type = 'odd') {
    /*number = 10, type = ‘’*/
    number = prompt()
    sum = 0;
    for(i = 0; i<= number; i++) 
    {
      if(type == 'odd')
            if(i%2 == 1)
              sum += i
          
        if(type == 'even') 
            if(i%2 == 0) 
              sum += i
          
        if(type == '')
          sum += i 
      }
    return(sum)
  }
  console.log(getSumOfNumbers(10, type = 'odd'))
  console.log(getSumOfNumbers(10, type = 'even'))
  console.log(getSumOfNumbers(10, type = ''))