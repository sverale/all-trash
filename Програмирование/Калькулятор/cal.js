const cal = document.querySelector('.cal');
const result = document.querySelector('#result');


cal.addEventListener('click', function(event) {
  if(!event.target.classList.contains('cal_btn')) return;

  const value = event.target.innerText;

  switch(value) {
    case 'C':
      result.innerText = '';
      break;

    case '=':
      if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
      


    result.innerText = eval(result.innerText).toFixed(2);
    break;

  default:
    result.innerText += value;

  }

});
