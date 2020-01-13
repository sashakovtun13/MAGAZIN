var carz={};//Корзина
var baseIn={};//Масив базы
  //Функции  
  //-Считывание json при запуске
   function init(){
     $.getJSON("base/goods.json",goodGet);
   }
  

  function loadCarz(){
    if(localStorage.getItem('Carz')){
      carz= JSON.parse(localStorage.getItem('Carz'));
      showCarz();
    }
  }
  //Сама функция считывания
  function goodGet(data){
    console.log(data);
    baseIn=data;
    console.log(baseIn);
    var out=" ";
    for(var k in data){

      out +='<div class="cart">';
      out+='<img src="base/'+data[k].good_img+'" alt="" class="good_img">';
      out+='<h1 class="name">'+data[k].name+'</h1>';
      out+='<p class="cost">'+data[k].cost+' грн.</p>';
      out+='<p class="desc">'+data[k].desc+'</p>';
      out+='<button class="add-to-carz" data-id="'+[k]+'">Купить</button>';
      out +='</div>';


    }

    //Вывод на экран
    $(".good-out").html(out);
    $(".add-to-carz").on('click', addToCart); 
  }
    //Функция добавление в корзину
   function addToCart() {
      var id=$(this).attr('data-id');
      // alert(id);
      if(carz[id]==undefined){
        carz[id]=1;
      }
      else{
        carz[id]++;
      }
      
      showCarz();
      saveCarz();
      
      
    }
    //Функция вывода Корзины
    function showCarz(){
      
      var count=0;
      for(var k in carz){
        out+=count++;
      }
      var out=count;
      $(".m-carz").html(out);
    }
    //Функция сохранения корзины в LocalStorage
    function saveCarz(){
      localStorage.setItem('Carz',JSON.stringify(carz));
    }
    //Функция выгрузки корзины из LocalStorage
    function loadCarz(){
      if(localStorage.getItem('Carz')){
        carz= JSON.parse(localStorage.getItem('Carz'));
        var count=0;
        for(var k in carz){
          count++;
        }
        console.log(count);
        showCarz();
      }
    }
  
  $(function(){
    //Запуск функции при старте
      init();
      loadCarz();
      
    });

