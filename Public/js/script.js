// Evento que se ejecuta una ves que el DOM este cargado
document.addEventListener('DOMContentLoaded', function(){

   // Declaracion de Variables
   var $btnAll = document.querySelector('#btnAll');
   var $btnTodo = document.querySelector('#btnTodo');
   var $btnDone = document.querySelector('#btnDone');

   var $btnAdd = document.querySelector('#btnAdd');
   var $listadoUL = document.querySelector('#Listado__ul');
   var $inputText, $lis;

   actualizarInputText();
   function actualizarInputText(){
      $inputText = document.querySelector('#inputText');
   };


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
      actualizarInputText();

      // escribir dentro de un <li>
      $listadoUL.innerHTML = $listadoUL.innerHTML + '<li class="activo">' + $inputText.value + '</li>';

      // Agregar click a los li
      agregarTodosLi();

      // limpiar el input
      $inputText.value = "";

      // focalizar en el inputs
      $inputText.focus();

      // guardar los <li> como string
      $lis = String($listadoUL.innerHTML);

      function agregarTodosLi(){
         var tmp = $listadoUL.querySelectorAll('li');
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



   var $lisCant;
   var $lisJson = [];

   $btnAll.addEventListener("click", filtrarAll);
   $btnTodo.addEventListener("click", filtrarTodo);
   $btnDone.addEventListener("click", filtrarDone);

   function filtrarAll(){
      filtrarLi('all');
   }

   function filtrarTodo(){
      filtrarLi('activo');
   }

   function filtrarDone(){
      filtrarLi('tachado');
   }

   function filtrarLi($filtro){

      // Leer todos los <li>
      leerLi();

      // // Guardar los <li> en formato Json
      guardarLi();

      // // Limpiar el <ul>
      $listadoUL.innerHTML = "";

      // // Agregar los <li> correspondientes
      agregarLi($filtro);

// AQUI ME QUEDEEEEEEEEEE------------------------------------------
      function leerLi(){
         // $lisActivo = $listadoUL.querySelectorAll('.activo');
         // $lisTachado = $listadoUL.querySelectorAll('.tachado');
         var $longitud = $listadoUL.querySelectorAll('li').length;

         for (var i = 0; i < $longitud; i++) {
            var elementoI = leerElemento('');
            var elementoT = leerElemento('tachado');
            $lisJson[i] = {};

            if (elementoI == null) {
               $lisJson[i]['estado'] = 'activo';
            } else {
               $lisJson[i]['estado'] = 'tachado';
            }

            function leerElemento($tmp){
               return $listadoUL.querySelector('li:nth-child(' + i+1 + ')' + $tmp);
            }
         }

      }

      function guardarLi(){
         $lisCant = $lisActivo.length - 1;
         for (var i = 0; i <= $lisCant; i++) {
            $lisJson['activo'][i] = $lisActivo[i].innerText;
         }

         $lisCant = $lisTachado.length - 1;
         for (var i = 0; i <= $lisCant; i++) {
            $lisJson['tachado'][i] = $lisTachado[i].innerText;
         }
      }

      function agregarLi($filtro) {
         // Dependiendo del filtro
         if ($filtro == 'all') {
            $listadoUL.innerHTML = $lis;
         } else {
            agregar($filtro)
         }

         function agregar($estado){
            var $cantidad = $lisJson[$estado].length - 1;
            for (var i = 0; i <= $cantidad; i++) {
               $listadoUL.innerHTML = '<li class="' + $estado + '">' + $lisJson[$estado][i] + '</li>'
            }
         }
      }
   }
});

