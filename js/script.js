
  $(function(){
  
  //Запуск функции при старте
    init();

  //Функции  
  //-Считывание json при запуске
   function init(){
     $.getJSON("base/goods.json",goodGet);
   }
  //Сама функция считывания
  function goodGet(data){
    console.log(data);

    var out=" ";
    for(var k in data){
        out +='<div class="cart">';
        
      out+='<img src="base/'+data[k].good_img+'" alt="" class="good_img">';
      out+='<h1 class="name">'+data[k].name+'</h1>';
      out+='<p class="cost">'+data[k].cost+' грн.</p>';
      out+='<p class="desc">'+data[k].desc+'</p>';
      out+='<button>Купить</button>';
        out +='</div>';

      // out+='<div class="cart">';
      
      // out+=`<img src="base/${data[k].good_img}" alt="" class="good_img">`;
      // out+=`<h1 class="name">${data[k].name}</h1>`;
      // out+=`<p class="cost">${data[k].cost} грн.</p>`;
      // out+=`<p class="desc">${data[k].desc}</p>`;
      // out+='<button>Купить</button>';
      // out+='</div>';
    }
    //Вывод на экран
    $(".good-out").html(out);
  }
  
  });

