// Evento que se ejecuta una ves que el DOM este cargado
document.addEventListener('DOMContentLoaded', function(){

   // Declaracion de Variables
   var $btnAdd = document.querySelector('.btnAdd');
   var $ulList = document.querySelector('.Listado__ul');
   var $inputText = document.querySelector('.inputText');


   // Click al btnAdd
   $btnAdd.addEventListener("click", agregarLi);
   // enter al inputText
   $inputText.addEventListener("keydown", function(e){
      var keyCode = e.keyCode || e.which;
      if (keyCode == '13'){
         agregarLi();
      }
   });

   function agregarLi(){
      // Capturar el texto del input
      $inputText = document.querySelector('.inputText');

      // escribir dentro de un <li>
      $ulList.innerHTML = $ulList.innerHTML + '<li>' + $inputText.value + '</li>';

      // Agregar click a los li
      agregarTodosLi();

      // limpiar el input
      $inputText.value = "";

      // focalizar en el inputs
      $inputText.focus();
   }


   function agregarTodosLi(){
      var tmp = document.querySelectorAll('.Listado__ul > li');
      var tmpLength = tmp.length - 1;

      for (var i = 0; i <= tmpLength; i++) {
         agregarCLick(tmp[i]);
      }
   };


   function agregarCLick(el){
      el.addEventListener("click",function(){
         el.classList.toggle('tachado');
      });
   };
});
