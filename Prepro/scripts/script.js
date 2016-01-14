// Evento que se ejecuta una ves que el DOM este cargado
document.addEventListener('DOMContentLoaded', function(){

   // Declaracion de Variables
   var $btnAdd = document.querySelector('#btnAdd'), $ulList, $inputText;
   var $btnAll = document.querySelector('#btnAll'), $ulList, $inputText;

   actualizarVariables();
   function actualizarVariables(){
      $ulList = document.querySelector('#Listado__ul');
      $inputText = document.querySelector('#inputText');
   }

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
      actualizarVariables();

      // escribir dentro de un <li>
      $ulList.innerHTML = $ulList.innerHTML + '<li class="activo">' + $inputText.value + '</li>';

      // Agregar click a los li
      agregarTodosLi();

      // limpiar el input
      $inputText.value = "";

      // focalizar en el inputs
      $inputText.focus();


      function agregarTodosLi(){
         var tmp = document.querySelectorAll('#Listado__ul > li');
         var tmpLength = tmp.length - 1;

         for (var i = 0; i <= tmpLength; i++) {
            agregarCLick(tmp[i]);
         }
      };

      // el = "elemento <li>"
      function agregarCLick(el){
         el.addEventListener("click",function(){
            el.classList.toggle('tachado');
            el.classList.toggle('activo');
         });
      };
   };

   $btnAll.addEventListener("click", filtrarLi);

   function filtrarLi(){
      var $lis;
      var $lisCant;
      var $lisJson = {
         "activo" : [],
         "tachado" : []
      };


      // Leer todos los <li>
      leerLi();

      // // Guardar los <li> en formato Json
      // guardarLi();
      //
      // // Limpiar el <ul>
      // limpiarUl();
      //
      // // Agregar los <li> correspondientes
      // agregarLi();


      function leerLi(){
         // actualizarVariables();
         $lis = document.querySelectorAll('#Listado__ul > li');
         $lisCant = $lis.length - 1;

         for (var i = 0; i <= $lisCant; i++) {
            // if ($lis[i].getElementsByClassName('className')) {
            //
            // }

            $lisJson['activo'][i] = $lis[i].innerText;
         }
         console.log($lisJson);
      }
   }
});
