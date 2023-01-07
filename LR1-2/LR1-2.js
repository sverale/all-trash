let x = Math.PI*2/43
let p = -Math.PI
let y1, y2,y3 = 0
while (p <= Math.PI) {  
    y1 = (1**3)/(1**2 + p**2)
    y2 = Math.sqrt(Math.sqrt(1**4 + (4*(p**2)*(1**2))) - p**2 - 1**2)
    y3 = 1/(p**2)
    console.log(y1 + " | " + y2 + " | " + y3 + " | " + p )
    p += x
}

