var carz={};
//----> Вывод при загрузки страницы
function loadCarz(){
    if(localStorage.getItem('Carz')){
      carz= JSON.parse(localStorage.getItem('Carz'));
      showCarz();
    }
    else{
        $(".carz").html("<h1>Корзина пуста!");
    }
  }
//  ----> Функция вывода Корзины
  function showCarz(){
      if(!isEmpty(carz)){
        $(".carz").html("<h1>Корзина пуста!");
      }
      else{
      $.getJSON("base/goods.json",function(data) {
              var goods=data;
              var out="";
              for(id in carz){
                //Кнопки +-
                out+='     <button data-id="'+id+'" class="plus_good_carz">+</button>';
                out+=' '+carz[id]+' ';
                out+='     <button data-id="'+id+'" class="minus_good_carz">-</button>';
                out+='<img src="base/'+goods[id].good_img+'" alt="" class="good_img_carz">';
                //количество
                out+='<span class="name_carz">'+goods[id].name+'</span>';
                //Кнопка удалить
                out+='     <button data-id="'+id+'" class="del_good_carz">x</button>';
                //Цена
                out+='--->'+carz[id]*goods[id].cost+'';
                out+='<br>'
              }

            $(".carz").html(out);
            $(".del_good_carz").on("click",delGood);
            $(".plus_good_carz").on("click",plusGood);
            $(".minus_good_carz").on("click",minusGood);
        });
    }
}
//Событие кнопки удаления 
function delGood(){
    var id=$(this).attr("data-id");
    delete carz[id];
    saveCarz();
    showCarz();
}
//Событие кнопки ПЛЮС
function plusGood(){
  var id=$(this).attr("data-id");
  carz[id]++;
  saveCarz();
  showCarz();
}
//Событие кнопки МИНУС
function minusGood(){
  var id=$(this).attr("data-id");
  if(carz[id]==1){
    delete carz[id];
  }
  else{
    carz[id]--;
  }
  
  saveCarz();
  showCarz();
}
//----> Функция сохранения корзины в LocalStorage
    function saveCarz(){
      localStorage.setItem('Carz',JSON.stringify(carz));
    }
//--> Функция проверки на пустоту корзины
function isEmpty(obj){
    for(var key in obj){
        if(obj.hasOwnProperty(key)) return true;
        return false;
    }
}

//Отправка в php
function sendEmail() {
  var ename = $('#ename').val();
  var email = $('#email').val();
  var ephone = $('#ephone').val();

  alert(carz);
  $.ajax({
    type: "POST",
    url: "core/mail.php",
    data: carz,
    dataType: "dataType",
    success: function (response) {
      alert(data);
    }
  });

} 
$(function(){
    loadCarz();
    $('.send-email').on('click', sendEmail); // отправить письмо с заказом
});

