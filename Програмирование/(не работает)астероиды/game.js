var canvas = document.getElementById('game');// Вывод картинки на экран по заданным размерам
var context = canvas.getContext('2d');

var aster=[];  /*{x:0,y:300,dx:1,dy:2}*/
var fire=[];
var timer=0;
var player={x:300,y:300};

var stone = new Image();                      // Загрузка картинок
stone.src = 'stone.png';

var attac = new Image();
attac.src = 'fire.png';

var nlo = new Image();
nlo.src = 'nlo.png';

var fon = new Image();
fon.src = 'fon.png';                         /*Фоновая картинка*/

canvas.addEventListener("mousemove", function(event)
{
  player.x=event.offsetX-25;
  player.y=event.offsetY-20;
});
// aster.push({x:300,y:0,dx:0,dy:1});

fon.onload = function ()
{
  game();
}

function game()                               /*оновной игровой цикл*/
{
  update();
  render();
  requestAnimFrame(game);
}

function update()                             /*Обновление*/
{
  timer++;
  if (timer%10==0)
  {
    aster.push(
    {
      x:Math.random()*600,
      y:-50,
      dx:Math.random()*2-1,
      dy:Math.random()*2+2,
      del:0
    });
  }

  if (timer%30==0)                                                      /*выстрел*/
  {
    fire.push({x:player, x:player.x+10, y:player.y, dx:0, dy:-5.2});
    fire.push({x:player, x:player.x+10, y:player.y, dx:0.5, dy:-5}); /*3 выстрела*/
    fire.push({x:player, x:player.x+10, y:player.y, dx:-0.5, dy:-5});
    fire.push({x:player, x:player.x+10, y:player.y, dx:0.7, dy:-4.8}); /*5 выстрелов*/
    fire.push({x:player, x:player.x+10, y:player.y, dx:-0.7, dy:-4.8});
  }
  /*атака*/
  for(i in fire)
  {
    fire[i].x=fire[i].x+fire[i].dx;
    fire[i].y=fire[i].y+fire[i].dy;
  /*границы огня*/
  if (fire[i].y<-30) fire.splice(i,1);
  }


  /*физика астероидов*/
  for(i in aster)
  {
    aster[i].x=aster[i].x+aster[i].dx;
    aster[i].y=aster[i].y+aster[i].dy;
  /*границы астероидов*/
  if (aster[i].x>=550 || aster[i].x<0) aster[i].dx=-aster[i].dx;
  if (aster[i].y>=600) aster.splice(i,1);

       for(i in aster)
      {
  if (Math.abs(aster[i].x+25-fire[i].x-10)<25 && Math.abs(aster[i].y-fire[i].y)<25)
                
  aster[i].del=1;
                        fire.splice(i,1);break;
                
      }
     
      if (aster[i].del==1) aster.splice(i,1);
  }
}


function render()
{
  context.drawImage(fon, 0, 0, 600, 600,);
  for(i in fire) context.drawImage(attac, fire[i].x, fire[i].y, 20, 30);
  context.drawImage(nlo, player.x, player.y, 50, 40);
  for(i in aster) context.drawImage(stone, aster[i].x, aster[i].y,/*расположение*/ 50, 50,/*размер*/);
}


var requestAnimFrame = (function()
{
    return window.requestAnimationFrame ||
    window.webkitrequestAnimationFrame  ||
    window.mozrequestAnimationFrame  ||
    window.orequestAnimationFrame    ||
    window.msrequestAnimationFrame   ||
    function(callback)
    {
        window.setTimeout(callback, 1000 / 20);
    };
})();
