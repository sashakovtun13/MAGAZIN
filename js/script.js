
  $(function(){
  
  //Запуск функции при старте
    init();

  //Функции  
  //-Считывание json при запуске
   function init(){
     $.getJSON("base/goods.json",goodGet);
   }
  //Сама функция считывания
  function goodGet(date){
    console.log(date);

    var out=" ";
    for(var k in date){
      out+='<div class="cart">';
      
      out+=`<img src="base/${date[k].good_img}" alt="" class="good_img">`;
      out+=`<h1 class="name">${date[k].name}</h1>`;
      out+=`<p class="cost">${date[k].cost} грн.</p>`;
      out+=`<p class="desc">${date[k].desc}</p>`;
      out+='<button>Купить</button>';
      out+='</div>';
    }
    //Вывод на экран
    $(".good-out").html(out);
  }
  
  });

