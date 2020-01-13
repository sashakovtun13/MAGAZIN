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
                ;
                out+='<img src="base/'+goods[id].good_img+'" alt="" class="good_img_carz">';
                out+='<span class="name_carz">'+goods[id].name+' ---> '+carz[id]+'</span>';
                //количество
                out+='     <button data-id="'+id+'" class="del_good_carz">x</button><br>'
              }

            $(".carz").html(out);
            $(".del_good_carz").on("click",delGood);
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
$(function(){
    loadCarz();
});