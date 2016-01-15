// Evento que se ejecuta una ves que el DOM este cargado
document.addEventListener('DOMContentLoaded', function(){

   // Agregar nuevos <li>
   var $listadoUL = document.querySelector('#Listado__ul');
   var $inputText = document.querySelector('#inputText');
   var $btnAdd = document.querySelector('#btnAdd');
   var $nunLi = 0;
   var $lisJson = [];

   // btnFiltros
   var $btnAll = document.querySelector('#btnAll');
   var $btnTodo = document.querySelector('#btnTodo');
   var $btnDone = document.querySelector('#btnDone');


   // Eventos Agregar el nuevo li
   $btnAdd.addEventListener("click", agregarLi);
   $inputText.addEventListener("keydown", function(e){
      var keyCode = e.keyCode || e.which;
      if (keyCode == '13'){
         agregarLi();
      }
   });

   // Eventos Click para los filtros
   $btnAll.addEventListener("click", filtrarAll);
   $btnTodo.addEventListener("click", filtrarTodo);
   $btnDone.addEventListener("click", filtrarDone);


   function agregarLi(){
      // 1- Capturar el texto del input
      $inputText = document.querySelector('#inputText');

      // 2- Imprimir el nuevo li
      $listadoUL.innerHTML += '<li class="activo" indice="' + $nunLi + '">' + $inputText.value + '</li>';
      $nunLi++;

      // 3- Agregar Toggle a los li
      agregarToggle();

      // 4- Guardar los <li> en formato Json
      guardarLi();

      // 5- limpiar el input
      $inputText.value = "";

      // 6- focalizar en el input
      $inputText.focus();


      // Agregar o quitar las clases "activado" y "tachado"
      function agregarToggle(){
         var $tmp = $listadoUL.querySelectorAll('li');
         var $tmpLength = $tmp.length;

         for (var $i = 0; $i < $tmpLength; $i++) {
            liToggle($tmp[$i]);
         }

         function liToggle($el){
            $el.addEventListener("click",function($e){
               $el.classList.toggle('tachado');
               $el.classList.toggle('activo');

               // actualizar el Json
               var $posicion = parseInt($e.toElement.getAttribute('indice'));
               var $clase = $e.toElement.getAttribute('class');
               if ($clase === 'activo') {
                  $lisJson[$posicion].estado = 'activo';
               } else {
                  $lisJson[$posicion].estado = 'tachado';
               }
            });
         }
      }

      // Guardar los li en Formato Json
      function guardarLi(){
         var $longitud = $listadoUL.querySelectorAll('li').length;

         for (var $i = 0; $i < $longitud; $i++) {
            var $elementoI = $listadoUL.querySelector('li:nth-child(' + ($i+1) + ')').innerHTML;
            var $elementoT = $listadoUL.querySelector('li:nth-child(' + ($i+1) + ').tachado');
            $lisJson[$i] = {};

            if ($elementoT === null) {
               $lisJson[$i].estado = 'activo';
            } else {
               $lisJson[$i].estado = 'tachado';
            }
            $lisJson[$i].contenido = $elementoI;

         }
      }
   }


   // Funciones para filtrar los li
   function filtrarAll(){ filtrarLi('all'); }
   function filtrarTodo(){ filtrarLi('activo'); }
   function filtrarDone(){ filtrarLi('tachado'); }

   function filtrarLi($filtro){
      // // Limpiar el <ul>
      $listadoUL.innerHTML = "";

      var $cant = $lisJson.length;
      for (var $i = 0; $i < $cant; $i++) {
         if ($filtro === 'activo' && $lisJson[$i].estado === $filtro) {
            agregar();
         } else if ($filtro === 'tachado' && $lisJson[$i].estado === $filtro) {
            agregar();
         } else if ($filtro === 'all') {
            agregar();
         }
      }

      // // Agregar los <li> correspondientes
      function agregar(){
         $listadoUL.innerHTML += '<li class="' + $lisJson[$i].estado + '">' + $lisJson[$i].contenido + '</li>';
      }
   }
});

