
//getName2= function()
//getName3= function()
function getName1(name) {
    return('Имя равно ' + name)
    }
    
    const getName2 = function(name) {
      return('Имя равно ' + name)
    }
    
    const getName3 = ((name) => {
      return('Имя равно ' + name)
    })
    
    console.log(getName1('VOVA1'))
    console.log(getName2('VOVA2'))
    console.log(getName3('VOVA3'))